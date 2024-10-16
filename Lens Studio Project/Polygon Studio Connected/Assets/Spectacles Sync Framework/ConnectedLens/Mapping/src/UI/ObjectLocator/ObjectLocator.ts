import WorldCameraFinderProvider from "../../../../../SpectaclesInteractionKit/Providers/CameraProvider/WorldCameraFinderProvider"
import animate, {
  CancelFunction,
  easingFunctions,
} from "../../../../../SpectaclesInteractionKit/Utils/animate"
import {lerp} from "../../../../../SpectaclesInteractionKit/Utils/mathUtils"
import {TextValues} from "../../Texts/TextValues"
import {ProjectContainer} from "../../Utils/ProjectContainer"
import {Easing, Tween} from "./animations/tween"
import {TweenFactory} from "./animations/TweenFactory"
import {ObjectLocatorInput} from "./ObjectLocatorInput"
import {StartPointAlphaAnimation} from "./StartPointAlphaAnimation"

export class ObjectLocator {
  private readonly worldCamera = WorldCameraFinderProvider.getInstance()

  private readonly startPointAlphaAnimation: StartPointAlphaAnimation

  private readonly arrowTransform: Transform

  private readonly startPointObjectTransform: Transform

  private readonly cameraTransform: Transform

  private readonly updateEvent: SceneEvent

  private readonly startScale: vec3

  private scaleCancelFunction: CancelFunction

  private arrowVisible = false

  private currentBlend = 0

  private currentRotation = quat.quatIdentity()

  private activeTween: Tween<any>

  constructor(
    private readonly input: ObjectLocatorInput,
    private readonly projectContainer: ProjectContainer
  ) {
    this.startPointAlphaAnimation = new StartPointAlphaAnimation(
      input.script,
      input.startPointObject
    )
    this.arrowTransform = this.input.arrow.getTransform()
    this.cameraTransform = this.worldCamera.getTransform()
    this.startPointObjectTransform = this.input.startPointObject.getTransform()
    this.startScale = this.startPointObjectTransform.getLocalScale()

    this.updateEvent = input.script.createEvent("UpdateEvent")
    this.updateEvent.bind(this.onUpdate)
    this.updateEvent.enabled = false

    input.root.enabled = false
    this.projectContainer.isUserAligned.onChanged((value) => {
      if (value) {
        this.scaleCancelFunction?.()
        this.showScaleDownAnimation()
      }
    })

    this.projectContainer.notifyOnUserToHelpChanged(this.onUserToHelpChanged)
  }

  start(joinedUserDisplayName: string) {
    this.scaleCancelFunction?.()
    this.input.hintText.text = TextValues.ALIGN_HINT_P1_TEACHES_P2.replace(
      TextValues.P2,
      joinedUserDisplayName
    )
    this.input.teachingText.text = TextValues.TEACHING_TEXT.replace(
      TextValues.P2,
      joinedUserDisplayName
    )
    this.startPointObjectTransform.setWorldPosition(
      this.projectContainer.startPointPosition
    )
    this.startPointObjectTransform.setWorldRotation(
      this.projectContainer.startPointRotation
    )
    this.showScaleUpAnimation()
    this.input.root.enabled = true
    this.updateEvent.enabled = true
    this.startPointAlphaAnimation.start(
      this.projectContainer.startPointPosition
    )
  }

  stop() {
    this.updateEvent.enabled = false
    this.hideArrow()
    this.input.hintRoot.enabled = false
  }

  private onUpdate = () => {
    const originPosition = this.cameraTransform.getWorldPosition()
    const objectPosition = this.projectContainer.startPointPosition
    const direction = objectPosition
      .sub(originPosition)
      .normalize()
      .mult(new vec3(1, 0, 1))
    const forward = this.cameraTransform.back.mult(new vec3(1, 0, 1))
    const delta = direction
      .normalize()
      .sub(forward.normalize())
      .uniformScale(100)
    const unsignedAngle = forward.angleTo(direction)

    const sign = vec3.up().dot(forward.cross(direction)) > 0 ? -1 : 1
    if (unsignedAngle > Math.PI * 0.7) {
      // show back arrow
      this.showArrow(unsignedAngle, sign, true)
    } else if (unsignedAngle < Math.PI * 0.1) {
      // hide arrow
      this.hideArrow()
    } else {
      // show side arrow
      this.showArrow(unsignedAngle, sign, false)
    }
  }

  private showArrow(unsignedAngle: number, sign: number, backArrow: boolean) {
    const targetRotation = backArrow
      ? quat.fromEulerAngles(0, Math.PI * 0.1, -Math.PI / 2)
      : sign > 0
      ? quat.fromEulerAngles(0, Math.PI / 2, 0)
      : quat.fromEulerAngles(-Math.PI / 2, Math.PI / 2, Math.PI / 2)

    const targetBlend = backArrow
      ? 0
      : this.map(unsignedAngle, Math.PI * 0.1, Math.PI * 0.7, 0.5, 0)

    if (!this.arrowVisible) {
      this.activeTween?.stop()
      const t = TweenFactory.create({a: 1}, {a: targetBlend}, 0.5)
        .onUpdate((v) => {
          this.input.arrow.setBlendShapeWeight("Key 1", v.a)
        })
        .easing(Easing.Back.Out)
      this.input.arrow.enabled = true
      this.activeTween = t
      this.arrowVisible = true

      this.currentRotation = targetRotation
      this.currentBlend = targetBlend
    }

    this.currentRotation = quat.slerp(this.currentRotation, targetRotation, 0.2)
    this.arrowTransform.setLocalRotation(this.currentRotation)

    this.currentBlend = lerp(this.currentBlend, targetBlend, 0.2)
    this.input.arrow.setBlendShapeWeight("Key 1", this.currentBlend)
  }

  private hideArrow() {
    if (!this.arrowVisible) {
      return
    }
    this.arrowVisible = false

    this.activeTween?.stop()
    const t = TweenFactory.create({a: this.currentBlend}, {a: 1}, 0.3)
      .onUpdate((v) => {
        this.input.arrow.setBlendShapeWeight("Key 1", v.a)
      })
      .onComplete(() => {
        this.input.arrow.enabled = false
      })
      .easing(Easing.Cubic.In)
    this.activeTween = t
  }

  private map(
    value: number,
    low1: number,
    high1: number,
    low2: number,
    high2: number
  ): number {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
  }

  private showScaleUpAnimation() {
    this.startPointObjectTransform.setLocalScale(
      this.startScale.uniformScale(0.7)
    )
    this.scaleCancelFunction = this.animateScale(
      this.startPointObjectTransform.getLocalScale(),
      this.startScale,
      0.3,
      "ease-out-back"
    )
  }

  private showScaleDownAnimation() {
    this.scaleCancelFunction = this.animateScale(
      this.startPointObjectTransform.getLocalScale(),
      this.startScale.uniformScale(0.7),
      0.3,
      "ease-in-back",
      () => {
        this.input.root.enabled = false
        this.startPointAlphaAnimation.stop()
      }
    )
  }

  private animateScale(
    from: vec3,
    to: vec3,
    duration: number,
    easing: keyof typeof easingFunctions,
    onComplete: () => void = () => {}
  ): CancelFunction {
    return animate({
      update: (t: number) => {
        const currentScale = vec3.lerp(from, to, t)
        this.startPointObjectTransform.setLocalScale(currentScale)
      },
      start: 0,
      end: 1,
      duration: duration,
      easing: easing,
      ended: onComplete,
    })
  }

  private onUserToHelpChanged = () => {
    if (this.projectContainer.joinedUsers.length > 0) {
      this.input.hintText.text = TextValues.ALIGN_HINT_P1_TEACHES_P2.replace(
        TextValues.P2,
        this.projectContainer.joinedUsers[0].displayName
      )
      this.input.teachingText.text = TextValues.TEACHING_TEXT.replace(
        TextValues.P2,
        this.projectContainer.joinedUsers[0].displayName
      )
    }
  }
}
