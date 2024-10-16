declare class SyncRealtimeStore {
  syncEntity: SyncEntity

  onStoreCreated: EventWrapper<
    [MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo]
  >

  onStoreUpdated: EventWrapper<
    [
      MultiplayerSession,
      GeneralDataStore,
      string,
      ConnectedLensModule.RealtimeStoreUpdateInfo
    ]
  >

  onStoreOwnershipUpdated: EventWrapper<
    [MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo]
  >

  onStoreDeleted: EventWrapper<[MultiplayerSession, GeneralDataStore]>

  onSetupFinished: EventWrapper<[void]>
  onOwnerUpdated: EventWrapper<[ConnectedLensModule.UserInfo]>

  /**
   *
   * @returns {boolean}
   */
  isStoreReady(): boolean

  /**
   *
   * @returns {GeneralDataStore?}
   */
  getStore(): GeneralDataStore | null

  /**
   * @returns {ConnectedLensModule.UserInfo?}
   */
  getStoreOwnerInfo(): ConnectedLensModule.UserInfo | null

  /**
   * @returns {boolean}
   */
  canIModifyStore(): boolean

  /**
   *
   * @returns {boolean}
   */
  doIOwnStore(): boolean

  /**
   * @returns {boolean}
   */
  isStoreOwned(): boolean

  /**
   * @template T
   * @param {StorageProperty<T>} storageProperty
   * @returns {StorageProperty<T>}
   */
  addStorageProperty<T extends any[]>(
    storageProperty: StorageProperty<T>
  ): StorageProperty<T>
}
