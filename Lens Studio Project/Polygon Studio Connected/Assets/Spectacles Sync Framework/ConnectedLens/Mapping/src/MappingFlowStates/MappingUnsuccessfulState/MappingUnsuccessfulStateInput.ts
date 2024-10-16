import {MappingUnsuccessfulNotificationInput} from "../../UI/MappingUnsuccessful/MappingUnsuccessfulNotificationInput"

@component
export class MappingUnsuccessfulStateInput extends BaseScriptComponent {
  script: ScriptComponent

  @input
  readonly mappingUnsuccessfulNotification: MappingUnsuccessfulNotificationInput

  @input
  readonly alignUnsuccessfulNotification: MappingUnsuccessfulNotificationInput
}
