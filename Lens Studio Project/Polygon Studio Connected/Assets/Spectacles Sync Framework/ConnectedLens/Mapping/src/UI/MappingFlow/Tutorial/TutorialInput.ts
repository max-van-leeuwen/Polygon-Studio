import {HeadLockBehaviorInput} from "../../../Utils/HeadLockBehavior/HeadLockBehaviorInput"

@component
export class TutorialInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly headLockBehaviorInput: HeadLockBehaviorInput

  @input
  readonly tutorialAnimationPlayer: AnimationPlayer

  @input
  readonly root: SceneObject

  @input
  readonly mainObject: SceneObject

  @input
  readonly connectedPlayerObject: SceneObject

  @input
  readonly tutorialGlasses: SceneObject

  @input
  readonly tile: RenderMeshVisual

  @input
  readonly tutorialTitle: Text

  @input
  readonly tutorialText: Text

}
