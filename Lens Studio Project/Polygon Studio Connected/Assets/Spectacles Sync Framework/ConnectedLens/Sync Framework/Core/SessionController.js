const WorldCameraFinderProvider =
  require("../../../SpectaclesInteractionKit/Providers/CameraProvider/WorldCameraFinderProvider").default;

const {MockConnectedLensModule} = require("./MockMultiplayerSession");
const {
  MockMultiplayerSessionConfig,
} = require("./MockMultiplayerSessionConfig");

//@input Asset.ConnectedLensModule connectedLensModule
/** @type {ConnectedLensModule} */
var connectedLensModule = script.connectedLensModule;

//@input Asset.LocationCloudStorageModule locationCloudStorageModule
/** @type {Asset.LocationCloudStorageModule} */
var locationCloudStorageModule = script.locationCloudStorageModule;

//@input bool skipUiInStudio;
/** @type {boolean} */
var skipUiInStudio = script.skipUiInStudio;

//@input bool isColocated;
/** @type {boolean} */
var isColocated = script.isColocated;

//@ui {"widget":"group_start", "label":"Colocation", "showIf":"isColocated"}

// @input Component.LocatedAtComponent locatedAtComponent
/** @type {LocatedAtComponent} */
var locatedAtComponent = script.locatedAtComponent;

//@input Component.MaterialMeshVisual landmarksVisual3d {"label":"Landmarks 3D"}
/** @type {MaterialMeshVisual} */
var landmarksVisual3d = script.landmarksVisual3d;

//@ui {"widget":"group_end"}

//@input bool debugLogging
/** @type {boolean} */
var debugLogging = script.debugLogging;

//@input bool forceOffline
/** @type {boolean} */
var forceOffline = script.forceOffline;

var worldCamera = WorldCameraFinderProvider.getInstance();
var deviceTrackingComponent = worldCamera
  .getComponent()
  .getSceneObject()
  .getComponent("Component.DeviceTracking");

/**
 * @enum {number}
 */
var State = {
  NotInitialized: -1,
  Initialized: 0,
  Ready: 1,
  WaitingForInvite: 2,
};

var eventFlowState = {
  inviteSent: false,
  connected: false,
  shared: false,
  // Session Store
  isWaitingForSessionStore: false,
  // Colocated
  isColocatedSetupStarted: false,
  isColocatedSetupFinished: false,
};

/** @type {ConnectedLensModule} */
var connectedLensModuleToUse = connectedLensModule;

/**
 * @class
 * @param {GeneralDataStore} store
 * @param {ConnectedLensModule.UserInfo} user
 * @param {ConnectedLensModule.RealtimeStoreCreationInfo} creationInfo
 */
function StoreInfo(store, user, creationInfo) {
  /** @type {GeneralDataStore} */
  this.store = store;
  /** @type {ConnectedLensModule.UserInfo} */
  this.ownerInfo = user;
  /** @type {ConnectedLensModule.RealtimeStoreCreationInfo} */
  this.creationInfo = creationInfo;
}

/** @type {State} */
var _state = State.NotInitialized;
/** @type {MultiplayerSession} */
var _session = null;
/** @type {MappingSession} */
var _mappingSession = null;

/** @type {ConnectedLensModule.UserInfo[]} */
var _users = [];
/** @type {Object.<string, ConnectedLensModule.UserInfo[]>} */
var _userIdLookup = {};
/** @type {Object.<string, ConnectedLensModule.UserInfo>} */
var _connectionIdLookup = {};

/** @type {ConnectedLensSessionOptions.SessionCreationType} */
var _sessionCreationType = false;

/** @type {string} */
var _localUserId = null;
/** @type {string} */
var _localConnectionId = null;
/** @type {string} */
var _localDisplayName = null;
/** @type {ConnectedLensModule.UserInfo} */
var _localUserInfo = null;

/** @type {string} */
var _hostUserId = null;
/** @type {string} */
var _hostConnectionId = null;
/** @type {string} */
var _hostDisplayName = null;
/** @type {ConnectedLensModule.UserInfo} */
var _hostUserInfo = null;

/** @type {GeneralDataStore[]} */
var _stores = [];
/** @type {Object.<string, StoreInfo>} */
var _storeLookup = {};

/** @type {boolean} */
var _requireSessionStore = !!isColocated;

const SESSION_STORE_ID = "__session";
/** @type {GeneralDataStore} */
var _sessionStore;

const COLOCATED_BUILD_STATUS_KEY = "_colocated_build_status";
/** @enum {string} */
var ColocatedBuildStatus = {
  None: "none",
  Building: "building",
  Built: "built",
};

const COLOCATED_MAP_ID = "_colocated_map_id";

var _isReady = false;

var _hasSentReady = false;

var _hasSentMapExists = false;

var _hasSentColocatedMapId = false;

var _isLocatedAtFound = false;

var _isSingleplayer = false;

var callbacks = {
  /**
   * @type {EventWrapper}
   */
  onReady: new EventWrapper(),

  /**
   * @type {EventWrapper}
   */
  onStartColocated: new EventWrapper(),

  /**
   * @type {EventWrapper}
   */
  onMapExists: new EventWrapper(),

  /**
   * @type {EventWrapper}
   */
  onLocationId: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, ConnectedLensSessionOptions.SessionCreationType>}
   */
  onSessionCreated: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession>}
   */
  onSessionShared: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession>}
   */
  onConnected: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, string>}
   */
  onDisconnected: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, string, string, ConnectedLensModule.UserInfo>}
   */
  onMessageReceived: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, ConnectedLensModule.UserInfo>}
   */
  onUserJoinedSession: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, ConnectedLensModule.UserInfo>}
   */
  onUserLeftSession: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, ConnectedLensModule.HostUpdateInfo>}
   */
  onHostUpdated: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, string, string>}
   */
  onError: new EventWrapper(),

  /**
   * @type {EventWrapper}
   */
  onConnectionFailed: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo, ConnectedLensModule.RealtimeStoreCreationInfo>}
   */
  onRealtimeStoreCreated: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore, string, ConnectedLensModule.RealtimeStoreUpdateInfo=>}
   */
  onRealtimeStoreUpdated: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore>}
   */
  onRealtimeStoreDeleted: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.RealtimeStoreKeyRemovalInfo>}
   */
  onRealtimeStoreKeyRemoved: new EventWrapper(),

  /**
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>}
   */
  onRealtimeStoreOwnershipUpdated: new EventWrapper(),

  /**
   * @type {EventWrapper}
   */
  onLocatedAtFound: new EventWrapper(),
};

function createSessionOptions() {
  var options = ConnectedLensSessionOptions.create();
  options.onSessionCreated = _onSessionCreated;
  options.onConnected = _onConnected;
  options.onDisconnected = _onDisconnected;
  options.onMessageReceived = _onMessageReceived;
  options.onUserJoinedSession = _onUserJoinedSession;
  options.onUserLeftSession = _onUserLeftSession;
  options.onHostUpdated = _onHostUpdated;
  options.onError = _onError;
  options.onRealtimeStoreCreated = _onRealtimeStoreCreated;
  options.onRealtimeStoreUpdated = _onRealtimeStoreUpdated;
  options.onRealtimeStoreDeleted = _onRealtimeStoreDeleted;
  options.onRealtimeStoreOwnershipUpdated = _onRealtimeStoreOwnershipUpdated;
  options.onRealtimeStoreKeyRemoved = _onRealtimeStoreKeyRemoved;
  options.hostManagementEnabled = true;
  return options;
}

function createSession() {
  print("[cl] createSession()");
  var options = createSessionOptions();
  connectedLensModuleToUse.createSession(options);
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {ConnectedLensSessionOptions.SessionCreationType} creationType
 */
function _onSessionCreated(session, creationType) {
  print("[cl] _onSessionCreated");
  _session = session;
  _sessionCreationType = creationType;
  locationCloudStorageModule.session = session;
  callbacks.onSessionCreated.trigger(session, creationType);
}

/**
 *
 * @param {MultiplayerSession} session
 */
function _onSessionShared(session) {
  print("[cl] _onSessionShared");
  _session = session;
  eventFlowState.shared = true;
  callbacks.onSessionShared.trigger(session);
  checkIfReady();
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {ConnectedLensModule.ConnectionInfo} connectionInfo
 */
function _onConnected(session, connectionInfo) {
  print("[cl] [onConnected] connected to session");
  _session = session;

  _users = [];
  _userIdLookup = {};
  _connectionIdLookup = {};

  _localUserInfo = connectionInfo.localUserInfo;
  _localDisplayName = _localUserInfo.displayName;
  _localUserId = _localUserInfo.userId;
  _localConnectionId = _localUserInfo.connectionId;

  print(
    "[cl] [sessioncontroller] " +
      _hostConnectionId +
      " " +
      _localConnectionId +
      " " +
      connectionInfo.hostUserInfo +
      " " +
      connectionInfo.hostUserInfo.connectionId
  );

  _hostUserInfo = connectionInfo.hostUserInfo;
  _hostDisplayName = _hostUserInfo.displayName;
  _hostUserId = _hostUserInfo.userId;
  _hostConnectionId = _hostUserInfo.connectionId;

  // Track local user
  _trackUser(connectionInfo.localUserInfo);

  // Track other users
  var otherUsers = connectionInfo.externalUsersInfo;
  for (var i = 0; i < otherUsers.length; i++) {
    _trackUser(otherUsers[i]);
  }

  // Track existing stores
  var stores = connectionInfo.realtimeStores;
  var creationInfos = connectionInfo.realtimeStoresCreationInfos;
  for (var j = 0; j < creationInfos.length; j++) {
    _trackStore(stores[j], creationInfos[j].ownerInfo, creationInfos[j]);
  }

  eventFlowState.connected = true;
  callbacks.onConnected.trigger(_session);
  checkIfReady();
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {string} disconnectInfo
 */
function _onDisconnected(session, disconnectInfo) {
  debugLog("disconnected from session: " + disconnectInfo);
  callbacks.onDisconnected.trigger(session, disconnectInfo);
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {string} userId
 * @param {string} message
 * @param {ConnectedLensModule.UserInfo} senderInfo
 */
function _onMessageReceived(session, userId, message, senderInfo) {
  callbacks.onMessageReceived.trigger(session, userId, message, senderInfo);
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {string} code
 * @param {string} description
 */
function _onError(session, code, description) {
  global.logToScreen("error: " + code + ": " + description);
  callbacks.onError.trigger(session, code, description);

  if (_session === null) {
    callbacks.onConnectionFailed.trigger();
  }
}

/**
 *
 * @param {GeneralDataStore} store
 * @param {ConnectedLensModule.UserInfo} userInfo
 * @param {ConnectedLensModule.RealtimeStoreCreationInfo} creationInfo
 */
function _trackStore(store, userInfo, creationInfo) {
  // TODO: remove this dependence, use new API for getting id
  //var storeId = creationInfo.storeId;
  var storeId = global.networkUtils.getNetworkIdFromStore(store);

  if (storeId !== null && storeId !== undefined && storeId !== "") {
    if (!(storeId in _storeLookup)) {
      _storeLookup[storeId] = new StoreInfo(store, userInfo, creationInfo);
      _stores.push(store);
    }
  }
}

/**
 *
 * @param {GeneralDataStore} store
 */
function _untrackStore(store) {
  // TODO: remove this dependence, use new API for getting id
  var storeId = global.networkUtils.getNetworkIdFromStore(store);

  if (storeId !== null && storeId !== undefined && storeId !== "") {
    delete _storeLookup[storeId];
    _stores = _stores.filter(function (x) {
      return storeId != global.networkUtils.getNetworkIdFromStore(x);
    });
  }
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 * @param {ConnectedLensModule.UserInfo} ownerInfo
 * @param {ConnectedLensModule.RealtimeStoreCreationInfo} creationInfo
 */
function _onRealtimeStoreCreated(session, store, ownerInfo, creationInfo) {
  debugLog("_onRealtimeStoreCreated " + ownerInfo.displayName);
  _trackStore(store, ownerInfo, creationInfo);
  callbacks.onRealtimeStoreCreated.trigger(
    session,
    store,
    ownerInfo,
    creationInfo
  );
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 * @param {ConnectedLensModule.UserInfo} owner
 * @param {ConnectedLensModule.RealtimeStoreUpdateInfo?} updateInfo
 */
function _onRealtimeStoreUpdated(session, store, key, updateInfo) {
  callbacks.onRealtimeStoreUpdated.trigger(session, store, key, updateInfo);

  if (
    !_hasSentMapExists &&
    getColocatedBuildStatus() === ColocatedBuildStatus.Built
  ) {
    _hasSentMapExists = true;
    callbacks.onMapExists.trigger();
  }

  if (
    !_hasSentColocatedMapId &&
    getColocatedMapId() !== null &&
    getColocatedMapId() !== ""
  ) {
    debugLog("onLocationId: " + getColocatedMapId());
    _hasSentColocatedMapId = true;
    callbacks.onLocationId.trigger();
  }
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 */
function _onRealtimeStoreDeleted(session, store) {
  _untrackStore(store);
  callbacks.onRealtimeStoreDeleted.trigger(session, store);
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {ConnectedLensModule.RealtimeStoreKeyRemovalInfo} removalInfo
 */
function _onRealtimeStoreKeyRemoved(session, removalInfo) {
  callbacks.onRealtimeStoreKeyRemoved.trigger(
    session,
    removalInfo.store,
    removalInfo
  );
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {GeneralDataStore} store
 * @param {ConnectedLensModule.UserInfo} owner
 */
function _onRealtimeStoreOwnershipUpdated(session, store, owner) {
  _trackStore(store, owner);
  callbacks.onRealtimeStoreOwnershipUpdated.trigger(session, store, owner);
}

/**
 * Helper function to add a UserInfo to a list of UserInfo, only if the list doesn't contain a user with
 * matching connectionId. Returns true if the user was added to the list.
 * @param {ConnectedLensModule.UserInfo[]} userList
 * @param {ConnectedLensModule.UserInfo} newUser
 * @returns {boolean}
 */
function _addMissingUserToListByConnectionId(userList, newUser) {
  if (
    newUser === null ||
    newUser === undefined ||
    newUser.connectionId === null ||
    newUser.connectionId === undefined
  ) {
    return;
  }

  var newConnectionId = newUser.connectionId;
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].connectionId === newConnectionId) {
      return false;
    }
  }

  userList.push(newUser);
  return true;
}

/**
 *
 * @param {ConnectedLensModule.UserInfo} userInfo
 * @returns {boolean}
 */
function _trackUser(userInfo) {
  var newUserJoined = false;
  if (!(userInfo.connectionId in _connectionIdLookup)) {
    _connectionIdLookup[userInfo.connectionId] = userInfo;
    newUserJoined = true;
  }

  var userList = _userIdLookup[userInfo.userId];
  if (!userList) {
    userList = [userInfo];
    _userIdLookup[userInfo.userId] = userList;
    newUserJoined = true;
  } else {
    newUserJoined =
      _addMissingUserToListByConnectionId(userList, userInfo) || newUserJoined;
  }

  newUserJoined =
    _addMissingUserToListByConnectionId(_users, userInfo) || newUserJoined;

  return newUserJoined;
}

/**
 * Helper function to remove all instances of UserInfo with matching connectionId from a list.
 * Returns the list with users removed.
 * @param {ConnectedLensModule.UserInfo[]} userList
 * @param {ConnectedLensModule.UserInfo} userInfo
 * @returns {ConnectedLensModule.UserInfo[]}
 */
function _removeUserFromListByConnectionId(userList, userInfo) {
  if (
    userInfo === null ||
    userInfo === undefined ||
    userInfo.connectionId === null ||
    userInfo.connectionId === undefined
  ) {
    return userList;
  }
  var connectionId = userInfo.connectionId;
  return userList.filter(function (u) {
    return u.connectionId !== connectionId;
  });
}

/**
 *
 * @param {ConnectedLensModule.UserInfo} userInfo
 */
function _untrackUser(userInfo) {
  var connectionId = userInfo.connectionId;

  delete _connectionIdLookup[connectionId];

  var userList = _userIdLookup[userInfo.userId];
  if (userList) {
    _userIdLookup[userInfo] = _removeUserFromListByConnectionId(
      userList,
      userInfo
    );
  }

  _users = _removeUserFromListByConnectionId(_users, userInfo);
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {ConnectedLensModule.UserInfo} userInfo
 */
function _onUserJoinedSession(session, userInfo) {
  if (_trackUser(userInfo)) {
    debugLog("user joined session: " + userInfo.displayName);
    callbacks.onUserJoinedSession.trigger(session, userInfo);
  } else {
    debugLog("skipping duplicate user: " + userInfo.displayName);
  }
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {ConnectedLensModule.UserInfo} userInfo
 */
function _onUserLeftSession(session, userInfo) {
  _untrackUser(userInfo);
  callbacks.onUserLeftSession.trigger(session, userInfo);
}

/**
 *
 * @param {MultiplayerSession} session
 * @param {ConnectedLensModule.HostUpdateInfo} removalInfo
 */
function _onHostUpdated(session, removalInfo) {
  _hostUserInfo = removalInfo.userInfo;
  _hostDisplayName = _hostUserInfo.displayName;
  _hostUserId = _hostUserInfo.userId;
  _hostConnectionId = _hostUserInfo.connectionId;
  callbacks.onHostUpdated.trigger(session, removalInfo);
}

// Session Store

/**
 * Returns the shared session store (if exists) or null. Useful for needed session info like colocated build status.
 * @returns {GeneralDataStore?}
 */
function getSessionStore() {
  if (!_sessionStore) {
    var sessionInfo = getStoreInfoById(SESSION_STORE_ID);
    if (sessionInfo) {
      _sessionStore = sessionInfo.store;
    }
  }
  return _sessionStore;
}

function createSessionStore() {
  var storeOpts = RealtimeStoreCreateOptions.create();
  storeOpts.persistence = RealtimeStoreCreateOptions.Persistence.Persist;

  var startingStore = GeneralDataStore.create();
  // Set network ID
  global.networkUtils.putNetworkIdToStore(startingStore, SESSION_STORE_ID);
  // Set colocated build status
  startingStore.putString(
    COLOCATED_BUILD_STATUS_KEY,
    ColocatedBuildStatus.None
  );
  storeOpts.initialStore = startingStore;

  debugLog("creating the session store");

  createStore(
    storeOpts,
    function (store) {
      debugLog("created session store");
      _sessionStore = store;
      checkIfReady();
    },
    function (message) {
      warningLog("error creating shared store: " + message);
    }
  );
}

function waitAndCreateSessionStore() {
  waitUntilTrue(
    getSessionStore,
    function () {
      debugLog("found session store");
      checkIfReady();
    },
    // Timeout
    0.1,
    createSessionStore
  );
}

// Colocated Flow

/**
 * Start setting up Colocated flow
 */
function startColocated() {
  debugLog("startColocated()");

  if (!locationCloudStorageModule) {
    throw "Location Cloud Storage Module must be set!";
  }

  if (!eventFlowState.isColocatedSetupStarted) {
    callbacks.onStartColocated.trigger();
  }
  eventFlowState.isColocatedSetupStarted = true;
  return;
}

/**
 * Get the build status from the shared session store
 * @returns {ColocatedBuildStatus}
 */
function getColocatedBuildStatus() {
  var sessionStore = getSessionStore();
  return sessionStore
    ? sessionStore.getString(COLOCATED_BUILD_STATUS_KEY)
    : null;
}

/**
 * Write the build status to the shared session store
 * @param {ColocatedBuildStatus} status
 */
function setColocatedBuildStatus(status) {
  getSessionStore().putString(COLOCATED_BUILD_STATUS_KEY, status);
}

/**
 * Get the id of the colocated map
 * @returns {string}
 */
function getColocatedMapId() {
  var sessionStore = getSessionStore();
  return sessionStore ? sessionStore.getString(COLOCATED_MAP_ID) : null;
}

/**
 * Write the id of the colocated map
 * @param {string} value map id
 */
function setColocatedMapId(value) {
  getSessionStore().putString(COLOCATED_MAP_ID, value);
}

// General flow

/**
 * Checks the current status of all required systems and runs through the steps needed to finish setup.
 */
function checkIfReady() {
  // We need a session to continue
  if (!_session) {
    return;
  }

  // We need local user info to continue
  if (!_localUserId) {
    return;
  }

  // We need to be connected to the session to continue
  if (!eventFlowState.connected) {
    return;
  }

  // If we require SessionStore, wait for SessionStore to be setup before continuing
  if (_requireSessionStore && !getSessionStore()) {
    // Start setting up SessionStore if we haven't already
    if (!eventFlowState.isWaitingForSessionStore) {
      eventFlowState.isWaitingForSessionStore = true;
      waitAndCreateSessionStore();
    }
    return;
  }

  // If we are in colocated flow, we need colocated setup to be finished before continuing
  if (isColocated && !_isSingleplayer) {
    if (!eventFlowState.isColocatedSetupFinished) {
      if (!eventFlowState.isColocatedSetupStarted) {
        startColocated();
        checkIfReady();
        return;
      }
      return;
    }
  }

  debugLog("session is now ready, triggering ready events");

  _state = State.Ready;

  // Mark as ready and send all onReady events if we haven't already
  if (!_hasSentReady) {
    _isReady = true;
    _hasSentReady = true;
    if (global.behaviorSystem) {
      global.behaviorSystem.sendCustomTrigger("session_ready");
    }
    callbacks.onReady.trigger();
  }
}

// Start setup
function init() {
  var mappingOptions = LocatedAtComponent.createMappingOptions();
  mappingOptions.locationCloudStorageModule = locationCloudStorageModule;
  mappingOptions.location = LocationAsset.getAROrigin();

  _mappingSession = LocatedAtComponent.createMappingSession(mappingOptions);

  if (forceOffline) {
    prepareOfflineMode();
  }

  _state = State.Initialized;
  createSession();
}

/*
 * Public API Functions
 */

/**
 * Returns the current {@link MultiplayerSession}. Returns null if the session doesn't exist yet.
 * @returns {MultiplayerSession?}
 */
function getSession() {
  return _session;
}

/**
 * Returns the LocationCloudStorageModule
 * @returns {LocationCloudStorageModule}
 */
function getLocationCloudStorageModule() {
  return locationCloudStorageModule;
}

/**
 * Returns the current {@link MappingSession}. Returns null if the session doesn't exist yet.
 * @returns {MappingSession?}
 */
function getMappingSession() {
  return _mappingSession;
}

/**
 * Returns the located at component
 * @returns {Component.LocatedAtComponent}
 */
function getLocatedAtComponent() {
  return locatedAtComponent;
}

/**
 * Get the 3D mesh of the mapped environment
 * @returns {Component.RenderMeshVisual}
 */
function getLandmarksVisual3d() {
  return landmarksVisual3d;
}

/**
 * Gets whether debug logging is enabled
 * @returns {boolean}
 */
function getDebugLogging() {
  return debugLogging;
}

/**
 *
 * future: throttle up importance of mapping */
function startBuilding() {}

/**
 * Returns the colocated tracking component
 * @returns {Component.DeviceTracking}
 */
function getDeviceTrackingComponent() {
  return deviceTrackingComponent;
}

/**
 * Returns the current state.
 * @returns {State}
 */
function getState() {
  return _state;
}

/**
 * Returns the session creation type
 * @returns {ConnectedLensSessionOptions.SessionCreationType}
 */
function getSessionCreationType() {
  return _sessionCreationType;
}

/**
 * Returns the local user id, or null
 * @returns {string?}
 */
function getLocalUserId() {
  return _localUserId;
}

/**
 * Returns the local connection id, or null
 * @returns {string?}
 */
function getLocalConnectionId() {
  return _localConnectionId;
}

/**
 * Returns the local display name, or null
 * @returns {string?}
 */
function getLocalUserName() {
  return _localDisplayName;
}

/**
 * Returns the local user info, or null
 * @returns {ConnectedLensModule.UserInfo}
 */
function getLocalUserInfo() {
  return _localUserInfo;
}

/**
 * Returns true if the passed in `userInfo` matches the local userId. Note that this is separate from connectionId.
 * @param {ConnectedLensModule.UserInfo} userInfo
 * @returns {boolean}
 */
function isSameUserAsLocal(userInfo) {
  return _localUserInfo && _localUserId == userInfo.userId;
}

/**
 * Returns true if the passed in `userInfo` matches the local user and connection
 * @param {ConnectedLensModule.UserInfo} userInfo
 * @returns {boolean}
 */
function isLocalUserConnection(userInfo) {
  return (
    _localUserInfo && userInfo && _localConnectionId == userInfo.connectionId
  );
}

/**
 * Returns the host user id, or null
 * @returns {string?}
 */
function getHostUserId() {
  return _hostUserId;
}

/**
 * Returns the host connection id, or null
 * @returns {string?}
 */
function getHostConnectionId() {
  return _hostConnectionId;
}

/**
 * Returns the host display name, or null
 * @returns {string?}
 */
function getHostUserName() {
  return _hostDisplayName;
}

/**
 * Returns the host user info, or null
 * @returns {ConnectedLensModule.UserInfo}
 */
function getHostUserInfo() {
  return _hostUserInfo;
}

/**
 * Returns true if the passed in `userInfo` matches the host userId. Note that this is separate from connectionId.
 * @param {ConnectedLensModule.UserInfo} userInfo
 * @returns {boolean}
 */
function isSameUserAsHost(userInfo) {
  return _hostUserInfo && _hostUserId == userInfo.userId;
}

/**
 * Returns true if the passed in `userInfo` matches the host user and connection
 * @param {ConnectedLensModule.UserInfo} userInfo
 * @returns {boolean}
 */
function isHostUserConnection(userInfo) {
  return (
    _hostUserInfo && userInfo && _hostConnectionId === userInfo.connectionId
  );
}

/**
 * Returns true if the local user is the host, or null if the session doesn't exist yet.
 * @returns {boolean | null}
 */
function isHost() {
  if (getSessionCreationType() === null) {
    return null;
  } else {
    return isHostUserConnection(_localUserInfo);
  }
}

/**
 * Returns the list of current user connections
 * @returns {ConnectedLensModule.UserInfo[]}
 */
function getUsers() {
  return _users;
}

/**
 * Returns the user info with matching id, or null
 * @deprecated Use {@link getUserByConnectionId} or {@link getUsersByUserId()}
 * @param {string} userId
 * @returns {ConnectedLensModule.UserInfo?}
 */
function getUserById(userId) {
  var users = getUsersByUserId(userId);
  if (users.length > 0) {
    return users[0];
  }
  return null;
}

/**
 * Returns the user info with matching connection id, or null
 * @param {string} connectionId
 * @returns {ConnectedLensModule.UserInfo?}
 */
function getUserByConnectionId(connectionId) {
  return _connectionIdLookup[connectionId] || null;
}

/**
 * Returns the list of users with matching user id
 * @param {string} userId
 * @returns {ConnectedLensModule.UserInfo[]}
 */
function getUsersByUserId(userId) {
  return _userIdLookup[userId] || [];
}

/**
 * Returns true if the session has been shared
 * @returns {boolean}
 */
function getIsSessionShared() {
  return eventFlowState.shared;
}

/**
 * Returns StoreInfo for the store with matching id
 * @param {string} networkId
 * @returns {StoreInfo?}
 */
function getStoreInfoById(networkId) {
  return _storeLookup[networkId];
}

/**
 * Create a RealtimeStore
 * @param {RealtimeStoreCreateOptions} storeOptions
 * @param {((store:GeneralDataStore)=>void)=} onSuccess
 * @param {((message:string)=>void)=} onError
 */
function createStore(storeOptions, onSuccess, onError) {
  _session.createRealtimeStore(
    storeOptions,
    onSuccess || function () {},
    onError ||
      function (message) {
        throw Error(message);
      }
  );
}

/**
 * Returns a unix timestamp in seconds of the current time according to the server.
 * Useful for synchronizing time-based game events across devices.
 * -1 will be returned if session is not connected to the server.
 * @returns {number?}
 */
function getServerTimeInSeconds() {
  if (_session) {
    return _session.getServerTimestamp() * 0.001;
  }
  return null;
}

/**
 * Share an Invite to the session
 */
function shareInvite() {
  if (!_session) {
    throw Error("Unable to share invite: session is not created!");
  }
  if (!script.connectedLensModuleToUse) {
    throw Error("Unable to share invite: connected lens module not set!");
  }
  if (_state != State.Ready && _state != State.WaitingForInvite) {
    throw Error("Unable to share invite: session controller is not ready!");
  }

  eventFlowState.connected = false;
  eventFlowState.shared = false;

  connectedLensModuleToUse.shareSession(
    ConnectedLensModule.SessionShareType.Invitation,
    _onSessionShared
  );
}

/**
 * Returns true if we're ready to start the colocated tracking flow.
 * @returns {boolean}
 */
function getOnStartColocated() {
  return eventFlowState.isColocatedSetupStarted;
}

/**
 * Executes `onColocatedStart` immediately if the Session should start the colocated tracking flow,
 * or will execute it later when the flow should start. Returns a completer function, which should be called
 * when colocation is complete.
 * @param {()=>void} onStartColocated
 * @returns {()=>void} onColocatedComplete
 */
function notifyOnStartColocated(onStartColocated) {
  if (getOnStartColocated()) {
    onStartColocated();
  } else {
    callbacks.onStartColocated.add(onStartColocated);
  }
  return /*function onColocatedComplete*/ () => {
    eventFlowState.isColocatedSetupFinished = true;
    checkIfReady();
  };
}

/**
 * Returns true if the session has finished setting up and the len experience is ready to start
 * @returns {boolean}
 */
function getIsReady() {
  return _isReady;
}

/**
 * Executes `onReady` immediately if the Session is ready, or will execute it later when the Session becomes ready.
 * @param {()=>void} onReady
 */
function notifyOnReady(onReady) {
  if (getIsReady()) {
    onReady();
  } else {
    callbacks.onReady.add(onReady);
  }
}

/**
 * Returns true if the map exists.
 * @returns {boolean}
 */
function getMapExists() {
  return (
    (locatedAtComponent !== null &&
      locatedAtComponent !== undefined &&
      locatedAtComponent.location !== null) ||
    getColocatedBuildStatus() === ColocatedBuildStatus.Built
  );
}

/**
 * Executes `onMapExists` immediately if the map exists.
 * @param {()=>void} onMapExists
 */
function notifyOnMapExists(onMapExists) {
  if (getMapExists()) {
    onMapExists();
  } else {
    callbacks.onMapExists.add(onMapExists);
  }
}

/**
 * Executes `onLocationId` immediately if the locationId found.
 * @param {()=>void} onLocationId
 */
function notifyOnLocationId(onLocationId) {
  if (getColocatedMapId()) {
    onLocationId();
  } else {
    callbacks.onLocationId.add(onLocationId);
  }
}

/**
 * Executes `onLocatedAtFound` immediately if the locatedAtComponent is found, or will execute it later when the component is found.
 * @param {()=>void} onLocatedAtFound
 */
function notifyOnLocatedAtFound(onLocatedAtFound) {
  if (_isLocatedAtFound) {
    onLocatedAtFound();
  } else {
    callbacks.onLocatedAtFound.add(onLocatedAtFound);
  }
}

/**
 * Returns true if skipUiInStudio checkbox is selected.
 * @returns {boolean}
 */
function getSkipUiInStudio() {
  return skipUiInStudio;
}

/**
 * Prepares SessionController to use a Mocked version of Connected Lenses.
 * Make sure to call this before calling init().
 * @param {MockMultiplayerSessionConfig=} options
 */
function prepareOfflineMode(options) {
  if (_state !== State.NotInitialized) {
    warningLog("Can't switch to offline after already initializing!");
    return;
  }

  const mockModule = new MockConnectedLensModule();
  options = options || MockMultiplayerSessionConfig.createWithOneFrameLatency();
  mockModule.mockSessionOptions = options;
  connectedLensModuleToUse = mockModule;
  _isSingleplayer = true;
}

// Script API
script.getSession = getSession;
script.getLocationCloudStorageModule = getLocationCloudStorageModule;
script.getMappingSession = getMappingSession;
script.getState = getState;
script.getSessionCreationType = getSessionCreationType;
script.getLocalUserId = getLocalUserId;
script.getLocalConnectionId = getLocalConnectionId;
script.getLocalUserName = getLocalUserName;
script.getLocalUserInfo = getLocalUserInfo;
script.isSameUserAsLocal = isSameUserAsLocal;
script.isLocalUserConnection = isLocalUserConnection;
script.getHostUserId = getHostUserId;
script.getHostConnectionId = getHostConnectionId;
script.getHostUserName = getHostUserName;
script.getHostUserInfo = getHostUserInfo;
script.isSameUserAsHost = isSameUserAsHost;
script.isHostUserConnection = isHostUserConnection;
script.getUserById = getUserById;
script.getUserByConnectionId = getUserByConnectionId;
script.getUsersByUserId = getUsersByUserId;
script.getStoreInfoById = getStoreInfoById;
script.getUsers = getUsers;
script.getIsSessionShared = getIsSessionShared;
script.shareInvite = shareInvite;
script.getIsReady = getIsReady;
script.notifyOnReady = notifyOnReady;
script.getOnStartColocated = getOnStartColocated;
script.notifyOnStartColocated = notifyOnStartColocated;
script.getMapExists = getMapExists;
script.notifyOnMapExists = notifyOnMapExists;
script.notifyOnLocationId = notifyOnLocationId;
script.notifyOnLocatedAtFound = notifyOnLocatedAtFound;
script.getServerTimeInSeconds = getServerTimeInSeconds;
script.getLocatedAtComponent = getLocatedAtComponent;
script.startBuilding = startBuilding;
script.getDeviceTrackingComponent = getDeviceTrackingComponent;
script.isHost = isHost;
script.getColocatedBuildStatus = getColocatedBuildStatus;
script.setColocatedBuildStatus = setColocatedBuildStatus;
script.getColocatedMapId = getColocatedMapId;
script.setColocatedMapId = setColocatedMapId;
script.getSkipUiInStudio = getSkipUiInStudio;
(script.getLandmarksVisual3d = getLandmarksVisual3d),
  (script.getDebugLogging = getDebugLogging);
script.prepareOfflineMode = prepareOfflineMode;
script.init = init;

// Callbacks in script api
script.onReady = callbacks.onReady;
script.onStartColocated = callbacks.onStartColocated;
script.onMapExists = callbacks.onMapExists;
script.onLocationId = callbacks.onLocationId;
script.onSessionCreated = callbacks.onSessionCreated;
script.onSessionShared = callbacks.onSessionShared;
script.onConnected = callbacks.onConnected;
script.onDisconnected = callbacks.onDisconnected;
script.onMessageReceived = callbacks.onMessageReceived;
script.onUserJoinedSession = callbacks.onUserJoinedSession;
script.onUserLeftSession = callbacks.onUserLeftSession;
script.onHostUpdated = callbacks.onHostUpdated;
script.onError = callbacks.onError;
script.onConnectionFailed = callbacks.onConnectionFailed;
script.onRealtimeStoreCreated = callbacks.onRealtimeStoreCreated;
script.onRealtimeStoreUpdated = callbacks.onRealtimeStoreUpdated;
script.onRealtimeStoreKeyRemoved = callbacks.onRealtimeStoreKeyRemoved;
script.onRealtimeStoreDeleted = callbacks.onRealtimeStoreDeleted;
script.onRealtimeStoreOwnershipUpdated =
  callbacks.onRealtimeStoreOwnershipUpdated;
script.onLocatedAtFound = callbacks.onLocatedAtFound;

vec4 | undefined;

// Global API (preferred)
global.sessionController = {
  getSession: getSession,
  getLocationCloudStorageModule: getLocationCloudStorageModule,
  getMappingSession: getMappingSession,
  getState: getState,
  getSessionCreationType: getSessionCreationType,
  getLocalUserId: getLocalUserId,
  getLocalConnectionId: getLocalConnectionId,
  getLocalUserName: getLocalUserName,
  getLocalUserInfo: getLocalUserInfo,
  isSameUserAsLocal: isSameUserAsLocal,
  isLocalUserConnection: isLocalUserConnection,
  getHostUserId: getHostUserId,
  getHostConnectionId: getHostConnectionId,
  getHostUserName: getHostUserName,
  getHostUserInfo: getHostUserInfo,
  isSameUserAsHost: isSameUserAsHost,
  isHostUserConnection: isHostUserConnection,
  getUserById: getUserById,
  getStoreInfoById: getStoreInfoById,
  getUsers: getUsers,
  getUsersByUserId: getUsersByUserId,
  getUserByConnectionId: getUserByConnectionId,
  getIsSessionShared: getIsSessionShared,
  shareInvite: shareInvite,
  getIsReady: getIsReady,
  notifyOnReady: notifyOnReady,
  getOnStartColocated: getOnStartColocated,
  notifyOnStartColocated: notifyOnStartColocated,
  getServerTimeInSeconds: getServerTimeInSeconds,
  getServerTimeInSeconds: getServerTimeInSeconds,
  getDeviceTrackingComponent: getDeviceTrackingComponent,
  getMapExists: getMapExists,
  notifyOnMapExists: notifyOnMapExists,
  notifyOnLocationId: notifyOnLocationId,
  notifyOnLocatedAtFound: notifyOnLocatedAtFound,
  isHost: isHost,
  getLocatedAtComponent: getLocatedAtComponent,
  startBuilding: startBuilding,
  getColocatedMapId: getColocatedMapId,
  setColocatedMapId: setColocatedMapId,
  getColocatedBuildStatus: getColocatedBuildStatus,
  setColocatedBuildStatus: setColocatedBuildStatus,
  getSkipUiInStudio: getSkipUiInStudio,
  getLandmarksVisual3d: getLandmarksVisual3d,
  getDebugLogging: getDebugLogging,
  prepareOfflineMode: prepareOfflineMode,
  init: init,

  // Callbacks in single place for compatibility
  /** @deprecated */
  callbacks: callbacks,

  // Callbacks listed out individually
  onReady: callbacks.onReady,
  onStartColocated: callbacks.onStartColocated,
  onMapExists: callbacks.onMapExists,
  onLocationId: callbacks.onLocationId,
  onSessionCreated: callbacks.onSessionCreated,
  onSessionShared: callbacks.onSessionShared,
  onConnected: callbacks.onConnected,
  onDisconnected: callbacks.onDisconnected,
  onMessageReceived: callbacks.onMessageReceived,
  onUserJoinedSession: callbacks.onUserJoinedSession,
  onUserLeftSession: callbacks.onUserLeftSession,
  onHostUpdated: callbacks.onHostUpdated,
  onError: callbacks.onError,
  onConnectionFailed: callbacks.onConnectionFailed,
  onRealtimeStoreCreated: callbacks.onRealtimeStoreCreated,
  onRealtimeStoreUpdated: callbacks.onRealtimeStoreUpdated,
  onRealtimeStoreDeleted: callbacks.onRealtimeStoreDeleted,
  onRealtimeStoreKeyRemoved: callbacks.onRealtimeStoreKeyRemoved,
  onRealtimeStoreOwnershipUpdated: callbacks.onRealtimeStoreOwnershipUpdated,
  onLocatedAtFound: callbacks.onLocatedAtFound,
};

function debugLog(message) {
  if (debugLogging) {
    if (global.logToScreen) {
      global.logToScreen(message);
    } else {
      print(message);
    }
  }
}

function warningLog(message) {
  if (global.logToScreen) {
    global.logToScreen(message);
  } else {
    print(message);
  }
}

/**
 *
 * @param {()=>boolean} condition
 * @param {()=>void} callback
 * @param {number=} timeOutSeconds
 * @param {(()=>void)=} onTimeout
 */
function waitUntilTrue(condition, callback, timeOutSeconds, onTimeout) {
  var startTime = getTime();
  var evt = script.createEvent("UpdateEvent");
  evt.bind(function () {
    if (condition()) {
      script.removeEvent(evt);
      callback();
    } else {
      if (timeOutSeconds !== undefined && timeOutSeconds !== null) {
        if (startTime + timeOutSeconds <= getTime()) {
          script.removeEvent(evt);
          onTimeout();
        }
      }
    }
  });
}

script.api.init = init;

if (locatedAtComponent !== null) {
  locatedAtComponent.onFound.add(function () {
    _isLocatedAtFound = true;
    callbacks.onLocatedAtFound.trigger();
  });
}
