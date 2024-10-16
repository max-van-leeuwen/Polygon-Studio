declare class InstantiationOptions {
  constructor(obj?: InstantiationOptionsObj);

  /** @type {((networkRoot:NetworkRootInfo)=>void)=} */
  onSuccess?: (networkRoot: NetworkRootInfo) => void;

  /** @type {(RealtimeStoreCreateOptions.Persistence|keyof typeof RealtimeStoreCreateOptions.Persistence)=} */
  persistence?: RealtimeStoreCreateOptions.Persistence;

  /** @type {boolean=} */
  claimOwnership?: boolean;

  /** @type {vec3=} */
  worldPosition?: vec3;

  /** @type {quat=} */
  worldRotation?: quat;

  /** @type {vec3=} */
  worldScale?: vec3;

  /** @type {vec3=} */
  localPosition?: vec3;

  /** @type {quat=} */
  localRotation?: quat;

  /** @type {vec3=} */
  localScale?: vec3;

  /** @type {((message:string)=>void)=} */
  onError?: (message: string) => void;

  /** @type {string=} */
  overrideNetworkId?: string;
}
