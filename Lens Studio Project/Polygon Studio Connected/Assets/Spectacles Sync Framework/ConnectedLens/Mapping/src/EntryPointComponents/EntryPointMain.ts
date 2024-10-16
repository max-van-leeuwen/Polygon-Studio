import StateMachine from "../../../../SpectaclesInteractionKit/Utils/StateMachine"
import {BufferState} from "../MappingFlowStates/BufferState/BufferState"
import {JoiningState} from "../MappingFlowStates/JoiningState/JoiningState"
import {JoiningStateInput} from "../MappingFlowStates/JoiningState/JoiningStateInput"
import {MappingCanceledState} from "../MappingFlowStates/MappingCanceledState/MappingCanceledState"
import {MappingState} from "../MappingFlowStates/MappingState/MappingState"
import {MappingStateInput} from "../MappingFlowStates/MappingState/MappingStateInput"
import {MappingSuccessfulState} from "../MappingFlowStates/MappingSuccessfulState/MappingSuccessfulState"
import {MappingSuccessfulStateInput} from "../MappingFlowStates/MappingSuccessfulState/MappingSuccessfulStateInput"
import {MappingUnsuccessfulState} from "../MappingFlowStates/MappingUnsuccessfulState/MappingUnsuccessfulState"
import {MappingUnsuccessfulStateInput} from "../MappingFlowStates/MappingUnsuccessfulState/MappingUnsuccessfulStateInput"
import {TeachingJoinedUserState} from "../MappingFlowStates/TeachingJoinedUserState/TeachingJoinedUserState"
import {TeachingJoinedUserStateInput} from "../MappingFlowStates/TeachingJoinedUserState/TeachingJoinedUserStateInput"
import {WaitingForMappingState} from "../MappingFlowStates/WaitingForMappingState/WaitingForMappingState"
import {WaitingForMappingStateInput} from "../MappingFlowStates/WaitingForMappingState/WaitingForMappingStateInput"
import {TextValues} from "../Texts/TextValues"
import {JoiningController} from "../Utils/JoiningController"
import {ProjectContainer} from "../Utils/ProjectContainer"

@component
export class EntryPointMain extends BaseScriptComponent {
  script: ScriptComponent

  @input
  readonly mappingStateInput: MappingStateInput

  @input
  readonly mappingSuccessfulStateInput: MappingSuccessfulStateInput

  @input
  readonly mappingUnsuccessfulStateInput: MappingUnsuccessfulStateInput

  @input
  readonly joiningStateInput: JoiningStateInput

  @input
  readonly teachingJoinedUserStateInput: TeachingJoinedUserStateInput

  @input
  readonly waitingForMappingStateInput: WaitingForMappingStateInput

  @input
  readonly spinner: SceneObject

  private projectContainer: ProjectContainer

  private stateMachine: StateMachine

  private joiningController: JoiningController

  onAwake() {
    this.spinner.enabled = false

    this.projectContainer = new ProjectContainer()

    this.stateMachine = new StateMachine("MappingFlow")

    global.sessionController.onSessionCreated.add(
      () => (this.spinner.enabled = true)
    )

    this.flowComplete = global.sessionController.notifyOnStartColocated(() => {
      this.spinner.enabled = false
      this.onStart()
    })

    const mappingState = new MappingState(
      this.mappingStateInput,
      this.stateMachine,
      this.projectContainer,
      this.flowComplete
    )
    this.stateMachine.addState({
      name: MappingState.name,
      onEnter: () => mappingState.enter(),
      onExit: () => mappingState.exit(),
    })

    const mappingSuccessfulState = new MappingSuccessfulState(
      this.mappingSuccessfulStateInput,
      this.stateMachine,
      this.projectContainer
    )
    this.stateMachine.addState({
      name: MappingSuccessfulState.name,
      onEnter: () => mappingSuccessfulState.enter(),
      onExit: () => mappingSuccessfulState.exit(),
    })

    const mappingUnsuccessfulState = new MappingUnsuccessfulState(
      this.mappingUnsuccessfulStateInput,
      this.stateMachine,
      this.projectContainer
    )
    this.stateMachine.addState({
      name: MappingUnsuccessfulState.name,
      onEnter: () => mappingUnsuccessfulState.enter(),
      onExit: () => mappingUnsuccessfulState.exit(),
    })

    const joiningState = new JoiningState(
      this.joiningStateInput,
      this.stateMachine,
      this.projectContainer,
      this.flowComplete
    )
    this.stateMachine.addState({
      name: JoiningState.name,
      onEnter: () => joiningState.enter(),
      onExit: () => joiningState.exit(),
    })

    const teachingJoinedUserState = new TeachingJoinedUserState(
      this.teachingJoinedUserStateInput,
      this.stateMachine,
      this.projectContainer
    )
    this.stateMachine.addState({
      name: TeachingJoinedUserState.name,
      onEnter: () => teachingJoinedUserState.enter(),
      onExit: () => teachingJoinedUserState.exit(),
    })

    const waitingForMappingState = new WaitingForMappingState(
      this.waitingForMappingStateInput,
      this.stateMachine
    )

    this.stateMachine.addState({
      name: WaitingForMappingState.name,
      onEnter: () => waitingForMappingState.enter(),
      onExit: () => waitingForMappingState.exit(),
    })

    const bufferState = new BufferState(this.script, this.stateMachine)
    this.stateMachine.addState({
      name: BufferState.name,
      onEnter: () => bufferState.enter(),
      onExit: () => bufferState.exit(),
    })

    const mappingCanceledState = new MappingCanceledState(
      this.script,
      this.stateMachine
    )
    this.stateMachine.addState({
      name: MappingCanceledState.name,
      onEnter: () => mappingCanceledState.enter(),
      onExit: () => mappingCanceledState.exit(),
    })

    this.joiningController = new JoiningController(
      this.script,
      this.stateMachine,
      this.projectContainer
    )
  }

  private flowComplete: (mapUploaded: boolean) => void

  private onStart() {
    if (
      global.deviceInfoSystem.isEditor() &&
      global.sessionController.getSkipUiInStudio()
    ) {
      this.flowComplete(true)
      return
    }

    this.replaceTexts()

    this.projectContainer.shouldBuildTheMap =
      global.sessionController.isHost() &&
      (global.sessionController.getLocatedAtComponent().location === null ||
        global.sessionController.getColocatedBuildStatus() === "none")

    if (this.projectContainer.shouldBuildTheMap) {
      this.stateMachine.enterState(MappingState.name)
    } else {
      this.joiningController.startJoiningFlow()
    }

    this.joiningController.startEventsMonitoring()
  }

  private replaceTexts() {
    TextValues.MAPPING_HINTS_P2[0].text =
      TextValues.MAPPING_HINTS_P2[0].text.replace(
        TextValues.P1,
        global.sessionController.getHostUserName()
      )
    TextValues.TUTORIAL_P2.text = TextValues.MAPPING_HINTS_P2[0].text.replace(
      TextValues.P1,
      global.sessionController.getHostUserName()
    )
  }
}
