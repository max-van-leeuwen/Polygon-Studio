import { Update } from "./Update"
import { Tween, update as tweenEngineUpdate } from "./tween"

type UnknownProps = Record<string, any>;

export class TweenFactory {
  private static tweenEngineInitialized = false;
  static create<T extends UnknownProps>(
    from: T,
    to: T,
    duration: number
  ): Tween<T> {
    if (!TweenFactory.tweenEngineInitialized) {
      Update.register((time, deltaTime) => {
        tweenEngineUpdate(time);
        return true;
      });
      TweenFactory.tweenEngineInitialized = true;
    }

    return new Tween(from).to(to, duration).start(getTime());
  }
}
