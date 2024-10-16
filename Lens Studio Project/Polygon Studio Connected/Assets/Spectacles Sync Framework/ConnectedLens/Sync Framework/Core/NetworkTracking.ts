// How much history to keep in seconds
const MAX_FRAME_HISTORY_SECONDS = 1

// How often to run the latency test
const LATENCY_TEST_FREQUENCY_SECONDS = 1

const LATENCY_TEST_EVENT_NAME = "LatencyPing"

@component
export class NetworkTracking extends BaseScriptComponent {
  constructor() {
    super()

    // Disable NetworkTracking if debug logging is disabled
    if (global.sessionController.getDebugLogging() === false) {
      this.enabled = false
    }

    globalThis.NetworkTracking = this
  }

  frameHistory = new Map<number, NetworkTrackingFrame>()
  lastLatencyTestTime = 0
  mostRecentLatency = new Map<string, number>()

  syncEntity = new SyncEntity(this)

  onAwake() {
    this.syncEntity.notifyOnReady(() => {
      this.createEvent("UpdateEvent").bind(this.onUpdate.bind(this))
      this.syncEntity.onRemoteEventReceived.add(
        LATENCY_TEST_EVENT_NAME,
        this.onLatencyPing.bind(this)
      )
    })
  }

  onUpdate() {
    this.clearOldFrames()

    if (getTime() - this.lastLatencyTestTime > LATENCY_TEST_FREQUENCY_SECONDS) {
      this.lastLatencyTestTime = getTime()
      this.sendLatencyPing()
    }
  }

  sendLatencyPing() {
    const currentServerTime = global.sessionController.getServerTimeInSeconds()
    this.syncEntity.sendEvent(LATENCY_TEST_EVENT_NAME, {
      serverTime: currentServerTime,
    })
  }

  onLatencyPing(message: NetworkMessage<{serverTime: number}>) {
    const sentServerTime = message.data.serverTime
    const senderId = message.senderConnectionId
    const currentServerTime = global.sessionController.getServerTimeInSeconds()
    const latency = currentServerTime - sentServerTime

    this.mostRecentLatency.set(senderId, latency)
  }

  getAllLatencies(): Map<string, number> {
    return this.mostRecentLatency
  }

  getLatency(connectionId: string): number {
    return this.mostRecentLatency.get(connectionId)
  }

  getAverageLatency(): number {
    let totalLatency = 0
    let totalConnections = 0
    for (let [_, latency] of this.mostRecentLatency) {
      totalLatency += latency
      totalConnections++
    }

    if (totalConnections === 0) {
      return 0
    }

    return totalLatency / this.mostRecentLatency.size
  }

  clearOldFrames() {
    let currentTime = getTime()
    for (let [frameTime, _] of this.frameHistory) {
      if (currentTime - frameTime > MAX_FRAME_HISTORY_SECONDS) {
        this.frameHistory.delete(frameTime)
      }
    }
  }

  getCurrentFrame() {
    let currentFrameTime = getTime()
    if (!this.frameHistory.has(currentFrameTime)) {
      this.frameHistory.set(currentFrameTime, new NetworkTrackingFrame())
    }
    return this.frameHistory.get(currentFrameTime)
  }

  addDataStoreChange(dataStoreName: string) {
    let currentNetworkTrackingFrame = this.getCurrentFrame()
    currentNetworkTrackingFrame.addDataStoreChange(dataStoreName)
  }

  addMessage(messageName: string) {
    let currentNetworkTrackingFrame = this.getCurrentFrame()
    currentNetworkTrackingFrame.addMessage(messageName)
  }

  getAverageFrameMessages(): number {
    return this.getTotalMessages() / this.frameHistory.size
  }

  getMinFrameMessages(): number {
    let minMessages = Number.MAX_VALUE
    for (let frame of this.frameHistory.values()) {
      let messageCount = frame.messageCount
      if (messageCount < minMessages) {
        minMessages = messageCount
      }
    }
    return minMessages
  }

  getMaxFrameMessages(): number {
    let maxMessages = 0
    for (let frame of this.frameHistory.values()) {
      let messageCount = frame.messageCount
      if (messageCount > maxMessages) {
        maxMessages = messageCount
      }
    }
    return maxMessages
  }

  getTotalMessages(): number {
    let totalMessages = 0
    for (let frame of this.frameHistory.values()) {
      totalMessages += frame.messageCount
    }
    return totalMessages
  }

  getAverageFrameDataStoreChanges(): number {
    return this.getTotalDataStoreChanges() / this.frameHistory.size
  }

  getMinFrameDataStoreChanges(): number {
    let minDataStoreChanges = Number.MAX_VALUE
    for (let frame of this.frameHistory.values()) {
      let dataStoreChangeCount = frame.dataStoreChangeCount
      if (dataStoreChangeCount < minDataStoreChanges) {
        minDataStoreChanges = dataStoreChangeCount
      }
    }
    return minDataStoreChanges
  }

  getMaxFrameDataStoreChanges(): number {
    let maxDataStoreChanges = 0
    for (let frame of this.frameHistory.values()) {
      let dataStoreChangeCount = frame.dataStoreChangeCount
      if (dataStoreChangeCount > maxDataStoreChanges) {
        maxDataStoreChanges = dataStoreChangeCount
      }
    }
    return maxDataStoreChanges
  }

  getTotalDataStoreChanges(): number {
    let totalDataStoreChanges = 0
    for (let frame of this.frameHistory.values()) {
      totalDataStoreChanges += frame.dataStoreChangeCount
    }
    return totalDataStoreChanges
  }
}

export class NetworkTrackingFrame {
  messages = new Map<string, number>()
  dataStoresChanges = new Map<string, number>()
  dataStoreChangeCount = 0
  messageCount = 0

  constructor() {}

  addDataStoreChange(dataStoreName: string) {
    let currentCount = this.dataStoresChanges.get(dataStoreName) ?? 0
    this.dataStoresChanges.set(dataStoreName, currentCount + 1)
    this.dataStoreChangeCount++
  }

  addMessage(messageName: string) {
    let currentCount = this.messages.get(messageName) ?? 0
    this.messages.set(messageName, currentCount + 1)
    this.messageCount++
  }
}
