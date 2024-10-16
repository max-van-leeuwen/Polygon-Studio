
export class MockUserConfig {
    connectionId?: string = "";
    displayName?: string = "";
    userId?: string = "";
}

export type LatencySetting = number | [number, number] | null;
export namespace LatencySetting {
    export const None:number = 0;
    export const OneFrame:LatencySetting = .0000001;

    export const RandomLowLatency:LatencySetting = [0.1, .25];
    export const ConsistentLowLatency:LatencySetting = .05;

    export const RandomHighLatency:LatencySetting = [0.75, 1.0];
    export const ConsistentHighLatency:LatencySetting = 0.5;

    export function getLatencyValue(setting: LatencySetting): number {
        if (typeof (setting) === "number") {
            return setting;
        }
        if (Array.isArray(setting)) {
            return MathUtils.lerp(setting[0], setting[1], Math.random());
        }
        return None;
    }
}

export class MockMultiplayerSessionConfig {
    connectionLatency?: LatencySetting = LatencySetting.OneFrame;
    realtimeStoreLatency?: LatencySetting = LatencySetting.OneFrame;
    messageLatency?: LatencySetting = LatencySetting.OneFrame;
    localUserInfoLatency?: LatencySetting = LatencySetting.OneFrame;

    mockUserInfo?: MockUserConfig;

    static createWithAllSetting(setting:LatencySetting): MockMultiplayerSessionConfig {
        const ret = new MockMultiplayerSessionConfig();
        ret.connectionLatency = setting;
        ret.localUserInfoLatency = setting;
        ret.messageLatency = setting;
        ret.realtimeStoreLatency = setting;
        return ret;
    }

    static createWithNoLatency(): MockMultiplayerSessionConfig {
        return this.createWithAllSetting(LatencySetting.None);
    }

    static createWithOneFrameLatency(): MockMultiplayerSessionConfig {
        return this.createWithAllSetting(LatencySetting.OneFrame);
    }

    static createWithSimulatedLowLatency(): MockMultiplayerSessionConfig {
        return this.createWithAllSetting(LatencySetting.RandomLowLatency);
    }

    static createWithSimulatedHighLatency(): MockMultiplayerSessionConfig {
        return this.createWithAllSetting(LatencySetting.RandomHighLatency);
    }
};
