import {Interactable} from "../../../../../SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable"
import {InteractionConfigurationProvider} from "../../../../../SpectaclesInteractionKit/Providers/InteractionConfigurationProvider/InteractionConfigurationProvider"
import animate, {
  CancelFunction,
} from "../../../../../SpectaclesInteractionKit/Utils/animate"
import {lerp} from "../../../../../SpectaclesInteractionKit/Utils/mathUtils"
import StateMachine from "../../../../../SpectaclesInteractionKit/Utils/StateMachine"
import {JoiningState} from "../../MappingFlowStates/JoiningState/JoiningState"
import {MappingState} from "../../MappingFlowStates/MappingState/MappingState"
import {MappingUnsuccessfulTypeEnum} from "../../MappingFlowStates/MappingUnsuccessfulState/MappingUnsuccessfulTypeEnum"
import {TextValues} from "../../Texts/TextValues"
import {ProjectContainer} from "../../Utils/ProjectContainer"
import {
  setAlpha,
  setObjectInTheWorldOnDistance,
} from "../../Utils/SharedFunctions"
import {MappingUnsuccessfulNotificationInput} from "./MappingUnsuccessfulNotificationInput"

export class MappingUnsuccessfulNotification {
  private readonly rootTransform: Transform

  private readonly tilePass: Pass

  private readonly keepLookingButtonPass: Pass

  private readonly appearNotificationDuration: number = 0.3

  private interactionConfigurationProvider: InteractionConfigurationProvider =
    InteractionConfigurationProvider.getInstance()

  private readonly keepLookingButtonInteractable: Interactable

  private alphaTweenCancelFunction: CancelFunction

  constructor(
    private readonly input: MappingUnsuccessfulNotificationInput,
    stateMachine: StateMachine,
    projectContainer: ProjectContainer
  ) {
    this.rootTransform = input.root.getTransform()
    this.tilePass = input.tile.mainMaterial.mainPass
    this.keepLookingButtonPass =
      input.keepLookingButtonMesh.mainMaterial.mainPass

    this.setNotificationAlpha(0)

    this.keepLookingButtonInteractable = input.keepLookingButton
      .getSceneObject()
      .getComponent(
        this.interactionConfigurationProvider.requireType("Interactable")
      ) as Interactable
    input.keepLookingButton.onButtonPinched.add(() => {
      if (projectContainer.shouldBuildTheMap) {
        stateMachine.enterState(MappingState.name)
      } else {
        stateMachine.enterState(JoiningState.name)
      }
    })
    this.keepLookingButtonInteractable.enabled = false
    input.root.enabled = false
  }

  start(type: MappingUnsuccessfulTypeEnum) {
    this.input.root.enabled = true
    setObjectInTheWorldOnDistance(this.input.root, this.input.distance)
    this.initNotificationUI(type)
    this.alphaTweenCancelFunction = this.animateNotificationToAlpha(
      0,
      1,
      this.appearNotificationDuration,
      () => {
        this.keepLookingButtonInteractable.enabled = true
      }
    )
  }

  stop() {
    this.input.root.enabled = false
    this.alphaTweenCancelFunction?.()
    this.keepLookingButtonInteractable.enabled = false
    this.setNotificationAlpha(0)
  }

  private initNotificationUI(type: MappingUnsuccessfulTypeEnum): void {
    switch (type) {
      case MappingUnsuccessfulTypeEnum.Scan:
        this.input.titleText.text = TextValues.UNSUCCESS_NOTIFICATION_TITLE_P1
        for (let i = 0; i < TextValues.MAPPING_HINTS_P1.length; ++i) {
          this.input.hintsTitle[i].text = TextValues.MAPPING_HINTS_P1[i].title
          this.input.hintsText[i].text = TextValues.MAPPING_HINTS_P1[i].text
        }
        break
      case MappingUnsuccessfulTypeEnum.Align:
        this.input.titleText.text = TextValues.UNSUCCESS_NOTIFICATION_TITLE_P2
        for (let i = 0; i < TextValues.MAPPING_HINTS_P2.length; ++i) {
          this.input.hintsTitle[i].text = TextValues.MAPPING_HINTS_P2[i].title
          this.input.hintsText[i].text = TextValues.MAPPING_HINTS_P2[i].text
        }
        break
    }
  }

  private animateNotificationToAlpha(
    from: number,
    to: number,
    duration: number,
    onComplete: () => void = () => {}
  ): CancelFunction {
    return animate({
      update: (t: number) => {
        const currentAlpha = lerp(from, to, t)
        this.setNotificationAlpha(currentAlpha)
      },
      start: 0,
      end: 1,
      duration: duration,
      ended: onComplete,
    })
  }

  private setNotificationAlpha(value: number) {
    setAlpha(this.input.root, value)
    this.tilePass.notification_tile_opacity = value
    this.keepLookingButtonPass.alpha = value
  }
}
