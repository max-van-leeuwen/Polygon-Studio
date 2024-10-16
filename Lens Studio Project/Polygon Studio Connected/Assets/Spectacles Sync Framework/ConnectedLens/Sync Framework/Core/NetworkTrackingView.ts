import {NetworkTracking} from "./NetworkTracking"

@component
export class NetworkTrackingView extends BaseScriptComponent {
  @input
  networkTracking: NetworkTracking

  @input
  messageText: Text

  constructor() {
    super()
  }

  onAwake() {
    this.createEvent("UpdateEvent").bind(this.onUpdate.bind(this))
  }

  onUpdate() {
    this.updateMessageText()
  }

  updateMessageText() {
    let totalDataStoreChanges = this.networkTracking.getTotalDataStoreChanges()
    let maxFrameDataStoreChanges =
      this.networkTracking.getMaxFrameDataStoreChanges()
    let averageFrameDataStoreChanges =
      this.networkTracking.getAverageFrameDataStoreChanges()
    let totalMessages = this.networkTracking.getTotalMessages()
    let averageLatency = Math.round(
      this.networkTracking.getAverageLatency() * 1000
    )
    this.messageText.text = `(last second)\nTotal data store changes: ${totalDataStoreChanges}\nMax data store changes: ${maxFrameDataStoreChanges}\nAverage data store changes: ${averageFrameDataStoreChanges}\n Total messages: ${totalMessages}\n Average Latency: ${averageLatency}ms`
  }
}
