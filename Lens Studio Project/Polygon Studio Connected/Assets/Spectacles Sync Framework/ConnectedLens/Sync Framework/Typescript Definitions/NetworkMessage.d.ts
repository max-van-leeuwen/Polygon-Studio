interface NetworkMessage<T> {
  senderInfo:ConnectedLensModule.UserInfo
  senderUserId:string
  senderConnectionId:string
  message:string;
  data?: T
}
