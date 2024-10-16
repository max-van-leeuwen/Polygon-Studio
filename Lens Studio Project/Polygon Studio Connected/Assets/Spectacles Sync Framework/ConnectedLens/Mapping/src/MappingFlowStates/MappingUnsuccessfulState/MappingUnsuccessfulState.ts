import StateMachine from "../../../../../SpectaclesInteractionKit/Utils/StateMachine"
import {MappingUnsuccessfulNotification} from "../../UI/MappingUnsuccessful/MappingUnsuccessfulNotification"
import {ProjectContainer} from "../../Utils/ProjectContainer"
import {MappingUnsuccessfulStateInput} from "./MappingUnsuccessfulStateInput"
import {MappingUnsuccessfulTypeEnum} from "./MappingUnsuccessfulTypeEnum"

export class MappingUnsuccessfulState {
  private mappingUnsuccessfulNotification: MappingUnsuccessfulNotification

  private alignUnsuccessfulNotification: MappingUnsuccessfulNotification

  constructor(
    private readonly input: MappingUnsuccessfulStateInput,
    stateMachine: StateMachine,
    private readonly projectContainer: ProjectContainer
  ) {
    this.mappingUnsuccessfulNotification = new MappingUnsuccessfulNotification(
      input.mappingUnsuccessfulNotification,
      stateMachine,
      projectContainer
    )
    this.alignUnsuccessfulNotification = new MappingUnsuccessfulNotification(
      input.alignUnsuccessfulNotification,
      stateMachine,
      projectContainer
    )
  }

  enter(): void {
    if (this.projectContainer.shouldBuildTheMap) {
      this.mappingUnsuccessfulNotification.start(
        MappingUnsuccessfulTypeEnum.Scan
      )
    } else {
      this.alignUnsuccessfulNotification.start(
        MappingUnsuccessfulTypeEnum.Align
      )
    }
  }

  exit(): void {
    this.mappingUnsuccessfulNotification.stop()
    this.alignUnsuccessfulNotification.stop()
  }
}
