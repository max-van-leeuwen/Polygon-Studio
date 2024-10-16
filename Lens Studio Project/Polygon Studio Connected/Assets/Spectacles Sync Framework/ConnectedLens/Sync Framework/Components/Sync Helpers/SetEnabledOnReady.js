// SetEnabledOnReady.js
// Version: 1.0.0
// Event: On Awake
// Description: Enables or disables groups of SceneObjects based on the readiness of a SyncEntity, or 
// SessionController if SyncEntity is not set. 
// When this script first runs, if the SyncEntity or SessionController is not ready, objects in readyObjects
// will be disabled, and objects in notReadyObjects will be enabled.
// As soon as the SyncEntity or SessionController are ready (including when the script first runs),
// objects in notReadyObjects will be disabled, and objects in readyObjects will be enabled.


//@input Component.ScriptComponent syncEntityScript
/** @type {ScriptComponent} */
var syncEntityScript = script.syncEntityScript;

//@input SceneObject[] readyObjects
/** @type {SceneObject[]} */
var readyObjects = script.readyObjects;

//@input SceneObject[] notReadyObjects
/** @type {SceneObject[]} */
var notReadyObjects = script.notReadyObjects;


/** @type {SyncEntity?} */
var syncEntity;

/**
 * 
 * @param {SceneObject[]} objects 
 * @param {boolean} enabled 
 */
function setAllEnabled(objects, enabled) {
    for(var i=0; i<objects.length; i++) {
        objects[i].enabled = enabled;
    }
}

/**
 *
 */
function updateReady() {
    var isReady = syncEntity ? syncEntity.isSetupFinished : global.sessionController.getIsReady();
    if (isReady) {
        setAllEnabled(notReadyObjects, false);
        setAllEnabled(readyObjects, true);
    } else {
        setAllEnabled(readyObjects, false);
        setAllEnabled(notReadyObjects, true);
    }
}

function init() {
    if (syncEntityScript) {
        syncEntity = SyncEntity.getSyncEntityOnComponent(syncEntityScript);
        syncEntity.onSetupFinished.add(updateReady);
        updateReady();
    } else {
        global.sessionController.notifyOnReady(updateReady);
        updateReady();
    }
}

script.createEvent("OnStartEvent").bind(init);