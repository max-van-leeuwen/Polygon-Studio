import StateMachine from "../../../../SpectaclesInteractionKit/Utils/StateMachine"
import {BufferState} from "../MappingFlowStates/BufferState/BufferState"
import {JoiningState} from "../MappingFlowStates/JoiningState/JoiningState"
import {MappingState} from "../MappingFlowStates/MappingState/MappingState"
import {TeachingJoinedUserState} from "../MappingFlowStates/TeachingJoinedUserState/TeachingJoinedUserState"
import {WaitingForMappingState} from "../MappingFlowStates/WaitingForMappingState/WaitingForMappingState"
import {MessageTextsEnum} from "../Texts/MessageTextsEnum"
import {ProjectContainer} from "./ProjectContainer"

export class JoiningController {
  constructor(
    private script: ScriptComponent,
    private readonly stateMachine: StateMachine,
    private readonly projectContainer: ProjectContainer
  ) {}

  startJoiningFlow() {
    if (global.sessionController.getMapExists()) {
      this.stateMachine.enterState(JoiningState.name)
    } else {
      this.stateMachine.enterState(WaitingForMappingState.name)
      global.sessionController.notifyOnMapExists(() => {
        if (!this.projectContainer.shouldBuildTheMap) {
          this.stateMachine.enterState(JoiningState.name)
        }
      })
    }
    global.sessionController.onHostUpdated.add((session, hostUser) => {
      if (
        this.stateMachine.currentState.name === WaitingForMappingState.name &&
        global.sessionController.isHost()
      ) {
        this.stateMachine.enterState(MappingState.name)
      }
    })
  }

  startEventsMonitoring() {
    global.sessionController.onUserJoinedSession.add((session, userInfo) => {
      this.projectContainer.joinedUsers.push(userInfo)
      this.projectContainer.isUserAligned.set(false)
      if (this.projectContainer.joinedUsers.length === 1) {
        this.projectContainer.userToHelpChanged()
      }
      if (this.projectContainer.isMappedObservable.value) {
        if (
          this.stateMachine.currentState.name !== TeachingJoinedUserState.name
        ) {
          this.stateMachine.enterState(TeachingJoinedUserState.name)
        }
      } else {
        this.projectContainer.isMappedObservable.onChanged.add(() => {
          if (this.projectContainer.joinedUsers.length > 0) {
            this.stateMachine.enterState(TeachingJoinedUserState.name)
          }
        })
      }
    })

    global.sessionController.onMessageReceived.add(
      (session, userId, message, senderInfo) => {
        const index = this.getUserInfoIndex(senderInfo)
        if (index > -1 && message === MessageTextsEnum.USER_ALIGNED) {
          this.projectContainer.joinedUsers.splice(index, 1)
          if (this.projectContainer.joinedUsers.length === 0) {
            this.projectContainer.isUserAligned.set(true)
            if (
              this.stateMachine.currentState.name ===
              TeachingJoinedUserState.name
            ) {
              this.stateMachine.enterState(BufferState.name)
            }
          } else if (index === 0) {
            this.projectContainer.userToHelpChanged()
          }
        }
      }
    )

    global.sessionController.onUserLeftSession.add((session, userInfo) => {
      const index = this.getUserInfoIndex(userInfo)
      if (index > -1) {
        this.projectContainer.joinedUsers.splice(index, 1)
        if (this.projectContainer.joinedUsers.length === 0) {
          this.projectContainer.isUserAligned.set(true)
          if (
            this.stateMachine.currentState.name === TeachingJoinedUserState.name
          ) {
            this.stateMachine.enterState(BufferState.name)
          }
        } else if (index === 0) {
          this.projectContainer.userToHelpChanged()
        }
      }
    })
  }

  getUserInfoIndex(userInfo: ConnectedLensModule.UserInfo) {
    for (let i: number = 0; i < this.projectContainer.joinedUsers.length; ++i) {
      if (
        this.projectContainer.joinedUsers[i].connectionId ===
        userInfo.connectionId
      ) {
        return i
      }
    }
    return -1
  }
}
