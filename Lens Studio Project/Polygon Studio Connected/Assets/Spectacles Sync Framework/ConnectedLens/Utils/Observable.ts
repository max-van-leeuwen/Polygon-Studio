import Event, {PublicApi} from "../../SpectaclesInteractionKit/Utils/Event"

/*
 * An PublicObservable is a value that allows a consumer to subscribe to
 * OnChanged callbacks. This interface is read-only.
 */
export interface PublicObservable<T> {
  // The current value
  readonly value: T

  onChanged: PublicApi<T>
}

// A value that allows consumers to register for OnChanged callbacks
// that are triggered whenever the value is set.
export default class Observable<T> implements PublicObservable<T> {
  private val: T
  private onChangedEvent = new Event<T>()
  public onChanged = this.onChangedEvent.publicApi()

  // Gets the current value
  public get value(): T {
    return this.val
  }

  // Sets the current value. Will trigger an onChanged callback if
  // the value has changed.
  public set value(val: T) {
    this.set(val)
  }

  // Sets the current value. Will trigger an onChanged callback if
  // the value has changed.
  public set(val: T): boolean {
    if (this.val !== val) {
      this.val = val

      this.onChangedEvent.invoke(val)
      return true
    }
    return false
  }

  constructor(val: T) {
    this.val = val
  }
}
