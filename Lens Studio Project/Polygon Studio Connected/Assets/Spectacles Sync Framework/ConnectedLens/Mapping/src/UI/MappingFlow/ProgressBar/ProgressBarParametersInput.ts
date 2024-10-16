@component
export class ProgressBarParametersInput extends BaseScriptComponent {

    script: ScriptComponent

    @input ("float", "4.0")
    @hint("The delay in seconds before showing the progress bar (via alpha)")
    readonly delayBeforeShowing: number

    @input ("float", "0.4")
    @hint("Time in seconds for scaling the progress bar In")
    readonly scalingInTime: number

    @input ("float", "0.3")
    @hint("Time in seconds for scaling the progress bar Out")
    readonly scalingOutTime: number

    @input ("float", "0.5")
    @hint("The duration in seconds for the progress bar to gradually fade in (via alpha)")
    readonly fadeInTime: number

    @input ("float", "0.3")
    @hint("The duration in seconds for the progress bar to gradually fade out (via alpha)")
    readonly fadeOutTime: number

    @input ("float", "0.8")
    @hint("Minimum coefficient for the progress bar size")
    readonly minScaleCoefficient: number

    @input ("float", "1.15")
    @hint("Maximum coefficient for the progress bar size")
    readonly maxScaleCoefficient: number

}
