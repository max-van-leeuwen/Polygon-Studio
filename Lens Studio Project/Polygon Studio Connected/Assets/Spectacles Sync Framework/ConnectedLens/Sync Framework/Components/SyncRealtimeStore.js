// SyncRealtimeStore.js
// Version: 1.0.0
// Event: On Awake
// Description: Meant to be a very simple interface for a synced entity and its RealtimeStore. 
// It doesn’t do any behaviors on its own, so it can be used just for storing and retrieving synced values.


//@input string networkIdType = "objectId" {"widget":"combobox", "values":[{"label":"Object Id", "value":"objectId"}, {"label":"Object Hierarchy", "value":"hierarchy"}, {"label":"Custom", "value":"custom"}]}
/** @type {string} */
var networkIdType = script.networkIdType;

//@input string customNetworkId = "enter_unique_id" {"showIf":"networkIdType", "showIfValue":"custom"}
/** @type {string} */
var customNetworkId = script.customNetworkId;

// @input string ownershipType = "none" {"widget":"combobox", "values":[{"label":"None","value":"none"}, {"label":"Request if Available","value":"requestIfAvailable"}]}
/** @type {string} */
var ownershipType = script.ownershipType;

var shouldRequestOwnership = (ownershipType == "requestIfAvailable");

var syncEntity = new SyncEntity(script, null, shouldRequestOwnership);

var onStoreCreated = syncEntity.storeCallbacks.onStoreCreated;
var onStoreUpdated = syncEntity.storeCallbacks.onStoreUpdated;
var onStoreOwnershipUpdated = syncEntity.storeCallbacks.onStoreOwnershipUpdated;
var onStoreDeleted = syncEntity.storeCallbacks.onStoreDeleted;

var onSetupFinished = syncEntity.onSetupFinished;
var onOwnerUpdated = syncEntity.onOwnerUpdated;

/**
 * 
 * @returns {boolean}
 */
function isStoreReady() {
    return (syncEntity.currentStore != null);
}

/**
 * 
 * @returns {GeneralDataStore?}
 */
function getStore() {
    return syncEntity.currentStore;
}

/**
 * @returns {ConnectedLensModule.UserInfo?}
 */
function getStoreOwnerInfo() {
    return syncEntity.ownerInfo;
}

/**
 * @returns {boolean}
 */
function canIModifyStore() {
    return syncEntity.canIModifyStore();
}

/**
 * 
 * @returns {boolean}
 */
function doIOwnStore() {
    return syncEntity.doIOwnStore();
}

/**
 * @returns {boolean}
 */
function isStoreOwned() {
    return syncEntity.isStoreOwned();
}

/**
 * @template T
 * @param {StorageProperty<T>} storageProperty 
 * @returns {StorageProperty<T>}
 */
function addStorageProperty(storageProperty) {
    return syncEntity.addStorageProperty(storageProperty);
}

/**
 * @typedef SyncRealtimeStore
 * @property {SyncEntity} syncEntity
 * 
 * @property {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>} onStoreCreated
 * @property {EventWrapper<MultiplayerSession, GeneralDataStore, string>} onStoreUpdated
 * @property {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>} onStoreOwnershipUpdated
 * @property {EventWrapper<MultiplayerSession, GeneralDataStore>} onStoreDeleted
 *
 * @property {EventWrapper<ConnectedLensModule.UserInfo>} onOwnerUpdated
 * @property {EventWrapper} onSetupFinished
 * 
 * @property {()=>boolean} isStoreReady
 * @property {()=>GeneralDataStore?} getStore
 * @property {()=>ConnectedLensModule.UserInfo} getStoreOwnerInfo
 * @property {()=>boolean} canIModifyStore
 * @property {()=>boolean} doIOwnStore
 * @property {()=>boolean} isStoreOwned
 * @property {(storageProperty:StorageProperty)=>StorageProperty} addStorageProperty
 */

script.syncEntity = syncEntity;
script.onStoreCreated = onStoreCreated;
script.onStoreUpdated = onStoreUpdated;
script.onStoreOwnershipUpdated = onStoreOwnershipUpdated;
script.onStoreDeleted = onStoreDeleted;

script.onOwnerUpdated = onOwnerUpdated;
script.onSetupFinished = onSetupFinished;

script.isStoreReady = isStoreReady;
script.getStore = getStore;
script.getStoreOwnerInfo = getStoreOwnerInfo;
script.canIModifyStore = canIModifyStore;
script.doIOwnStore = doIOwnStore;
script.isStoreOwned = isStoreOwned;
script.addStorageProperty = addStorageProperty;