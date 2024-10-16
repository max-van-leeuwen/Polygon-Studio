// SyncEntityDebug.js
// Version: 1.0.0
// Event: On Awake
// Description: Used to display helpful debugging information about a SyncEntity.


//@ui {"widget":"group_start","label":"Target"}


//@input string targetType = "SyncEntity" {"widget":"combobox", "values":[{"label":"Sync Entity", "value":"SyncEntity"}, {"label":"Network Root", "value":"NetworkRoot"}]}
/** @type {string} */
var targetType = script.targetType;

//@input Component.ScriptComponent syncEntityScript {"showIf": "targetType", "showIfValue":"SyncEntity"}
/** @type {ScriptComponent} */
var syncEntityScript = script.syncEntityScript;

//@ui {"widget":"group_end"}

//@ui {"widget":"group_start","label":"Text Labels"}


//@input Component.Text networkIdText
/** @type {Text} */
var networkIdText = script.networkIdText;

//@ui {"widget":"label", "label":"Owner Info"}

//@input Component.Text ownerDisplayNameText
/** @type {Text} */
var ownerDisplayNameText = script.ownerDisplayNameText;

//@input Component.ScriptComponent ownershipButton
/** @type {RaycastButton} */
var ownershipButton = script.ownershipButton;

//@input Component.Text ownerIdText
/** @type {Text} */
var ownerIdText = script.ownerIdText;

//@ui {"widget":"label", "label":"Store Info"}
//@input Component.Text storagePropertyText
/** @type {Text} */
var storagePropertyText = script.storagePropertyText;

//@ui {"widget":"group_end"}

/** @type {SyncEntity?} */
var syncEntity;

/** @type {NetworkRootInfo?} */
var networkRoot;

/**
 * 
 * @param {Text} textComponent 
 * @param {string} text 
 */
function textHelper(textComponent, text) {
    if (!isNull(textComponent)) {
        textComponent.text = ""+text;
    }
}

/**
 * 
 * @param {ConnectedLensModule.UserInfo} ownerInfo 
 */
function updateOwnerText(ownerInfo) {
    textHelper(ownerIdText, "id: " + ((ownerInfo && ownerInfo.connectionId) || "<unowned>"));
    textHelper(ownerDisplayNameText, (ownerInfo && ownerInfo.displayName) || "<unowned>");
}

/**
 * 
 * @param {string} networkId 
 */
 function updateNetworkId(networkId) {
    textHelper(networkIdText, "id: " + networkId);
}

/**
 * 
 * @param {SceneObject} object 
 * @returns {string}
 */
function getHierarchyPath(object) {
    var path = object.name;
    if (object.hasParent()) {
        return getHierarchyPath(object.getParent()) + "/" + path;
    }
    return path;
}

/**
 * 
 * @param {string?} lastKeyChanged
 */
function updateStorageText(lastKeyChanged) {
    if (!storagePropertyText) {
        return;
    }

    var txt = "";

    if (syncEntity && !syncEntity.destroyed && !isNull(syncEntity.localScript)) {
        txt += getHierarchyPath(syncEntity.localScript.getSceneObject()) + "\n";
    }

    txt += "----Storage----\n";

    var propertySet = syncEntity.propertySet;

    /** @type {Object.<string, any>} */
    var allValues = {};
    
    /** @type {Object.<string, any>} */
    var pendingValues = {};

    /** @type {Object.<string, any>} */
    var currentOrPendingValues = {};

    if (syncEntity.currentStore) {
        /** @type {string[]} */
        var allKeys = syncEntity.currentStore.getAllKeys();
        for (var i=0; i<allKeys.length; i++) {
            var key = allKeys[i];

            if (key == global.NETWORK_ID_KEY) {
                continue;
                // allValues[key] = syncEntity.currentStore.getString(key);
            }

            if (key == global.NETWORK_TYPE_KEY) {
                allValues[key] = syncEntity.currentStore.getString(key);
            }

            allValues[key] = null;
        }
    } else {
        txt += "[No RealtimeStore connected]\n"
    }

    if (propertySet.storageProperties) {
        var keys = Object.keys(propertySet.storageProperties);
        for (var i=0; i<keys.length; i++) {
            var key = keys[i];
            var prop = propertySet.storageProperties[key];
            allValues[key] = prop.currentValue;
            if (prop.pendingValue !== null && prop.pendingValue !== undefined) {
                pendingValues[key] = prop.pendingValue;
            }
            if (prop.currentOrPendingValue !== null && prop.currentOrPendingValue !== undefined) {
                currentOrPendingValues[key] = prop.currentOrPendingValue;
            }
        }
    }

    var keys = Object.keys(allValues);
    for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        if (key == lastKeyChanged) {
            txt += "*";
        }
        var valueText = (allValues[key] == null) ? "?" : allValues[key];
        txt += key + ": " + valueText;
        if (key in pendingValues) {
            txt += "  [pen]: " + pendingValues[key];
        }
        if (key in currentOrPendingValues) {
            txt += "  [cur/pen]: " + currentOrPendingValues[key];
        }
        txt += "\n";
    }


    textHelper(storagePropertyText, txt);
}

function onOwnershipButtonPressed() {
    if (syncEntity.doIOwnStore()) {
        global.sessionController.getSession().clearRealtimeStoreOwnership(syncEntity.currentStore, function(){}, onError);
    } else {
        global.sessionController.getSession().requestRealtimeStoreOwnership(syncEntity.currentStore, function(){}, onError)
    }
}

function onError(error) {
    print("error: " + error);
}

function init() {
    switch(targetType) {
        case "SyncEntity":
            syncEntity = SyncEntity.getSyncEntityOnComponent(syncEntityScript);
            syncEntity.onOwnerUpdated.add(updateOwnerText);
            updateNetworkId(syncEntity.networkId);
            updateOwnerText(syncEntity.ownerInfo);
            updateStorageText(null); 
            
            syncEntity.onSetupFinished.add(function() {
                updateNetworkId(syncEntity.networkId);
                updateOwnerText(syncEntity.ownerInfo);
                updateStorageText(null);
                if(ownershipButton) {
                    ownershipButton.onTouchStart.add(onOwnershipButtonPressed);
                }
            });
            
            syncEntity.storeCallbacks.onStoreUpdated.add(function(session, store, key) {
                updateStorageText(key);
            });
            break;
        case "NetworkRoot":
            networkRoot = networkUtils.findNetworkRoot(script.getSceneObject());
            if (networkRoot) {
                updateOwnerText(networkRoot.ownerInfo);
                updateNetworkId(networkRoot.networkId);
            }
            break;
    }
}

script.createEvent("OnStartEvent").bind(init);