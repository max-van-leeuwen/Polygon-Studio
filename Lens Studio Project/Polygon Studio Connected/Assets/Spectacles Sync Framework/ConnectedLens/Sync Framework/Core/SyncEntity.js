// SyncEntity.js
// Version: 1.0.0
// Event: On Awake
// Description: Acts as a bridge between a ScriptComponent and RealtimeStore.

/**
 * @class
 * @param {((store:GeneralDataStore)=>void)=} onSuccess
 * @param {((error:string)=>void)=} onError
 */
function OwnershipRequest(onSuccess, onError) {
  this.onSuccess = onSuccess;
  this.onFailure = onError;
}

/**
 * Helper class used to wrap all event API for a single event name.
 * @class
 * @template T
 * @param {NetworkMessageWrapper} messageWrapper
 * @param {string} eventName
 */
function EntityEventWrapper(messageWrapper, eventName) {
  /** @private */
  this._messageWrapper = messageWrapper;
  /** @private */
  this._eventName = eventName;

  /** @type {EventWrapper<NetworkMessage<T>>} */
  this.onEventReceived = this._messageWrapper.onAnyEventReceived.getWrapper(
    this._eventName,
    true
  );

  /** @type {EventWrapper<NetworkMessage<T>>} */
  this.onRemoteEventReceived =
    this._messageWrapper.onRemoteEventReceived.getWrapper(
      this._eventName,
      true
    );

  /**
   * @deprecated
   * @type {EventWrapper<NetworkMessage<T>>}
   */
  this.onAnyEventReceived = this.onEventReceived;
}

/**
 * Send this event
 * @param {T=} data Data object to send
 * @param {boolean=} onlySendRemote If true, this event won't be received by the local SyncEntity that sent it
 */
EntityEventWrapper.prototype.send = function (data, onlySendRemote) {
  this._messageWrapper.sendMessage(this._eventName, data, onlySendRemote);
};

/**
 * Class acting as a bridge between a ScriptComponent and RealtimeStore.
 * @class
 * @param {ScriptComponent} scriptComponent ScriptComponent hosting the SyncEntity
 * @param {StoragePropertySet=} propertySet Optional set of StorageProperties the SyncEntity will be initialized with
 * @param {boolean=} claimOwnership
 * @param {(RealtimeStoreCreateOptions.Persistence|keyof typeof RealtimeStoreCreateOptions.Persistence)=} persistence
 * @param {NetworkIdOptions=} networkIdOptions
 */
function SyncEntity(
  scriptComponent,
  propertySet,
  claimOwnership,
  persistence,
  networkIdOptions
) {
  /**
   * The {@link ScriptComponent} this SyncEntity is attached to.
   * @type {ScriptComponent}
   */
  this.localScript;

  /**
   * Unique NetworkId string used to identify this SyncEntity.
   * @type {string}
   */
  this.networkId;

  /**
   * UserInfo of the SyncEntity's owner, if one exists. Otherwise null.
   * @type {ConnectedLensModule.UserInfo}
   */
  this.ownerInfo = null;

  /**
   * GeneralDataStore created for this SyncEntity and used to store its state. Will be null if the SyncEntity's setup hasn't finished.
   * @type {GeneralDataStore}
   */
  this.currentStore;

  /**
   * Returns the persistence setting for the SyncEntity.
   * @type {RealtimeStoreCreateOptions.Persistence}
   */
  this.persistence;

  /**
   * Provides information about the instantiated Prefab, if this SyncEntity was instantiated. Otherwise, is null.
   * @type {NetworkRootInfo}
   */
  this.networkRoot = null;

  /**
   * Provides direct access to helpful callbacks related to the SyncEntity's `currentStore`.
   * @type {StoreEventWrapper}
   */
  this.storeCallbacks;

  /**
   * Provides direct access to the {@link NetworkMessageWrapper} used by SyncEntity events.
   * @type {NetworkMessageWrapper}
   */
  this.messaging;

  /**
   * @private
   * @type {DelayedCallbackEvent}
   */
  this._createStoreDelayEvent;

  /**
   * The {@link StoragePropertySet} used by this SyncEntity. Each {@link StorageProperty} in the set will automatically be kept updated.
   * @type {StoragePropertySet}
   */
  this.propertySet;

  /**
   * If `true`, this SyncEntity has been marked as destroyed and should not be interacted with.
   * @type {boolean}
   */
  this.destroyed = false;

  if (propertySet) {
    this.propertySet = propertySet;
  } else {
    this.propertySet = new StoragePropertySet();
  }

  this.localScript = scriptComponent;

  if (this.localScript) {
    this.localScript._syncEntity = this;
  }

  /**
   * @private
   * @type {OwnershipRequest[]}
   */
  this._ownershipRequests = [];
  if (claimOwnership) {
    this._ownershipRequests.push(new OwnershipRequest());
  }

  this.persistence = networkUtils.getPersistenceFromValue(persistence);

  this.networkRoot = null;
  if (this.localScript) {
    this.networkRoot = global.networkUtils.findNetworkRoot(
      this.localScript.getSceneObject()
    );
  }

  if (!networkIdOptions) {
    if (this.localScript) {
      networkIdOptions = global.networkIdTools.NetworkIdOptions.parseFromScript(
        this.localScript
      );
    } else {
      print("networkIdOptions is required if not using local ScriptComponent");
      return;
    }
  }

  this.networkId = global.networkIdTools.generateNetworkId(
    this.localScript,
    networkIdOptions,
    this.networkRoot
  );

  this.storeCallbacks = new networkUtils.StoreEventWrapper(this.networkId);
  this.messaging = new networkUtils.NetworkMessageWrapper(this.networkId);

  /**
   * Event triggered when the SyncEntity's owner changes.
   * @type {EventWrapper<ConnectedLensModule.UserInfo>}
   */
  this.onOwnerUpdated = new EventWrapper();

  /**
   * If `true`, the SyncEntity's setup has finished and it can be fully used.
   * @type {boolean}
   */
  this.isSetupFinished = false;

  /**
   * Event triggered with the SyncEntity's setup is finished.
   * It's recommended to use `SyncEntity.notifyOnReady()` instead, since it will call back immediately if setup has already finished.
   * @type {EventWrapper}
   */
  this.onSetupFinished = new EventWrapper();

  /**
   * Event triggered whenever this SyncEntity receives a network event, including ones sent by the local user.
   * @type {KeyedEventWrapper<NetworkMessage>}
   */
  this.onEventReceived = this.messaging.onAnyEventReceived;

  /**
   * Event triggered whenever this SyncEntity receives a network event, but only from remote users.
   * @type {KeyedEventWrapper<NetworkMessage>}
   */
  this.onRemoteEventReceived = this.messaging.onRemoteEventReceived;

  /**
   * Event triggered when the SyncEntity is destroyed (both locally or remotely)
   * @type {EventWrapper}
   */
  this.onDestroyed = new EventWrapper();

  /**
   * Event triggered when the SyncEntity is destroyed locally (by the local user)
   * @type {EventWrapper}
   */
  this.onLocalDestroyed = new EventWrapper();

  /**
   * Event triggered when the SyncEntity is destroyed remotely (by another user)
   * @type {EventWrapper}
   */
  this.onRemoteDestroyed = new EventWrapper();

  /**
   * @private
   */
  this._sessionControllerReady = false;

  var me = this;

  /**
   * @template T0, T1, T2
   * @param {EventWrapper<T0, T1, T2>} event
   * @param {function(T0, T1, T2)} func
   */
  function bindCallback(event, func) {
    event.add(func.bind(me));
  }

  bindCallback(
    this.storeCallbacks.onStoreCreated,
    this._onRealtimeStoreCreated
  );
  bindCallback(
    this.storeCallbacks.onStoreUpdated,
    this._onRealtimeStoreUpdated
  );
  bindCallback(
    this.storeCallbacks.onStoreOwnershipUpdated,
    this._onRealtimeStoreOwnershipUpdated
  );
  bindCallback(
    this.storeCallbacks.onStoreDeleted,
    this._onRealtimeStoreDeleted
  );

  if (this.localScript) {
    this._createStoreDelayEvent = this.localScript.createEvent(
      "DelayedCallbackEvent"
    );
    this._createStoreDelayEvent.bind(this._delayedInitializeStore.bind(this));
    this.localScript
      .createEvent("OnDestroyEvent")
      .bind(this._onLocalDestroy.bind(this));

    this.localScript.createEvent("LateUpdateEvent").bind(function () {
      if (me.currentStore) {
        var serverTime = me.getSessionController().getServerTimeInSeconds();
        if (me.isStoreOwned()) {
          if (me.canIModifyStore()) {
            // If we own the store, we only need to send changes
            me.propertySet.sendChanges(me.currentStore, serverTime);
          } else {
            // If someone else owns the store, we only need to receive changes
            me.propertySet.receiveChanges(me.currentStore);
          }
        } else {
          // If no-one owns the store, we may need to send and receive changes
          me.propertySet.sendAndReceiveChanges(me.currentStore, serverTime);
        }
      }
    });
  } else {
  }

  SyncEntity._globalLookup[this.networkId] = this;

  this.getSessionController().notifyOnReady(this._onReady.bind(this));
}
/**
 * Creates a new standalone SyncEntity that is not tied to a ScriptComponent.
 * @param {string} networkId
 * @param {StoragePropertySet=} propertySet Optional set of StorageProperties the SyncEntity will be initialized with
 * @param {boolean=} claimOwnership
 * @param {(RealtimeStoreCreateOptions.Persistence|keyof typeof RealtimeStoreCreateOptions.Persistence)=} persistence
 * @returns {SyncEntity}
 */
SyncEntity.createStandalone = function (
  networkId,
  propertySet,
  claimOwnership,
  persistence
) {
  var idOptions = new global.networkIdTools.NetworkIdOptions();
  idOptions.customNetworkId = networkId;
  idOptions.networkIdType = global.networkIdTools.NetworkIdType.Custom;
  return new SyncEntity(
    null,
    propertySet,
    claimOwnership,
    persistence,
    idOptions
  );
};

/**
 * @private
 * @type {Object.<string, SyncEntity>}
 */
SyncEntity._globalLookup = {};

/**
 * @private
 */
SyncEntity.prototype._onReady = function () {
  this._sessionControllerReady = true;
  var existingStore = this.getSessionController().getStoreInfoById(
    this.networkId
  );
  if (existingStore) {
    debugLog("found existing store already being tracked");
    this._onRealtimeStoreCreated(
      this.getSession(),
      existingStore.store,
      existingStore.ownerInfo
    );
  } else if (this.networkRoot) {
    if (this.networkRoot.locallyCreated) {
      // We know this was initialized locally, so create store immediately
      debugLog("found network root, so initialing store immediately");
      this._initializeStore();
    } else {
      debugLog("found network root, but waiting for remote instantiation");
    }
  } else {
    if (this._createStoreDelayEvent) {
      // Wait for store to be created, then create it ourself
      this._createStoreDelayEvent.reset(0.1);
    } else {
      // Immediately initialize store
      this._initializeStore();
    }
  }
};

/**
 * Calls the `onReady` callback as soon as the SyncEntity's setup is completed.
 * If setup is already completed, the callback will be executed immediately.
 * @param {()=>void} onReady Called as soon as the SyncEntity setup has completed
 */
SyncEntity.prototype.notifyOnReady = function (onReady) {
  if (this.isSetupFinished) {
    onReady();
  } else {
    this.onSetupFinished.add(onReady);
  }
};

/**
 * Returns the global `SessionController`.
 */
SyncEntity.prototype.getSessionController = function () {
  return global.sessionController;
};

/**
 * Returns the {@link MultiplayerSession} used by the SessionController, if a session exists. Otherwise, returns null.
 * @returns {MultiplayerSession?}
 */
SyncEntity.prototype.getSession = function () {
  return this.getSessionController().getSession();
};

/**
 * Returns `true` if the local connection is allowed to modify the SyncEntity's data store.
 * This means that setup has finished, and either the SyncEntity is unowned or the local user is the owner.
 * @returns {boolean}
 */
SyncEntity.prototype.canIModifyStore = function () {
  return !!(
    this.currentStore &&
    (!this.ownerInfo ||
      !this.ownerInfo.connectionId ||
      this.getOwnerId() == this.getSessionController().getLocalConnectionId())
  );
};

/**
 * Returns `true` if the local connection owns the SyncEntity's data store.
 * This means that setup has finished, and the local user owns the store.
 * @returns {boolean}
 */
SyncEntity.prototype.doIOwnStore = function () {
  return !!(
    this.currentStore &&
    this.getOwnerId() &&
    this.getOwnerId() == this.getSessionController().getLocalConnectionId()
  );
};

/**
 * Returns `true` if setup is finished, and any user owns the SyncEntity's data store.
 * @returns {boolean}
 */
SyncEntity.prototype.isStoreOwned = function () {
  return !!(this.currentStore && this.getOwnerId());
};

/**
 * Returns the connectionId string of the SyncEntity's current owner, or null if none exists.
 * @returns {string?}
 */
SyncEntity.prototype.getOwnerId = function () {
  return this.ownerInfo ? this.ownerInfo.connectionId : null;
};

/**
 * Returns the userId string of the SyncEntity's current owner, or null if none exists.
 * @returns {string?}
 */
SyncEntity.prototype.getOwnerUserId = function () {
  return this.ownerInfo ? this.ownerInfo.userId : null;
};

/**
 * Returns the connectionId string of the SyncEntity's current owner, or null if none exists.
 * @returns {string?}
 */
SyncEntity.prototype.getOwnerConnectionId = function () {
  return this.ownerInfo ? this.ownerInfo.connectionId : null;
};

/**
 * Adds a {@link StorageProperty} to the SyncEntity's {@link StoragePropertySet}.
 * @template T
 * @param {StorageProperty<T>} storageProperty StorageProperty to add
 * @returns {StorageProperty<T>} StorageProperty passed in
 */
SyncEntity.prototype.addStorageProperty = function (storageProperty) {
  // Check if key already exists in the dictionary, and use the existing value if so
  if (this.currentStore && this.currentStore.has(storageProperty.key)) {
    var existingValue = StorageProperty.getStoreValueDynamic(
      this.currentStore,
      storageProperty.key,
      storageProperty.propertyType
    );
    debugLog(
      "using existing value for new storage property, " +
        storageProperty.key +
        ": " +
        existingValue
    );
    storageProperty._silentSetCurrentValue(existingValue);
  }

  this.propertySet.addProperty(storageProperty);
  return storageProperty;
};

/**
 * Put in an ownership request of this SyncEntity for the local user.
 * The request will be stored if not immediately possible, and try to be honored whenever it becomes possible.
 * If the local user already owns the SyncEntity, `onSuccess` will be called immediately.
 * @param {((store:GeneralDataStore)=>void)=} onSuccess Called as soon as ownership was successfully gained
 * @param {((error:string)=>void)=} onError Called if an error occurs
 */
SyncEntity.prototype.tryClaimOwnership = function (onSuccess, onError) {
  if (this.currentStore) {
    if (this.doIOwnStore()) {
      if (onSuccess) {
        onSuccess(this.currentStore);
      }
    } else {
      if (this.isStoreOwned()) {
        debugLog("Wait for ownership to be released before claiming it");
        this._ownershipRequests.push(new OwnershipRequest(onSuccess, onError));
      } else {
        onSuccess = onSuccess || function () {};
        onError = onError || defaultOnError;
        this.getSession().requestRealtimeStoreOwnership(
          this.currentStore,
          onSuccess,
          onError
        );
      }
    }
  } else {
    debugLog("Trying to claim ownership before store exists!");
    this._ownershipRequests.push(new OwnershipRequest(onSuccess, onError));
  }
};

/**
 * Try to revoke ownership if the local user owns this SyncEntity, otherwise `onSuccess` is called immediately.
 * @param {((store:GeneralDataStore)=>void)=} onSuccess Called if the ownership was revoked successfully
 * @param {((error:string)=>void)=} onError Called if an error occurs
 */
SyncEntity.prototype.tryRevokeOwnership = function (onSuccess, onError) {
  if (this.currentStore) {
    if (!this.doIOwnStore()) {
      if (onSuccess) {
        onSuccess(this.currentStore);
      }
    } else {
      onSuccess = onSuccess || function () {};
      onError = onError || defaultOnError;
      this.getSession().clearRealtimeStoreOwnership(
        this.currentStore,
        onSuccess,
        onError
      );
    }
  } else {
    warningLog("Trying to revoke ownership before store exists!");
  }
};

/**
 * Put in an ownership request of this SyncEntity for the local user.
 * If the local user already owns the SyncEntity, `onSuccess` will be called immediately.
 * @param {((store:GeneralDataStore)=>void)=} onSuccess Called as soon as ownership was successfully gained
 * @param {((error:string)=>void)=} onError Called if an error occurs
 */
SyncEntity.prototype.requestOwnership = function (onSuccess, onError) {
  if (this.currentStore) {
    if (this.doIOwnStore()) {
      if (onSuccess) {
        onSuccess(this.currentStore);
      }
    } else {
      onSuccess = onSuccess || function () {};
      onError = onError || defaultOnError;
      this.getSession().requestRealtimeStoreOwnership(
        this.currentStore,
        onSuccess,
        onError
      );
    }
  } else {
    onError = onError || defaultOnError;
    onError("Trying to request ownership before the store exists. Please wait until the SyncEntity setup is finished.");
  }
};

/**
 * Destroys the SyncEntity. If attached to a ScriptComponent, the SceneObject will also be destroyed.
 */
SyncEntity.prototype.destroy = function () {
  if (this.localScript) {
    this.localScript.getSceneObject().destroy();
  } else {
    this._onLocalDestroy();
  }
};

/**
 * @private
 */
SyncEntity.prototype._delayedInitializeStore = function () {
  debugLog("initializing the store, after delay");
  this._initializeStore();
};

/**
 * @private
 */
SyncEntity.prototype._initializeStore = function () {
  this._cleanupStoreDelayEvent();

  debugLog("initializing store for " + this.networkId);

  var storeData = GeneralDataStore.create();
  networkUtils.putNetworkIdToStore(storeData, this.networkId);
  this.propertySet.forceWriteState(storeData);
  this.propertySet.receiveChanges(storeData);

  var storeOptions = RealtimeStoreCreateOptions.create();
  storeOptions.initialStore = storeData;
  storeOptions.ownership = RealtimeStoreCreateOptions.Ownership.Unowned;
  storeOptions.persistence = this.persistence;

  var startOwned = false;

  if (this.networkRoot) {
    if (this.networkRoot.doIOwnStore()) {
      startOwned = true;
    }
    if (
      this.networkRoot.persistence !== undefined &&
      this.networkRoot.persistence !== null
    ) {
      storeOptions.persistence = this.networkRoot.persistence;
    }
  } else {
    if (this._ownershipRequests.length > 0) {
      debugLog("found ownership requests, we should start owned");
      startOwned = true;
    } else {
      debugLog("no ownership requests " + this._ownershipRequests);
    }
  }

  if (startOwned) {
    debugLog("requesting ownership for the store");
    storeOptions.ownership = RealtimeStoreCreateOptions.Ownership.Owned;
    this.ownerInfo = this.getSessionController().getLocalUserInfo();
    // this.onOwnerUpdated.trigger(this.ownerInfo);
  }

  var me = this;
  var session = this.getSession();
  session.createRealtimeStore(
    storeOptions,
    function (store) {
      if (!me.destroyed) {
        if (startOwned) {
          me.onOwnerUpdated.trigger(me.ownerInfo);
        }
        if (!me.currentStore) {
          // This hasn't been necessary, we are handling the callback in _onRealtimeStoreCreated
          // me.currentStore = store;
        }
      }
    },
    defaultOnError
  );
};

/**
 * @private
 */
SyncEntity.prototype._resolveOwnershipRequests = function () {
  if (this.doIOwnStore()) {
    for (var i = 0; i < this._ownershipRequests.length; i++) {
      if (this._ownershipRequests[i].onSuccess) {
        this._ownershipRequests[i].onSuccess(this.currentStore);
      }
    }
    this._ownershipRequests = [];
  }
};

/**
 * @private
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 * @param {ConnectedLensModule.UserInfo} userInfo
 */
SyncEntity.prototype._onRealtimeStoreCreated = function (
  session,
  store,
  userInfo
) {
  if (!this.currentStore && this._sessionControllerReady) {
    if (this.destroyed) {
      warningLog(
        "Got realtime store creation for entity that was already destroyed"
      );
      return;
    }
    debugLog("found matching store for id " + this.networkId);
    this._cleanupStoreDelayEvent();
    this.currentStore = store;
    this.ownerInfo = userInfo;
    debugLog(
      "realtime store created, store owner: " +
        userInfo.connectionId +
        " " +
        userInfo.displayName
    );

    if (this.doIOwnStore()) {
      // If we own the store, update the store with our current data
      this.propertySet.forceWriteState(store);
      this._resolveOwnershipRequests();
    } else {
      // If we don't own the store, update our data with the store data
      this.propertySet.initializeFromStore(store);
    }

    this.onOwnerUpdated.trigger(this.ownerInfo);

    if (this._ownershipRequests.length > 0 && !this.isStoreOwned()) {
      this.tryClaimOwnership();
    }

    this.isSetupFinished = true;
    this.onSetupFinished.trigger();
  }
};

/**
 * @private
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 * @param {string} key
 * @param {ConnectedLensModule.RealtimeStoreUpdateInfo} updateInfo
 */
SyncEntity.prototype._onRealtimeStoreUpdated = function (
  session,
  store,
  key,
  updateInfo
) {
  // If we own the store, assume that this is an update we made and can be ignored
  if (!this.doIOwnStore()) {
    // If we originally sent the update, ignore it
    if (
      !updateInfo ||
      !updateInfo.updaterInfo ||
      updateInfo.updaterInfo.connectionId !==
        this.getSessionController().getLocalConnectionId()
    ) {
      this.propertySet.applyKeyUpdate(store, key, false, false, updateInfo);
    }
  }
};

/**
 * @private
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 */
SyncEntity.prototype._onRealtimeStoreDeleted = function (session, store) {
  this._onRemoteDestroy();
};

/**
 * @private
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 * @param {ConnectedLensModule.UserInfo} owner
 */
SyncEntity.prototype._onRealtimeStoreOwnershipUpdated = function (
  session,
  store,
  owner
) {
  this.ownerInfo = owner;
  if (this.doIOwnStore()) {
    this._resolveOwnershipRequests();
  } else {
    if (!this.isStoreOwned()) {
      if (this._ownershipRequests.length > 0) {
        this.tryClaimOwnership();
      }
    }
  }
  this.onOwnerUpdated.trigger(this.ownerInfo);
};

/**
 * Send a network event to all copies of this SyncEntity.
 * @param {string} eventName Name identifying the event
 * @param {object=} eventData Optional object of any data type that can be included with the event
 * @param {boolean=} onlySendRemote If true, this event won't be received by the local SyncEntity that sent it
 */
SyncEntity.prototype.sendEvent = function (
  eventName,
  eventData,
  onlySendRemote
) {
  if (this.isSetupFinished) {
    this.messaging.sendMessage(eventName, eventData, onlySendRemote);
  } else {
    warningLog(
      "Trying to send an event before setup is finished: " +
        eventName +
        "\nTODO: Queue these messages and send when setup finished."
    );
  }
};

/**
 * Creates and returns an {@link EntityEventWrapper}, which is a helper for dealing with network events.
 * @template T
 * @param {string} eventName Name of the network event to wrap
 * @returns {EntityEventWrapper<T>} New {@link EntityEventWrapper} wrapping the event
 */
SyncEntity.prototype.getEntityEventWrapper = function (eventName) {
  return new EntityEventWrapper(this.messaging, eventName);
};

/**
 * @private
 */
SyncEntity.prototype._onLocalDestroy = function () {
  if (!this.destroyed) {
    debugLog("on local destroy");
    this.destroyed = true;
    this._cleanup();
    if (this.canIModifyStore()) {
      debugLog("requesting store deletion");
      this.getSession().deleteRealtimeStore(
        this.currentStore,
        function () {
          debugLog("deleted store");
        },
        defaultOnError
      );
    }
    this.onLocalDestroyed.trigger();
    this.onDestroyed.trigger();
  }
};

/**
 * @private
 */
SyncEntity.prototype._onRemoteDestroy = function () {
  if (!this.destroyed) {
    this.destroyed = true;
    this._cleanup();
    if (!isNull(this.localScript)) {
      if (!isNull(this.localScript.getSceneObject())) {
        debugLog("destroying local SceneObject");
        this.localScript.getSceneObject().destroy();
      }
      this.onRemoteDestroyed.trigger();
      this.onDestroyed.trigger();
    }
  }
};

/**
 * @private
 */
SyncEntity.prototype._cleanupStoreDelayEvent = function () {
  if (this._createStoreDelayEvent) {
    if (this.localScript) {
      this.localScript.removeEvent(this._createStoreDelayEvent);
    }
    this._createStoreDelayEvent = null;
  }
};

/**
 * @private
 */
SyncEntity.prototype._cleanup = function () {
  this.storeCallbacks.cleanup();
  this.storeCallbacks = null;
  this.messaging.cleanup();
  this.messaging = null;
  this.onOwnerUpdated = null;
  delete SyncEntity._globalLookup[this.networkId];
  this._cleanupStoreDelayEvent();
};

/**
 * Returns a SyncEntity stored on the `component` if one exists, otherwise null.
 * @param {Component} component Component to check
 * @returns {SyncEntity?} SyncEntity found on `component`, or null
 */
SyncEntity.getSyncEntityOnComponent = function (component) {
  return component._syncEntity || null;
};

/**
 * Returns the first SyncEntity found on a component attached to `sceneObject`, or null if none is found.
 * @param {SceneObject} sceneObject SceneObject to check
 * @returns {SyncEntity?} SyncEntity found on `sceneObject`, or null
 */
SyncEntity.getSyncEntityOnSceneObject = function (sceneObject) {
  var components = sceneObject.getComponents("Component");
  var syncEnt;
  for (var i = 0; i < components.length; i++) {
    syncEnt = SyncEntity.getSyncEntityOnComponent(components[i]);
    if (syncEnt) {
      return syncEnt;
    }
  }
  return null;
};

/**
 * Returns a SyncEntity with matching network id, or null if none exists.
 * @param {string} networkId
 * @returns {SyncEntity?}
 */
SyncEntity.findById = function (networkId) {
  return this._globalLookup[networkId] || null;
};

global.SyncEntity = SyncEntity;

function defaultOnError(error) {
  global.logToScreen("error: " + error);
}

function debugLog(message) {
  // global.logToScreen(message);
  // print(message);
}

function warningLog(message) {
  global.logToScreen(message);
}
