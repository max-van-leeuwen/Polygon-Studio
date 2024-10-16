//@input Component.RenderMeshVisual renderMeshVisual
//@input float maxBlendShapeWeight = 1
//@ui {"widget":"separator"}
//@input bool useGlowMesh = true
//@input Component.RenderMeshVisual glowRenderMeshVisual {"showIf" : "useGlowMesh"}
//@ui {"widget":"separator"}
//@ui {"widget":"label", "label":"Blendshape Overrides"}
//@input string meshBlendshapeName = "Pinch"
//@input bool meshWeights = false
//@input float meshIdle = 0 {"showIf" : "meshWeights"}
//@input float meshHover = 0.33 {"showIf" : "meshWeights"}
//@input float meshTriggered = 0.66 {"showIf" : "meshWeights"}
//@input string glowBlendshapeName = "Pinch"
//@input bool glowWeights = false
//@input float glowIdle = 0 {"showIf" : "glowWeights"}
//@input float glowHover = 0.33 {"showIf" : "glowWeights"}
//@input float glowTriggered = 0.66 {"showIf" : "glowWeights"}
//@ui {"widget":"separator"}
//@ui {"widget":"label", "label":"Animations"}
//@input bool useAnimations = false
//@input Component.AnimationMixer animationMixer {"showIf" : "useAnimations"}
//@input string animationLayerName = "BaseLayer" {"showIf" : "useAnimations"}

var SIK = require("../../../../../../SpectaclesInteractionKit/SIK").SIK;

// Define variables
var renderMeshVisual = script.renderMeshVisual; // The RenderMeshVisual component for the button
var useGlowMesh = script.useGlowMesh; // Flag to enable/disable the glow effect
var glowRenderMeshVisual = script.glowRenderMeshVisual; // The RenderMeshVisual component for the glow effect
var maxBlendShapeWeight = script.maxBlendShapeWeight; // The maximum blend shape weight for the button
var meshBlendshapeName = script.meshBlendshapeName; // The name of the blend shape for the button
var glowBlendshapeName = script.glowBlendshapeName; // The name of the blend shape for the glow effect

// Define variables
var interactable; // The interactable component
var initialMaxInteractionStrength = 0; // The initial maximum interaction strength
var squishEnabled = true; // Flag to enable/disable squishing

// Define constants for mesh states
const MESH_IDLE = script.meshWeights ? script.meshIdle : 0; // The blend shape weight for the idle state
const MESH_HOVER = script.meshWeights ? script.meshHover : 0.33; // The blend shape weight for the hover state
const MESH_TRIGGERED = script.meshWeights ? script.meshTriggered : 0.66; // The blend shape weight for the triggered state

// Define constants for button states
const GLOW_IDLE = script.glowWeights ? script.glowIdle : 0; // The blend shape weight for the idle state
const GLOW_HOVER = script.glowWeights ? script.glowHover : 0.33; // The blend shape weight for the hover state
const GLOW_TRIGGERED = script.glowWeights ? script.glowTriggered : 0.66; // The blend shape weight for the triggered state

/**
 * Initializes the hover state by setting the initial maximum interaction strength and updating the glow render mesh visual status.
 */
function initializeHoverState() {
  if (!glowRenderMeshVisual) {
    print(
      "No RenderMeshVisual component found on glowRenderMeshVisual. Please add a RenderMeshVisual component to the glowRenderMeshVisual in the inspector."
    );
  }

  initialMaxInteractionStrength = getMaxInteractionStrength(); // Get the initial maximum interaction strength

  changeButtonState(MESH_HOVER); // Change the button state based on the toggle state
  changeGlowState(GLOW_HOVER); // Set the status of the main pass of the glow render mesh visual to idle
}

/**
 * Resets the hover state to its initial state.
 */
function resetHoverState() {
  if (!renderMeshVisual) {
    print(
      "No RenderMeshVisual component found on squishObject. Please add a RenderMeshVisual component to the squishObject in the inspector."
    );
    return;
  }

  initialMaxInteractionStrength = 0; // Reset the initial maximum interaction strength

  renderMeshVisual.setBlendShapeWeight(meshBlendshapeName, 0); // Reset the blend shape weight to 0

  if (useGlowMesh) {
    glowRenderMeshVisual.setBlendShapeWeight(glowBlendshapeName, 0); // Reset the blend shape weight for the glow effect to 0
  }

  changeButtonState(MESH_IDLE); // Change the button state based on the toggle state
  changeGlowState(GLOW_IDLE); // Set the status of the main pass of the glow render mesh visual to idle
}

/**
 * Updates the hover state of the interactable based on the current interaction strength.
 */
function updateHoverState() {
  const maxInteractionStrength = getMaxInteractionStrength();
  if (!squishEnabled) {
    return;
  }

  if (!renderMeshVisual) {
    print(
      "No RenderMeshVisual component found on squishObject. Please add a RenderMeshVisual component to the squishObject in the inspector."
    );
    return;
  }

  const interactionScale =
    initialMaxInteractionStrength +
    (maxInteractionStrength * (1 - initialMaxInteractionStrength)) / 1; // Calculate the interaction scale based on the initial and maximum interaction strengths

  renderMeshVisual.setBlendShapeWeight(
    meshBlendshapeName,
    interactionScale * maxBlendShapeWeight
  ); // Set the blend shape weight based on the interaction scale

  if (useGlowMesh) {
    glowRenderMeshVisual.setBlendShapeWeight(
      glowBlendshapeName,
      interactionScale * maxBlendShapeWeight
    ); // Set the blend shape weight for the glow effect based on the interaction scale
  }
}

/**
 * Gets the interaction strength of the currently hovering interactor.
 */
function getMaxInteractionStrength() {
  // get Array of all Interactors which are currently hovering this Interactable
  const interactors = SIK.InteractionManager.getInteractorsByType(
    interactable.hoveringInteractor
  );

  if (interactors.length === 0) {
    // Nothing returned by getInteractorsByType, so we have no way to get interactionStrength, return 0
    return 0;
  }

  /**
   * At this point we know getInteractorsByType has returned some list of Interactors, each of which are hovering this Interactable
   *
   * This means that there are multiple Interactors which could be at various stages of interactionStrength. The behavior
   * we want is to set the squish value of the Interactable based on the Max interactionStrength of all the Interactors currently
   * hovering this Interactable. Use array reduce to find Max:
   */
  return interactors.reduce((maxStrength, interactor) => {
    return Math.max(maxStrength, interactor.interactionStrength);
  }, -Infinity);
}

// Set up callbacks for interactable events
function setupInteractableCallbacks() {
  interactable.onHoverEnter.add(initializeHoverState); // Call initializeHoverState when hover enters
  interactable.onHoverUpdate.add(updateHoverState); // Call updateHoverState when hover updates
  interactable.onHoverExit.add(resetHoverState); // Call resetHoverState when hover exits
  interactable.onTriggerCanceled.add(resetHoverState); // Call resetHoverState when trigger is canceled
  // interactable.createEvent("OnDisableEvent").bind(resetHoverState); // Call resetHoverState when interactable is disabled

  interactable.onTriggerStart.add(function () {
    changeButtonState(MESH_TRIGGERED); // Change the button state based on the toggle state
    changeGlowState(GLOW_TRIGGERED); // Change the glow state based on the toggle state

    if (script.useAnimations) {
      script.animationMixer.start(script.animationLayerName, 0.0, 1);
    }
  });

  interactable.onTriggerEnd.add(function () {
    changeButtonState(MESH_HOVER); // Change the button state based on the toggle state
    changeGlowState(GLOW_HOVER); // Change the glow state based on the toggle state
  });
}

// Changes the button state by updating the status of the render mesh visual
function changeButtonState(state) {
  renderMeshVisual.mainPass.status = state;
}

// Changes the glow state by updating the status of the glow render mesh visual
function changeGlowState(state) {
  if (!useGlowMesh) return;

  glowRenderMeshVisual.mainPass.status = state;
}

function init() {
  if (!renderMeshVisual) {
    print(
      "No RenderMeshVisual component found on renderMeshVisual. Please add a RenderMeshVisual component to the renderMeshVisual in the inspector."
    );
    return;
  }

  renderMeshVisual.mainMaterial = renderMeshVisual.getMaterial(0).clone(); // Clone the main material of the renderMeshVisual

  if (glowRenderMeshVisual) {
    glowRenderMeshVisual.mainMaterial = glowRenderMeshVisual
      .getMaterial(0)
      .clone(); // Clone the main material of the glowRenderMeshVisual
  } else {
    useGlowMesh = false; // Set the flag to disable the glow effect
  }

  // Get the typename of the Interactable component from the InteractionConfiguration
  var interactableTypename =
    SIK.InteractionConfiguration.requireType("Interactable");
  if (!interactableTypename) {
    throw new Error(
      "Please ensure that InteractionConfiguration is present in the scene and that Interactable is added to it in the inspector."
    );
  }

  // Get the Interactable component from the current scene object
  interactable = script.getSceneObject().getComponent(interactableTypename);
  if (!interactable) {
    throw new Error("InteractableSquishVisual script requires an Interactable");
  }

  setupInteractableCallbacks(); // Set up callbacks for interactable events

  // Enable squishing when the script is enabled
  script.createEvent("OnEnableEvent").bind(function () {
    squishEnabled = true;
  });

  // Disable squishing when the script is disabled
  script.createEvent("OnDisableEvent").bind(function () {
    squishEnabled = false;
  });
}

init();
