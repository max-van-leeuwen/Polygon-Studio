// DisplayStorageProperty.js
// Version: 1.0.0
// Event: On Awake
// Description: Displays a Storage Property value found on the specified Entity Target. 
// The Property Key should match the one being used by the storage property.


//@ui {"widget":"group_start","label":"Entity Target"}

//@input Component.ScriptComponent syncEntityScript
/** @type {ScriptComponent} */
var syncEntityScript = script.syncEntityScript;

//@ui {"widget":"group_end"}

//@input string propertyKey
/** @type {string} */
var propertyKey = script.propertyKey;

//@input Component.Text text
/** @type {Text} */
var text = script.text;

//@input bool useFormat
/** @type {boolean} */
var useFormat = script.useFormat;

//@ui {"showIf": "useFormat", "widget": "label", "label": "String will be formatted using:<br>{value} - current value (or blank)<br>{prevValue} - previous value (or blank)"}

//@input string formatString {"showIf": "useFormat"}
/** @type {string} */
var formatString = script.formatString;

//@ui {"widget":"label", "label":"Text to display if value is undefined"}

//@input string altText
/** @type {string} */
var altText = script.altText;


/** @type {SyncEntity?} */
var syncEntity;


function updateValue(newValue, oldValue) {
    var newText = "";
    if (newValue === undefined) {
        newText = altText;
    } else if (useFormat) {
        newText = formatString
            .replace("{value}", newValue +"")
            .replace("{prevValue}", oldValue +"");
    } else {
        newText = "" + newValue;
    }
    text.text = newText;
}

function init() {
    updateValue(undefined);
    syncEntity = SyncEntity.getSyncEntityOnComponent(syncEntityScript);
    if (!syncEntity) {
        print("Could not find syncEntity!");
    } else {
        syncEntity.notifyOnReady(getProperty);
    }
}

function getProperty(){
    var property = syncEntity.propertySet.getProperty(propertyKey);
    if (property) {
        updateValue(property.currentValue, null);
        property.onAnyChange.add(updateValue);
    } else {
        print("Couldn't find property with key: " + propertyKey);
    }
}

script.createEvent("OnStartEvent").bind(init);