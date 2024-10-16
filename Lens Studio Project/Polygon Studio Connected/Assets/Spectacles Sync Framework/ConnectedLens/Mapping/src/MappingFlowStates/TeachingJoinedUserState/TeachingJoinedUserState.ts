import StateMachine from "../../../../../SpectaclesInteractionKit/Utils/StateMachine"
import {Tutorial} from "../../UI/MappingFlow/Tutorial/Tutorial"
import {TutorialTypeEnum} from "../../UI/MappingFlow/Tutorial/TutorialTypeEnum"
import {ObjectLocator} from "../../UI/ObjectLocator/ObjectLocator"
import {ProjectContainer} from "../../Utils/ProjectContainer"
import {BufferState} from "../BufferState/BufferState"
import {TeachingJoinedUserStateInput} from "./TeachingJoinedUserStateInput"

export class TeachingJoinedUserState {
  private readonly tutorial: Tutorial

  private readonly objectLocator: ObjectLocator

  private readonly delayedEvent: DelayedCallbackEvent

  private readonly teachingTime: number = 20

  private isFirstTimeTeaching: boolean = true

  constructor(
    private readonly input: TeachingJoinedUserStateInput,
    private readonly stateMachine: StateMachine,
    private readonly projectContainer: ProjectContainer
  ) {
    this.tutorial = new Tutorial(
      input.tutorialNotificationInput,
      input.tutorialParametersInput
    )
    this.objectLocator = new ObjectLocator(
      input.objectLocatorInput,
      projectContainer
    )
    this.delayedEvent = input.script.createEvent("DelayedCallbackEvent")
    this.delayedEvent.bind(() => {
      stateMachine.enterState(BufferState.name)
    })
  }

  enter(): void {
    if (this.projectContainer.joinedUsers.length === 0) {
      this.stateMachine.enterState(BufferState.name)
    }
    if (this.isFirstTimeTeaching) {
      this.tutorial.start(TutorialTypeEnum.TutorialP1TeachP2)
    }
    this.delayedEvent.reset(this.teachingTime)
    this.objectLocator.start(this.projectContainer.joinedUsers[0].displayName)
    this.isFirstTimeTeaching = false
  }

  exit(): void {
    this.delayedEvent.cancel()
    this.objectLocator.stop()
    this.tutorial.stop()
  }
}
