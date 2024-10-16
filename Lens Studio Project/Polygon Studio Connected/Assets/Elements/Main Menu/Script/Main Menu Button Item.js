// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Access to template items



// main object
//@ui {"widget":"label"}
//@input Component.Script mainButton
//@input Component.RenderMeshVisual ground
//@input Component.RenderMeshVisual ring
//@input Component.RenderMeshVisual platform
//@input Component.RenderMeshVisual meshPreview
//@input SceneObject meshPreviewAnchor
//@input SceneObject[] digits

// share button
//@ui {"widget":"label"}
//@input Component.Script shareButton

// remove button
//@ui {"widget":"label"}
//@input Component.Script removeButton
//@input SceneObject canTrf
var canTrf = script.canTrf.getTransform();
//@input SceneObject canTrf1
var canTrf1 = script.canTrf1.getTransform();
//@input SceneObject canTrf2
var canTrf2 = script.canTrf2.getTransform();
//@input SceneObject lidTrf
var lidTrf = script.lidTrf.getTransform();
//@input SceneObject lidTrf1
var lidTrf1 = script.lidTrf1.getTransform();
//@input SceneObject lidTrf2
var lidTrf2 = script.lidTrf2.getTransform();
//@input SceneObject trash1
var trash1 = script.trash1.getTransform();
//@input SceneObject trash2
var trash2 = script.trash2.getTransform();
//@input SceneObject trash3
var trash3 = script.trash3.getTransform();



// set digit sceneobject
script.setDigit = function(n){
    for(var i = 0; i < script.digits.length; i++){
        script.digits[i].enabled = i == n;
    }
}



// - show/hide animations

const mainScaleDuration = .25;
const subScaleDurations = .18;

const mainButtonAnim = createShowHideAnim(script.mainButton.getSceneObject(), duratio=mainScaleDuration);
script.mainButtonShow = mainButtonAnim.show;
script.mainButtonHide = mainButtonAnim.hide;

const shareButtonAnim = createShowHideAnim(script.shareButton.getSceneObject(), duratio=subScaleDurations);
script.shareButtonShow = shareButtonAnim.show;
script.shareButtonHide = shareButtonAnim.hide;

const removeButtonAnim = createShowHideAnim(script.removeButton.getSceneObject(), duratio=subScaleDurations);
script.removeButtonShow = removeButtonAnim.show;
script.removeButtonHide = removeButtonAnim.hide;


// animation creator, returns show() and hide()
function createShowHideAnim(buttonObj, duration){
    const buttonTrf = buttonObj.getChild(0).getTransform();
    var buttonStartScale = buttonTrf.getLocalScale();
    var anim = new AnimateProperty(function(v){
        const s = vec3.lerp(vec3.zero(), buttonStartScale, v);
        buttonTrf.setLocalScale(s);
    });
    anim.easeFunction = EaseFunctions.Cubic.Out;
    anim.setReversed(true); // hidden on start
    anim.duration = duration;
    anim.startFunction = function(inAnim){
        if(inAnim){
            buttonObj.enabled = true;
    
            // disable all scripts until animation is done, to prevent early highlights
            const allScriptComponents = buttonObj.getComponents("Component.Script");
            for(var i = 0; i < allScriptComponents.length; i++){
                allScriptComponents[i].enabled = false;
            }
        }
    }
    anim.endFunction = function(inAnim){
        if(!inAnim){
            buttonObj.enabled = false;
        }else{
            // enable all scripts when animation is done
            const allScriptComponents = buttonObj.getComponents("Component.Script");
            for(var i = 0; i < allScriptComponents.length; i++){
                allScriptComponents[i].enabled = true;
            }
        }
    }
    
    function show(){
        if(!anim.getReversed()) return; // only if not already shown
        anim.setReversed(false);
        anim.start();
    }
    
    function hide(instant){
        if(instant){
            anim.setReversed(true);
            anim.endFunction(false);
            return;
        }
        if(anim.getReversed()) return; // only if not already hidden
        anim.setReversed(true);
        anim.start();
    }

    return {show, hide};
}



// - on SIK script initialization

function onSIKInitialized(){

    // - remove button animation

    var removeHighlightAnim = new AnimateProperty(function(v){
        // trash pieces
        const newTrashScale = vec3.one().uniformScale(v);
        trash1.setLocalScale(newTrashScale);
        trash2.setLocalScale(newTrashScale);
        trash3.setLocalScale(newTrashScale);
    
        // can
        canTrf.setLocalPosition(vec3.lerp( canTrf1.getLocalPosition(), canTrf2.getLocalPosition(), v));
        canTrf.setLocalRotation(quat.slerp( canTrf1.getLocalRotation(), canTrf2.getLocalRotation(), v));
    
        // lid
        lidTrf.setLocalPosition(vec3.lerp( lidTrf1.getLocalPosition(), lidTrf2.getLocalPosition(), v));
        lidTrf.setLocalRotation(quat.slerp( lidTrf1.getLocalRotation(), lidTrf2.getLocalRotation(), v));
    });
    removeHighlightAnim.duration = .3;
    removeHighlightAnim.reverseDuration = .2;
    removeHighlightAnim.easeFunction = EaseFunctions.Cubic.Out;
    
    script.removeButton.interactable.onHoverEnter.add(function(){
        removeHighlightAnim.setReversed(false);
        removeHighlightAnim.start();
    });
    script.removeButton.interactable.onHoverExit.add(function(){
        removeHighlightAnim.setReversed(true);
        removeHighlightAnim.start();
    });

};
script.createEvent("OnStartEvent").bind(onSIKInitialized);