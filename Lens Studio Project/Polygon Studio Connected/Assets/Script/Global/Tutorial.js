// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Tutorial



// access
global.Tutorial = script;
script.start = start; // args: callback function, forceStart (even if already done before)



//@ui {"widget":"label"}
//@input SceneObject tutorialScene
//@input SceneObject explanationText

//@ui {"widget":"label"}
//@ui {"widget":"label", "label":"<b>Step 1"}
//@input SceneObject step1Obj
//@input Asset.Texture makeSquare
//@input Asset.Texture awesome
//@input Component.RenderMeshVisual face
//@input Component.RenderMeshVisual faceSuccess
//@input SceneObject lineVisualizer
//@input Asset.Material outlineMat
//@input Asset.Material plasticTemplate
//@input SceneObject pointHintPos
//@input SceneObject p1
//@input SceneObject p2
//@input SceneObject pPickup
//@ui {"widget":"label"}

//@ui {"widget":"label", "label":"<b>Step 2"}
//@input Component.Script SIKcontainer
//@input Asset.Texture radialMenu
//@input Asset.Texture mainMenuTex
//@ui {"widget":"label"}

//@ui {"widget":"label", "label":"<b>On End"}
//@input Asset.Texture allDone
//@ui {"widget":"label"}



// params
const squareColorIndex = 1; // starting color for tutorial square

// placeholders
var cb;
var worldPlacement;
var tutorialSceneQf;
var explanationQF;
var step1ObjQF;
var SIKContainerQF;

// helpers for reset when new 2nd tutorial starts, e.g. called from main menu
var explanationTextOriginalParent;
var explanationTextOriginalPosition;
var explanationTextOriginalScale;

// easier-to-use values when in editor
const debugging = global.deviceInfoSystem.isEditor();



function init(){
    // placement in front of user
    worldPlacement = new WorldPlacement(script.tutorialScene);
    worldPlacement.distanceFromCamera = debugging ? 100 : 65;
    worldPlacement.height = 0;
    

    // create animators once
    explanationQF = new QuickFlow(script.explanationText);
    script.explanationText.enabled = false;
    
    tutorialSceneQf = new QuickFlow(script.tutorialScene);
    script.tutorialScene.enabled = false;

    step1ObjQF = new QuickFlow(script.step1Obj);
    script.step1Obj.enabled = false;

    SIKContainerQF = new QuickFlow(script.SIKcontainer.getSceneObject());

    script.faceSuccess.getSceneObject().enabled = false;
    script.lineVisualizer.enabled = false;


    // set face visual's materials for step 1
    script.face.addMaterial(script.plasticTemplate.clone());
    script.face.mainPass.c = RadialManager.getColorByIndex(squareColorIndex);
    script.faceSuccess.addMaterial(script.face.getMaterial(0));


    // reset-values
    explanationTextOriginalPosition = script.explanationText.getTransform().getLocalPosition();
    explanationTextOriginalScale = script.explanationText.getTransform().getLocalScale();
}
script.createEvent("OnStartEvent").bind(init);



function start(callback, forceStart){
    // if tutorial done before, don't do it again
    if(!forceStart && Sequence.delivery && Storage.tutorialFinished && !Sequence.alwaysTutorial){
        callback();
        return;
    }

    // if not in Delivery mode, make sure debugging tutorial is enabled
    if(Sequence.doTutorial===false){ // doTutorial is null in Delivery mode
        callback();
        return;
    }

    // clear all previous radial flags, just in case this tutorial was called at a later time
    RadialManager.allEnabledFlags.clear();

    // disable radial
    RadialManager.allEnabledFlags.set("tutorialIsFree", false);

    // start tutorial
    cb = callback;
    step1();
}



// text explanation
function showExplanation(t){
    explanationQF.scaleIn(0, .6, .6).fadeIn(0, .6);
    script.explanationText.getComponent("Component.Image").mainPass.baseTex = t;
}

function stopExplanation(){
    explanationQF.scaleOut().fadeOut();
}



// 1. complete the square (2 triangles, 1 already there and a floating point for the 2nd one)
function step1(){
    // params
    const snappingDist = debugging ? 8 : 3; // custom snapping distance
    const pickupDist = debugging ? 14 : 6; // custom pickup distance

    worldPlacement.start(true);

    // show first step text
    showExplanation(script.makeSquare);
    
    // show triangle
    step1ObjQF.scaleIn();
    tutorialSceneQf.scaleIn();

    // show pickup point
    var pickupHint;
    var hand3DhintDelay;
    new DoDelay(function(){ // await in-anim
        const pPickupTrf = script.pPickup.getTransform();
        const pickupPos = pPickupTrf.getWorldPosition();
        pickupHint = new Hints.Dot(pickupPos, parent=script.tutorialScene); // show dot on pickup point
        
        // if the user takes a long time to figure it out, show a hand animation
        hand3DhintDelay = new DoDelay(function(){
            const pickupPos = pPickupTrf.getWorldPosition();
            const pickupRot = pPickupTrf.getWorldRotation();
            Hints.startPinchHand(pickupPos, pickupRot, script.tutorialScene);
        });
        hand3DhintDelay.byTime(10);
    }).byTime(1);


    // point hint placeholder
    var p3Pos;
    var pointHint;

    // pickup hint delay placeholder
    var pickupHintDelay;

    // other placeholders
    var isGrabbing;
    var wasSnapping;


    // cursor check for line visualizer
    var updateEvent = script.createEvent("UpdateEvent");
    updateEvent.bind(update);
    function update(){
        if(HandTracking.getPinching()){
            script.lineVisualizer.enabled = false;
            return;
        }
        const p = HandTracking.getPinchPosition() || HandTracking.getHoverWorldPosition();
        if(!p){
            script.lineVisualizer.enabled = false;
            return;
        }

        const pickupPos = script.pPickup.getTransform().getWorldPosition();
        const isClose = p.distance(pickupPos) < pickupDist;
        if(isClose){
            Hints.showHandText("pinch to grab");
            script.lineVisualizer.enabled = true;
        }else{
            Hints.hideHandText();
            script.lineVisualizer.enabled = false;
        }
    }


    // on pinch start
    HandTracking.onPinchStart.add(pinchStart);
    function pinchStart(p){
        wasSnapping = false;

        // check if grabbing onto point
        const pickupPos = script.pPickup.getTransform().getWorldPosition();
        if(p.distance(pickupPos) > pickupDist){
            isGrabbing = false;
            return;
        }
        isGrabbing = true;

        if(hand3DhintDelay) hand3DhintDelay.stop();
        hand3DhintDelay = null;
        Hints.stopPinchHand();
        
        // play pickup sound
        SoundPools.tick4();

        // stop pickup hint
        if(pickupHintDelay) pickupHintDelay.stop();
        pickupHintDelay = null;
        if(pickupHint) pickupHint.remove();
        pickupHint = null;

        // create point hint
        p3Pos = script.pointHintPos.getTransform().getWorldPosition();
        if(pointHint) pointHint.remove();
        pointHint = new Hints.Dot(script.pointHintPos.getTransform().getWorldPosition(), parent=script.tutorialScene);

        // blinking outline
        script.outlineMat.mainPass.blinking = true;
    }

    HandTracking.onPinchHold.add(pinchHold);
    function pinchHold(p){
        if(!p3Pos || !isGrabbing){
            wasSnapping = false;
            return;
        }

        if(p.distance(p3Pos) < snappingDist){
            p = p3Pos;
            script.outlineMat.mainPass.snapping = true;
            
            if(!wasSnapping){
                wasSnapping = true;
                Hints.showHandText("release");
                SoundPools.tick5();
            }
        }else{
            Hints.hideHandText();
            wasSnapping = false;
            script.outlineMat.mainPass.snapping = false;
        }
        const triangle = {
            p1:script.p1.getTransform().getWorldPosition(),
            p2:script.p2.getTransform().getWorldPosition(),
            pos:p,
            c:squareColorIndex
        }
        InteractionPreview.triangles([triangle]);
    }

    // on pinch end
    HandTracking.onPinchEnd.add(pinchEnd)
    function pinchEnd(p){
        Hints.hideHandText();

        if(!p3Pos || !isGrabbing) return;

        InteractionPreview.stop();
        if(pointHint) pointHint.remove();
        pointHint = null;
        script.outlineMat.mainPass.blinking = false;
        script.outlineMat.mainPass.snapping = false;

        if(p.distance(p3Pos) < snappingDist){ // if success

            // face stays there during out-anim
            script.faceSuccess.getSceneObject().enabled = true;

            // stop pickup hint
            if(pickupHintDelay) pickupHintDelay.stop();
            pickupHintDelay = null;
            if(pickupHint) pickupHint.remove();
            pickupHint = null;

            // stop interactions
            HandTracking.onPinchStart.remove(pinchStart);
            HandTracking.onPinchHold.remove(pinchHold);
            HandTracking.onPinchEnd.remove(pinchEnd);
            script.removeEvent(updateEvent);

            // stop and go to step 2
            script.explanationText.getComponent("Component.Image").mainPass.baseTex = script.awesome; // show 'awesome' text for a short duration

            new DoDelay(function(){

                // unparent explanation text (is needed for step 2)
                const explanationTextTrm = script.explanationText.getTransform().getWorldTransform();
                explanationTextOriginalParent = script.explanationText.getParent();
                script.explanationText.setParent(script.explanationText.getParent().getParent().getParent());
                script.explanationText.getTransform().setWorldTransform(explanationTextTrm);
                stopExplanation();

                // out anim step1
                step1ObjQF.scaleOut();
                SIKContainerQF.scaleOut();

                // after out-animations
                new DoDelay(function(){
                    // start step 2 of tutorial
                    step2();
                    
                    // resets
                    script.faceSuccess.getSceneObject().enabled = false; // hide previewing face
                }).byTime(.7);

            }).byTime(1.4);

        }else{ // if failed
            
            // show pickup hint again
            pickupHintDelay = new DoDelay(function(){
                if(pickupHint) pickupHint.remove();
                pickupHint = new Hints.Dot(script.pPickup.getTransform().getWorldPosition(), parent=script.tutorialScene);
            });
            pickupHintDelay.byTime(.5);

        }
    }
}



//  2. open radial, go to main menu
function step2(){
    // enable radial
    RadialManager.allEnabledFlags.set("tutorialIsFree", true);

    // init radial
    RadialManager.setColorIndex(squareColorIndex);

    // show dot to indicate pinching anywhere in empty space
    const pinchDotPos = script.explanationText.getTransform().getWorldPosition().add(new vec3(0, -14, 0));
    const pinchHint = new Hints.Dot(pinchDotPos);

    // track user pinch
    HandTracking.onPinchStart.add(pinchStart);
    const timeThreshold = 1;
    var step2TimeStart = getTime();
    function pinchStart(){
        pinchHint.remove();

        if(getTime() - step2TimeStart < timeThreshold) return;
        HandTracking.onPinchStart.remove(pinchStart);
        script.explanationText.getComponent("Component.Image").mainPass.baseTex = script.mainMenuTex; // show main menu hint for a short duration
    }

    // show explanation
    showExplanation(script.radialMenu);

    // when in radial, only allow home button
    RadialManager.enableTutorial(onHomeButton, onWrongButton);

    // radial callbacks
    function onHomeButton(){
        // disable radial
        RadialManager.allEnabledFlags.set("tutorialIsFree", false);

        // show 'awesome' text for a short duration
        script.explanationText.getComponent("Component.Image").mainPass.baseTex = script.allDone;

        // end of tutorial scene
        new DoDelay(function(){
            tutorialSceneQf.scaleOut();
            stopExplanation();
            Storage.setTutorialFinished();
            new DoDelay(cb).byTime(.5); // callback on end

            // reset after out-anims
            new DoDelay(function(){
                // enable radial
                RadialManager.allEnabledFlags.set("tutorialIsFree", true);

                script.explanationText.setParent(explanationTextOriginalParent);
                script.explanationText.getTransform().setLocalPosition(explanationTextOriginalPosition);
                script.explanationText.getTransform().setLocalScale(explanationTextOriginalScale);
                script.explanationText.getTransform().setLocalRotation(quat.quatIdentity());
            }).byTime(1);
        }).byTime(1);
    }
    function onWrongButton(){
        new DoDelay(function(){
            Hints.showHandText("wrong button! try again", 1.5);
        }).byTime(.3);
    }
}