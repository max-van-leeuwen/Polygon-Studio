// NetworkIdTools.js
// Version: 1.0.0
// Event: On Awake
// Description: Helpers for configuring and generating network ids.


/** 
 * Types of network id generation that can be used
 * @enum {string}
 */
 const NetworkIdType = {
    Hierarchy: "hierarchy",
    Custom: "custom",
    ObjectId: "objectId",
};

/** 
 * Provides a set of options to use with network id generation
 * @class 
 */
function NetworkIdOptions() {
    /** 
     * Which method to use for network id generation
     * @type {NetworkIdType?} 
     */
    this.networkIdType = null;

    /**
     * Custom network id  to use
     * @type {string?} 
     */
    this.customNetworkId = null;

    /**
     * Custom prefix to prepend to the network id
     * @type {string?} 
     */
    this.customPrefix = null;
}

/**
 * Checks a ScriptComponent for default networkId option inputs and returns a NetworkIdOptions object
 * @param {ScriptComponent} scriptComponent 
 * @returns {NetworkIdOptions}
 */
NetworkIdOptions.parseFromScript = function(scriptComponent) {
    var options = new NetworkIdOptions();
    options.networkIdType = scriptComponent.networkIdType;
    options.customNetworkId = scriptComponent.customNetworkId;
    return options;
};

/**
 * Generates a new network id
 * @param {ScriptComponent} scriptComponent ScriptComponent to generate the id for
 * @param {NetworkIdOptions} networkIdOptions Options to use with id generation
 * @param {NetworkRootInfo=} networkRoot Optional NetworkRootInfo for use with prefab instantiation
 * @returns {string} Generated network id
 */
function generateNetworkId(scriptComponent, networkIdOptions, networkRoot) {
    var ret = "";
    switch (networkIdOptions.networkIdType) {
        case NetworkIdType.ObjectId:
        default:
            if (networkRoot) {
                ret = generateNetworkIdFromHierarchy(scriptComponent);
            } else {
                ret = scriptComponent.uniqueIdentifier;
            }
            break;
        case NetworkIdType.Hierarchy:
            ret = generateNetworkIdFromHierarchy(scriptComponent);
            break;
        case NetworkIdType.Custom:
            var networkId = networkIdOptions.customNetworkId;
            if (networkRoot) {
                networkId = networkRoot.networkId + "/" + networkId;
            }
            ret = networkId;
            break;
    }
    if (networkIdOptions.customPrefix) {
        ret = networkIdOptions.customPrefix + ret;
    }
    return ret;
}

/**
 * Returns the index of the component on its SceneObject
 * @param {Component} component 
 * @returns {number}
 */
 function getComponentIndex(component) {
    var sceneObject = component.getSceneObject();
    var components = sceneObject.getComponents("Component");
    for (var i=0; i<components.length; i++) {
        if (components[i].isSame(component)) {
            return i;
        }
    }
    return -1;
}

/**
 * Returns the index of the SceneObject on its parent, or scene root
 * @param {SceneObject} sceneObject 
 * @returns {number}
 */
function getSceneObjectIndex(sceneObject) {
    if (sceneObject.hasParent()) {
        var parent = sceneObject.getParent();
        var count = parent.getChildrenCount();
        for (var i=0; i<count; i++) {
            if (parent.getChild(i).isSame(sceneObject)) {
                return i;
            }
        }
    } else {
        var rootCount = global.scene.getRootObjectsCount();
        for (var i=0; i<rootCount; i++) {
            if (global.scene.getRootObject(i).isSame(sceneObject)) {
                return i;
            }
        }
    }
    return -1;
}

/**
 * Generate a network id based on object hierarchy
 * @param {SceneObject|Component} target 
 * @returns {string}
 */
function generateNetworkIdFromHierarchy(target) {
    var path = "";

    if (target.isOfType("Component")) {
        /** @type {Component} */
        var component = target;
        path = generateNetworkIdFromHierarchy(component.getSceneObject());
        var compIndex = getComponentIndex(component);
        path += "/" + component.getTypeName() + "_" + compIndex;
        return path;
    }

    /** @type {SceneObject} */
    var sceneObject = target;

    if (global.networkUtils.isRootObject(sceneObject)) {
        var networkRoot = global.networkUtils.findNetworkRoot(sceneObject);
        return networkRoot.networkId;
    }

    if (sceneObject.hasParent()) {
        path = generateNetworkIdFromHierarchy(sceneObject.getParent());
        path += "/";
    }

    var objIndex = getSceneObjectIndex(sceneObject);

    path += sceneObject.name + "_" + objIndex;

    if (component) {
        var compIndex = getComponentIndex(sceneObject, component);
        path += "/" + component.getTypeName() + "_" + compIndex;
    }

    return path;
}

var networkIdTools = {
    "generateNetworkId": generateNetworkId,
    "NetworkIdOptions": NetworkIdOptions,
    "NetworkIdType": NetworkIdType,
};

global.networkIdTools = networkIdTools;