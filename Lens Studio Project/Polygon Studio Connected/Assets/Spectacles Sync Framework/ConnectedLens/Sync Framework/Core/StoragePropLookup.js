// StoragePropLookup.js
// Version: 1.0.0
// Event: On Awake
// Description: Class used to store StorageProperties in a dictionary-like structure.


/**
 * @class
 * @template T
 * @param {SyncEntity} syncEntity
 * @param {string} prefix
 * @param {StorageType<T>} storageType
 */
 function StoragePropLookup(syncEntity, prefix, storageType) {
    /** @private */
    this._syncEntity = syncEntity;
    
    this.prefix = prefix || '';
    
    /** @private */
    this._storageType = storageType;
    
    /**
     * @type {Object.<string, StorageProperty<T>>} 
    */
    this.propertyDic = {};

    /** @type {KeyedEventWrapper<T,T>} */
    this.onChange = new KeyedEventWrapper();
    /** @type {EventWrapper<string,T,T>} */
    this.onAnyChange = this.onChange._any;

    var me = this;
    this._syncEntity.storeCallbacks.onStoreUpdated.add(function(session, store, key) {
        me._checkAddStoreValue(key);
    });

    this._syncEntity.notifyOnReady(function(){
        me._populateFromCurrentStore(me._syncEntity.currentStore);
    });
}

/**
 * 
 * @param {string} key 
 * @param {T=} startValue 
 * @returns {StorageProperty<T>}
 */
StoragePropLookup.prototype.addProperty = function(key, startValue) {
    var newKey = this.prefix + key;
    var existingProp = this._syncEntity.propertySet.getProperty(newKey);
    if (existingProp) {
        this.propertyDic[key] = existingProp;
        return existingProp;
    } else {
        var prop = StorageProperty.manual(newKey, this._storageType, startValue);
        this._syncEntity.addStorageProperty(prop);
        this.propertyDic[key] = prop;
        var me = this;
        prop.onAnyChange.add(function(newValue, prevValue) {
            me.onChange.trigger(key, newValue, prevValue);
        });
        this.onChange.trigger(key, prop.currentValue, undefined);
        return prop;
    }
};



/**
 * @private
 */
StoragePropLookup.prototype._populateFromCurrentStore = function() {
    // Get all existing keys in store
    var allKeys = this._syncEntity.currentStore.getAllKeys();

    // Set up props based on existing store values
    for (var i=0; i<allKeys.length; i++) {
        this._checkAddStoreValue(allKeys[i]);
    }
};

/**
 * @private
 * @param {string} key
 * @returns {StorageProperty<T>?}
 */
 StoragePropLookup.prototype._checkAddStoreValue = function(key) 
 {
    if (key.startsWith(this.prefix)) {
        var id = this._getStorageKeyForKey(key);
        return this.addProperty(id);
    }
};

/**
 * 
 * @param {string} key 
 * @returns {StorageProperty<T>?}
 */
StoragePropLookup.prototype.getProperty = function(key) {
    return this.propertyDic[key];
};

/**
 * @private
 * @param {string} key 
 * @returns {string} Key used internally for storing the property
 */
StoragePropLookup.prototype._getStorageKeyForKey = function(key) {
    return removeFromStart(key, this.prefix);
};

/**
 * 
 * @param {string} text 
 * @param {string} prefix 
 * @returns {string}
 */
 function removeFromStart(text, prefix) {
    if (text.startsWith(prefix)){
        return text.slice(prefix.length);
    }
    return text;
}

global.StoragePropLookup = StoragePropLookup;