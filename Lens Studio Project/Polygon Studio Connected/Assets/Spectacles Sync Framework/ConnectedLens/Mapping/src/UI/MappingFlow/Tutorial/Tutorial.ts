import animate, {
  CancelFunction,
  easingFunctions,
} from "../../../../../../SpectaclesInteractionKit/Utils/animate"
import {TextValues} from "../../../Texts/TextValues"
import HeadLockBehavior from "../../../Utils/HeadLockBehavior/HeadLockBehavior"
import {setObjectInTheWorldOnDistance} from "../../../Utils/SharedFunctions"
import {TutorialInput} from "./TutorialInput"
import {TutorialParametersInput} from "./TutorialParametersInput"
import {TutorialTypeEnum} from "./TutorialTypeEnum"

export class Tutorial {
  private readonly headlockedRootTransform: Transform

  private readonly mainObjectTransform: Transform

  private readonly tutorialGlassesTransform: Transform

  private readonly tilePass: Pass

  private readonly headlockBehavior: HeadLockBehavior

  private readonly startScale: vec3

  private readonly glassesStartScale: vec3

  private readonly mappingClipName: string = "Mapping"

  private readonly teachingClipName: string = "Teaching"

  private duration: number

  private wasTutorialHide: boolean = true

  private delayedEvent: DelayedCallbackEvent

  private delayedGlassesScaleEvent: DelayedCallbackEvent

  private tutorialScaleCancelFunction: CancelFunction

  private glassesScaleCancelFunction: CancelFunction

  private headShowCancelFunction: CancelFunction

  private rotationDelayEvent: DelayedCallbackEvent

  constructor(
    private readonly input: TutorialInput,
    private readonly animationParameters: TutorialParametersInput
  ) {
    this.headlockedRootTransform = input.root.getTransform()
    this.mainObjectTransform = input.mainObject.getTransform()
    this.startScale = this.mainObjectTransform.getLocalScale()
    this.tilePass = input.tile.mainMaterial.mainPass
    this.headlockBehavior = new HeadLockBehavior(
      input.headLockBehaviorInput,
      this.headlockedRootTransform
    )
    this.tutorialGlassesTransform = this.input.tutorialGlasses.getTransform()
    this.glassesStartScale = this.tutorialGlassesTransform.getLocalScale()
    this.input.tutorialGlasses.enabled = false
    input.root.enabled = false
  }

  start(type: TutorialTypeEnum) {
    this.duration = this.getDurationByAnimationType(type)
    if (type === TutorialTypeEnum.TutorialP1) {
      this.input.connectedPlayerObject.enabled = false
      this.input.tutorialAnimationPlayer.getClip(
        this.mappingClipName
      ).weight = 1
      this.input.tutorialAnimationPlayer.getClip(
        this.teachingClipName
      ).weight = 0
      this.input.tutorialAnimationPlayer.playClipAt(
        this.mappingClipName,
        this.input.tutorialAnimationPlayer.getClip(this.mappingClipName).begin
      )
    } else {
      this.input.connectedPlayerObject.enabled = true
      this.input.tutorialAnimationPlayer.getClip(
        this.mappingClipName
      ).weight = 0
      this.input.tutorialAnimationPlayer.getClip(
        this.teachingClipName
      ).weight = 1
      this.input.tutorialAnimationPlayer.playClipAt(
        this.teachingClipName,
        this.input.tutorialAnimationPlayer.getClip(this.teachingClipName).begin
      )
      this.delayedGlassesScaleEvent = this.input.script.createEvent(
        "DelayedCallbackEvent"
      )
      this.delayedGlassesScaleEvent.bind(() => {
        this.showGlassesScaleUpAnimation()
        this.delayedGlassesScaleEvent.bind(() => {
          this.showGlassesScaleDownAnimation()
          this.delayedGlassesScaleEvent.bind(() => {})
          this.delayedGlassesScaleEvent.reset(4.3)
        })
        this.delayedGlassesScaleEvent.reset(5.3)
      })
      this.delayedGlassesScaleEvent.reset(2.0)
    }

    setObjectInTheWorldOnDistance(
      this.input.root,
      this.animationParameters.endDistance,
      true
    )
    this.initTutorialUI(type)
    this.showTutorialScaleUpAnimation()
    this.input.root.enabled = true
    this.headlockBehavior.start()
    this.delayedEvent = this.input.script.createEvent("DelayedCallbackEvent")
    this.delayedEvent.bind(() => {
      this.showTutorialScaleDownAnimation()
    })
    this.delayedEvent.reset(this.duration)
    this.wasTutorialHide = false
  }

  stop() {
    this.tutorialScaleCancelFunction?.()
    this.glassesScaleCancelFunction?.()
    this.headShowCancelFunction?.()
    this.rotationDelayEvent?.cancel()
    this.headlockBehavior.stop()
    this.delayedEvent?.cancel()
    this.delayedGlassesScaleEvent?.cancel()
    this.input.root.enabled = false
    if (!this.wasTutorialHide) {
      this.showTutorialScaleDownAnimation()
    }
    this.input.tutorialGlasses.enabled = false
  }

  getDurationByAnimationType(type: TutorialTypeEnum): number {
    if (type === TutorialTypeEnum.TutorialP1) {
      return (
        this.input.tutorialAnimationPlayer.getClip(this.mappingClipName)
          .duration /
        this.input.tutorialAnimationPlayer.getClip(this.mappingClipName)
          .playbackSpeed
      )
    }
    return (
      this.input.tutorialAnimationPlayer.getClip(this.teachingClipName)
        .duration /
      this.input.tutorialAnimationPlayer.getClip(this.teachingClipName)
        .playbackSpeed
    )
  }

  private showTutorialScaleUpAnimation() {
    this.mainObjectTransform.setLocalScale(
      this.startScale.uniformScale(
        this.animationParameters.scaleCoefficientInitial
      )
    )
    this.tutorialScaleCancelFunction = this.animateScale(
      this.mainObjectTransform,
      this.mainObjectTransform.getLocalScale(),
      this.startScale,
      this.animationParameters.scaleUpTime,
      "ease-out-back"
    )
  }

  private showTutorialScaleDownAnimation() {
    this.tutorialScaleCancelFunction = this.animateScale(
      this.mainObjectTransform,
      this.mainObjectTransform.getLocalScale(),
      this.startScale.uniformScale(
        this.animationParameters.scaleCoefficientInitial
      ),
      this.animationParameters.scaleDownTime,
      "ease-in-back",
      () => {
        this.wasTutorialHide = true
        this.input.root.enabled = false
      }
    )
  }

  private showGlassesScaleUpAnimation() {
    this.tutorialGlassesTransform.setLocalScale(
      this.glassesStartScale.uniformScale(
        this.animationParameters.scaleCoefficientInitial
      )
    )
    this.input.tutorialGlasses.enabled = true
    this.glassesScaleCancelFunction = this.animateScale(
      this.tutorialGlassesTransform,
      this.tutorialGlassesTransform.getLocalScale(),
      this.glassesStartScale,
      this.animationParameters.scaleUpTime,
      "ease-out-back"
    )
  }

  private showGlassesScaleDownAnimation() {
    this.glassesScaleCancelFunction = this.animateScale(
      this.tutorialGlassesTransform,
      this.tutorialGlassesTransform.getLocalScale(),
      this.glassesStartScale.uniformScale(
        this.animationParameters.scaleCoefficientInitial
      ),
      this.animationParameters.scaleDownTime,
      "ease-in-back",
      () => {
        this.input.tutorialGlasses.enabled = false
      }
    )
  }

  private initTutorialUI(type: TutorialTypeEnum): void {
    switch (type) {
      case TutorialTypeEnum.TutorialP1:
        this.input.tutorialTitle.text = TextValues.TUTORIAL_P1.title
        this.input.tutorialText.text = TextValues.TUTORIAL_P1.text
        break
      case TutorialTypeEnum.TutorialP1TeachP2:
        this.input.tutorialTitle.text = TextValues.TUTORIAL_P1_TEACHES_P2.title
        this.input.tutorialText.text = TextValues.TUTORIAL_P1_TEACHES_P2.text
        break
      case TutorialTypeEnum.TutorialP2:
        this.input.tutorialTitle.text = TextValues.TUTORIAL_P2.title
        this.input.tutorialText.text = TextValues.TUTORIAL_P2.text
        break
    }
  }

  private animateScale(
    transform: Transform,
    from: vec3,
    to: vec3,
    duration: number,
    easing: keyof typeof easingFunctions,
    onComplete: () => void = () => {}
  ): CancelFunction {
    return animate({
      update: (t: number) => {
        const currentScale = vec3.lerp(from, to, t)
        transform.setLocalScale(currentScale)
      },
      start: 0,
      end: 1,
      duration: duration,
      easing: easing,
      ended: onComplete,
    })
  }
}
