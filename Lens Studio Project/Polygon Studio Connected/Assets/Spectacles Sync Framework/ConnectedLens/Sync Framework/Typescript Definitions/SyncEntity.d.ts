declare class SyncEntity {
  /**
   * Class acting as a bridge between a ScriptComponent and RealtimeStore.
   * @class
   * @param {ScriptComponent} scriptComponent ScriptComponent hosting the SyncEntity
   * @param {StoragePropertySet=} propertySet Optional set of StorageProperties the SyncEntity will be initialized with
   * @param {boolean=} claimOwnership
   * @param {(RealtimeStoreCreateOptions.Persistence|keyof typeof RealtimeStoreCreateOptions.Persistence)=} persistence
   * @param {NetworkIdOptions=} networkIdOptions
   */
  constructor(
    scriptComponent: ScriptComponent,
    propertySet?: StoragePropertySet,
    claimOwnership?: boolean,
    persistence?: RealtimeStoreCreateOptions.Persistence,
    networkIdOptions?: typeof global.networkIdTools.NetworkIdOptions
  );

  /**
   * Returns the global `SessionController`.
   */
  getSessionController(): SessionController;

  /**
   * Returns the {@link MultiplayerSession} used by the SessionController, if a session exists. Otherwise, returns null.
   * @returns {MultiplayerSession?}
   */
  getSession(): MultiplayerSession | null;

  /**
   * Returns `true` if the local connection is allowed to modify the SyncEntity's data store.
   * This means that setup has finished, and either the SyncEntity is unowned or the local user is the owner.
   * @returns {boolean}
   */
  canIModifyStore(): boolean;

  /**
   * Returns `true` if the local connection owns the SyncEntity's data store.
   * This means that setup has finished, and the local user owns the store.
   * @returns {boolean}
   */
  doIOwnStore(): boolean;

  /**
   * Returns `true` if setup is finished, and any user owns the SyncEntity's data store.
   * @returns {boolean}
   */
  isStoreOwned(): boolean;

  /**
   * Returns the connectionId string of the SyncEntity's current owner, or null if none exists.
   * @returns {string?}
   */
  getOwnerId(): string | null;

  /**
   * Returns the userId string of the SyncEntity's current owner, or null if none exists.
   * @returns {string?}
   */
  getOwnerUserId: string | null;

  /**
   * Returns the connectionId string of the SyncEntity's current owner, or null if none exists.
   * @returns {string?}
   */
  getOwnerConnectionId(): string | null;

  /**
   * Adds a {@link StorageProperty} to the SyncEntity's {@link StoragePropertySet}.
   * @template T
   * @param {StorageProperty<T>} storageProperty StorageProperty to add
   * @returns {StorageProperty<T>} StorageProperty passed in
   */
  addStorageProperty<T>(
    storageProperty: StorageProperty<T>
  ): StorageProperty<T>;

  /**
   * Put in an ownership request of this SyncEntity for the local user.
   * The request will be stored if not immediately possible, and try to be honored whenever it becomes possible.
   * If the local user already owns the SyncEntity, `onSuccess` will be called immediately.
   * @param {((store:GeneralDataStore)=>void)=} onSuccess Called as soon as ownership was successfully gained
   * @param {((error:string)=>void)=} onError Called if an error occurs
   */
  tryClaimOwnership(
    onSuccess?: (store: GeneralDataStore) => void,
    onError?: (error: string) => void
  ): void;

  /**
   * Try to revoke ownership if the local user owns this SyncEntity, otherwise `onSuccess` is called immediately.
   * @param {((store:GeneralDataStore)=>void)=} onSuccess Called if the ownership was revoked successfully
   * @param {((error:string)=>void)=} onError Called if an error occurs
   */
  tryRevokeOwnership(
    onSuccess?: (store: GeneralDataStore) => void,
    onError?: (error: string) => void
  ): void;

  /**
   * Destroys the SyncEntity. If attached to a ScriptComponent, the SceneObject will also be destroyed.
   */
  destroy(): void;

  /**
   * Creates and returns an {@link EntityEventWrapper}, which is a helper for dealing with network events.
   * @template T
   * @param {string} eventName Name of the network event to wrap
   * @returns {EntityEventWrapper<T>} New {@link EntityEventWrapper} wrapping the event
   */
  getEntityEventWrapper<T extends any>(eventName: string): EntityEventWrapper<T>;

  /**
   * Returns a SyncEntity stored on the `component` if one exists, otherwise null.
   * @param {Component} component Component to check
   * @returns {SyncEntity?} SyncEntity found on `component`, or null
   */
  getSyncEntityOnComponent(component: Component): SyncEntity | null;

  /**
   * Returns the first SyncEntity found on a component attached to `sceneObject`, or null if none is found.
   * @param {SceneObject} sceneObject SceneObject to check
   * @returns {SyncEntity?} SyncEntity found on `sceneObject`, or null
   */
  getSyncEntityOnSceneObject(sceneObject: SceneObject): SyncEntity | null;

  /**
   * Returns a SyncEntity with matching network id, or null if none exists.
   * @param {string} networkId
   * @returns {SyncEntity?}
   */
  findById(networkId: string): SyncEntity | null;

  /**
   * Send an event to the sync entity on all connected devices
   * @param event {string} The name of the event
   * @param data {any} The data accompanying the event
   */
  sendEvent(event: string, data: any): void;

  /**
   * Calls the `onReady` callback as soon as the SyncEntity's setup is completed.
   * If setup is already completed, the callback will be executed immediately.
   * @param {()=>void} onReady Called as soon as the SyncEntity setup has completed
   */
  notifyOnReady(onReady: () => void): void;

  /**
   * The {@link ScriptComponent} this SyncEntity is attached to.
   * @type {ScriptComponent}
   */
  localScript: ScriptComponent;

  /**
   * Unique NetworkId string used to identify this SyncEntity.
   * @type {string}
   */
  networkId: string;

  /**
   * UserInfo of the SyncEntity's owner, if one exists. Otherwise null.
   * @type {ConnectedLensModule.UserInfo}
   */
  ownerInfo: ConnectedLensModule.UserInfo;

  /**
   * GeneralDataStore created for this SyncEntity and used to store its state. Will be null if the SyncEntity's setup hasn't finished.
   * @type {GeneralDataStore}
   */
  currentStore: GeneralDataStore;

  /**
   * Returns the persistence setting for the SyncEntity.
   * @type {RealtimeStoreCreateOptions.Persistence}
   */
  persistence: RealtimeStoreCreateOptions.Persistence;

  /**
   * Provides information about the instantiated Prefab, if this SyncEntity was instantiated. Otherwise, is null.
   * @type {NetworkRootInfo}
   */
  networkRoot: NetworkRootInfo;

  /**
   * Provides direct access to helpful callbacks related to the SyncEntity's `currentStore`.
   * @type {StoreEventWrapper}
   */
  storeCallbacks: StoreEventWrapper;

  /**
   * Provides direct access to the {@link NetworkMessageWrapper} used by SyncEntity events.
   * @type {NetworkMessageWrapper}
   */
  messaging: NetworkMessageWrapper;

  /**
   * The {@link StoragePropertySet} used by this SyncEntity. Each {@link StorageProperty} in the set will automatically be kept updated.
   * @type {StoragePropertySet}
   */
  propertySet: StoragePropertySet;

  /**
   * If `true`, this SyncEntity has been marked as destroyed and should not be interacted with.
   * @type {boolean}
   */
  destroyed: boolean;

  /**
   * Event triggered when the SyncEntity's owner changes.
   * @type {EventWrapper<ConnectedLensModule.UserInfo>}
   */
  onOwnerUpdated: EventWrapper<[ConnectedLensModule.UserInfo]>;

  /**
   * If `true`, the SyncEntity's setup has finished and it can be fully used.
   * @type {boolean}
   */
  isSetupFinished: boolean;

  /**
   * Event triggered with the SyncEntity's setup is finished.
   * It's recommended to use `SyncEntity.notifyOnReady()` instead, since it will call back immediately if setup has already finished.
   * @type {EventWrapper<void>}
   */
  onSetupFinished: EventWrapper<[void]>;

  /**
   * If set to `true`, while the local user is not allowed to modify the SyncEntity, at the end of each frame each {@link StorageProperty}
   * with a `setterFunc` will automatically apply its `currentProperty`.
   * @type {boolean}
   */
  forceStateIfCantModify: boolean;

  /**
   * Event triggered whenever this SyncEntity receives a network event, including ones sent by the local user.
   * @type {KeyedEventWrapper<NetworkMessage<any>}
   */
  onEventReceived: KeyedEventWrapper<[NetworkMessage<any>]>;

  /**
   * Event triggered whenever this SyncEntity receives a network event, but only from remote users.
   * @type {KeyedEventWrapper<NetworkMessage>}
   */
  onRemoteEventReceived: KeyedEventWrapper<[NetworkMessage<any>]>;

  /**
   * Event triggered when the SyncEntity is destroyed (both locally or remotely)
   * @type {EventWrapper<void>}
   */
  onDestroyed: EventWrapper<[void]>;

  /**
   * Event triggered when the SyncEntity is destroyed locally (by the local user)
   * @type {EventWrapper<void>}
   */
  onLocalDestroyed: EventWrapper<[void]>;

  /**
   * Event triggered when the SyncEntity is destroyed remotely (by another user)
   * @type {EventWrapper<void>}
   */
  onRemoteDestroyed: EventWrapper<[void]>;
}
