// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Access to common hints to spawn throughout the experience



// access
global.Hints = script;

script.startPinchHand = startPinchHand; // args: pos (vec3), rot (quat), parent obj
script.stopPinchHand = stopPinchHand; // stops currently active pinch hand (if any)

script.setRemoveMode = setRemoveMode; // args: bool

script.showHandText = showHandText; // args: string, duration
script.hideHandText = hideHandText;

script.Dot = Dot; // args: pos (vec3), parent - creates dot instance (functions: getSceneObject(), remove())



// params
const handTextDuration = 4;



// inputs
//@ui {"widget":"label"}
//@input SceneObject pinchHandVisual
var pinchHand = script.pinchHandVisual;
var pinchHandMat = pinchHand.getChild(0).getChild(1).getComponent("Component.RenderMeshVisual").getMaterial(0); // get material on pinch hand

//@ui {"widget":"label"}
//@input SceneObject removeMode
var removeMode = script.removeMode;
var removeModeTrf = removeMode.getTransform();
var removeModeMat = removeMode.getChild(0).getComponent("Component.Image").getMaterial(0); // get material on pinch hand

//@ui {"widget":"label"}
//@input Component.Text handText

//@ui {"widget":"label"}
//@input SceneObject dotObj



// placeholders
var handTextAnim;



function init(){
    pinchHand.enabled = false;
    removeMode.enabled = false;
    script.handText.enabled = false;
    script.dotObj.enabled = false;



    // create hand text animator
    handTextAnim = new AnimateProperty(function(v){
        script.handText.textFill.color = new vec4(1, 1, 1, v);
        script.handText.outlineSettings.fill.color = new vec4(0, 0, 0, v);
        script.handText.dropshadowSettings.fill.color = new vec4(0, 0, 0, v);
        script.handText.backgroundSettings.fill.color = new vec4(0, 0, 0, v);
    })
    handTextAnim.startFunction = function(inAnim){
        if(inAnim) script.handText.enabled = true; // enable on start

        if(inAnim){ // on start, automatically queue the out-anim
            // stop previous if any
            if(handTextAnim.autoEndDelay) handTextAnim.autoEndDelay.stop();
            handTextAnim.autoEndDelay = new DoDelay(function(){ // bind to animation as custom parameter
                handTextAnim.setReversed(true);
                handTextAnim.start();
            });
            handTextAnim.autoEndDelay.byTime(handTextAnim.customDuration);
        }
    }
    handTextAnim.endFunction = function(inAnim){
        if(!inAnim) script.handText.enabled = false; // disable on end
    }
    handTextAnim.duration = .05;
    handTextAnim.reverseDuration = .35;
    handTextAnim.pulse(0);
    handTextAnim.setReversed(true); // set to 'reversed' so we can use the reversed check to know if the object is currently visible or not

    // make hand text smoothly follow hand
    var handTextAnchor = global.scene.createSceneObject("handTextFollower");
    var handTextAnchorTrf = handTextAnchor.getTransform();
    script.createEvent("UpdateEvent").bind(function(){
        const p = HandTracking.getPinchPosition() || HandTracking.getHoverWorldPosition();
        if(p) handTextAnchorTrf.setWorldPosition(p);

        script.handText.getSceneObject().enabled = !!p; // only show hint if hand is currently being tracked
    });
    var smoothFollowAnchor = new SmoothFollow();
    smoothFollowAnchor.follow = handTextAnchor;
    smoothFollowAnchor.apply = script.handText.getSceneObject().getParent();
    smoothFollowAnchor.smoothing = .1;
    smoothFollowAnchor.rotation = false;
    smoothFollowAnchor.scale = false;
    smoothFollowAnchor.start();
}
init();



// pinch hand
var disableDelay = new DoDelay(function(){ // DoDelay instance to call when object doesn't need to be rendered anymore
    pinchHand.enabled = false;
});

function startPinchHand(pos, rot, parent){
    if(parent) pinchHand.setParent(parent);
    disableDelay.stop();
    pinchHand.getTransform().setWorldPosition(pos);
    pinchHand.getTransform().setWorldRotation(rot);
    pinchHandMat.mainPass.inTime = getTime();
    pinchHand.enabled = true;
}

function stopPinchHand(){
    const trm = pinchHand.getTransform().getWorldTransform();
    pinchHand.setParent(script.getSceneObject());
    pinchHand.getTransform().setWorldTransform(trm);
    pinchHandMat.mainPass.outTime = getTime();
    disableDelay.byTime(1); // arbitrary value, a little longer than the out-anim in shader
}



// remove mode
var removeModeEvent = script.createEvent("UpdateEvent");
removeModeEvent.bind(removeModeUpdate);
removeModeEvent.enabled = false;
var removeModeDisableDelay = new DoDelay(function(){removeMode.enabled=false});
const removeModeDelay = 1; // arbitrary, waiting for shader animation to end
var removeModeSmoothFollow = new SmoothFollow(); // smooth follower for hand tracking
removeModeSmoothFollow.smoothing = .1;
removeModeSmoothFollow.onUpdate.add(removeModeSmoothUpdate);

function removeModeUpdate(eventArgs, instant){
    const p = HandTracking.getPinchPosition() || HandTracking.getHoverWorldPosition();
    if(p) removeModeSmoothFollow.addValue(p, instant);
}

function removeModeSmoothUpdate(){
    const p = removeModeSmoothFollow.getValue();
    removeModeTrf.setWorldPosition(p);
}

function setRemoveMode(v){
    if(v){
        removeModeUpdate(null, true); // force on first frame
        removeModeDisableDelay.stop(); // cancel disable delay
        removeMode.enabled = true;
        removeModeEvent.enabled = v;
        removeModeMat.mainPass.startTime = getTime();
    }else{
        removeModeDisableDelay.byTime(removeModeDelay); // disable after a while
        removeModeMat.mainPass.endTime = getTime();
    }
}



// hand text
function showHandText(str, duration){
    script.handText.text = str;
    if(handTextAnim.getReversed()){ // if not currently visible
        handTextAnim.customDuration = duration || handTextDuration;
        handTextAnim.setReversed(false); // anim in
        handTextAnim.start();
    }
}

function hideHandText(){
    if(!handTextAnim.getReversed()){ // if currently visible
        handTextAnim.setReversed(true); // anim out
        handTextAnim.start();
    }
}



// dot
function Dot(pos, parent){
    var obj = script.getSceneObject().copyWholeHierarchy(script.dotObj);
    obj.enabled = true;
    var trf = obj.getTransform();

    if(parent) obj.setParent(parent);
    
    trf.setWorldPosition(pos);
    new QuickFlow(obj).scaleIn();
    
    this.remove = function(){
        if(isNull(obj)) return;

        new QuickFlow(obj).scaleOut();
        new DoDelay(function(){
            if(isNull(obj)) return;
            obj.destroy();
        }).byTime(1);
    }

    this.getSceneObject = function(){
        return obj;
    }
}