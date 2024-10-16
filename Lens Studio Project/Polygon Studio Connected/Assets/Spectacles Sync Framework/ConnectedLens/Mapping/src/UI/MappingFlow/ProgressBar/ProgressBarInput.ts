@component
export class ProgressBarInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly root: SceneObject

  @input
  readonly progressBar: RenderMeshVisual

}
