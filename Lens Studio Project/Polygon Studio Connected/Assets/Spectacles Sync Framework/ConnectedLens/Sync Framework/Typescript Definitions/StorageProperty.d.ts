declare class StorageProperty<T> {
  /**
   * @template T
   * @param {string} key Key to identify and store the StorageProperty
   * @param {StorageType<T>} propertyType Use {@link StorageTypes StorageTypes}
   */
  constructor(key: string, propertyType: StorageType<T>);

  /**
   * Key used to identify and store the property. This key matches defines how the property is accessed in a RealtimeStore.
   * It can also be used to identify the property in a {@link StoragePropertySet}.
   * @type {string}
   */
  key: string;

  /**
   * {@link StorageType} used by the property.
   * @type {StorageType<T>}
   */
  propertyType: StorageType<T>;

  /**
   * If defined, this function is called to automatically update the property value each frame.
   * @type {()=>T}
   */
  getterFunc: () => T;

  /**
   * If defined, this function is called to automatically apply the property value.
   * @type {(val:T)=>void}
   */
  setterFunc: (val: T) => void;

  /**
   * The function used to check for a change in the property value. It should return `true` if two values are equal, or reasonably close to equal.
   * @type {(a:T, b:T)=>boolean}
   */
  equalsCheck: (a: T, b: T) => boolean;

  /**
   * The current value that we believe to be synced across the network. In most simple cases, this is what you want to read from.
   * @type {T|undefined}
   */
  currentValue: T | undefined;

  /**
   * The local value that can potentially be sent to the network at the next available chance. It may be the same as `currentValue`, but may not be.
   * @type {T?}
   */
  pendingValue: T | null;

  /**
   * The most recently changed local value, whether that's `current` or `pending`.
   * In most cases when you want a very up-to-date local value, this is what you want to read from.
   * @type {T?}
   */
  currentOrPendingValue: T | null;

  /**
   * Event triggered when the pending value changes.
   * @type {EventWrapper<T, T>}
   */
  onPendingValueChange: EventWrapper<[T, T]>;

  /**
   * Event triggered when the `currentValue` is changed by a remote user.
   * @type {EventWrapper<T, T>}
   */
  onRemoteChange: EventWrapper<[T, T]>;

  /**
   * Event triggered when the `currentValue` is changed by the local user.
   * @type {EventWrapper<T, T>}
   */
  onLocalChange: EventWrapper<[T, T]>;

  /**
   * Event triggered when the `currentValue` is changed by any user (either local or remote).
   * @type {EventWrapper<T, T>}
   */
  onAnyChange: EventWrapper<[T, T]>;

  /**
   * If greater than or equal to zero, this limits how often the property sends updates to the network about its value changing.
   * This is useful to avoid rate limiting when a value updates very frequently, for example if a position is changing every frame.
   * When using this feature, `currentValue` will only be updated when the value is actually sent to the network.
   * To get the most recent *local* version of a value, you can always check `currentOrPendingValue`.
   * @type {number}
   */
  sendsPerSecondLimit: number;

  /**
   * Returns `true` if we are allowed to send updated values to the network based on the `sendsPerSecondLimit` and `timestamp`.
   * @param {number} timestamp
   * @returns {boolean}
   */
  checkWithinSendLimit(timestamp: number): boolean;

  /**
   * Sets the pending value to `newValue`. This value will be sent to the network at the end of the frame,
   * as soon as it's allowed to do so (we have permission to modify the SyncEntity, and `sendsPerSecondLimit` hasn't been reached).
   * @param {T} newValue New pending value to set
   */
  setPendingValue(newValue: T): void;

  /**
   * Immediately set the current value. Only use this if you are sure that we have permission to modify the store.
   * @param {GeneralDataStore} store
   * @param {T} newValue
   * @returns {boolean}
   */
  setValueImmediate(store: GeneralDataStore, newValue: T): boolean;

  /**
   * Helper function that writes a value to a `store`, given a `key` and {@link StorageType}
   * @template T Value type
   * @param {GeneralDataStore} store Store to write value to
   * @param {string} key Key identifying the value
   * @param {StorageType<T>} propertyType {@link StorageTypes StorageType} identifying the type of value
   * @param {T} value Value to set
   */
  putStoreValueDynamic(
    store: GeneralDataStore,
    key: string,
    propertyType: StorageType<T>,
    value: T
  ): void;

  /**
   * Helper function that reads a value from a `store`, given a `key` and {@link StorageType}
   * @template T Value type
   * @param {GeneralDataStore} store Store to read value from
   * @param {string} key Key identifying the value
   * @param {StorageType<T>} propertyType {@link StorageTypes StorageType} identifying the type of value
   * @returns {T} Value found (or default value if none found)
   */
  getStoreValueDynamic<T>(
    store: GeneralDataStore,
    key: string,
    propertyType: StorageType<T>
  ): T;

  /**
   * Automatically sets the `equalsCheck` function based on `propertyType`.
   */
  setEqualsCheckByPropType(): void;
}

declare namespace StorageProperty {
  /**
   * Creates a simple `StorageProperty` that should be updated manually.
   * @template T Value type
   * @param {string} key Key to identify the property
   * @param {StorageType<T>} propertyType {@link StorageTypes StorageType} identifying the type of value
   * @param {T=} startingValue Optional starting value to assign to the property
   * @returns {StorageProperty<T>} Newly created manual StorageProperty
   */
  function manual<T>(
    key: string,
    propertyType: StorageType<T>,
    startingValue?: T
  ): StorageProperty<T>;

  /**
   * Creates a simple `string` property that should be updated manually.
   * @param {string} key Key to identify the property
   * @param {string=} startingValue Optional starting value to assign to the property
   * @returns {StorageProperty<string>} Newly created StorageProperty
   */
  function manualString(
    key: string,
    startingValue?: string
  ): StorageProperty<string>;

  /**
   * Creates a simple `boolean` property that should be updated manually.
   * @param {string} key Key to identify the property
   * @param {boolean=} startingValue Optional starting value to assign to the property
   * @returns {StorageProperty<boolean>} Newly created StorageProperty
   */
  function manualBool(
    key: string,
    startingValue?: boolean
  ): StorageProperty<boolean>;

  /**
   * Creates a simple `integer` property that should be updated manually.
   * @param {string} key Key to identify the property
   * @param {number=} startingValue Optional starting value to assign to the property
   * @returns {StorageProperty<number>} Newly created StorageProperty
   */
  function manualInt(
    key: string,
    startingValue?: number
  ): StorageProperty<number>;

  /**
   * Creates a simple `float` property that should be updated manually.
   * @param {string} key Key to identify the property
   * @param {number=} startingValue Optional starting value to assign to the property
   * @returns {StorageProperty<number>} Newly created StorageProperty
   */
  function manualFloat(
    key: string,
    startingValue?: number
  ): StorageProperty<number>;

  /**
   * Creates a simple `double` property that should be updated manually.
   * @param {string} key Key to identify the property
   * @param {number=} startingValue Optional starting value to assign to the property
   * @returns {StorageProperty<number>} Newly created StorageProperty
   */
  function manualDouble(
    key: string,
    startingValue?: number
  ): StorageProperty<number>;

  /**
   * Creates a simple {@link vec3} property that should be updated manually.
   * @param {string} key Key to identify the property
   * @param {vec3=} startingValue Optional starting value to assign to the property
   * @returns {StorageProperty<vec3>} Newly created StorageProperty
   */
  function manualVec3(key: string, startingValue?: vec3): StorageProperty<vec3>;

  /**
   * Creates an automatically updated `StorageProperty` based on getter and setter functions.
   * @template T Value type
   * @param {string} key Key to identify the property
   * @param {StorageType<T>} propertyType {@link StorageTypes StorageType} identifying the type of value
   * @param {()=>T} getterFunc Function that returns the current local value for the property
   * @param {(val:T)=>void} setterFunc Function that applies incoming new values for the property
   * @returns {StorageProperty<T>} Newly created StorageProperty
   */
  function auto<T extends any[]>(
    key: string,
    propertyType: StorageType<T>,
    getterFunc: () => T,
    setterFunc: (val: T) => void
  ): StorageProperty<T>;

  /**
   * Creates an automatically updated `float` property based on getter and setter functions.
   * @param {string} key Key to identify the property
   * @param {()=>number} getterFunc Function that returns the current local value for the property
   * @param {(val:number)=>void} setterFunc Function that applies incoming new values for the property
   * @returns {StorageProperty<number>} Newly created StorageProperty
   */
  function autoFloat(
    key: string,
    getterFunc: () => number,
    setterFunc: (val: number) => void
  ): StorageProperty<number>;

  /**
   * Creates an automatically updated property based on a target object and property name.
   * The `propName` should be the name of a property on the `target` object.
   * @template TObject Target object type
   * @template {keyof TObject} TKey Property name as type
   * @template {TObject[TKey]} TValue Value type
   * @param {string} key Key to identify the property
   * @param {TObject} target Target object to watch
   * @param {TKey} propName Name of a property on `target` that should be watched
   * @param {StorageType<TValue>} propertyType {@link StorageTypes StorageType} identifying the type of value
   * @returns {StorageProperty<TValue>} Newly created StorageProperty
   */
  function wrapProperty<TObject, TValue extends any[]>(
    key: string,
    target: TObject,
    propName: string,
    propertyType: StorageType<TValue>
  ): StorageProperty<TValue>;

  /**
   * Creates an automatically updated property based on a target object with getter and setter function names.
   * The `getterName` and `setterName` should be the names of functions on the `target` object.
   * This is useful for Lens Studio engine objects, where you can't store direct references to their functions.
   * @template TValue Value type
   * @template TObject Target object type
   * @template {keyof TObject} GetKey Getter name as type
   * @template {keyof TObject} SetKey Setter name as type
   * @param {string} key Key to identify the property
   * @param {TObject} target Target object to watch
   * @param {GetKey} getterName Name of a function on `target` that returns the property value
   * @param {SetKey} setterName Name of a function on `target` that sets the property value
   * @param {StorageType<TValue>} propertyType {@link StorageTypes StorageType} identifying the type of value
   * @returns {StorageProperty<TValue>} Newly created StorageProperty
   */
  function wrapGetterSetter<TValue extends any[], TObject>(
    key: string,
    target: TObject,
    getterName: string,
    setterName: string,
    propertyType: StorageProperty<TValue>
  ): StorageProperty<TValue>;

  /**
   * Creates an automatically updated property that mirrors a {@link Transform} position.
   * @param {Transform} transform {@link Transform} to watch
   * @param {boolean=} isLocal If `true`, local position will be used. If `false`, world position will be used.
   * @returns {StorageProperty<vec3>} Newly created StorageProperty
   */
  function forPosition(
    transform: Transform,
    isLocal?: boolean
  ): StorageProperty<vec3>;

  /**
   * Creates an automatically updated property that mirrors a {@link Transform} rotation.
   * @param {Transform} transform {@link Transform} to watch
   * @param {boolean=} isLocal If `true`, local rotation will be used. If `false`, world rotation will be used.
   * @returns {StorageProperty<quat>} Newly created StorageProperty
   */
  function forRotation(
    transform: Transform,
    isLocal?: boolean
  ): StorageProperty<quat>;

  /**
   * Creates an automatically updated property that mirrors a {@link Transform} scale.
   * @param {Transform} transform {@link Transform} to watch
   * @param {boolean=} isLocal If `true`, local scale will be used. If `false`, world scale will be used.
   * @returns {StorageProperty<vec3>} Newly created StorageProperty
   */
  function forScale(
    transform: Transform,
    isLocal?: boolean
  ): StorageProperty<vec3>;

  /**
   * Creates an automatically updated property that mirrors a {@link Text Text component's} `text` property.
   * @param {Text} text {@link Text Text component} to watch
   * @returns {StorageProperty<string>} Newly created StorageProperty
   */
  function forTextText(text: Text): StorageProperty<string>;

  /**
   * Creates an automatically updated property that mirrors a value on a {@link Material Material's} `mainPass`.
   * @template T Value type
   * @param {Material} material Material to watch
   * @param {string} propertyName Name of a property on the `material`
   * @param {StorageType<T>} storageType {@link StorageTypes StorageType} identifying the type of value
   * @returns {StorageProperty<T>} Newly created StorageProperty
   */
  function forMaterialProperty<T extends any[]>(
    material: Material,
    propertyName: string,
    storageType: StorageType<T>
  ): StorageProperty<T>;

  /**
   * Creates an automatically updated property that mirrors a value on a {@link MaterialMeshVisual MaterialMeshVisual's} `mainMaterial`.
   * There is also an option to clone the material in-place.
   * @template T Value type
   * @param {MaterialMeshVisual} visual Visual to watch
   * @param {string} propertyName Name of a property on the `visual`
   * @param {StorageType<T>} storageType {@link StorageTypes StorageType} identifying the type of value
   * @param {boolean=} clone If `true`, the material will be cloned and applied back to the visual. Useful if multiple objects use the same material
   * @returns {StorageProperty<T>} Newly created StorageProperty
   */
  function forMeshVisualProperty<T extends any[]>(
    visual: MaterialMeshVisual,
    propertyName: string,
    storageType: StorageType<T>,
    clone?: boolean
  ): StorageProperty<T>;

  /**
   * Creates an automatically updated property that mirrors the `baseColor` of a {@link MaterialMeshVisual}.
   * @param {MaterialMeshVisual} visual Visual to watch
   * @param {boolean=} clone If `true`, the material will be cloned and applied back to the visual. Useful if multiple objects use the same material
   * @returns {StorageProperty<vec4>} Newly created StorageProperty
   */
  function forMeshVisualBaseColor(
    visual: MaterialMeshVisual,
    clone?: boolean
  ): StorageProperty<vec4>;
}
