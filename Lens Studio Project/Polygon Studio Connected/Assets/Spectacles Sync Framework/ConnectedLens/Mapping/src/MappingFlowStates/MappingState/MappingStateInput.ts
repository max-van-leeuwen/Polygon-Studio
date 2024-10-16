import { ProgressBarInput } from "../../UI/MappingFlow/ProgressBar/ProgressBarInput"
import { TextMappingHintInput } from "../../UI/MappingFlow/TextMappingHint/TextMappingHintInput"
import { TutorialInput } from "../../UI/MappingFlow/Tutorial/TutorialInput"
import {TextMappingHintParametersInput} from "../../UI/MappingFlow/TextMappingHint/TextMappingHintParametersInput"
import {TutorialParametersInput} from "../../UI/MappingFlow/Tutorial/TutorialParametersInput"
import {ProgressBarParametersInput} from "../../UI/MappingFlow/ProgressBar/ProgressBarParametersInput"


@component
export class MappingStateInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly tutorialNotificationInput: TutorialInput

  @input
  readonly mappingProgressInput: ProgressBarInput

  @input
  readonly progressBarParametersInput: ProgressBarParametersInput

  @input
  readonly textMappingHintInput: TextMappingHintInput

  @input
  readonly textMappingHintTimingsInput: TextMappingHintParametersInput

  @input
  readonly tutorialParametersInput: TutorialParametersInput

}
