// SetEnabledIfOwner.js
// Version: 1.0.0
// Event: On Awake
// Description: Enables or disables groups of SceneObjects whenever ownership of the SyncEntity changes.
// When the SyncEntity becomes owned by the local user, the objects in nonOwnerObjects become disabled, and 
// objects in ownerObjects become enabled.
// When the SyncEntity becomes not owned the local user, the objects in ownerObjects become disabled, and 
// objects in nonOwnerObjects become enabled.


//@ui {"widget":"group_start","label":"Entity Target"}


//@input string targetType = "SyncEntity" {"widget":"combobox", "values":[{"label":"Sync Entity", "value":"SyncEntity"}, {"label":"Network Root", "value":"NetworkRoot"}]}
/** @type {string} */
var targetType = script.targetType;

//@input Component.ScriptComponent syncEntityScript {"showIf": "targetType", "showIfValue":"SyncEntity"}
/** @type {ScriptComponent} */
var syncEntityScript = script.syncEntityScript;

//@ui {"widget":"group_end"}

//@input SceneObject[] ownerObjects
/** @type {SceneObject[]} */
var ownerObjects = script.ownerObjects;

//@input SceneObject[] nonOwnerObjects
/** @type {SceneObject[]} */
var nonOwnerObjects = script.nonOwnerObjects;




/** @type {SyncEntity?} */
var syncEntity;

/** @type {NetworkRootInfo?} */
var networkRoot;


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
 * @param {ConnectedLensModule.UserInfo} ownerInfo 
 */
function updateOwner(ownerInfo) {
    var isOwner = global.sessionController.isLocalUserConnection(ownerInfo);
    if (isOwner) {
        setAllEnabled(nonOwnerObjects, false);
        setAllEnabled(ownerObjects, true);
    } else {
        setAllEnabled(ownerObjects, false);
        setAllEnabled(nonOwnerObjects, true);
    }

}

function init() {
    switch(targetType) {
        case "SyncEntity":
            syncEntity = SyncEntity.getSyncEntityOnComponent(syncEntityScript);
            syncEntity.onOwnerUpdated.add(updateOwner);
            updateOwner(syncEntity.ownerInfo);
            break;
        case "NetworkRoot":
            networkRoot = networkUtils.findNetworkRoot(script.getSceneObject());
            if (networkRoot) {
                updateOwner(networkRoot.ownerInfo);
            }
            break;
    }
}

script.createEvent("OnStartEvent").bind(init);