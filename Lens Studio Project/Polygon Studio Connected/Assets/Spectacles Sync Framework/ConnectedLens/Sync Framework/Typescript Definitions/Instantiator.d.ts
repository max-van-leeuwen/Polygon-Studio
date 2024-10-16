declare interface Instantiator extends ScriptComponent {
  //@input Asset.ObjectPrefab[] prefabs
  /** @type {ObjectPrefab[]} */
  prefabs: ObjectPrefab[];

  //@input bool spawnerOwnsObject
  /** @type {boolean} */
  spawnerOwnsObject: boolean;

  //@input bool spawnAsChildren
  /** @type {boolean} */
  spawnAsChildren: boolean;

  //@input SceneObject spawnUnderParent {"showIf":"spawnAsChildren"}
  /** @type {SceneObject} */
  spawnUnderParent: SceneObject;

  //@ui {"widget":"separator"}
  //@input bool autoInstantiate = false
  /** @type {boolean} */
  autoInstantiate: boolean;

  //@input Asset.ObjectPrefab[] autoInstantiatePrefabs {"label": "Prefabs", "showIf":"autoInstantiate"}
  /** @type {ObjectPrefab[]} */
  autoInstantiatePrefabs: ObjectPrefab[];

  //@input string autoInstantiatePersistence = "Session" {"label": "Persistence", "widget":"combobox", "values":[{"label":"Owner", "value":"Owner"},{"label":"Session", "value":"Session"},{"label":"Persist", "value":"Persist"}], "showIf":"autoInstantiate"}
  /** @type {RealtimeStoreCreateOptions.Persistence} */
  autoInstantiatePersistence: RealtimeStoreCreateOptions.Persistence;

  //@input string autoInstantiateOwnership = "Unowned" {"label": "Ownership", "widget":"combobox", "values":[{"label":"Owned", "value":"Owned"},{"label":"Unowned", "value":"Unowned"}], "showIf":"autoInstantiate"}
  /** @type {RealtimeStoreCreateOptions.Ownership} */
  autoInstantiateOwnership: RealtimeStoreCreateOptions.Ownership;

  /** @type {Object.<string, NetworkRootInfo>} */
  spawnedInstances: [string, NetworkRootInfo];

  /** @type {Object.<string, SceneObject>} */
  spawningInstances: [string, SceneObject];

  syncEntity: SyncEntity;

  /**
   * Instantiates a prefab across the network. The prefab must be included in the "Prefabs" list of the Instantiator's inspector.
   * @param {ObjectPrefab} prefab Prefab to instantiate. Make sure it's included in the "Prefabs" list!
   * @param {(InstantiationOptions|InstantiationOptionsObj)=} options Optional settings for the instantiated object
   * @param {((networkRoot:NetworkRootInfo)=>void)=} onSuccess Callback that executes when instantiation is complete. Overrides the `onSuccess` callback in `options` if specified.
   */
  instantiate(
    prefab: ObjectPrefab,
    options?: InstantiationOptions | null,
    onSuccess?: (networkRoot: NetworkRootInfo) => void
  ): void;

  /**
   * @returns {boolean}
   */
  isReady(): boolean;

  /**
   *
   * @param {()=>void} onReady
   */
  notifyOnReady(onReady: () => void): void;
}
