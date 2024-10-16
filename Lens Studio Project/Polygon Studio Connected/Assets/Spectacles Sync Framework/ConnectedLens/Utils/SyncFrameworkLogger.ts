import NativeLogger from "../../SpectaclesInteractionKit/Utils/NativeLogger"

export class SyncFrameworkLogger {
  private nativeLogger: NativeLogger

  private sessionController = global.sessionController

  constructor(tag: string, useNative?: boolean) {
    this.nativeLogger = new NativeLogger(tag)
  }

  i(message: string): void {
    if (!this.sessionController.getDebugLogging()) {
      return
    }

    this.nativeLogger.i(message)
  }

  d(message: string): void {
    if (!this.sessionController.getDebugLogging()) {
      return
    }

    this.nativeLogger.d(message)
  }

  e(message: string): void {
    if (!this.sessionController.getDebugLogging()) {
      return
    }

    this.nativeLogger.e(message)
  }

  w(message: string): void {
    if (!this.sessionController.getDebugLogging()) {
      return
    }

    this.nativeLogger.w(message)
  }

  v(message: string): void {
    if (!this.sessionController.getDebugLogging()) {
      return
    }

    this.nativeLogger.v(message)
  }
}
