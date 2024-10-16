import WorldCameraFinderProvider from "../../../../../SpectaclesInteractionKit/Providers/CameraProvider/WorldCameraFinderProvider"
import animate, {
  CancelFunction,
  easingFunctions,
} from "../../../../../SpectaclesInteractionKit/Utils/animate"
import {
  clamp,
  lerp,
} from "../../../../../SpectaclesInteractionKit/Utils/mathUtils"
import {HeadLockBehaviorInput} from "./HeadLockBehaviorInput"
import {IHeadLockBehavior} from "./IHeadLockBehavior"
import {SecondOrderDynamics} from "./SecondOrderDynamics"

export default class HeadLockBehavior {
  private readonly worldCameraObject = WorldCameraFinderProvider.getInstance()

  private readonly cameraTransform: Transform =
    this.worldCameraObject.getTransform()

  private readonly updateEvent: SceneEvent

  private readonly objectMovingDurationOnStart: number = 0.3

  private readonly objectMovingDurationReturnBack: number = 0.85

  private readonly maxDistanceToCorners = 23.2

  private readonly maxDistance = 50

  private readonly config: IHeadLockBehavior

  private readonly dynamics: SecondOrderDynamics

  private readonly maxCounterToSkipPositionUpdate: number = 10

  private currentCounterToSkipPositionUpdate: number = 0

  private objectIsMoving: boolean = false

  private previousProcessedRotation: vec3 = vec3.zero()

  private previousProcessedPosition: vec3 = vec3.zero()

  private previousTargetObjectPosition: vec3 = vec3.zero()

  private previousObjectRotation: quat = null

  private cancelFunction: CancelFunction | null = null

  private shiftVector: vec3 = vec3.zero()

  private isHeadLockActive = false

  private updatePosition = false

  private onUpdate = () => {
    this.updateObjectRotation()
    if (this.updatePosition) {
      this.updateObjectPosition()
    }
  }

  constructor(
    private readonly input: HeadLockBehaviorInput,
    private readonly objectTransform: Transform
  ) {
    this.config = {
      distance: this.input.distance,
      bufferRotationDegrees: this.input.bufferRotationDegrees,
      bufferTranslationCentimeters: this.input.bufferTranslationCentimeters,
    }

    this.updateEvent = this.input.createEvent("UpdateEvent")
    this.updateEvent.bind(this.onUpdate)
    this.updateEvent.enabled = false

    this.dynamics = new SecondOrderDynamics(
      input.frequencyCoefficient,
      input.dampingCoefficient,
      input.underShockCoefficient,
      vec3.zero()
    )
  }

  start(needToBeAnimatedToStartPos: boolean = false) {
    this.isHeadLockActive = true
    this.updateObjectRotation(true)
    this.updatePosition = !needToBeAnimatedToStartPos
    this.updateEvent.enabled = true
    if (needToBeAnimatedToStartPos) {
      const newObjectPos = this.calculateObjectPosInFrontOfCamera()
      const distance = newObjectPos.distance(
        this.objectTransform.getWorldPosition()
      )
      this.cancelFunction = this.animateToPosition(
        this.objectTransform,
        newObjectPos,
        lerp(
          0,
          this.objectMovingDurationOnStart,
          clamp(distance, 0, this.maxDistance) / this.maxDistance
        ),
        () => {
          this.updatePosition = this.isHeadLockActive
          if (this.updatePosition) {
            this.dynamics.reset(this.objectTransform.getWorldPosition())
          }
        }
      )
    }

    if (this.updatePosition) {
      this.dynamics.reset(this.objectTransform.getWorldPosition())
    }
  }

  stop() {
    this.isHeadLockActive = false
    this.cancelFunction?.()
    this.updatePosition = false
    this.updateEvent.enabled = false
  }

  set distance(value: number) {
    this.config.distance = value
  }

  set bufferRotationDegrees(value: number) {
    this.config.bufferRotationDegrees = value
  }

  set bufferTranslationCentimeters(value: number) {
    this.config.bufferTranslationCentimeters = value
  }

  private get maxOffsetFromCenter() {
    return this.config.bufferRotationDegrees * MathUtils.DegToRad
  }

  private moveObjectToFOV(onComplete: () => void, currentScale?: vec3) {
    const newObjectPos = this.calculateObjectPosition(currentScale)
    const distance = newObjectPos.distance(
      this.objectTransform.getWorldPosition()
    )
    this.cancelFunction = this.animateObjectMovingToFOV(
      this.objectTransform,
      lerp(
        0.5,
        this.objectMovingDurationReturnBack,
        clamp(distance, 0, this.maxDistance) / this.maxDistance
      ),
      onComplete,
      "ease-out-back-cubic"
    )
  }

  private calculateObjectPosition(currentScale?: vec3) {
    let leftCoefficient = 0,
      rightCoefficient = 100
    const EPS = 1e-4

    const centerPosition = this.calculateObjectPosInFrontOfCamera()
    const currentPosition = this.calculateWorldPosProjectedOnPlane()

    while (rightCoefficient - leftCoefficient > EPS) {
      const middleCoefficient = (leftCoefficient + rightCoefficient) / 2
      const newPos = vec3.lerp(
        centerPosition,
        currentPosition,
        middleCoefficient / 100
      )
      const containerCorners = this.getObjectCornersByPos(newPos, currentScale)
      if (
        this.pointDistanceIsLessThanMaxDeflection(
          centerPosition,
          containerCorners
        )
      ) {
        leftCoefficient = middleCoefficient
      } else {
        rightCoefficient = middleCoefficient
      }
    }
    const res = vec3.lerp(
      centerPosition,
      currentPosition,
      leftCoefficient / 100
    )
    this.shiftVector = this.calculateLocalShiftVecByCurrentPos(res)
    return this.calculateObjectPosWithShift(this.shiftVector)
  }

  private calculateWorldPosProjectedOnPlane(): vec3 {
    const lastPosition = this.objectTransform.getWorldPosition()
    const projectedPosition = lastPosition
      .sub(this.cameraTransform.getWorldPosition())
      .projectOnPlane(this.cameraTransform.forward)
      .add(this.cameraTransform.getWorldPosition())
    const direction = this.cameraTransform.back.uniformScale(
      this.config.distance
    )
    return projectedPosition.add(direction)
  }

  private calculateLocalShiftVecByCurrentPos(pos: vec3): vec3 {
    const centerPosition = this.calculateObjectPosInFrontOfCamera()
    const shift = this.worldVecToLocalVec(pos.sub(centerPosition))
    shift.z = 0
    return shift
  }

  private worldVecToLocalVec(value: vec3): vec3 {
    return this.cameraTransform.getWorldRotation().invert().multiplyVec3(value)
  }

  private calculateObjectPosWithShift(shift: vec3): vec3 {
    return this.calculateObjectPosInFrontOfCamera()
      .add(this.cameraTransform.right.uniformScale(shift.x))
      .add(this.cameraTransform.up.uniformScale(shift.y))
      .add(this.cameraTransform.forward.uniformScale(shift.z))
  }

  private calculateObjectPosInFrontOfCamera(): vec3 {
    return this.cameraTransform
      .getWorldPosition()
      .add(this.cameraTransform.back.uniformScale(this.config.distance))
  }

  private updateObjectPosition() {
    const currentRotation = this.cameraTransform.back
    const offsetAngle = this.previousProcessedRotation.angleTo(currentRotation)

    const currentPosition = this.cameraTransform.getWorldPosition()
    const offsetDistance = currentPosition.distance(
      this.previousProcessedPosition
    )

    if (this.needToUpdateObjectPosition(offsetAngle, offsetDistance)) {
      const pos = this.dynamics.update(
        getDeltaTime() * this.input.timeCoefficient,
        this.calculateObjectPosWithShift(this.shiftVector)
      )
      this.objectTransform.setWorldPosition(pos)

      this.previousProcessedRotation = currentRotation
      this.previousProcessedPosition = currentPosition
      this.previousTargetObjectPosition = this.calculateObjectPosWithShift(
        this.shiftVector
      )

      this.objectIsMoving = true
    } else {
      const pos = this.dynamics.update(
        getDeltaTime() * this.input.timeCoefficient,
        this.previousTargetObjectPosition
      )
      this.objectTransform.setWorldPosition(pos)

      this.objectIsMoving = false
    }
  }

  private needToUpdateObjectPosition(
    offsetAngle: number,
    offsetDistance: number
  ): boolean {
    const needToUpdate =
      offsetAngle > this.maxOffsetFromCenter ||
      offsetDistance > this.config.bufferTranslationCentimeters
    if (needToUpdate) {
      this.currentCounterToSkipPositionUpdate = 0
    } else {
      ++this.currentCounterToSkipPositionUpdate
    }
    return (
      this.currentCounterToSkipPositionUpdate <
      this.maxCounterToSkipPositionUpdate
    )
  }

  private updateObjectRotation(immediatelyUpdate: boolean = false) {
    const cameraUpVec = this.cameraTransform.up
    const cameraForwardVec = this.cameraTransform.forward
    const cameraRightVec = this.cameraTransform.right
    const normalVec = cameraRightVec.projectOnPlane(vec3.up()).normalize()
    const dist = normalVec.dot(cameraUpVec)
    const projectedUp = cameraUpVec.sub(normalVec.uniformScale(dist))
    let newRot
    if (
      this.objectIsMoving ||
      !this.previousObjectRotation ||
      immediatelyUpdate
    ) {
      newRot = quat.lookAt(cameraForwardVec, projectedUp)
      this.previousObjectRotation = newRot
    } else {
      newRot = this.previousObjectRotation
    }
    if (immediatelyUpdate) {
      this.objectTransform.setWorldRotation(newRot)
    } else {
      this.objectTransform.setWorldRotation(
        quat.slerp(
          this.objectTransform.getWorldRotation(),
          newRot,
          6 * getDeltaTime()
        )
      )
    }
  }

  private getObjectCornersByPos(value: vec3, currentScale?: vec3): vec3[] {
    let scale
    if (currentScale) {
      scale = currentScale
    } else {
      scale = this.objectTransform.getWorldScale()
    }
    return [
      value
        .add(this.cameraTransform.up.uniformScale(scale.y / 2))
        .add(this.cameraTransform.left.uniformScale(scale.x / 2)),
      value
        .add(this.cameraTransform.up.uniformScale(scale.y / 2))
        .add(this.cameraTransform.right.uniformScale(scale.x / 2)),
      value
        .add(this.cameraTransform.down.uniformScale(scale.y / 2))
        .add(this.cameraTransform.left.uniformScale(scale.x / 2)),
      value
        .add(this.cameraTransform.down.uniformScale(scale.y / 2))
        .add(this.cameraTransform.right.uniformScale(scale.x / 2)),
    ]
  }

  /**
   * Animate the SceneObject moving to the given position.
   */
  private animateToPosition(
    transform: Transform,
    position: vec3,
    duration: number,
    onComplete: () => void = () => {}
  ): CancelFunction {
    const startPosition = transform.getWorldPosition()
    const endPosition = position
    return animate({
      update: (t: number) => {
        const currentPosition = vec3.lerp(startPosition, endPosition, t)
        transform.setWorldPosition(currentPosition)
      },
      start: 0,
      end: 1,
      duration: duration,
      ended: onComplete,
    })
  }

  private animateObjectMovingToFOV(
    transform: Transform,
    duration: number,
    onComplete: () => void = () => {},
    easing?: keyof typeof easingFunctions
  ): CancelFunction {
    const startPosition = transform.getWorldPosition()
    return animate({
      update: (t: number) => {
        const endPosition = this.calculateObjectPosWithShift(this.shiftVector)
        const currentPosition = vec3.lerp(startPosition, endPosition, t)
        transform.setWorldPosition(currentPosition)
      },
      start: 0,
      end: 1,
      duration: duration,
      easing: easing,
      ended: onComplete,
    })
  }

  private pointDistanceIsLessThanMaxDeflection(center: vec3, points: vec3[]) {
    for (const point of points) {
      if (point.distance(center) > this.maxDistanceToCorners) {
        return false
      }
    }
    return true
  }
}
