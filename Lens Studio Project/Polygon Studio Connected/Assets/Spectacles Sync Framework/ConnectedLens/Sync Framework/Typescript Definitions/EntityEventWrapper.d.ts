
/**
 * Helper class used to wrap all event API for a single event name.
 */
declare class EntityEventWrapper<T extends any> {
  constructor(messageWrapper:NetworkMessageWrapper, eventName:string)

  onEventReceived:EventWrapper<[NetworkMessage<T>]>
  onRemoteEventReceived:EventWrapper<[NetworkMessage<T>]>
  /** @deprecated */
  onAnyEventReceived:EventWrapper<[NetworkMessage<T>]>
  
  /**
   * Send this event
   * @param {T=} data Data object to send
   * @param {boolean=} onlySendRemote If true, this event won't be received by the local SyncEntity that sent it
   */  
  send(data?:T, onlySendRemote?:boolean) : void
}