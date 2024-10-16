import animate, {
  CancelFunction,
} from "../../../../../../SpectaclesInteractionKit/Utils/animate"
import {lerp} from "../../../../../../SpectaclesInteractionKit/Utils/mathUtils"
import {ITitledText} from "../../../Texts/ITitledText"
import {setAlpha} from "../../../Utils/SharedFunctions"
import {TextMappingHintInput} from "./TextMappingHintInput"
import {TextMappingHintParametersInput} from "./TextMappingHintParametersInput"

export class TextMappingHint {
  private textAnimation: CancelFunction

  private delayEvent: DelayedCallbackEvent

  private hintSet: ITitledText[]

  private currentTextAlpha: number = 0

  private isFirstTimeMapping: boolean = true

  constructor(
    private readonly input: TextMappingHintInput,
    private readonly animationParameters: TextMappingHintParametersInput
  ) {
    setAlpha(input.root, 0)
    input.root.enabled = false
  }

  start(hintSet: ITitledText[], delayBeforeStart: number) {
    this.input.root.enabled = true
    this.hintSet = hintSet
    this.delayEvent = this.input.script.createEvent("DelayedCallbackEvent")
    this.delayEvent.bind(() => {
      this.showText(0)
    })
    this.delayEvent.reset(this.isFirstTimeMapping ? delayBeforeStart : 1)
    this.isFirstTimeMapping = false
  }

  stop() {
    this.input.root.enabled = false
    this.textAnimation?.()
    this.delayEvent?.cancel()
    this.hideTextOnStop()
  }

  private showText(id: number) {
    this.delayEvent = this.input.script.createEvent("DelayedCallbackEvent")
    this.delayEvent.bind(() => {
      this.input.hintTitle.text = this.hintSet[id].title
      this.input.hintText.text = this.hintSet[id].text
      this.textAnimation = this.animateToAlpha(
        this.input.root,
        0,
        1,
        this.animationParameters.fadeInTime,
        () => this.hideText(id)
      )
    })
    this.delayEvent.reset(this.animationParameters.delayTime)
  }

  private hideText(id: number) {
    this.delayEvent = this.input.script.createEvent("DelayedCallbackEvent")
    this.delayEvent.bind(() => {
      this.textAnimation = this.animateToAlpha(
        this.input.root,
        1,
        0,
        this.animationParameters.fadeOutTime,
        () => this.showText((id + 1) % this.hintSet.length)
      )
    })
    this.delayEvent.reset(this.animationParameters.displayTime)
  }

  private hideTextOnStop() {
    if (this.currentTextAlpha === 0) {
      setAlpha(this.input.root, 0)
      return
    }
    this.textAnimation = this.animateToAlpha(
      this.input.root,
      this.currentTextAlpha,
      0,
      this.animationParameters.earlyFadeOutTime
    )
  }

  private animateToAlpha(
    target: SceneObject,
    from: number,
    to: number,
    duration: number,
    onComplete: () => void = () => {}
  ): CancelFunction {
    return animate({
      update: (t: number) => {
        const currentAlpha = lerp(from, to, t)
        this.currentTextAlpha = currentAlpha
        setAlpha(target, currentAlpha)
      },
      start: 0,
      end: 1,
      duration: duration,
      ended: onComplete,
    })
  }
}
