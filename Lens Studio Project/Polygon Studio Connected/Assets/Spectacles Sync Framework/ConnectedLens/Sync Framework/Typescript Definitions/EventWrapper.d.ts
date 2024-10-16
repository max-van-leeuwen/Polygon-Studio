declare class EventWrapper<T extends any[]> {
  /**
   * Simple implementation of an event class. Add callbacks to be notified when the event is triggered.
   * @class
   */
  constructor()

  add(func: (...args: T) => void): (...args: T) => void
  remove(func: (...args: T) => void): void
  trigger(func: (...args: T) => void): void
}
