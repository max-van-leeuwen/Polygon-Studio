declare class StoreEventWrapper {
  constructor(networkId: string)

  /** @type {Function[]} */
  cleanups: () => void[]

  idFilter: (store: GeneralDataStore) => boolean[]

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>} */
  onStoreCreated: EventWrapper<
    [MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo]
  >

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, string, ConnectedLensModule.RealtimeStoreUpdateInfo>} */
  onStoreUpdated: EventWrapper<
    [
      MultiplayerSession,
      GeneralDataStore,
      string,
      ConnectedLensModule.RealtimeStoreUpdateInfo
    ]
  >

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>} */
  onStoreOwnershipUpdated: EventWrapper<
    [MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo]
  >

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.RealtimeStoreKeyRemovalInfo>} */
  onStoreKeyRemoved: EventWrapper<
    [
      MultiplayerSession,
      GeneralDataStore,
      ConnectedLensModule.RealtimeStoreKeyRemovalInfo
    ]
  >

  /** @type {EventWrapper<MultiplayerSession, GeneralDataStore>} */
  onStoreDeleted: EventWrapper<[MultiplayerSession, GeneralDataStore]>

  cleanup(): void
}
