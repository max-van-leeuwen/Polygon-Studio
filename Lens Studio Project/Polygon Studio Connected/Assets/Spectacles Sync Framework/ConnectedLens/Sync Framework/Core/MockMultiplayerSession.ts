import {MockMultiplayerSessionConfig, MockUserConfig, LatencySetting} from "./MockMultiplayerSessionConfig";

interface MockUserInfo extends ConnectedLensModule.UserInfo {}
class MockUserInfo {
    connectionId: string = "";
    displayName: string = "";
    joinServerTimeMilliseconds: number = 0;
    userId: string = "";
}

const EMPTY_MOCK_USER: MockUserInfo = new MockUserInfo();

export interface MockConnectedLensModule extends ConnectedLensModule {}
export class MockConnectedLensModule {
    mockSession: MockMultiplayerSession = null;
    mockSessionOptions: MockMultiplayerSessionConfig;

    createSession(sessionOptions: ConnectedLensSessionOptions): void {
        this.mockSession = new MockMultiplayerSession(sessionOptions, this.mockSessionOptions);
        this.mockSession.startConnectionUsingLatency();
    }

    // Note: shareSession() is not implemented.
    shareSession(sessionShareType: ConnectedLensModule.SessionShareType, onSessionShared: (session: MultiplayerSession, snapcode: Texture) => void): void {
        throw new Error("Method not implemented.");
    }
}

interface MockRealtimeStoreCreationInfo extends ConnectedLensModule.RealtimeStoreCreationInfo {}
class MockRealtimeStoreCreationInfo {
    allowOwnershipTakeOver: boolean;
    lastUpdatedServerTimestamp: number;
    ownerInfo: ConnectedLensModule.UserInfo;
    persistence: RealtimeStoreCreateOptions.Persistence;
    sentServerTimeMilliseconds: number;
    storeId: string;
}

interface MockRealtimeStoreOwnershipUpdateInfo extends ConnectedLensModule.RealtimeStoreOwnershipUpdateInfo {}
class MockRealtimeStoreOwnershipUpdateInfo{
    sentServerTimeMilliseconds: number;
}

interface MockRealtimeStoreUpdateInfo extends ConnectedLensModule.RealtimeStoreUpdateInfo {}
class MockRealtimeStoreUpdateInfo {
    sentServerTimeMilliseconds: number;
    updaterInfo: ConnectedLensModule.UserInfo;
}

interface MockRealtimeStoreKeyRemovalInfo extends ConnectedLensModule.RealtimeStoreKeyRemovalInfo {}
class MockRealtimeStoreKeyRemovalInfo {
    key: string;
    removerInfo: ConnectedLensModule.UserInfo;
    sentServerTimeMilliseconds: number;
    store: GeneralDataStore;
}

interface MockRealtimeStoreDeleteInfo extends ConnectedLensModule.RealtimeStoreDeleteInfo {}
class MockRealtimeStoreDeleteInfo {
    deleterInfo: ConnectedLensModule.UserInfo;
    sentServerTimeMilliseconds: number;
}

class MockRealtimeStoreEntry {
    private _options: RealtimeStoreCreateOptions = null;
    private _creationInfo: MockRealtimeStoreCreationInfo = null;

    store: GeneralDataStore = null;
    owner: ConnectedLensModule.UserInfo = null;

    lastUpdatedTimestamp: number | null = null;

    constructor(options: RealtimeStoreCreateOptions, timestamp: number) {
        this._options = options;
        this.owner = EMPTY_MOCK_USER;

        if (options.initialStore) {
            // TODO: would be better to shallow copy the store, but it's not easy :(
            this.store = options.initialStore;
        } else {
            this.store = GeneralDataStore.create();
        }

        this._creationInfo = new MockRealtimeStoreCreationInfo();
        this._creationInfo.allowOwnershipTakeOver = options.allowOwnershipTakeOver;
        this._creationInfo.sentServerTimeMilliseconds = timestamp;
        this._creationInfo.persistence = options.persistence;
        this._creationInfo.storeId = options.storeId;
        this._creationInfo.ownerInfo = this.owner;

        this.lastUpdatedTimestamp = timestamp;
    }

    getStoreInfo(): ConnectedLensModule.RealtimeStoreCreationInfo {
        this._creationInfo.lastUpdatedServerTimestamp = altIfNullOrUndef(this.lastUpdatedTimestamp, this._creationInfo.sentServerTimeMilliseconds);
        this._creationInfo.ownerInfo = this.owner;
        return this._creationInfo;
    }

    setLastUpdatedTimestamp(timestamp: number) {
        this.lastUpdatedTimestamp = timestamp;
    }
}

class MockStoreHandler {
    storeEntries: MockRealtimeStoreEntry[] = [];

    private _localUserInfo: ConnectedLensModule.UserInfo = null;

    private _getTimeStamp: () => number;

    onRealtimeStoreCreated: (store: GeneralDataStore, ownerInfo: ConnectedLensModule.UserInfo, creationInfo: ConnectedLensModule.RealtimeStoreCreationInfo) => void
    onRealtimeStoreDeleted: (store: GeneralDataStore, deleteInfo: ConnectedLensModule.RealtimeStoreDeleteInfo) => void
    onRealtimeStoreKeyRemoved: (removalInfo: ConnectedLensModule.RealtimeStoreKeyRemovalInfo) => void
    onRealtimeStoreOwnershipUpdated: (store: GeneralDataStore, ownerInfo: ConnectedLensModule.UserInfo, ownershipUpdateInfo: ConnectedLensModule.RealtimeStoreOwnershipUpdateInfo) => void
    onRealtimeStoreUpdated: (store: GeneralDataStore, key: string, updateInfo: ConnectedLensModule.RealtimeStoreUpdateInfo) => void

    constructor(timeStampGetter: () => number) {
        this._getTimeStamp = timeStampGetter;
    }

    setLocalUserInfo(userInfo: ConnectedLensModule.UserInfo) {
        this._localUserInfo = userInfo;
    }

    private findMatchingStoreEntryIndex(store: GeneralDataStore): number | null {
        return this.storeEntries.findIndex(s => s.store.isSame(store)) || null;
    }

    private findMatchingStoreEntry(store: GeneralDataStore): MockRealtimeStoreEntry | null {
        return this.storeEntries.find(s => s.store.isSame(store)) || null;
    }

    manualMarkRealtimeStoreUpdated(store: GeneralDataStore, key: string, overrideTimestamp: number | null = null) {
        const entry = this.findMatchingStoreEntry(store);
        if (!assertWithError(!!entry, "Could not find matching store entry")) {
            return;
        }
        this.notifyRealtimeStoreUpdated(entry, key, overrideTimestamp);
    }

    manualMarkRealtimeStoreKeyRemoved(store: GeneralDataStore, key: string, overrideTimestamp: number | null = null) {
        const entry = this.findMatchingStoreEntry(store);
        if (!assertWithError(!!entry, "Could not find matching store entry")) {
            return;
        }
        this.notifyRealtimeStoreKeyRemoved(entry, key, overrideTimestamp);
    }

    getAllStores(): GeneralDataStore[] {
        return this.storeEntries.map(s => s.store);
    }

    createRealtimeStore(options: RealtimeStoreCreateOptions, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void, overrideTimestamp: number | null = null): void {
        const newStoreEntry = new MockRealtimeStoreEntry(options, this._getTimeStamp());
        this.storeEntries.push(newStoreEntry);
        const shouldStartOwned = (options.ownership === RealtimeStoreCreateOptions.Ownership.Owned);
        if (shouldStartOwned) {
            newStoreEntry.owner = this._localUserInfo;
        }
        onSuccess(newStoreEntry.store);
        this.notifyRealtimeStoreCreated(newStoreEntry, overrideTimestamp);
        if (shouldStartOwned) {
            this.notifyUpdateRealtimeStoreOwnership(newStoreEntry, overrideTimestamp);
        }
    }

    deleteRealtimeStore(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void, overrideTimestamp: number | null = null): void {
        const entryIndex = this.findMatchingStoreEntryIndex(store);
        if (!assertWithError(entryIndex !== null, "Could not find matching store entry", onError)) {
            return;
        }
        const entry = this.storeEntries[entryIndex];
        this.storeEntries.splice(entryIndex, 1);
        onSuccess(entry.store);
        this.notifyRealtimeStoreDeleted(entry, overrideTimestamp);
    }

    requestRealtimeStoreOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void, overrideTimestamp: number | null = null): void {
        const entry = this.findMatchingStoreEntry(store);
        if (!assertWithError(!!entry, "Could not find matching store entry", onError)) {
            return;
        }
        entry.owner = this._localUserInfo;
        onSuccess(entry.store);
        this.notifyUpdateRealtimeStoreOwnership(entry, overrideTimestamp);
    }

    clearOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void, overrideTimestamp: number | null = null) {
        const entry = this.findMatchingStoreEntry(store);
        if (!assertWithError(!!entry, "Could not find matching store entry", onError)) {
            return;
        }
        entry.owner = EMPTY_MOCK_USER;
        onSuccess(store);
        this.notifyUpdateRealtimeStoreOwnership(entry, overrideTimestamp);
    }

    getRealtimeStoreInfo(store: GeneralDataStore): ConnectedLensModule.RealtimeStoreCreationInfo {
        const entry = this.findMatchingStoreEntry(store);
        if (!assertWithError(!!entry, "Could not find matching store entry")) {
            return;
        }
        return entry.getStoreInfo();
    }

    private notifyRealtimeStoreCreated(storeEntry: MockRealtimeStoreEntry, timestamp: number | null = null) {
        const creationInfo = new MockRealtimeStoreCreationInfo();

        creationInfo.allowOwnershipTakeOver = storeEntry.getStoreInfo().allowOwnershipTakeOver;
        creationInfo.ownerInfo = storeEntry.owner;
        creationInfo.persistence = storeEntry.getStoreInfo().persistence;
        creationInfo.storeId = storeEntry.getStoreInfo().storeId;

        creationInfo.sentServerTimeMilliseconds = this.getTimestampOrDefault(timestamp);
        creationInfo.lastUpdatedServerTimestamp = creationInfo.sentServerTimeMilliseconds;

        this.onRealtimeStoreCreated(storeEntry.store, storeEntry.owner, creationInfo);
    }

    private notifyRealtimeStoreDeleted(storeEntry: MockRealtimeStoreEntry, timestamp: number | null = null) {
        const deletionInfo = new MockRealtimeStoreDeleteInfo();
        deletionInfo.deleterInfo = this._localUserInfo;
        deletionInfo.sentServerTimeMilliseconds = this.getTimestampOrDefault(timestamp);

        this.onRealtimeStoreDeleted(storeEntry.store, deletionInfo);
    }

    private notifyRealtimeStoreUpdated(storeEntry: MockRealtimeStoreEntry, key: string, timestamp: number | null = null) {
        const updateInfo = new MockRealtimeStoreUpdateInfo();
        updateInfo.sentServerTimeMilliseconds = this.getTimestampOrDefault(timestamp);
        updateInfo.updaterInfo = this._localUserInfo;

        this.onRealtimeStoreUpdated(storeEntry.store, key, updateInfo);
    }

    private notifyRealtimeStoreKeyRemoved(storeEntry: MockRealtimeStoreEntry, key: string, timestamp: number | null = null) {
        const removalInfo = new MockRealtimeStoreKeyRemovalInfo();
        removalInfo.sentServerTimeMilliseconds = this.getTimestampOrDefault(timestamp);
        removalInfo.removerInfo = this._localUserInfo;
        removalInfo.key = key;
        removalInfo.store = storeEntry.store;

        this.onRealtimeStoreKeyRemoved(removalInfo);
    }

    private notifyUpdateRealtimeStoreOwnership(storeEntry: MockRealtimeStoreEntry, timestamp: number | null = null) {
        const updateInfo = new MockRealtimeStoreOwnershipUpdateInfo();
        updateInfo.sentServerTimeMilliseconds = this.getTimestampOrDefault(timestamp);

        this.onRealtimeStoreOwnershipUpdated(storeEntry.store, storeEntry.owner, updateInfo);
    }

    private getTimestampOrDefault(timestamp: number | null) {
        return nullOrUndef(timestamp)
            ? this._getTimeStamp()
            : timestamp;
    }
}

interface MockConnectionInfo extends ConnectedLensModule.ConnectionInfo {}
class MockConnectionInfo {
    externalUsersInfo: ConnectedLensModule.UserInfo[];
    hostUserInfo: ConnectedLensModule.UserInfo;
    localUserInfo: ConnectedLensModule.UserInfo;
    realtimeStores: GeneralDataStore[];
    realtimeStoresCreationInfos: ConnectedLensModule.RealtimeStoreCreationInfo[];
}

interface MockHostUpdateInfo extends ConnectedLensModule.HostUpdateInfo {}
class MockHostUpdateInfo {
    sentServerTimeMilliseconds: number;
    userInfo: ConnectedLensModule.UserInfo;
}


interface MockMultiplayerSession extends MultiplayerSession {};
class MockMultiplayerSession {
    private _options: ConnectedLensSessionOptions = null;
    private _storeHandler: MockStoreHandler = null;
    private _delayHelper: DelayHelper = null;

    mockLocalUserInfo: ConnectedLensModule.UserInfo = null;

    testOptions: MockMultiplayerSessionConfig;

    constructor(options: ConnectedLensSessionOptions, testOptions: MockMultiplayerSessionConfig = new MockMultiplayerSessionConfig()) {
        this._options = options;
        this.testOptions = testOptions;

        this._delayHelper = new DelayHelper();

        // Set up realtime store manager
        this._storeHandler = new MockStoreHandler(() => this.getServerTimestamp());

        // Set up realtime store callbacks
        this._storeHandler.onRealtimeStoreCreated = (store, ownerInfo, creationInfo) => {
            if (options.onRealtimeStoreCreated) {
                options.onRealtimeStoreCreated(this, store, ownerInfo, creationInfo);
            }
        };
        this._storeHandler.onRealtimeStoreDeleted = (store, deletionInfo) => {
            if (options.onRealtimeStoreDeleted) {
                options.onRealtimeStoreDeleted(this, store, deletionInfo);
            }
        };
        this._storeHandler.onRealtimeStoreKeyRemoved = (removalInfo) => {
            if (options.onRealtimeStoreKeyRemoved) {
                options.onRealtimeStoreKeyRemoved(this, removalInfo);
            }
        };
        this._storeHandler.onRealtimeStoreOwnershipUpdated = (store, ownerInfo, updateInfo) => {
            if (options.onRealtimeStoreOwnershipUpdated) {
                options.onRealtimeStoreOwnershipUpdated(this, store, ownerInfo, updateInfo);
            }
        };
        this._storeHandler.onRealtimeStoreUpdated = (store, key, updateInfo) => {
            if (options.onRealtimeStoreUpdated) {
                options.onRealtimeStoreUpdated(this, store, key, updateInfo);
            }
        };
    }

    get activeUserCount() {
        return 1;
    }

    get activeUsersInfo() {
        return [this.mockLocalUserInfo];
    }

    get allRealtimeStores(): GeneralDataStore[] {
        return this._storeHandler.getAllStores();
    }

    startConnectionUsingLatency() {
        const needsDisplayName = nullOrUndef(this.testOptions.mockUserInfo?.displayName);
        let displayName:string = null;
        let isLatencyReady = false;
        let hasStarted = false;

        const refresh = () => {
            if (!hasStarted && isLatencyReady && (!needsDisplayName || !nullOrUndef(displayName))) {
                hasStarted = true;
                this.handleConnectionStart(displayName);
            }
        }

        this.latencyHelper(this.testOptions.connectionLatency, () => {
            isLatencyReady = true;
            refresh();
        });

        if (needsDisplayName) {
            global.userContextSystem.requestDisplayName(name => {
                displayName = name;
                refresh();
            });
        }
    }

    private handleConnectionStart(displayName?:string) {
        // Set up mock local user
        this.mockLocalUserInfo = this.createMockUserInfo(this.testOptions.mockUserInfo, displayName);

        this._storeHandler.setLocalUserInfo(this.mockLocalUserInfo);

        this.notifyOnConnected();
        this.notifyUserJoinedSession();
        this.notifyHostUpdated();
    }

    private createMockUserInfo(mockUserConfig?:MockUserConfig, displayName?:string): MockUserInfo{
        const userInfo = new MockUserInfo();
        userInfo.connectionId = altIfNullOrUndef(mockUserConfig?.connectionId, "mock_connection_id_" + Math.floor(MathUtils.randomRange(0, 9999)));
        userInfo.userId = altIfNullOrUndef(mockUserConfig?.userId, "mock_user_id");
        userInfo.displayName = altIfNullOrUndef(mockUserConfig?.displayName, displayName);

        userInfo.joinServerTimeMilliseconds = this.getServerTimestamp();
        return userInfo;
    }

    private notifyOnConnected() {
        if (this._options.onConnected) {
            const connectionInfo = new MockConnectionInfo();
            connectionInfo.externalUsersInfo = [];
            connectionInfo.hostUserInfo = this.mockLocalUserInfo;
            connectionInfo.localUserInfo = this.mockLocalUserInfo;
            connectionInfo.realtimeStores = [];
            connectionInfo.realtimeStoresCreationInfos = [];

            this._options.onConnected(this, connectionInfo);
        }
    }

    private notifyUserJoinedSession() {
        if (this._options.onUserJoinedSession) {
            this._options.onUserJoinedSession(this, this.mockLocalUserInfo);
        }
    }

    private notifyHostUpdated() {
        if (this._options.onHostUpdated) {
            const updateInfo = new MockHostUpdateInfo();
            updateInfo.sentServerTimeMilliseconds = this.getServerTimestamp();
            updateInfo.userInfo = this.mockLocalUserInfo;
            this._options.onHostUpdated(this, updateInfo);
        }
    }

    private latencyHelper(latencySetting: LatencySetting, callback: (overrideTimestamp: number) => void) {
        const initialTimestamp = this.getServerTimestamp();
        const latency = LatencySetting.getLatencyValue(latencySetting);
        this._delayHelper.waitAndCall(latency, () => {
            callback(initialTimestamp);
        });
    }

    private async latencyHelperAsync(latencySetting: LatencySetting): Promise<number> {
        return new Promise((resolve) => this.latencyHelper(latencySetting, resolve));
    }

    clearRealtimeStoreOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void {
        this.latencyHelper(this.testOptions.realtimeStoreLatency, timestamp => {
            this._storeHandler.clearOwnership(store, onSuccess, onError, timestamp);
        });
    }

    createRealtimeStore(options: RealtimeStoreCreateOptions, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void {
        this.latencyHelper(this.testOptions.realtimeStoreLatency, timestamp => {
            this._storeHandler.createRealtimeStore(options, onSuccess, onError, timestamp);
        });
    }

    deleteRealtimeStore(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void {
        this.latencyHelper(this.testOptions.realtimeStoreLatency, timestamp => {
            this._storeHandler.deleteRealtimeStore(store, onSuccess, onError, timestamp);
        });
    }

    requestRealtimeStoreOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void {
        this.latencyHelper(this.testOptions.realtimeStoreLatency, timestamp => {
            this._storeHandler.requestRealtimeStoreOwnership(store, onSuccess, onError, timestamp);
        });
    }

    getLocalUserId(localUserIdCallback: (userId: string) => void): void {
        this.latencyHelper(this.testOptions.localUserInfoLatency, timestamp => {
            localUserIdCallback(this.mockLocalUserInfo.userId);
        });
    }

    getLocalUserInfo(localUserInfoCallback: (userInfo: ConnectedLensModule.UserInfo) => void): void {
        this.latencyHelper(this.testOptions.localUserInfoLatency, timestamp => {
            localUserInfoCallback(this.mockLocalUserInfo);
        });
    }

    getRealtimeStoreInfo(store: GeneralDataStore): ConnectedLensModule.RealtimeStoreCreationInfo {
        return this._storeHandler.getRealtimeStoreInfo(store);
    }

    getServerTimestamp(): number {
        return Date.now();
    }

    sendMessage(message: string): void {
        if (this._options.onMessageReceived) {
            this.latencyHelper(this.testOptions.messageLatency, timestamp => {
                this._options.onMessageReceived(this, this.mockLocalUserInfo.userId, message, this.mockLocalUserInfo);
            });
        }
    }

    // Note: timeout is not implemented
    sendMessageWithTimeout(message: string, timeoutMs: number): void {
        this.sendMessage(message);
    }

    manualMarkStoreUpdated(store: GeneralDataStore, key: string) {
        this._storeHandler.manualMarkRealtimeStoreUpdated(store, key, this.getServerTimestamp());
    }

    manualMarkStoreKeyRemoved(store: GeneralDataStore, key: string) {
        this._storeHandler.manualMarkRealtimeStoreKeyRemoved(store, key, this.getServerTimestamp());
    }
}


class DelayHelper {
    private _script: ScriptComponent = null;

    constructor() {
        this._script = global.scene.createSceneObject("DelayHelper").createComponent("ScriptComponent");
    }

    waitAndCall(delay: number, callback: (eventData: DelayedCallbackEvent) => void): DelayedCallbackEvent | null {
        if (delay <= 0) {
            callback(null);
        }
        return this.createDelayedEvent(callback, delay, true);
    }

    createDelayedEvent(callback: (eventData: DelayedCallbackEvent) => void = null, delay: number = -1, onlyOnce: boolean = false): DelayedCallbackEvent {
        const evt = this._script.createEvent("DelayedCallbackEvent");
        if (callback) {
            if (onlyOnce) {
                evt.bind(e => {
                    this._script.removeEvent(e);
                    callback(e);
                });
            } else {
                evt.bind(e => callback(e));
            }
        }
        if (delay >= 0) {
            evt.reset(delay);
        }
        return evt;
    }
}

function nullOrUndef(value: any): boolean {
    return (value === null || value === undefined);
}

function altIfNullOrUndef<T>(value: T, alt: T) {
    return nullOrUndef(value) ? alt : value;
}

function assertWithError(condition: boolean, message: string, onError?: (message: string) => void): boolean {
    if (condition) {
        return true;
    }
    if (onError) {
        onError(message);
    } else {
        print(message);
    }
    return false;
}

async function getLocalDisplayNameAsync() {
    return new Promise((resolve, reject) => {
        global.userContextSystem.requestDisplayName(resolve);
    });
}
