import animate, {
  CancelFunction,
} from "../../SpectaclesInteractionKit/Utils/animate"

// The alpha value when it's fully showing.
const ALPHA_FULLY_VISIBLE = 1

// The alpha value when it's fully hidden.
const ALPHA_FULLY_HIDDEN = 0

// How long to fade for, in seconds
const ANIMATE_DURATION_SECONDS = 0.3

export interface Fadeable {
  currentAlpha: number
  animationCancelFunction: CancelFunction | null
  setAlpha(alpha: number): void
  setFadeEnabled(enabled: boolean): void
}

export function setVisibile(fadeable: Fadeable) {
  fadeable.setFadeEnabled(true)
  fadeable.setAlpha(ALPHA_FULLY_VISIBLE)
}

export function setHidden(fadeable: Fadeable) {
  fadeable.setAlpha(ALPHA_FULLY_HIDDEN)
  fadeable.setFadeEnabled(false)
}

export function animateToVisible(fadeable: Fadeable) {
  animateToAlpha(fadeable, ALPHA_FULLY_VISIBLE)
}

export function animateToHidden(fadeable: Fadeable) {
  animateToAlpha(fadeable, ALPHA_FULLY_HIDDEN)
}

export function animateToAlpha(
  fadeable: Fadeable,
  targetAlpha: number,
  animationDuration?: number
): void {
  let animationDurationDefined = animationDuration || ANIMATE_DURATION_SECONDS
  cancelAnimation(fadeable)
  if (fadeable.currentAlpha !== targetAlpha) {
    fadeable.animationCancelFunction = animate({
      update: ((alpha: number) => {
        fadeable.setFadeEnabled(true)
        fadeable.setAlpha(alpha)
      }).bind(fadeable),
      start: fadeable.currentAlpha,
      end: targetAlpha,
      ended: () => {
        fadeable.setFadeEnabled(targetAlpha !== 0)
      },
      duration: animationDurationDefined,
    })
  }
}

export function cancelAnimation(fadeable: Fadeable): void {
  if (
    fadeable.animationCancelFunction !== null &&
    fadeable.animationCancelFunction !== undefined
  ) {
    fadeable.animationCancelFunction()
    fadeable.animationCancelFunction = null
  }
}

export function setAlphaForText(text: Text, alpha: number): void {
  text.textFill.color = new vec4(
    text.textFill.color.x,
    text.textFill.color.y,
    text.textFill.color.z,
    alpha
  )
}

export function setAlphaForRmv(rmv: RenderMeshVisual, alpha: number): void {
  rmv.mainMaterial.mainPass.alpha = alpha
}

export function setAlphaForTexts(texts: Text[], alpha: number): void {
  texts.forEach((text) => setAlphaForText(text, alpha))
}

export function setAlphaForRmvs(rmvs: RenderMeshVisual[], alpha: number): void {
  rmvs.forEach((rmv) => setAlphaForRmv(rmv, alpha))
}
