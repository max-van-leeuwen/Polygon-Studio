import {SyncFrameworkLogger} from "../Utils/SyncFrameworkLogger"

@component
export class NewScript extends BaseScriptComponent {

  private readonly log: SyncFrameworkLogger = new SyncFrameworkLogger(NewScript.name)

  onAwake() {
    let syncEntity: SyncEntity = new SyncEntity(this, null, true)

    syncEntity.notifyOnReady(this.onReady.bind(this))
  }

  onReady() {
    this.log.i("Example Component: The sync entity is ready!")
  }
}
