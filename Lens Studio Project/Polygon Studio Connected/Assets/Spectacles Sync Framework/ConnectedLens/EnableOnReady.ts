@component
export class EnableOnReady extends BaseScriptComponent {
  @input
  nodesToEnable: SceneObject[]

  onAwake() {
    this.setNodesEnabled(false)
    global.sessionController.notifyOnReady(this.onReady.bind(this))
  }

  onReady() {
    this.setNodesEnabled(true)
  }

  setNodesEnabled(enabled: boolean) {
    for (const node of this.nodesToEnable) {
      node.enabled = enabled
    }
  }
}
