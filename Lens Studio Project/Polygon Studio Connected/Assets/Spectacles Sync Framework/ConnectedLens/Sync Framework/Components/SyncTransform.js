// SyncTransform.js
// Version: 1.0.0
// Event: On Awake
// Description: Add this to any SceneObject to automatically synchronize its position, rotation, and/or scale,
// depending on the settings chosen in the Inspector panel.

//@input string networkIdType = "objectId" {"widget":"combobox", "values":[{"label":"Object Id", "value":"objectId"}, {"label":"Object Hierarchy", "value":"hierarchy"}, {"label":"Custom", "value":"custom"}]}
/** @type {string} */
var networkIdType = script.networkIdType;

//@input string customNetworkId = "enter_unique_id" {"showIf":"networkIdType", "showIfValue":"custom"}
/** @type {string} */
var customNetworkId = script.customNetworkId;

//@ui {"widget":"separator"}

//@ui {"widget":"label", "label":"Sync Settings"}

//@input string positionSync = "local" {"widget":"combobox", "values":[{"label":"None", "value":"none"}, {"label":"Location", "value":"location"}, {"label":"Local", "value":"local"}, {"label":"World", "value":"world"}]}
/** @type {string} */
var positionSync = script.positionSync;

//@input string rotationSync = "local" {"widget":"combobox", "values":[{"label":"None", "value":"none"}, {"label":"Location", "value":"location"},  {"label":"Local", "value":"local"}, {"label":"World", "value":"world"}]}
/** @type {string} */
var rotationSync = script.rotationSync;

//@input string scaleSync = "none" {"widget":"combobox", "values":[{"label":"None", "value":"none"}, {"label":"Location", "value":"location"},  {"label":"Local", "value":"local"}, {"label":"World", "value":"world"}]}
/** @type {string} */
var scaleSync = script.scaleSync;

//@ui {"widget":"separator"}

//@input string persistence = "Session" {"widget":"combobox", "values":[{"label":"Ephemeral", "value":"Ephemeral"},{"label":"Owner", "value":"Owner"},{"label":"Session", "value":"Session"},{"label":"Persist", "value":"Persist"}]}
/** @type {RealtimeStoreCreateOptions.Persistence} */
var persistence = RealtimeStoreCreateOptions.Persistence[script.persistence];

//@input float sendsPerSecondLimit = 10
/** @type {number} */
var sendsPerSecondLimit = script.sendsPerSecondLimit;

//@input bool useSmoothing
/** @type {boolean} */
var useSmoothing = script.useSmoothing;

//@input float interpolationTarget = -.25 {"showIf":"useSmoothing"}
/** @type {number} */
var interpolationTarget = script.interpolationTarget;

var storageProps = new StoragePropertySet();

var currentTransform = script.getTransform();

function addPropertyHelper(func) {
  var prop = storageProps.addProperty(
    func(transformGetterFunc, transformSetterFunc, currentTransform)
  );
  prop.sendsPerSecondLimit = sendsPerSecondLimit;
  if (useSmoothing) {
    prop.setSmoothing({interpolationTarget: interpolationTarget});
  }
  return prop;
}

function propertyTypeFromString(type) {
  switch (type) {
    case "none":
      return PropertyType.None;
    case "location":
      return PropertyType.Location;
    case "local":
      return PropertyType.Local;
    case "world":
      return PropertyType.World;
    default:
      throw new Error("Invalid property type: " + type);
  }
}

function transformGetterFunc() {
  let positionVec3 = positionGetter();
  let positionVec4 = new vec4(
    positionVec3.x,
    positionVec3.y,
    positionVec3.z,
    0
  );

  let rotationQuat = rotationGetter();
  let rotationVec4 = new vec4(
    rotationQuat.x,
    rotationQuat.y,
    rotationQuat.z,
    rotationQuat.w
  );

  let scaleVec3 = scaleGetter();
  let scaleVec4 = new vec4(scaleVec3.x, scaleVec3.y, scaleVec3.z, 0);

  return [positionVec4, rotationVec4, scaleVec4];
}

function transformSetterFunc(newValue) {
  let positionVec4 = newValue[0];
  let positionVec3 = new vec3(positionVec4.x, positionVec4.y, positionVec4.z);
  positionSetter(positionVec3);

  let rotationVec4 = newValue[1];
  let rotationQuat = new quat(
    rotationVec4.w,
    rotationVec4.x,
    rotationVec4.y,
    rotationVec4.z
  );
  rotationSetter(rotationQuat);

  let scaleVec4 = newValue[2];
  let scaleVec3 = new vec3(scaleVec4.x, scaleVec4.y, scaleVec4.z);
  scaleSetter(scaleVec3);
}

var scaleGetter = StorageProperty.forTransformGetterFun(
  propertyTypeFromString(scaleSync),
  TransformType.Scale,
  currentTransform
);
var scaleSetter = StorageProperty.forTransformSetterFun(
  propertyTypeFromString(scaleSync),
  TransformType.Scale,
  currentTransform
);
var rotationGetter = StorageProperty.forTransformGetterFun(
  propertyTypeFromString(rotationSync),
  TransformType.Rotation,
  currentTransform
);
var rotationSetter = StorageProperty.forTransformSetterFun(
  propertyTypeFromString(rotationSync),
  TransformType.Rotation,
  currentTransform
);
var positionGetter = StorageProperty.forTransformGetterFun(
  propertyTypeFromString(positionSync),
  TransformType.Position,
  currentTransform
);
var positionSetter = StorageProperty.forTransformSetterFun(
  propertyTypeFromString(positionSync),
  TransformType.Position,
  currentTransform
);

var transformProp = addPropertyHelper(StorageProperty.forTransform);

var syncEntity = new SyncEntity(script, storageProps, false, persistence);
