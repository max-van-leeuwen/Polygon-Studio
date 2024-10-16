/**
 * Provides information about instantiated prefabs. Exists on a root parent object that instantiated prefabs are spawned underneath.
 * @class
 * @param {SceneObject} sceneObject
 * @param {string} networkId
 * @param {GeneralDataStore} dataStore
 * @param {boolean} locallyCreated
 * @param {ConnectedLensModule.UserInfo} ownerInfo
 * @param {RealtimeStoreCreateOptions.Persistence | keyof typeof RealtimeStoreCreateOptions.Persistence | null | undefined} persistence
 */

declare class NetworkRootInfo {
  constructor(
    sceneObject: SceneObject,
    networkId: string,
    dataStore: GeneralDataStore,
    locallyCreated: boolean,
    ownerInfo: ConnectedLensModule.UserInfo,
    persistence: RealtimeStoreCreateOptions.Persistence
  )

  /**
   * SceneObject hosting this NetworkRootInfo.
   * @private
   * @type {SceneObject}
   */
  sceneObject: SceneObject

  /**
   * Network id of this instantiated object
   * @type {string}
   */
  networkId: string

  /**
   * Store containing information about the prefab instantiation
   * @type {GeneralDataStore}
   */
  dataStore: GeneralDataStore

  /**
   * `true` if this instance was instantiated by the current local user in the current session
   * @type {boolean}
   */
  locallyCreated: boolean

  /**
   * User that owns this instance, or null if unowned
   * @type {ConnectedLensModule.UserInfo?}
   */
  ownerInfo: ConnectedLensModule.UserInfo | null

  /**
   * Persistence of the instantiated object
   * @type {RealtimeStoreCreateOptions.Persistence}
   */
  persistence: RealtimeStoreCreateOptions.Persistence

  /**
   * The instantiated SceneObject. Exists as a child of this SceneObject.
   * @type {SceneObject}
   */
  instantiatedObject: SceneObject

  /**
   * Event triggered when the instantiated object is destroyed (both locally or remotely)
   * @type {EventWrapper}
   */
  onDestroyed: EventWrapper<[void]>

  /**
   * Event triggered when the instantiated object is destroyed (both locally or remotely)
   * @type {EventWrapper}
   * @deprecated
   */
  onDestroy: EventWrapper<[void]>

  /**
   * @type {EventWrapper}
   */
  onLocalDestroyed: EventWrapper<[void]>

  /**
   * @type {EventWrapper}
   */
  onRemoteDestroyed: EventWrapper<[void]>

  /**
   * Helper callbacks related to the data store
   * @type {StoreEventWrapper}
   */
  callbacks: StoreEventWrapper

  /**
   * Returns the owner's userId if an owner exists, otherwise null
   * @returns {string?}
   */
  getOwnerUserId(): string | null

  /**
   * Returns the owner's connectionId if an owner exists, otherwise null
   * @returns {string?}
   */
  getOwnerId(): string | null
  /**
   * Returns `true` if the instantiated object is owned by a user with the passed in `connectionId`
   * @param {string} connectionId connectionId of a user
   * @returns {boolean}
   */
  isOwnedBy(connectionId: string): boolean

  /**
   * Returns `true` if the instantiated object is owned by the user connection
   * @param {ConnectedLensModule.UserInfo} user userInfo of a user
   * @returns {boolean}
   */
  isOwnedByUserInfo(userInfo: ConnectedLensModule.UserInfo): boolean

  /**
   * Returns `true` if the local user is allowed to modify this store
   * @returns {boolean}
   */
  canIModifyStore(): boolean

  /**
   * Returns `true` if the local user is allowed to modify this store
   * @returns {boolean}
   */
  doIOwnStore(): boolean
}
