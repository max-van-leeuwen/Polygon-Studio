import Observable, { PublicObservable } from "./event/Observable"

export class ProjectContainer {

  private _isMappedObservable = new Observable<boolean>(false)

  private _isUserAligned = new Observable<boolean>(false)

  private _shouldBuildTheMap: boolean = true

  private _startPointPosition: vec3 = vec3.zero()

  private _startPointRotation: quat = quat.fromEulerVec(vec3.zero())

  private _joinedUsers: ConnectedLensModule.UserInfo[] = []

  private _onNewUserNeedsHelp: (() => void)[] = []

  constructor() {
    this._isMappedObservable.set(false)
    this._isUserAligned.set(false)
  }

  mappingDone() {
    this._isMappedObservable.set(true)
  }

  get shouldBuildTheMap(): boolean {
    return this._shouldBuildTheMap
  }

  set shouldBuildTheMap(value: boolean) {
    this._shouldBuildTheMap = value
  }

  get startPointPosition(): vec3 {
    return this._startPointPosition
  }

  set startPointPosition(value: vec3) {
    this._startPointPosition = value
  }

  get startPointRotation(): quat {
    return this._startPointRotation
  }

  set startPointRotation(value: quat) {
    this._startPointRotation = value
  }

  get isMappedObservable(): PublicObservable<boolean> {
    return this._isMappedObservable
  }

  get isUserAligned(): Observable<boolean> {
    return this._isUserAligned
  }

  get joinedUsers(): ConnectedLensModule.UserInfo[] {
    return this._joinedUsers
  }

  notifyOnUserToHelpChanged(value: () => void) {
    this._onNewUserNeedsHelp.push(value)
  }

  userToHelpChanged() {
    this._onNewUserNeedsHelp.forEach((value) => value())
  }

}
