import WorldCameraFinderProvider from "../../../../../SpectaclesInteractionKit/Providers/CameraProvider/WorldCameraFinderProvider"
import StateMachine from "../../../../../SpectaclesInteractionKit/Utils/StateMachine"
import {SyncFrameworkLogger} from "../../../../Utils/SyncFrameworkLogger"
import {TextValues} from "../../Texts/TextValues"
import {ProgressBar} from "../../UI/MappingFlow/ProgressBar/ProgressBar"
import {TextMappingHint} from "../../UI/MappingFlow/TextMappingHint/TextMappingHint"
import {Tutorial} from "../../UI/MappingFlow/Tutorial/Tutorial"
import {TutorialTypeEnum} from "../../UI/MappingFlow/Tutorial/TutorialTypeEnum"
import {ProjectContainer} from "../../Utils/ProjectContainer"
import {delayFrames} from "../../Utils/SharedFunctions"
import {MappingCanceledState} from "../MappingCanceledState/MappingCanceledState"
import {MappingSuccessfulState} from "../MappingSuccessfulState/MappingSuccessfulState"
import {MappingUnsuccessfulState} from "../MappingUnsuccessfulState/MappingUnsuccessfulState"
import {MappingStateInput} from "./MappingStateInput"

export class MappingState {
  private readonly worldCamera = WorldCameraFinderProvider.getInstance()

  private readonly worldCameraTransform = this.worldCamera.getTransform()

  private readonly tutorial: Tutorial

  private readonly progressBar: ProgressBar

  private readonly textMappingHint: TextMappingHint

  private readonly delayedEvent: DelayedCallbackEvent

  private updateEvent: SceneEvent

  private readonly mappingWaitingTime: number = 30

  private readonly log: SyncFrameworkLogger = new SyncFrameworkLogger(
    MappingState.name
  )

  private isFirstTimeMapping: boolean = true

  private locationCloudStorageModule

  private mappingSession: MappingSession | null = null

  private script: ScriptComponent

  constructor(
    private readonly input: MappingStateInput,
    private readonly stateMachine: StateMachine,
    private readonly projectContainer: ProjectContainer,
    private onFlowComplete: (mapUploaded: boolean) => void
  ) {
    this.tutorial = new Tutorial(
      input.tutorialNotificationInput,
      input.tutorialParametersInput
    )
    this.progressBar = new ProgressBar(
      input.mappingProgressInput,
      input.progressBarParametersInput
    )
    this.textMappingHint = new TextMappingHint(
      input.textMappingHintInput,
      input.textMappingHintTimingsInput
    )
    this.delayedEvent = input.script.createEvent("DelayedCallbackEvent")
    this.delayedEvent.bind(() => {
      stateMachine.enterState(MappingUnsuccessfulState.name)
    })
    this.script = input.script
  }

  enter(): void {
    this.mappingSession = global.sessionController.getMappingSession()
    this.locationCloudStorageModule =
      global.sessionController.getLocationCloudStorageModule()
    if (this.isFirstTimeMapping) {
      this.setupBuilding()
      this.tutorial.start(TutorialTypeEnum.TutorialP1)
    }
    this.progressBar.start()
    this.textMappingHint.start(
      TextValues.MAPPING_HINTS_P1,
      this.tutorial.getDurationByAnimationType(TutorialTypeEnum.TutorialP1) + 3
    )
    this.delayedEvent.reset(this.mappingWaitingTime)
    this.projectContainer.startPointPosition =
      this.worldCameraTransform.getWorldPosition()
    const back = this.worldCameraTransform.back
    back.y = 0
    this.projectContainer.startPointRotation = quat.lookAt(back, vec3.up())
    this.isFirstTimeMapping = false
  }

  exit(): void {
    this.delayedEvent.cancel()
    this.tutorial.stop()
    this.progressBar.stop()
    this.textMappingHint.stop()
  }

  private setupBuilding() {
    this.startBuilding()

    this.mappingSession.onMapped.add(this.onFinishedMapping.bind(this))
    this.updateEvent = this.script.createEvent("UpdateEvent");
    let checkpointRequested = false;
    this.updateEvent.bind(()=>{
        if (this.mappingSession.quality>=1.0 && !checkpointRequested) {
            this.mappingSession.checkpoint();
            checkpointRequested = true;
        }
    });

    if (global.deviceInfoSystem.isEditor()) {
      delayFrames(this.script, 30, this.onEditorMappingDelayComplete.bind(this))
    }
  }

  private onEditorMappingDelayComplete() {
    this.onFinishedMapping(null)
    global.sessionController.setColocatedMapId("LocalMap")
  }

  private onFinishedMapping(location: LocationAsset | null) {
    if (this.stateMachine.currentState.name === MappingCanceledState.name) {
      return
    }
    global.sessionController.setColocatedBuildStatus("built")
    this.onFlowComplete(true)
    if (location !== null) {
      this.uploadMap(location)
    }
    this.stateMachine.enterState(MappingSuccessfulState.name)
  }

  private uploadMap(location: LocationAsset) {
    const localLocation = LocationAsset.getAROrigin()
    global.sessionController.getLocatedAtComponent().location = localLocation

    global.sessionController.notifyOnLocatedAtFound(
      this.onLocatedAtFound.bind(this)
    )

    this.log.i("Storing custom location")
    this.locationCloudStorageModule.storeLocation(
      location,
      this.storeLocationSuccess.bind(this),
      this.storeLocationFailure.bind(this)
    )
  }

  storeLocationSuccess(locationId: string) {
    this.log.i("Stored custom location: " + locationId)

    global.sessionController.setColocatedMapId(locationId)
  }

  private storeLocationFailure(err: string) {
    this.log.i("[MappingFlow] Failure:" + err.toString())

    if (global.deviceInfoSystem.isEditor()) {
      // Expected to fail in the editor
      this.log.i("[MappingFlow] Failed in the editor")
    }
  }

  private onLocatedAtFound() {
    this.log.i("[MappingFlow] Location Found")
  }

  private startBuilding() {
    this.projectContainer.shouldBuildTheMap = true
    global.sessionController.setColocatedBuildStatus("building")
    global.sessionController.startBuilding()
  }
}