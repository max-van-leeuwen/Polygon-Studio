declare class KeyedEventWrapper<T extends any[]> {
  /**
   * Simple implementation of a key-based event class.
   * @class
   */
  constructor()

  /**
   * Return an EventWrapper for the given `key`.
   * The EventWrapper holds all callbacks added with the same `key`, and is triggered when `trigger` is called with the same `key`.
   * @param {string} key Key
   * @param {boolean=} createIfMissing If the wrapper is missing, a new one will be created.
   * @returns {EventWrapper<T>?}
   */
  getWrapper(key: string, createIfMissing?: boolean): EventWrapper<T> | null

  /**
   * Add a callback function tied to the given `key`.
   * The callback function will be executed when this KeyedEventWrapper is triggered using the same `key`.
   * @param {string} key Key
   * @param {(...args:T)=>void} callback Callback function to execute
   * @returns {(...args:T)=>void} Callback passed in, can be used with `remove()`
   */
  add(key: string, callback: (...args: T) => void): (...args: T) => void

  /**
   * Remove a callback function tied to the given `key`.
   * @param {string} key Key that was used to add the callback function
   * @param {(...args : T)=>void} callback Callback function to remove
   */
  remove(key: string, callback: (...args: T) => void): void

  /**
   * Add a callback function that will be executed any time a trigger occurs.
   * The first argument for the callback function is the key, the rest of the arguments are what get passed to the trigger.
   * @param {(key:string, ...args: T)=>void} callback Callback function to execute when any trigger occurs
   * @returns {(key:string, ...args: T)=>void} Callback passed in, can be used with `removeAny()`
   */
  addAny(
    callback: (key: string, ...args: T) => void
  ): (key: string, ...args: T) => void

  /**
   * Remove a callback function that was added using `addAny()`.
   * @param {(key:string, ...args:T)=>void} callback Callback function to remove
   */
  removeAny(callback: (key: string, ...args: T) => void): void

  /**
   * Trigger all callback functions that were added using the same `key`.
   * All arguments after `key` will be passed to the callback functions.
   * @param {string} key Key of the events to trigger
   * @param {...T} args Additional arguments to pass to callbacks
   */
  trigger(key: string, ...args: T): void
}
