@component
export class WaitingForMappingStateInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly root: SceneObject

  @input
  readonly waitingText: Text

}
