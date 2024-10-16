import WorldCameraFinderProvider from "../../../../../SpectaclesInteractionKit/Providers/CameraProvider/WorldCameraFinderProvider"
import StateMachine from "../../../../../SpectaclesInteractionKit/Utils/StateMachine"
import {SyncFrameworkLogger} from "../../../../Utils/SyncFrameworkLogger"
import {MessageTextsEnum} from "../../Texts/MessageTextsEnum"
import {TextValues} from "../../Texts/TextValues"
import {TextMappingHint} from "../../UI/MappingFlow/TextMappingHint/TextMappingHint"
import {Tutorial} from "../../UI/MappingFlow/Tutorial/Tutorial"
import {TutorialTypeEnum} from "../../UI/MappingFlow/Tutorial/TutorialTypeEnum"
import {ProjectContainer} from "../../Utils/ProjectContainer"
import {MappingCanceledState} from "../MappingCanceledState/MappingCanceledState"
import {MappingSuccessfulState} from "../MappingSuccessfulState/MappingSuccessfulState"
import {MappingUnsuccessfulState} from "../MappingUnsuccessfulState/MappingUnsuccessfulState"
import {JoiningStateInput} from "./JoiningStateInput"

export class JoiningState {
  private readonly worldCamera = WorldCameraFinderProvider.getInstance()

  private readonly worldCameraTransform = this.worldCamera.getTransform()

  private readonly tutorial: Tutorial

  private readonly textMappingHint: TextMappingHint

  private readonly delayedEvent: DelayedCallbackEvent

  private readonly mappingWaitingTime: number = 30

  private readonly log: SyncFrameworkLogger = new SyncFrameworkLogger(JoiningState.name)

  private locatedAtComponent: LocatedAtComponent

  private isFirstTimeMapping: boolean = true

  constructor(
    private readonly input: JoiningStateInput,
    private readonly stateMachine: StateMachine,
    private readonly projectContainer: ProjectContainer,
    private onFlowComplete: (mapUploaded: boolean) => void
  ) {
    this.tutorial = new Tutorial(
      input.tutorialNotificationInput,
      input.tutorialParametersInput
    )
    this.textMappingHint = new TextMappingHint(
      input.textMappingHintInput,
      input.textMappingHintTimingsInput
    )
    input.spinner.enabled = false
    this.delayedEvent = input.script.createEvent("DelayedCallbackEvent")
    this.delayedEvent.bind(() => {
      stateMachine.enterState(MappingUnsuccessfulState.name)
    })
  }

  enter(): void {
    if (this.isFirstTimeMapping) {
      this.tutorial.start(TutorialTypeEnum.TutorialP2)

      this.locatedAtComponent = global.sessionController.getLocatedAtComponent()
      global.sessionController.notifyOnLocationId(() => {
        if (this.stateMachine.currentState.name === MappingCanceledState.name) {
          return
        }
        const locationId = global.sessionController.getColocatedMapId()

        this.log.i(`Retrieving custom location (${locationId}`)
        let retrieveLocation = (global.deviceInfoSystem.isEditor() ? this.retrieveLocationInEditor : this.retrieveLocationOnDevice).bind(this);

        retrieveLocation(locationId).then((location : LocationAsset) => {
          this.log.i(`Setting location to ${locationId}`)
          this.log.i(`Location unique id: ${location.uniqueIdentifier}`)
          this.locatedAtComponent.location = location
        }).catch((error : Error) => {
          this.log.i(`Failed to retrieve location ${locationId}: ${error}`)
        })
      })
      global.sessionController.notifyOnLocatedAtFound(() => {
        if (this.stateMachine.currentState.name === MappingCanceledState.name) {
          return
        }
        this.onFlowComplete(false)
        this.projectContainer.startPointPosition =
          this.worldCameraTransform.getWorldPosition()
        const back = this.worldCameraTransform.back
        back.y = 0
        this.projectContainer.startPointRotation = quat.lookAt(back, vec3.up())
        global.sessionController
          .getSession()
          .sendMessage(MessageTextsEnum.USER_ALIGNED)
        this.stateMachine.enterState(MappingSuccessfulState.name)
      })
    }
    this.textMappingHint.start(
      TextValues.MAPPING_HINTS_P2,
      this.tutorial.getDurationByAnimationType(TutorialTypeEnum.TutorialP2) + 3
    )
    this.input.spinner.enabled = true

    this.delayedEvent.reset(this.mappingWaitingTime)
    this.isFirstTimeMapping = false
  }

  exit(): void {
    this.delayedEvent.cancel()
    this.tutorial.stop()
    this.textMappingHint.stop()
    this.input.spinner.enabled = false
  }

  private async retrieveLocationInEditor(locationId: string) {
    // asset upload not implemented, so download would fail
    this.log.i(`Retrieving custom location [simulator] (${locationId})`)

    return LocationAsset.getAROrigin();
  }

  private retrieveLocationOnDevice(locationId: string) : Promise<LocationAsset> {
    this.log.i(`Retrieving custom location (${locationId})`)

    return new Promise<LocationAsset>((resolve, reject) => {
      global.sessionController.getLocationCloudStorageModule().retrieveLocation(
        locationId,
        (location : LocationAsset) => {
          resolve(location)
        },
        (error : string) => {
          reject(new Error(error))
        })
    });
  }
}
