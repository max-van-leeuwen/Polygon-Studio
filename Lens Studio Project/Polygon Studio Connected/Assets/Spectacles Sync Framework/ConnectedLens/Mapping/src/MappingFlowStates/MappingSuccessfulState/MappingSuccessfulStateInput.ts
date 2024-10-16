@component
export class MappingSuccessfulStateInput extends BaseScriptComponent {
  script: ScriptComponent

  @input
  readonly root: SceneObject

  @input
  readonly mappingSuccessfullyDoneText: Text

  @input
  successAudioTrack: AudioTrackAsset

  @input
  tickMeshVisual: RenderMeshVisual

  @input
  tickAnimation: SceneObject
}
