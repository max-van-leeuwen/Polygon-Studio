declare namespace global {
  var networkUtils: NetworkUtils;
}

declare type NetworkUtils = ScriptComponent & {
  NetworkRootInfo: NetworkRootInfo;
  StoreEventWrapper: StoreEventWrapper;
  NetworkMessageWrapper: NetworkMessageWrapper;

  /**
   * Returns `true` if the passed in `sceneObject` has a `NetworkRootInfo` attached to it
   * @param {SceneObject} sceneObject
   * @returns {boolean}
   */
  isRootObject(sceneObject: SceneObject): boolean;

  /**
   * Recursively searches upwards in the hierarchy to find a `NetworkRootInfo` object.
   * @param {SceneObject} sceneObject
   * @returns {NetworkRootInfo?}
   */
  findNetworkRoot(sceneObject: SceneObject): NetworkRootInfo | null;

  /**
   * Gets the network id from the data store
   * @param {GeneralDataStore} store
   * @returns {string}
   */
  getNetworkIdFromStore(store: GeneralDataStore): string;

  /**
   * Writes the id to the data store
   * @param {GeneralDataStore} store
   * @param {string} id
   */
  putNetworkIdToStore(store: GeneralDataStore, id: string): void;

  /**
   * Gets the network type from the data store
   * @param {GeneralDataStore} store
   * @returns {string}
   */
  getNetworkTypeFromStore(store: GeneralDataStore): string;

  /**
   * Writes the network type to the data store
   * @param {GeneralDataStore} store
   * @param {string} type
   */
  putNetworkTypeToStore(store: GeneralDataStore, type: string): void;

  /**
   * Helper function to convert from string, or null, to {@link RealtimeStoreCreateOptions.Persistence}
   * @param {RealtimeStoreCreateOptions.Persistence | keyof typeof RealtimeStoreCreateOptions.Persistence | null | undefined} persistence
   * @returns {RealtimeStoreCreateOptions.Persistence}
   */
  getPersistenceFromValue(
    persistence:
      | string
      | RealtimeStoreCreateOptions.Persistence
      | null
      | undefined
  ): RealtimeStoreCreateOptions.Persistence;

  /**
   *
   * @param {string} text
   * @returns {any}
   */
  lsJSONParse(text: string): any;

  /**
   *
   * @param {any} obj
   * @returns {string}
   */
  lsJSONStringify(obj: any): string;
};
