declare namespace global {
  var networkIdTools: {
    /**
     * Generates a new network id
     * @param {ScriptComponent} scriptComponent ScriptComponent to generate the id for
     * @param {NetworkIdOptions} networkIdOptions Options to use with id generation
     * @param {NetworkRootInfo=} networkRoot Optional NetworkRootInfo for use with prefab instantiation
     * @returns {string} Generated network id
     */
    generateNetworkId: (
      scriptComponent: ScriptComponent,
      networkIdOptions: NetworkIdOptions,
      networkRoot?: NetworkRootInfo | null
    ) => string;
    NetworkIdOptions: NetworkIdOptions;
    NetworkIdType: typeof NetworkIdType;
  };

  /*
   * Provides a set of options to use with network id generation
   * @class
   */
  class NetworkIdOptions {
    /**
     * Which method to use for network id generation
     * @type {NetworkIdType?}
     */
    networkIdType: NetworkIdType | null;

    /**
     * Custom network id  to use
     * @type {string?}
     */
    customNetworkId: string | null;

    /**
     * Custom prefix to prepend to the network id
     * @type {string?}
     */
    customPrefix: string | null;
  }

  /**
   * Types of network id generation that can be used
   * @enum {string}
   */
  enum NetworkIdType {
    Hierarchy = "hierarchy",
    Custom = "custom",
    ObjectId = "objectId",
  }
}
