declare type StoragePropLookup = {
  /**
   * String prefix added to the name of all properties.
   */
  prefix: string

  /**
   * Dictionary of all properties stored in the storage.
   */
  propertyDic: {[key: string]: StorageProperty<any>}

  /**
   * Event triggered when any storage property is changed by any user (either local or remote).
   * Uses a keyed event wrapper for determining the propety. The first parameter is the new value, and the second parameter is the old value.
   */
  onChange: KeyedEventWrapper<[any, any]>

  /**
   * Event triggered when any storage property is changed by any user (either local or remote).
   * The first parameter is the key of the property, the second parameter is the new value, and the third parameter is the old value.
   */
  onAnyChange: EventWrapper<[string, any, any]>

  /**
   *
   * @param {string} key
   * @param {T=} startValue
   * @returns {StorageProperty<T>}
   */
  addProperty<T extends any[]>(key: string, startValue?: T): StorageProperty<T>

  /**
   *
   * @param {string} key
   * @returns {StorageProperty<T>?}
   */
  getProperty<T>(): StorageProperty<T>
}
