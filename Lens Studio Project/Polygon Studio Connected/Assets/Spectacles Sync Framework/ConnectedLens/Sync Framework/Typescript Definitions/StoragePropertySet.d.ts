declare class StoragePropertySet {
  /**
   * Contains a set of {@link StorageProperty StorageProperties}.
   * @class
   * @param {StorageProperty[]} properties Optional array of {@link StorageProperty StorageProperties} to add to the StoragePropertySet
   */
  constructor(properties: StorageProperty<any>[]);

  /**
   * Add a {@link StorageProperty} to the set.
   * If a property already exists with the same `key`, this property's `key` will have a number appended to avoid collision, and a warning will be printed.
   * @template T Value type
   * @param {StorageProperty<T>} property {@link StorageProperty} to add
   * @returns {StorageProperty<T>} StorageProperty passed in
   */
  addProperty<T extends any[]>(
    property: StorageProperty<T>
  ): StorageProperty<T>;

  /**
   * Returns a {@link StorageProperty} from this set with a matching `propertyKey`, or `null` if none is found.
   * @param {string} propertyKey Key of the {@link StorageProperty} to search for
   * @returns {StorageProperty?} {@link StorageProperty} with a matching key, or null if none is found
   */
  getProperty<T extends any[]>(propertyKey: string): StorageProperty<T> | null;
}
