@component
export class TutorialParametersInput extends BaseScriptComponent {

  script: ScriptComponent

  @input ("float", "150.0")
  @hint("The distance where the tutorial appears on start")
  readonly startDistance: number

  @input ("float", "200.0")
  @hint("The distance where the tutorial appears at the end of the initial animation")
  readonly endDistance: number

  @input("float", "0.3")
  @hint("The duration in seconds for the tutorial to gradually scale up")
  readonly scaleUpTime: number

  @input("float", "0.3")
  @hint("The duration in seconds for the tutorial to gradually scale down")
  readonly scaleDownTime: number

  @input("float", "0.7")
  @hint("Initial tutorial scale coefficient")
  readonly scaleCoefficientInitial: number

}
