import WorldCameraFinderProvider from "../../../../../SpectaclesInteractionKit/Providers/CameraProvider/WorldCameraFinderProvider"
import {lerp} from "../../../../../SpectaclesInteractionKit/Utils/mathUtils"
import {getPasses, setAlpha} from "../../Utils/SharedFunctions"

export class StartPointAlphaAnimation {
  private readonly worldCamera = WorldCameraFinderProvider.getInstance()

  private readonly worldCameraTransform = this.worldCamera.getTransform()

  private readonly updateEvent: SceneEvent

  private readonly minDistance: number = 30

  private readonly maxDistance: number = 130

  private readonly startPointPasses: Pass[] = []

  private startPoint: vec3 = vec3.zero()

  private currentAlpha: number = 1

  constructor(
    script: ScriptComponent,
    private readonly startPointObject: SceneObject
  ) {
    this.fillPassesArray(startPointObject)
    this.updateEvent = script.createEvent("UpdateEvent")
    this.updateEvent.bind(this.onUpdate)
    this.updateEvent.enabled = false
  }

  start(startPoint: vec3) {
    this.startPoint = startPoint
    this.updateEvent.enabled = true
  }

  stop() {
    this.updateEvent.enabled = false
  }

  private onUpdate = () => {
    const distance = this.worldCameraTransform
      .getWorldPosition()
      .distance(this.startPoint)
    if (distance > this.maxDistance) {
      this.setAlpha(lerp(this.currentAlpha, 1, 3 * getDeltaTime()))
    } else if (distance < this.minDistance) {
      this.setAlpha(lerp(this.currentAlpha, 0, 3 * getDeltaTime()))
    } else {
      this.setAlpha(
        lerp(
          this.currentAlpha,
          distance / (this.maxDistance - this.minDistance),
          3 * getDeltaTime()
        )
      )
    }
  }

  private setAlpha(value: number) {
    setAlpha(this.startPointObject, value)
    this.startPointPasses.forEach((pass) => (pass.alpha = value))
    this.currentAlpha = value
  }

  private fillPassesArray(object: SceneObject): void {
    const pass = getPasses(object)
    if (pass) {
      pass.forEach((value) => {
        this.startPointPasses.push(value)
      })
    }

    for (let i = 0; i < object.getChildrenCount(); ++i) {
      const child = object.getChild(i)
      this.fillPassesArray(child)
    }
  }
}
