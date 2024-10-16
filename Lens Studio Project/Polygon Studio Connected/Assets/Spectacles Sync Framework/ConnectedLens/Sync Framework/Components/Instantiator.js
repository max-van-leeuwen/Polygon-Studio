// Instantiator.js
// Version: 1.0.0
// Event: On Awake
// Description: Used to instantiate prefabs across the network. 
// Prefabs must be added to the prefabs list or autoInstantiate list in order to be instantiated.


//@input Asset.ObjectPrefab[] prefabs
/** @type {ObjectPrefab[]} */
var prefabs = script.prefabs;

//@input bool spawnerOwnsObject
/** @type {boolean} */
var spawnerOwnsObject = script.spawnerOwnsObject;

//@input bool spawnAsChildren
/** @type {boolean} */
var spawnAsChildren = script.spawnAsChildren;

//@input SceneObject spawnUnderParent {"showIf":"spawnAsChildren"}
/** @type {SceneObject} */
var spawnUnderParent = script.spawnUnderParent;

//@ui {"widget":"separator"}

//@input bool autoInstantiate = false
/** @type {boolean} */
var autoInstantiate = script.autoInstantiate;

//@input Asset.ObjectPrefab[] autoInstantiatePrefabs {"label": "Prefabs", "showIf":"autoInstantiate"}
/** @type {ObjectPrefab[]} */
var autoInstantiatePrefabs = script.autoInstantiatePrefabs;

//@input string autoInstantiatePersistence = "Session" {"label": "Persistence", "widget":"combobox", "values":[{"label":"Owner", "value":"Owner"},{"label":"Session", "value":"Session"},{"label":"Persist", "value":"Persist"}], "showIf":"autoInstantiate"}
/** @type {RealtimeStoreCreateOptions.Persistence} */
var autoInstantiatePersistence = RealtimeStoreCreateOptions.Persistence[script.autoInstantiatePersistence];

//@input string autoInstantiateOwnership = "Unowned" {"label": "Ownership", "widget":"combobox", "values":[{"label":"Owned", "value":"Owned"},{"label":"Unowned", "value":"Unowned"}], "showIf":"autoInstantiate"}
/** @type {RealtimeStoreCreateOptions.Ownership} */
var autoInstantiateOwnership = RealtimeStoreCreateOptions.Ownership[script.autoInstantiateOwnership];



/** @type {Object.<string, NetworkRootInfo>} */
var spawnedInstances = {};

/** @type {Object.<string, SceneObject>} */
var spawningInstances = {};

const SPAWNER_ID_KEY = "_spawner_id";
const PREFAB_ID_KEY = "_prefab_name";
const START_POS_KEY = "_init_pos";
const START_ROT_KEY = "_init_rot";
const START_SCALE_KEY = "_init_scale";

var syncEntity = new SyncEntity(script);


/**
 * @param {ObjectPrefab} prefab
 * @param {InstantiationOptions|InstantiationOptionsObj} options
 * @returns {string}
 */
function generatePrefabId(prefab, options) {
    if (options.overrideNetworkId) {
        return options.overrideNetworkId;
    } else {
        return prefab.name + "_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}

/**
 * 
 * @param {string} prefabName 
 * @returns {ObjectPrefab?}
 */
function findPrefabByName(prefabName) {
    for (var i=0; i<prefabs.length; i++) {
        if (prefabs[i].name == prefabName) {
            return prefabs[i];
        }
    }
    for (var i=0; i<autoInstantiatePrefabs.length; i++) {
        if (autoInstantiatePrefabs[i].name == prefabName) {
            return autoInstantiatePrefabs[i];
        }
    }
    return null;
}


/**
 * @typedef {object} InstantiationOptionsObj
 * @property {(networkRoot:NetworkRootInfo)=>void} onSuccess
 * Note use of non-standard whitespace characters in line below, to fix parsing issue in Lens Studio 4.34
 * @property {(RealtimeStoreCreateOptions.Persistence|keyof typeof RealtimeStoreCreateOptions.Persistence)=} persistence
 * @property {boolean=} claimOwnership
 * @property {vec3=} worldPosition
 * @property {quat=} worldRotation
 * @property {vec3=} worldScale
 * @property {vec3=} localPosition
 * @property {quat=} localRotation
 * @property {vec3=} localScale
 * @property {((message:string)=>void)=} onError
 * @property {string=} overrideNetworkId
 * @property {GeneralDataStore=} customDataStore
 */

/**
 * @class
 * @param {InstantiationOptionsObj=} optionDic
 */
function InstantiationOptions(optionDic) {
    /** @type {((networkRoot:NetworkRootInfo)=>void)=} */
    this.onSuccess;
    
    /** @type {(RealtimeStoreCreateOptions.Persistence|keyof typeof RealtimeStoreCreateOptions.Persistence)=} */
    this.persistence;

    /** @type {boolean=} */
    this.claimOwnership;

    /** @type {vec3=} */
    this.worldPosition;

    /** @type {quat=} */
    this.worldRotation;
    
    /** @type {vec3=} */
    this.worldScale;

    /** @type {vec3=} */
    this.localPosition;

    /** @type {quat=} */
    this.localRotation;
    
    /** @type {vec3=} */
    this.localScale;

    /** @type {((message:string)=>void)=} */
    this.onError;

    /** @type {string=} */
    this.overrideNetworkId;

    /** @type {GeneralDataStore} */
    this.customDataStore;

    if (optionDic) {
        for(k in optionDic) {
            if (optionDic.hasOwnProperty(k)) {
                this[k] = optionDic[k];
            }
        }
    }
}

/**
 *  
 * @param {string} networkId
 * @param {ObjectPrefab} prefab 
 * @param {(InstantiationOptions|InstantiationOptionsObj)=} options
 */
function instantiateNewPrefab(networkId, prefab, options) {
    options = options || {};
    debugLog("instantiate new prefab with id " + networkId);
    var prefabName = prefab.name;
    var rootObj = global.scene.createSceneObject("holder:"+networkId);
    
    var parentObj = (spawnAsChildren && (spawnUnderParent || script.getSceneObject()));

    if (parentObj) {
        rootObj.setParent(parentObj);
    }

    var initialData = options.customDataStore || GeneralDataStore.create();

    networkUtils.putNetworkIdToStore(initialData, networkId);
    networkUtils.putNetworkTypeToStore(initialData, "prefab");
    initialData.putString(PREFAB_ID_KEY, prefabName);
    setSpawnerIdOnStore(initialData, syncEntity.networkId);

    if (options.worldPosition) {
        rootObj.getTransform().setWorldPosition(options.worldPosition);
        initialData.putVec3(START_POS_KEY, rootObj.getTransform().getLocalPosition());
    }
    if (options.worldRotation) {
        rootObj.getTransform().setWorldRotation(options.worldRotation);
        initialData.putQuat(START_ROT_KEY, rootObj.getTransform().getLocalRotation());
    }
    if (options.worldScale) {
        rootObj.getTransform().setWorldScale(options.worldScale);
        initialData.putVec3(START_SCALE_KEY, rootObj.getTransform().getLocalScale());
    }
    if (options.localPosition) {
        rootObj.getTransform().setLocalPosition(options.localPosition);
        initialData.putVec3(START_POS_KEY, rootObj.getTransform().getLocalPosition());
    }
    if (options.localRotation) {
        rootObj.getTransform().setLocalRotation(options.localRotation);
        initialData.putQuat(START_ROT_KEY, rootObj.getTransform().getLocalRotation());
    }
    if (options.localScale) {
        rootObj.getTransform().setLocalScale(options.localScale);
        initialData.putVec3(START_SCALE_KEY, rootObj.getTransform().getLocalScale());
    }

    var shouldIOwn = false;

    var persistence = global.networkUtils.getPersistenceFromValue(options.persistence);

    var storeOptions = RealtimeStoreCreateOptions.create();
    storeOptions.initialStore = initialData;
    storeOptions.persistence = persistence;
    storeOptions.ownership = RealtimeStoreCreateOptions.Ownership.Unowned;
    if (options.claimOwnership || spawnerOwnsObject) {
        shouldIOwn = true;
        storeOptions.ownership = RealtimeStoreCreateOptions.Ownership.Owned;
    }

    spawningInstances[networkId] = rootObj;

    global.sessionController.getSession().createRealtimeStore(storeOptions, function(store) {
        debugLog("created prefab and got store callback");
        var ownerInfo = null;
        if (shouldIOwn) {
            ownerInfo = global.sessionController.getLocalUserInfo();
        }
        var networkRoot = new networkUtils.NetworkRootInfo(rootObj, networkId, store, true, ownerInfo, persistence);
        delete spawningInstances[networkId];
        spawnedInstances[networkId] = networkRoot;
        prefab.instantiate(rootObj);
        networkRoot.finishSetup();
        if (options.onSuccess) {
            options.onSuccess(networkRoot);
        }
    }, options.onError || onError);
}

/**
 * 
 * @param {GeneralDataStore} store 
 * @param {ConnectedLensModule.UserInfo} ownerInfo
 * @returns {NetworkRootInfo}
 */
function instantiatePrefabFromStore(store, ownerInfo) {
    var networkId = networkUtils.getNetworkIdFromStore(store);
    var prefabName = store.getString(PREFAB_ID_KEY);
    debugLog("instantiate prefab from store: " + prefabName + " " + networkId);

    var rootObj = global.scene.createSceneObject("holder:"+networkId);
    if (spawnAsChildren) {
        var parentObj = (spawnUnderParent || script.getSceneObject());
        rootObj.setParent(parentObj);
    }

    if (store.has(START_POS_KEY)) {
        rootObj.getTransform().setLocalPosition(store.getVec3(START_POS_KEY));
    }
    if (store.has(START_ROT_KEY)) {
        rootObj.getTransform().setLocalRotation(store.getQuat(START_ROT_KEY));
    }
    if (store.has(START_SCALE_KEY)) {
        rootObj.getTransform().setLocalScale(store.getVec3(START_SCALE_KEY));
    }

    var networkRoot = new networkUtils.NetworkRootInfo(rootObj, networkId, store, false, ownerInfo);
    var prefab = findPrefabByName(prefabName);
    if (!isNull(prefab)) {
        spawnedInstances[networkId] = networkRoot;
        prefab.instantiate(rootObj);
        networkRoot.finishSetup();
        return networkRoot;
    } else {
        throw("Could not find prefab with matching name: " + prefabName + ". Make sure it's added to the Instantiator's prefab list!")
    }
    return null;
}


/**
 * 
 * @param {GeneralDataStore} store 
 * @returns {string}
 */
function getSpawnerIdFromStore(store) {
    return store.getString(SPAWNER_ID_KEY);
}

/**
 * 
 * @param {GeneralDataStore} store 
 * @param {string} id
 */
function setSpawnerIdOnStore(store, id) {
    store.putString(SPAWNER_ID_KEY, id);
}

/**
 * 
 * @param {MultiplayerSession} session 
 * @param {GeneralDataStore} store 
 * @param {ConnectedLensModule.UserInfo} ownerInfo 
 */
function onRealtimeStoreCreated(session, store, ownerInfo) {
    if (networkUtils.getNetworkTypeFromStore(store) == "prefab") {
        if (getSpawnerIdFromStore(store) == syncEntity.networkId) {
            var id = networkUtils.getNetworkIdFromStore(store);
            if (!(id in spawnedInstances) && !(id in spawningInstances)) {
                instantiatePrefabFromStore(store, ownerInfo);
            }
        }
    }
}

/**
 * Instantiates a prefab across the network. The prefab must be included in the "Prefabs" list of the Instantiator's inspector.
 * @param {ObjectPrefab} prefab Prefab to instantiate. Make sure it's included in the "Prefabs" list!
 * @param {(InstantiationOptions|InstantiationOptionsObj)=} options Optional settings for the instantiated object
 * @param {((networkRoot:NetworkRootInfo)=>void)=} onSuccess Callback that executes when instantiation is complete. Overrides the `onSuccess` callback in `options` if specified.
 */
function instantiate(prefab, options, onSuccess) {
    var options = options || {};
    if (onSuccess) {
        options.onSuccess = onSuccess;
    }
    var networkId = generatePrefabId(prefab, options);
    if (options && options.overrideNetworkId && networkId in spawnedInstances) {
        debugLog("using existing prefab already spawned");
        if (options.onSuccess) {
            options.onSuccess(spawnedInstances[networkId]);
        }
    } else {
        instantiateNewPrefab(networkId, prefab, options);
    }
}

/**
 * @deprecated Use instantiate() instead
 * @param {ObjectPrefab} prefab 
 * @param {((rootInfo:NetworkRootInfo)=>void)=} onSuccess 
 * @param {RealtimeStoreCreateOptions.Persistence=} persistence
 * @param {boolean=} claimOwnership
 * @param {vec3=} worldPosition
 * @param {quat=} worldRotation
 * @param {vec3=} worldScale
 */
function doInstantiate(prefab, onSuccess, persistence, claimOwnership, worldPosition, worldRotation, worldScale) {
    var options = {
        onSuccess: onSuccess,
        persistence: persistence,
        claimOwnership: claimOwnership,
        worldPosition: worldPosition,
        worldRotation: worldRotation,
        worldScale: worldScale
    };
    instantiate(prefab, options);
}

/**
 * @returns {boolean}
 */
function isReady() {
    return syncEntity.isSetupFinished;
}

/**
 * 
 * @param {()=>void} onReady 
 */
function notifyOnReady(onReady) {
    syncEntity.notifyOnReady(onReady);
}

function onReady() {
    if (autoInstantiate) {
        var settings = new InstantiationOptions();
        settings.claimOwnership = (autoInstantiateOwnership == RealtimeStoreCreateOptions.Ownership.Owned);
        settings.persistence = autoInstantiatePersistence;
        for (var i=0; i<autoInstantiatePrefabs.length; i++) {
            instantiate(autoInstantiatePrefabs[i], settings);
        }
    }
}

function onError(message) {
    global.logToScreen("error: " + message);
}

function debugLog(message) {
    // global.logToScreen(message);
}

function warningLog(message) {
    global.logToScreen(message);
}

/**
 * @typedef Instantiator
 * @property {(prefab:ObjectPrefab, options:(InstantiationOptions|InstantiationOptionsObj)=, onSuccess:((networkRoot:NetworkRootInfo)=>void)=)=>void} instantiate
 * @property {()=>boolean} isReady
 * @property {(onReady:()=>void)=>void} notifyOnReady
 */

/**
 * @deprecated
 * @typedef InstantiatorInterface
 * @property {(prefab:ObjectPrefab, options:(InstantiationOptions|InstantiationOptionsObj)=, onSuccess:((networkRoot:NetworkRootInfo)=>void)=)=>void} instantiate
 * @property {()=>boolean} isReady
 * @property {(onReady:()=>void)=>void} notifyOnReady
 */

script.api.instantiate = instantiate;
script.instantiate = instantiate;

script.api.doInstantiate = doInstantiate;
script.doInstantiate = doInstantiate;

script.api.isReady = isReady;
script.isReady = isReady;

script.api.notifyOnReady = notifyOnReady;
script.notifyOnReady = notifyOnReady;

global.InstantiationOptions = InstantiationOptions;

global.sessionController.notifyOnReady(onReady);
global.sessionController.onRealtimeStoreCreated.add(onRealtimeStoreCreated);
