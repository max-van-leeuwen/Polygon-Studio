declare namespace global {
  var sessionController: SessionController
}

declare type SessionController = ScriptComponent & {
  /**
   * Returns the current {@link MultiplayerSession}. Returns null if the session doesn't exist yet.
   * @returns {MultiplayerSession?}
   */
  getSession(): MultiplayerSession

  /**
   * Returns the LocationCloudStorageModule
   * @returns {LocationCloudStorageModule}
   */
  getLocationCloudStorageModule(): LocationCloudStorageModule

  /**
   * Returns the current {@link MappingSession}. Returns null if the session doesn't exist yet.
   * @returns {MappingSession?}
   */
  getMappingSession(): MappingSession

  /**
   * Returns the current state.
   * @returns {State}
   */
  getState(): State

  /**
   * Returns the session creation type
   * @returns {SessionCreationType}
   */
  getSessionCreationType(): ConnectedLensSessionOptions.SessionCreationType

  /**
   * Returns the local user id, or null
   * @returns {string?}
   */
  getLocalUserId(): string | null

  /**
   * Returns the local connection id, or null
   * @returns {string?}
   */
  getLocalConnectionId(): string | null

  /**
   * Returns the local display name, or null
   * @returns {string?}
   */
  getLocalUserName(): string | null

  /**
   * Returns the local user info, or null
   * @returns {ConnectedLensModule.UserInfo}
   */
  getLocalUserInfo(): ConnectedLensModule.UserInfo | null

  /**
   * Returns true if the passed in `userInfo` matches the local userId. Note that this is separate from connectionId.
   * @param {ConnectedLensModule.UserInfo} userInfo
   * @returns {boolean}
   */
  isSameUserAsLocal(userInfo: ConnectedLensModule.UserInfo): boolean

  /**
   * Returns true if the passed in `userInfo` matches the local user and connection
   * @param {ConnectedLensModule.UserInfo} userInfo
   * @returns {boolean}
   */
  isLocalUserConnection(userInfo: ConnectedLensModule.UserInfo): boolean

  /**
   * Returns the list of current user connections
   * @returns {ConnectedLensModule.UserInfo[]}
   */
  getUsers(): ConnectedLensModule.UserInfo[]

  /**
   * Returns the host user id, or null
   * @returns {string?}
   */
  getHostUserId(): string | null

  /**
   * Returns the host user name, or null
   * @returns {string?}
   */
  getHostUserName(): string | null

  /**
   * Returns the user info with matching id, or null
   * @deprecated Use {@link getUserByConnectionId} or {@link getUsersByUserId()}
   * @param {string} userId
   * @returns {ConnectedLensModule.UserInfo?}
   */
  getUserById(userId: string): ConnectedLensModule.UserInfo | null

  /**
   * Returns the user info with matching connection id, or null
   * @param {string} connectionId
   * @returns {ConnectedLensModule.UserInfo?}
   */
  getUserByConnectionId(
    connectionId: string
  ): ConnectedLensModule.UserInfo | null

  /**
   * Returns the list of users with matching user id
   * @param {string} userId
   * @returns {ConnectedLensModule.UserInfo[]}
   */
  getUsersByUserId(userId: string): ConnectedLensModule.UserInfo[]

  /**
   * Returns true if the session has been shared
   * @returns {boolean}
   */
  getIsSessionShared(): boolean

  /**
   * Returns StoreInfo for the store with matching id
   * @param {string} networkId
   * @returns {StoreInfo?}
   */
  getStoreInfoById(networkId: string): StoreInfo | null

  /**
   * Create a RealtimeStore
   * @param {RealtimeStoreCreateOptions} storeOptions
   * @param {((store:GeneralDataStore)=>void)=} onSuccess
   * @param {((message:string)=>void)=} onError
   */
  createStore(
    storeOptions: RealtimeStoreCreateOptions,
    onSuccess?: (store: GeneralDataStore) => void,
    onError?: (message: string) => void
  ): void

  /**
   * Returns a unix timestamp in seconds of the current time according to the server.
   * Useful for synchronizing time-based game events across devices.
   * -1 will be returned if session is not connected to the server.
   * @returns {number?}
   */
  getServerTimeInSeconds(): number

  /**
   * Share an Invite to the session
   */
  shareInvite(): void

  /**
   *
   * future: throttle up importance of mapping */
  startBuilding(): void

  /**
   * Returns true if the session has finished setting up and the len experience is ready to start
   * @returns {boolean}
   */
  getIsReady(): boolean

  /**
   * Executes `onReady` immediately if the Session is ready, or will execute it later when the Session becomes ready.
   * @param {()=>void} onReady
   */
  notifyOnReady(onReady: () => void): void

  /**
   * An event that's fired when the sync framework is initialized and ready to be used.
   * @type {EventWrapper<void>}
   */
  onReady: EventWrapper<[void]>

  /**
   * An event that's fired when the connected lens session is created.
   * @type {EventWrapper<MultiplayerSession, ConnectedLensSessionOptions.SessionCreationType>}
   */
  onSessionCreated: EventWrapper<
    [MultiplayerSession, ConnectedLensSessionOptions.SessionCreationType]
  >

  /**
   * An event that's fired when the connected lens session is shared.
   * @type {EventWrapper<MultiplayerSession>}
   */
  onSessionShared: EventWrapper<[MultiplayerSession]>

  /**
   * An event that's fired when a connection to the realtime backend is established.
   * All realtime requests can be called after this callback. When you invite others to join, a new session
   * will be created, hence you should update your session handler with the argument passed in this callback.
   * @type {EventWrapper<MultiplayerSession>}
   */
  onConnected: EventWrapper<[MultiplayerSession]>

  /**
   * An event that's fired when the connection to the realtime backend is lost, either via successful
   * disconnect or passive disconnect due to error.
   * @type {EventWrapper<MultiplayerSession, string>}
   */
  onDisconnected: EventWrapper<[MultiplayerSession, string]>

  /**
   * An event that's fired when a string-based message sent by sendMessage() is received from another user
   * via the realtime backend.
   * @type {EventWrapper<MultiplayerSession, string, string, ConnectedLensModule.UserInfo>}
   */
  onMessageReceived: EventWrapper<
    [MultiplayerSession, string, string, ConnectedLensModule.UserInfo]
  >

  /**
   * An event that's fired when another user joins the session. When joining a session, the current user
   * will get a callback for each of the existing active users in the current session. This way you can build
   * a list of existing players in game.
   * @type {EventWrapper<MultiplayerSession, ConnectedLensModule.UserInfo>}
   */
  onUserJoinedSession: EventWrapper<
    [MultiplayerSession, ConnectedLensModule.UserInfo]
  >

  /**
   * An event that's fired when another user leaves the session, either deliberately or via passive disconnect
   * due to error.
   * @type {EventWrapper<MultiplayerSession, ConnectedLensModule.UserInfo>}
   */
  onUserLeftSession: EventWrapper<
    [MultiplayerSession, ConnectedLensModule.UserInfo]
  >

  /**
   * An event that's fired the host updated
   * @type {EventWrapper<MultiplayerSession, ConnectedLensModule.UserInfo>}
   */
  onHostUpdated: EventWrapper<
    [MultiplayerSession, ConnectedLensModule.HostUpdateInfo]
  >

  /**
   * An event that's fired when an error occurs in the session life cycle.
   * @type {EventWrapper<MultiplayerSession, string, string>}
   */
  onError: EventWrapper<[MultiplayerSession, string, string]>

  /**
   * An event that's fired when a connection to the realtime backend fails.
   */
  onConnectionFailed: EventWrapper<[]>

  /**
   * An event that's fired when a realtime store is created.
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo, ConnectedLensModule.RealtimeStoreCreationInfo>}
   */
  onRealtimeStoreCreated: EventWrapper<
    [
      MultiplayerSession,
      GeneralDataStore,
      ConnectedLensModule.UserInfo,
      ConnectedLensModule.RealtimeStoreCreationInfo
    ]
  >

  /**
   * An event that's fired when a realtime store is updated.
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore, string, ConnectedLensModule.RealtimeStoreUpdateInfo>}
   */
  onRealtimeStoreUpdated: EventWrapper<
    [
      MultiplayerSession,
      GeneralDataStore,
      string,
      ConnectedLensModule.RealtimeStoreUpdateInfo
    ]
  >

  /**
   * An event that's fired when a realtime store is deleted.
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore>}
   */
  onRealtimeStoreDeleted: EventWrapper<[MultiplayerSession, GeneralDataStore]>

  /**
   * An event that's fired when ownership of a realtime store is updated.
   * @type {EventWrapper<MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo>}
   */
  onRealtimeStoreOwnershipUpdated: EventWrapper<
    [MultiplayerSession, GeneralDataStore, ConnectedLensModule.UserInfo]
  >

  /**
   * Returns the located at component
   * @returns {Component.LocatedAtComponent}
   */
  getLocatedAtComponent(): LocatedAtComponent

  /**
   * Returns the colocated tracking component
   * @returns {Component.ColocatedTrackingComponent}
   */
  getColocatedTrackingComponent(): ColocatedTrackingComponent

  /**
   * Returns the device tracking component
   * @returns {Component.DeviceTracking}
   */
  getDeviceTrackingComponent(): DeviceTracking

  /**
   * Returns true if we're ready to start the colocated tracking flow.
   * @returns {boolean}
   */
  getOnStartColocated(): boolean

  /**
   * Executes `onColocatedStart` immediately if the Session should start the colocated tracking flow,
   * or will execute it later when the flow should start. Returns a completer function, which should be called
   * when colocation is complete.
   * @param {()=>void} onStartColocated
   * @returns {()=>void} onColocatedComplete
   */
  notifyOnStartColocated(onStartColocated: () => void): () => void

  /**
   * Executes `onLocatedAtFound` immediately if the locatedAtComponent is found, or will execute it later when the component is found.
   * @param {()=>void} onLocatedAtFound
   */
  notifyOnLocatedAtFound(onLocatedAtFound: () => void): () => void

  /**
   * Executes `onLocationId` immediately if the locationId is found, or will execute it later when the locationId is found.
   * @param {()=>void} onLocatedAtFound
   */
  notifyOnLocationId(onLocationId: () => void): () => void

  /**
   * Returns true if the map exists.
   * @returns {boolean}
   */
  getMapExists(): boolean

  /**
   * Executes `onMapExists` immediately if the map exists.
   * @param {()=>void} onMapExists
   */
  notifyOnMapExists(onMapExists: () => void): void

  /**
   * Returns true if the local user is the host, or null if the session doesn't exist yet.
   * @returns {boolean | null}
   */
  isHost(): boolean | null

  /**
   * An event that's fired when we should start the colocated mapping / joining flow.
   * @type {EventWrapper}
   */
  onStartColocated: EventWrapper<[void]>

  /**
   * An event that's fired when the map exists.
   * @type {EventWrapper}
   */
  onMapExists: EventWrapper<[void]>

  /**
   * Get the build status from the shared session store
   * @returns {ColocatedBuildStatus}
   */
  getColocatedBuildStatus(): ColocatedBuildStatus

  /**
   * Write the build status to the shared session store
   * @param {ColocatedBuildStatus} status
   */
  setColocatedBuildStatus(value: ColocatedBuildStatus | string): void

  /**
   * Get the id of the colocated map
   * @returns {string}
   */
  getColocatedMapId(): string

  /**
   * Write the id of the colocated map
   * @param {string} value map id
   */
  setColocatedMapId(value: string): void

  /**
   * Returns true if skipUiInStudio checkbox is selected.
   * @returns {boolean}
   */
  getSkipUiInStudio(): boolean

  /**
   * Get the 3D mesh of the mapped environment
   * @returns {RenderMeshVisual}
   */
  getLandmarksVisual3d(): RenderMeshVisual

  /**
   * Gets whether debug logging is enabled
   * @returns {boolean}
   */
  getDebugLogging(): boolean

  /**
   * Prepares SessionController to use a Mocked version of Connected Lenses.
   * Make sure to call this before calling init().
   * @param {any=} options Optional `MockMultiplayerSessionConfig` to use for the mock session
   */
  prepareOfflineMode(options?: any): void
  // NOTE: importing MockMultiplayerSessionConfig in this file seemed to break compilation elsewhere, so leaving as `any` for now!
  // prepareOfflineMode(options?:MockMultiplayerSessionConfig): void

  init(): void
}
