// NetworkUtils.js
// Version: 1.0.0
// Event: On Awake
// Description: Helper functions and classes used by Sync Framework.

const NETWORK_ID_KEY = "_network_id";
const NETWORK_TYPE_KEY = "_network_type";

/**
 * @class
 * @param {string} networkId
 */
function StoreEventWrapper(networkId) {
  /** @type {Function[]} */
  var cleanups = [];

  var idFilter = makeNetworkIdFilter(networkId);

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>} */
  this.onStoreCreated = wrapStoreEventWithFilter(
    global.sessionController.callbacks.onRealtimeStoreCreated,
    idFilter,
    cleanups
  );

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, string, ConnectedLensModule.RealtimeStoreUpdateInfo>} */
  this.onStoreUpdated = wrapStoreEventWithFilter(
    global.sessionController.callbacks.onRealtimeStoreUpdated,
    idFilter,
    cleanups
  );

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>} */
  this.onStoreOwnershipUpdated = wrapStoreEventWithFilter(
    global.sessionController.callbacks.onRealtimeStoreOwnershipUpdated,
    idFilter,
    cleanups
  );

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore>} */
  this.onStoreDeleted = wrapStoreEventWithFilter(
    global.sessionController.callbacks.onRealtimeStoreDeleted,
    idFilter,
    cleanups
  );

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.RealtimeStoreKeyRemovalInfo>} */
  this.onStoreKeyRemoved = wrapStoreEventWithFilter(
    global.sessionController.callbacks.onRealtimeStoreKeyRemoved,
    idFilter,
    cleanups
  );

  /**
   * @private
   * @type {Function[]}
   * */
  this._cleanups = cleanups;
}

StoreEventWrapper.prototype.cleanup = function () {
  for (var i = 0; i < this._cleanups.length; i++) {
    this._cleanups[i]();
  }
  this._cleanups = [];
};

/**
 * @template T0, T1, T2
 * @param {EventWrapper<T0, T1, T2>} event
 * @param {(store:T1)=>boolean} filterFunc
 * @param {function[]?} cleanupFuncs
 * @returns {EventWrapper<T0, T1, T2>}
 */
function wrapStoreEventWithFilter(event, filterFunc, cleanupFuncs) {
  /** @type {EventWrapper<T0, T1, T2>} */
  var evt = new EventWrapper();
  var callback = function (arg0, arg1, arg2, arg3, arg4) {
    if (filterFunc(arg1)) {
      evt.trigger(arg0, arg1, arg2, arg3, arg4);
    }
  };
  event.add(callback);
  if (cleanupFuncs) {
    cleanupFuncs.push(function () {
      evt.remove(callback);
    });
  }
  return evt;
}

/**
 *
 * @param {string} networkId
 * @returns {(store:GeneralDataStore)=>boolean}
 */
function makeNetworkIdFilter(networkId) {
  return function (store) {
    return getNetworkIdFromStore(store) == networkId;
  };
}

/**
 * @class
 * @template T
 * @param {ConnectedLensModule.UserInfo} senderInfo
 * @param {string} senderConnectionId
 * @param {string} message
 * @param {T?} messageData
 */
function NetworkMessage(senderInfo, message, messageData) {
  /** @type {ConnectedLensModule.UserInfo} */
  this.senderInfo = senderInfo;
  /** @type {string} */
  this.senderUserId = senderInfo.userId;
  /** @type {string} */
  this.senderConnectionId = senderInfo.connectionId;
  /** @type {string} */
  this.message = message;
  /** @type {T?} */
  this.data = messageData;
}

/**
 * @class
 * @param {string} networkId
 */
function NetworkMessageWrapper(networkId) {
  this.networkId = networkId;

  /**
   * @type {KeyedEventWrapper<NetworkMessage>}
   */
  this.onRemoteEventReceived = new KeyedEventWrapper();

  /**
   * @type {KeyedEventWrapper<NetworkMessage>}
   */
  this.onAnyEventReceived = new KeyedEventWrapper();

  global.sessionController.onMessageReceived.add(
    this._onReceiveMessage.bind(this)
  );
}

/**
 * @private
 * @param {MultiplayerSession} session
 * @param {string} senderId
 * @param {string} message
 * @param {ConnectedLensModule.UserInfo} senderInfo
 */
NetworkMessageWrapper.prototype._onReceiveMessage = function (
  session,
  senderId,
  messageString,
  senderInfo
) {
  var obj = null;
  try {
    obj = lsJSONParse(messageString);
  } catch (e) {
    // Messages may not be in json if they are not from SyncFramework, so we should ignore them if there is a problem.
    // If you are having a problem with message deserialization, uncomment this line for better error messages
    // onError("could not parse message: " + e);
    return;
  }
  var networkId = obj[NETWORK_ID_KEY];
  if (networkId == this.networkId) {
    var messageKey = obj._message;
    if (messageKey !== undefined) {
      var messageData = obj._data;
      this._dispatchMessageEvents(senderInfo, messageKey, messageData);
    }
  }
};

/**
 * @private
 * @param {ConnectedLensModule.UserInfo} senderInfo
 * @param {string} messageKey
 * @param {object?} messageData
 */
NetworkMessageWrapper.prototype._dispatchMessageEvents = function (
  senderInfo,
  messageKey,
  messageData
) {
  var netEvent = new NetworkMessage(senderInfo, messageKey, messageData);
  var senderId = senderInfo.connectionId;
  if (senderId != global.sessionController.getLocalConnectionId()) {
    this.onRemoteEventReceived.trigger(messageKey, netEvent);
  }
  this.onAnyEventReceived.trigger(messageKey, netEvent);
};

/**
 *
 * @param {string} messageKey
 * @param {object?} messageData
 * @param {boolean=} onlySendRemote
 */
NetworkMessageWrapper.prototype.sendMessage = function (
  messageKey,
  messageData,
  onlySendRemote
) {
  var obj = {
    _message: messageKey,
  };
  if (messageData !== undefined) {
    obj._data = messageData;
  }
  obj[NETWORK_ID_KEY] = this.networkId;
  var str = lsJSONStringify(obj);

  if (global.sessionController.getDebugLogging()) {
    const tracingKey = "Message_" + messageKey;
    global.NetworkTracking.addDataStoreChange(tracingKey);
  }
  global.sessionController.getSession().sendMessage(str);

  if (!onlySendRemote) {
    var senderInfo = global.sessionController.getLocalUserInfo();
    this._dispatchMessageEvents(senderInfo, messageKey, messageData);
  }
};

NetworkMessageWrapper.prototype.cleanup = function () {
  global.sessionController.onMessageReceived.remove(this.sendMessage);
};

/**
 * Provides information about instantiated prefabs. Exists on a root parent object that instantiated prefabs are spawned underneath.
 * @class
 * @param {SceneObject} sceneObject
 * @param {string} networkId
 * @param {GeneralDataStore} dataStore
 * @param {boolean} locallyCreated
 * @param {ConnectedLensModule.UserInfo} ownerInfo
 * @param {RealtimeStoreCreateOptions.Persistence | keyof typeof RealtimeStoreCreateOptions.Persistence | null | undefined} persistence
 */
function NetworkRootInfo(
  sceneObject,
  networkId,
  dataStore,
  locallyCreated,
  ownerInfo,
  persistence
) {
  /**
   * SceneObject hosting this NetworkRootInfo.
   * @private
   * @type {SceneObject}
   */
  this.sceneObject = sceneObject;

  /**
   * Network id of this instantiated object
   * @type {string}
   */
  this.networkId = networkId;

  /**
   * Store containing information about the prefab instantiation
   * @type {GeneralDataStore}
   */
  this.dataStore = dataStore;

  /**
   * `true` if this instance was instantiated by the current local user in the current session
   * @type {boolean}
   */
  this.locallyCreated = locallyCreated;

  /**
   * User that owns this instance, or null if unowned
   * @type {ConnectedLensModule.UserInfo?}
   */
  this.ownerInfo = ownerInfo;

  /**
   * Persistence of the instantiated object
   * @type {RealtimeStoreCreateOptions.Persistence}
   */
  this.persistence = getPersistenceFromValue(persistence);

  /**
   * The instantiated SceneObject. Exists as a child of this SceneObject.
   * @type {SceneObject}
   */
  this.instantiatedObject;

  /** @private */
  this._destroyed = false;

  sceneObject._isNetworkRoot = true;
  sceneObject._networkRoot = this;

  /**
   * Event triggered when the instantiated object is destroyed (both locally or remotely)
   * @type {EventWrapper}
   */
  this.onDestroyed = new EventWrapper();

  /**
   * Event triggered when the instantiated object is destroyed (both locally or remotely)
   * @type {EventWrapper}
   * @deprecated
   */
  this.onDestroy = this.onDestroyed;

  /**
   * @type {EventWrapper}
   */
  this.onLocalDestroyed = new EventWrapper();

  /**
   * @type {EventWrapper}
   */
  this.onRemoteDestroyed = new EventWrapper();

  /**
   * Helper callbacks related to the data store
   * @type {StoreEventWrapper}
   */
  this.callbacks = new StoreEventWrapper(networkId);

  var me = this;
  this.callbacks.onStoreDeleted.add(function () {
    me._onNetworkDestroy();
  });

  /**
   * @private
   * @type {ScriptComponent}
   */
  this._scriptHolder = this.sceneObject.createComponent(
    "Component.ScriptComponent"
  );

  var destroyEvent = this._scriptHolder.createEvent("OnDestroyEvent");
  destroyEvent.bind(function () {
    me._onLocalDestroy();
  });
}

/**
 * Used internally for finishing the NetworkRootInfo setup after the child object has been instantiated
 * @private
 */
NetworkRootInfo.prototype.finishSetup = function () {
  var child = this.sceneObject.getChild(0);
  this.instantiatedObject = child;
  if (this.canIModifyStore()) {
    var me = this;
    var scr = child.createComponent("Component.ScriptComponent");
    var sceneObj = this.sceneObject;
    scr.createEvent("OnDestroyEvent").bind(function () {
      if (!me._destroyed) {
        me.instantiatedObject = null;
        if (child.hasParent()) {
          child.removeParent();
        }
        sceneObj.destroy();
      }
    });
  }
};

/**
 * @private
 */
NetworkRootInfo.prototype._onLocalDestroy = function () {
  if (!this._destroyed) {
    this._destroyed = true;
    if (this.canIModifyStore()) {
      global.sessionController.getSession().deleteRealtimeStore(
        this.dataStore,
        function (store) {},
        function (message) {
          onError("error deleting realtime store: " + message);
        }
      );
    }
    this.onLocalDestroyed.trigger();
    this.onDestroyed.trigger();
  }
};

/**
 * @private
 */
NetworkRootInfo.prototype._onNetworkDestroy = function () {
  // global.logToScreen("_on network destroy");
  if (!this._destroyed) {
    this._destroyed = true;
    this.sceneObject.destroy();
    this.onRemoteDestroyed.trigger();
    this.onDestroyed.trigger();
  }
};

/**
 * @private
 */
NetworkRootInfo.prototype._cleanup = function () {
  this.callbacks.cleanup();
  this.callbacks = null;
};

/**
 * Returns the owner's userId if an owner exists, otherwise null
 * @returns {string?}
 */
NetworkRootInfo.prototype.getOwnerUserId = function () {
  return this.ownerInfo ? this.ownerInfo.userId : null;
};

/**
 * Returns the owner's connectionId if an owner exists, otherwise null
 * @returns {string?}
 */
NetworkRootInfo.prototype.getOwnerId = function () {
  return this.ownerInfo ? this.ownerInfo.connectionId : null;
};

/**
 * Returns `true` if the instantiated object is owned by a user with the passed in `connectionId`
 * @param {string} connectionId connectionId of a user
 * @returns {boolean}
 */
NetworkRootInfo.prototype.isOwnedBy = function (connectionId) {
  return this.getOwnerId() && this.getOwnerId() === connectionId;
};

/**
 * Returns `true` if the instantiated object is owned by the user connection
 * @param {ConnectedLensModule.UserInfo} user userInfo of a user
 * @returns {boolean}
 */
NetworkRootInfo.prototype.isOwnedByUserInfo = function (user) {
  return this.getOwnerId() && this.getOwnerId() === user.connectionId;
};

/**
 * Returns `true` if the local user is allowed to modify this store
 * @returns {boolean}
 */
NetworkRootInfo.prototype.canIModifyStore = function () {
  return (
    !this.getOwnerId() ||
    this.isOwnedByUserInfo(global.sessionController.getLocalUserInfo())
  );
};

/**
 * Returns `true` if the local user is allowed to modify this store
 * @returns {boolean}
 */
NetworkRootInfo.prototype.doIOwnStore = function () {
  return this.isOwnedByUserInfo(global.sessionController.getLocalUserInfo());
};

/**
 * Returns `true` if the passed in `sceneObject` has a `NetworkRootInfo` attached to it
 * @param {SceneObject} sceneObject
 * @returns {boolean}
 */
function isRootObject(sceneObject) {
  if (sceneObject._isNetworkRoot) {
    return true;
  }
  return false;
}

/**
 * Recursively searches upwards in the hierarchy to find a `NetworkRootInfo` object.
 * @param {SceneObject} sceneObject
 * @returns {NetworkRootInfo?}
 */
function findNetworkRoot(sceneObject) {
  if (isRootObject(sceneObject)) {
    return sceneObject._networkRoot;
  }
  if (sceneObject.hasParent()) {
    return findNetworkRoot(sceneObject.getParent());
  }
  return null;
}

/**
 * Gets the network id from the data store
 * @param {GeneralDataStore} store
 * @returns {string}
 */
function getNetworkIdFromStore(store) {
  return store.getString(global.NETWORK_ID_KEY);
}

/**
 * Writes the id to the data store
 * @param {GeneralDataStore} store
 * @param {string} id
 */
function putNetworkIdToStore(store, id) {
  store.putString(NETWORK_ID_KEY, id);
}

/**
 * Gets the network type from the data store
 * @param {GeneralDataStore} store
 * @returns {string}
 */
function getNetworkTypeFromStore(store) {
  return store.getString(global.NETWORK_TYPE_KEY);
}

/**
 * Writes the network type to the data store
 * @param {GeneralDataStore} store
 * @param {string} type
 */
function putNetworkTypeToStore(store, type) {
  store.putString(NETWORK_TYPE_KEY, type);
}

/**
 * Helper function to convert from string, or null, to {@link RealtimeStoreCreateOptions.Persistence}
 * @param {RealtimeStoreCreateOptions.Persistence | keyof typeof RealtimeStoreCreateOptions.Persistence | null | undefined} persistence
 * @returns {RealtimeStoreCreateOptions.Persistence}
 */
function getPersistenceFromValue(persistence) {
  if (persistence === null || persistence === undefined) {
    return RealtimeStoreCreateOptions.Persistence.Session;
  }
  if (typeof persistence == "string") {
    if (persistence in RealtimeStoreCreateOptions.Persistence) {
      persistence = RealtimeStoreCreateOptions.Persistence[persistence];
    } else {
      print("Warning: invalid persistence type: " + persistence);
      return RealtimeStoreCreateOptions.Persistence.Session;
    }
  }
  return persistence;
}

// JSON Serialization Helpers

const LS_TYPE_KEY = "___lst";

/**
 * @template T
 * @template {any[]} U
 * @param {new(...args: U) => T} constructorFunc
 * @param {(keyof T)[]} props
 */
function LSJSONDataConfig(constructorFunc, props) {
  this.constructorFunc = constructorFunc;
  this.props = props;
}

/**
 *
 * @param {T} obj
 * @returns {U}
 */
LSJSONDataConfig.prototype.getArgs = function (obj) {
  var args = new Array(this.props.length);
  for (var i = 0; i < this.props.length; i++) {
    args[i] = obj[this.props[i]];
  }
  return args;
};

/**
 *
 * @param {U} args
 * @returns {T}
 */
LSJSONDataConfig.prototype.construct = function (args) {
  switch (args.length) {
    case 0:
      return new this.constructorFunc();
    case 1:
      return new this.constructorFunc(args[0]);
    case 2:
      return new this.constructorFunc(args[0], args[1]);
    case 3:
      return new this.constructorFunc(args[0], args[1], args[2]);
    case 4:
      return new this.constructorFunc(args[0], args[1], args[2], args[3]);
    case 5:
      return new this.constructorFunc(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4]
      );
    default:
      throw (
        "This many args in constructor are not supported! (" + args.length + ")"
      );
  }
};

/** @type {Object.<string, LSJSONDataConfig>} */
var _lsJSONConfigLookup = {
  vec2: new LSJSONDataConfig(vec2, ["x", "y"]),
  vec3: new LSJSONDataConfig(vec3, ["x", "y", "z"]),
  vec4: new LSJSONDataConfig(vec4, ["x", "y", "z", "w"]),
  quat: new LSJSONDataConfig(quat, ["w", "x", "y", "z"]),
};

/**
 *
 * @param {string} key
 * @param {any} value
 */
function lsJSONReplacer(key, value) {
  if (typeof value == "object") {
    for (var configKey in _lsJSONConfigLookup) {
      var config = _lsJSONConfigLookup[configKey];
      if (value instanceof config.constructorFunc) {
        var data = {};
        data[LS_TYPE_KEY] = configKey;
        data.a = config.getArgs(value);
        return data;
      }
    }
  }
  return value;
}

/**
 *
 * @param {string} key
 * @param {any} value
 */
function lsJSONReviver(key, value) {
  if (typeof value == "object") {
    var typeKey = value[LS_TYPE_KEY];
    if (typeKey !== undefined) {
      var config = _lsJSONConfigLookup[typeKey];
      if (config) {
        return config.construct(value.a);
      }
    }
  }
  return value;
}

/**
 *
 * @param {any} obj
 * @returns {string}
 */
function lsJSONStringify(obj) {
  return JSON.stringify(obj, lsJSONReplacer);
}

/**
 *
 * @param {string} text
 * @returns {any}
 */
function lsJSONParse(text) {
  return JSON.parse(text, lsJSONReviver);
}

function onError(error) {
  print("error: " + error);
}

var networkUtils = {
  NetworkRootInfo: NetworkRootInfo,
  StoreEventWrapper: StoreEventWrapper,
  NetworkMessageWrapper: NetworkMessageWrapper,
  isRootObject: isRootObject,
  findNetworkRoot: findNetworkRoot,
  getNetworkIdFromStore: getNetworkIdFromStore,
  putNetworkIdToStore: putNetworkIdToStore,
  getNetworkTypeFromStore: getNetworkTypeFromStore,
  putNetworkTypeToStore: putNetworkTypeToStore,
  getPersistenceFromValue: getPersistenceFromValue,
  lsJSONParse: lsJSONParse,
  lsJSONStringify: lsJSONStringify,
};

global.NETWORK_ID_KEY = NETWORK_ID_KEY;
global.NETWORK_TYPE_KEY = NETWORK_TYPE_KEY;

global.networkUtils = networkUtils;
