import {SyncFrameworkLogger} from "../Utils/SyncFrameworkLogger"

@component
export class NewScript extends BaseScriptComponent {

  private readonly log: SyncFrameworkLogger = new SyncFrameworkLogger(NewScript.name)

  onAwake() {
    let sessionController: SessionController = global.sessionController

    sessionController.notifyOnReady(this.onReady.bind(this))
  }

  onReady() {
    this.log.i("Example Component: The session controller is ready!")
  }
}
