@component
export class TextMappingHintParametersInput extends BaseScriptComponent {

    @input ("float", "12.0")
    @hint("The delay in seconds before showing the progress bar (via alpha)")
    readonly delayBeforeShowing: number

    @input ("float", "1.0")
    @hint("The delay before the text starts to appear in seconds")
    readonly delayTime: number

    @input ("float", "1.0")
    @hint("The duration in seconds for the text to gradually fade in (via alpha)")
    readonly fadeInTime: number

    @input ("float", "3.0")
    @hint("The time in seconds during which the text is fully visible")
    readonly displayTime: number

    @input ("float", "1.0")
    @hint("The duration in seconds for the text to gradually fade out (via alpha)")
    readonly fadeOutTime: number

    @input ("float", "0.3")
    @hint("Timing used to shorten the fade-out time if the state needs to end earlier than expected in seconds")
    readonly earlyFadeOutTime: number

}
