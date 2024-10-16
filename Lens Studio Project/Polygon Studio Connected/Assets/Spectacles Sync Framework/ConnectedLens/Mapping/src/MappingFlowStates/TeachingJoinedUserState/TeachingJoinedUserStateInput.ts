import { TutorialInput } from "../../UI/MappingFlow/Tutorial/TutorialInput"
import { ObjectLocatorInput } from "../../UI/ObjectLocator/ObjectLocatorInput"
import {TutorialParametersInput} from "../../UI/MappingFlow/Tutorial/TutorialParametersInput"

@component
export class TeachingJoinedUserStateInput extends BaseScriptComponent {

  script: ScriptComponent

  @input
  readonly tutorialNotificationInput: TutorialInput

  @input
  readonly objectLocatorInput: ObjectLocatorInput

  @input
  readonly tutorialParametersInput: TutorialParametersInput

}
