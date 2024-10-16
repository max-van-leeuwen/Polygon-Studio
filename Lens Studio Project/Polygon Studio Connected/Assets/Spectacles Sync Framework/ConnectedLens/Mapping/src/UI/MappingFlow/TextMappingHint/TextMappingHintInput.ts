@component
export class TextMappingHintInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly root: SceneObject

  @input
  readonly hintTitle: Text

  @input
  readonly hintText: Text

}
