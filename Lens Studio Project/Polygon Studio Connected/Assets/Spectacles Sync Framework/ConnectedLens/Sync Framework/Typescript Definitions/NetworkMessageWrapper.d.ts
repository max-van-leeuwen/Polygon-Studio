declare class NetworkMessageWrapper {
  constructor(networkId: string)

  networkId: string

  /**
   * @type {KeyedEventWrapper<NetworkMessage>}
   */
  onRemoteEventReceived: KeyedEventWrapper<[NetworkMessage<any>]>

  /**
   * @type {KeyedEventWrapper<NetworkMessage>}
   */
  onAnyEventReceived: KeyedEventWrapper<[NetworkMessage<any>]>

  /**
   *
   * @param {string} messageKey
   * @param {object?} messageData
   * @param {boolean=} onlySendRemote
   */
  sendMessage(
    messageKey: string,
    messageData: any,
    onlySendRemote?: boolean
  ): void

  cleanup(): void
}
