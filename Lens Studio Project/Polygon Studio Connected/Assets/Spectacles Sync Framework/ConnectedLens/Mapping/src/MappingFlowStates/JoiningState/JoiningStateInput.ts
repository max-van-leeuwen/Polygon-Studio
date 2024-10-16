import {TutorialInput} from "../../UI/MappingFlow/Tutorial/TutorialInput"
import {TextMappingHintInput} from "../../UI/MappingFlow/TextMappingHint/TextMappingHintInput"
import {TextMappingHintParametersInput} from "../../UI/MappingFlow/TextMappingHint/TextMappingHintParametersInput"
import {TutorialParametersInput} from "../../UI/MappingFlow/Tutorial/TutorialParametersInput"

@component
export class JoiningStateInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly tutorialNotificationInput: TutorialInput

  @input
  readonly textMappingHintInput: TextMappingHintInput

  @input
  readonly spinner: SceneObject

  @input
  readonly textMappingHintTimingsInput: TextMappingHintParametersInput

  @input
  readonly tutorialParametersInput: TutorialParametersInput

}
