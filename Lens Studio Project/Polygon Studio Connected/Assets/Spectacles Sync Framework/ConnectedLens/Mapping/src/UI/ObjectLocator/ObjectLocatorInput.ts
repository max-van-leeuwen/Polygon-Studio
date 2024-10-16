@component
export class ObjectLocatorInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly root: SceneObject

  @input
  readonly hintRoot: SceneObject

  @input
  readonly startPointRoot: SceneObject

  @input
  readonly arrow: RenderMeshVisual

  @input
  readonly startPointObject: SceneObject

  @input
  readonly hintText: Text

  @input
  readonly teachingText: Text

  @input ("float", "0.3")
  @hint("Time in seconds for scaling the object locator In")
  readonly scalingInTime: number

  @input ("float", "0.3")
  @hint("Time in seconds for scaling the object locator Out")
  readonly scalingOutTime: number

}
