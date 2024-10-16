@component
export class HeadLockBehaviorInput extends BaseScriptComponent {

  @input ("float", "120.0")
  @hint("How far away the target will be from the camera")
  readonly distance: number

  @input ("float", "0.0")
  @hint("The magnitude of change in degrees of leeway in any direction before a change starts to occur")
  readonly bufferRotationDegrees: number

  @input ("float", "0.0")
  @hint("The magnitude of change needed to activate a translation for the target to follow the camera (centimeters)")
  readonly bufferTranslationCentimeters: number

  @input("float", "1.0")
  readonly frequencyCoefficient: number

  @input("float", "0.8")
  readonly dampingCoefficient: number

  @input("float", "0.0")
  readonly underShockCoefficient: number

  @input("float", "1.0")
  readonly timeCoefficient: number

}
