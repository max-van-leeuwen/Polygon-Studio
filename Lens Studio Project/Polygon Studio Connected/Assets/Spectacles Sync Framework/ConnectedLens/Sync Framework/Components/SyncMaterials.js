// SyncMaterials.js
// Version: 1.0.0
// Event: On Awake
// Description: Synchronizes material properties across the network.
// Add this to a SceneObject and assign the material you want synchronized in Main Material. 
// Add each property name you want synchronized to the Property Names list. 
// Any changes to these properties will be automatically synchronized across the network. 


//@input string networkIdType = "objectId" {"widget":"combobox", "values":[{"label":"Object Id", "value":"objectId"}, {"label":"Object Hierarchy", "value":"hierarchy"}, {"label":"Custom", "value":"custom"}]}
/** @type {string} */
var networkIdType = script.networkIdType;

//@input string customNetworkId = "enter_unique_id" {"showIf":"networkIdType", "showIfValue":"custom"}
/** @type {string} */
var customNetworkId = script.customNetworkId;

//@ui {"widget":"label", "label":"Sync Settings"}

//@input bool autoClone = true
/** @type {boolean} */
var autoClone = script.autoClone;

//@input Asset.Material mainMaterial
/** @type {Material} */
var mainMaterial = script.mainMaterial;

//@input string[] propertyNames
/** @type {string[]} */
var propertyNames = script.propertyNames;

var newMat = mainMaterial;

if (!mainMaterial) {
    print("You need to set mainMaterial!");
    return;
}

if (autoClone) {
    newMat = mainMaterial.clone();
    var visuals = getComponentsRecursive(script.getSceneObject(), "MaterialMeshVisual");
    for (var i=0; i<visuals.length; i++) {
        var materials = visuals[i].materials;
        var needsToUpdateMaterials = false;
        for (var j=0; j<materials.length; j++) {
            // If a material matches the one we cloned, we need to replace it with the new, cloned material
            if (mainMaterial.isSame(materials[j])) {
                materials[j] = newMat;
                needsToUpdateMaterials = true;
            }
        }
        // Our material list was provided as a copy, so if any materials were changed, we need to overwrite the visual's material list using our new version
        if (needsToUpdateMaterials) {
            visuals[i].materials = materials;
        }
    }
}

function deduceStorageType(propValue) {
    var dimensions = ['r', 'g', 'b', 'a'];
    var dCount = 0;
    for (var i=0; i<dimensions.length; i++) {
        if (dimensions[i] in propValue) {
            dCount++;
        }
    }
    if (dCount > 1) {
        return [
            StorageTypes.vec2,
            StorageTypes.vec3,
            StorageTypes.vec4,
        ][dCount-2];
    }
    return StorageTypes.float;
}

var storageProps = new StoragePropertySet();

var mainPass = newMat.mainPass;
for (var i=0; i<propertyNames.length; i++) {
    var propName = propertyNames[i];
    var propVal = mainPass[propName];
    var type = deduceStorageType(propVal);
    var newProp = StorageProperty.forMaterialProperty(newMat, propName, type);
    storageProps.addProperty(newProp);
}

var syncEntity = new SyncEntity(script, storageProps);

/**
* Returns a list of all Components of `componentType` found in the object and its children.
* @template {keyof ComponentNameMap} T
* @param {SceneObject} object Object to search
* @param {T} componentType Component type name to search for
* @param {ComponentNameMap[componentType][]=} results Optional list to store results in
* @returns {ComponentNameMap[componentType][]} Matching Components in `object` and children
*/
function getComponentsRecursive(object, componentType, results) {
    results = results || [];
    var components = object.getComponents(componentType);
    for (var i=0; i<components.length; i++) {
        results.push(components[i]);
    }
    var childCount = object.getChildrenCount();
    for (var j=0; j<childCount; j++) {
        getComponentsRecursive(object.getChild(j), componentType, results);
    }
    return results;
}