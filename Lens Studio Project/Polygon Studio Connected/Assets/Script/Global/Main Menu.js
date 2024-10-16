// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages the Main Menu



// access
global.MainMenu = script;
script.start = start;
script.worldToMenuDuration = .5; // custom animation duration from world mesh to button preview mesh (public so World Manager can easily access it)
script.onQRReturn = onQRReturn; // back to main menu after QR exporting screen
script.repeatTutorial = repeatTutorial; // re-play the tutorial level (called by pinch button in main menu)



// main menu button template
//@ui {"widget":"label"}
//@input Component.Camera cam
//@input Component.Script plate
var plateObj = script.plate.getSceneObject();
//@input SceneObject buttonsParent
//@input Component.Script buttonTemplate
//@input Asset.Material plasticTemplate
//@input Asset.Material ctaText

// main menu logo transform
//@ui {"widget":"label"}
//@input SceneObject logoTransform

// save slots
//@ui {"widget":"label"}
/*
@typedef saveSlot
@property {vec3} groundColor {"widget": "color"}
@property {vec3} platformColor {"widget": "color"}
@property {int} radialColorIndex
*/
//@input saveSlot[] saveSlots



// params
const saveSlotsDistance = 50; // distance between main menu buttons
const rotationalStrength = .07; // rotational strength of save slots (when smaller, make sure to increase saveSlotsDistance to maintain safe distance between buttons)
const buttonInAnimDelay = .15; // animation delay
const saveSlotsHeight = 7.5; // height of main menu buttons
const previewMeshScale = 10; // mesh scale on main menu buttons
const localLogoPosition = new vec3(0, 25, 0); // polygon studio logo location
const localLogoSize = 1.5; // polygon studio logo size

// placeholders
var firstOpen = true; // first menu open of this session
var mainMenuOpen;
var mainMenuEnabled;
var buttonInstances;
var worldPlacement;
var worldData; // array of world data previews (to be passed to world manager when opened)
var logoQF; // QuickFlow for Polygon Studio logo
var plateIsTranslating;
var billboardStep; // plate billboarding function



function init(){
    script.buttonTemplate.getSceneObject().enabled = false;
    buildButtons();

    // in front of user on start, not any later as it wouldn't't align with intro objects otherwise
    worldPlacement = new WorldPlacement(plateObj);
    worldPlacement.distanceFromCamera = 100;
    worldPlacement.height = -20;
    worldPlacement.rotation = false;
    worldPlacement.start(true);

    // billboarding
    const camTrf = script.cam.getTransform();
    const startRot = plateObj.getTransform().getWorldRotation();

    // create animators
    plateQF = new QuickFlow(plateObj);

    // plate billboarding around Y (smoothened)
    billboardStep = function(step){ // 1 = instant
        const crrRot = plateObj.getTransform().getWorldRotation();
        const newRot = lookAtUp(camTrf.getWorldPosition(), plateObj.getTransform().getWorldPosition()).multiply(startRot);
        const rot = quat.slerp(crrRot, newRot, clamp(step));
        plateObj.getTransform().setWorldRotation(rot);
    }
    script.createEvent("OnStartEvent").bind(function(){
        script.plate.interactable.onDragStartEvent.subscribers.push(function(){
            plateIsTranslating = true;
        });
        script.plate.interactable.onDragEndEvent.subscribers.push(function(){
            plateIsTranslating = false;
        });
        const billboardSpeed = 4;
        script.createEvent("UpdateEvent").bind(function(){
            if(mainMenuOpen && plateIsTranslating){
                billboardStep(getDeltaTime() * billboardSpeed);
            }
        });

        // don't show on start
        plateObj.enabled = false;
    });
}
init();



function start(meshRendererTrf, fromWorld, newData){
    mainMenuOpen = true;
    
    // enable buttons
    setMenuEnabled(true);

    // flag SIK cursor
    Cursor.sikCursorAnyEnabled.set("MainMenuAllowed", true);

    // re-read persistent data
    worldData = [];

    // show buttons
    for(let i = 0; i < buttonInstances.length; i++){
        const button = buttonInstances[i];

        // process persistent storage
        if(fromWorld==i){ // if just came back from this save slot, use already centered newData instead of re-centering again!
            worldData[i] = newData;
        }else{
            worldData[i] = Storage.readData(i); // read data from persistent storage
            WorldManager.centerMesh(worldData[i]); // re-center the mesh data
            Storage.storeData(worldData[i], i); // overwrite persistent storage with centered data
            // the reason re-centering and then overwriting persistent storage is happening here (for all worlds simultaneously) is that the alternative is to do it per-mesh on each mesh change
            // PERFORMANCE flag individual saving slots with an 'isCentered' bool in persistent storage, so these don't get re-centered on each menu open!
        }

        // update preview mesh
        const mesh = WorldManager.dataToMesh(worldData[i]); // convert to mesh asset
        button.meshPreview.mesh = mesh; // preview mesh

        // show mesh preview at right scale and position within button
        button.meshPreview.enabled = false; // don't show on start
        const meshPreviewTrf = button.meshPreview.getTransform();
        const meshPreviewAnchorTrf = button.meshPreviewAnchor.getTransform();
        const normalizedMeshScale = normalizeMeshScale(button.meshPreview); // normalize mesh scale
        meshPreviewTrf.setLocalScale(normalizedMeshScale);
        meshPreviewTrf.setLocalPosition(new vec3(0, .5, 0)); // anchor at bottom
        meshPreviewAnchorTrf.setLocalScale(vec3.one().uniformScale(previewMeshScale));

        // show button
        const delay = Math.abs((i / (buttonInstances.length - 1)) * 2 - 1); // centered value (0 to 1)
        new DoDelay(function(){
            const button = buttonInstances[i];
            button.meshPreview.enabled = true;
            button.mainButtonShow();

            // show dot on button (if any)
            if(button.dot) button.dot.getSceneObject().enabled = true;
        }).byTime(delay * buttonInAnimDelay);
    }

    // polygon studio logo
    Intro.logoObj.setParent(script.buttonsParent);
    Intro.logoObj.getTransform().setLocalPosition(localLogoPosition);
    Intro.logoObj.getTransform().setLocalRotation(quat.quatIdentity());
    Intro.logoObj.getTransform().setLocalScale(vec3.one().uniformScale(localLogoSize));
    if(!logoQF) logoQF = new QuickFlow(Intro.logoObj); // create new qf on first menu open, if not done already
    logoQF.scaleIn(); // anim in
    Intro.polygonStudioShaderAnim(); // shader animation

    // plate anim in
    plateQF.scaleIn();

    // CTA text in main menu anim in
    script.ctaText.mainPass.startTime = getTime();

    // place in front of user (instantly)
    worldPlacement.start(true);

    // one frame delay to await World Placement
    new DoDelay(function(){
        // animate from world mesh to button preview mesh
        if(meshRendererTrf){
            const pStart = meshRendererTrf.getWorldPosition();
            const rStart = meshRendererTrf.getWorldRotation();
            const sStart = meshRendererTrf.getWorldScale();
            const pEnd = buttonInstances[fromWorld].meshPreview.getTransform().getWorldPosition();
            const rEnd = buttonInstances[fromWorld].meshPreview.getTransform().getWorldRotation();
            const sEnd = vec3.zero();
            worldToMenuAnim = new AnimateProperty(function(v){
                const p = vec3.lerp(pStart, pEnd, v);
                const s = vec3.lerp(sStart, sEnd, v);
                const r = quat.slerp(rStart, rEnd, v);
                meshRendererTrf.setWorldPosition(p);
                meshRendererTrf.setWorldRotation(r);
                meshRendererTrf.setWorldScale(s);
            });
            worldToMenuAnim.duration = script.worldToMenuDuration;
            worldToMenuAnim.start();
        }

        // rotate towards user
        billboardStep(1);
    }).byFrame();
}



function buildButtons(){
    script.logoTransform.setParent(script.buttonsParent);
    const saveSlotsCount = script.saveSlots.length;

    // when highlighting, keep track so share and remove buttons can show/hide automatically
    var crrHighlighted;
    function subButtonsHideUnhighlighted(){
        for(let i = 0; i < saveSlotsCount; i++){
            if(i === crrHighlighted) continue;
            buttonInstances[i].shareButtonHide();
            buttonInstances[i].removeButtonHide();
        }
    }
    const showRemoveHideDelay = new DoDelay(subButtonsHideUnhighlighted);
    const delayTime = 1;


    buttonInstances = [];
    for(let i = 0; i < saveSlotsCount; i++){

        // - instantiation

        // create new object
        var buttonObj = script.buttonsParent.copyWholeHierarchy(script.buttonTemplate.getSceneObject());
        buttonObj.name = "mainMenuButton" + i.toString();
        buttonObj.enabled = true;
        
        // position
        let trf = buttonObj.getTransform();
        const centeredIndex = (i / (saveSlotsCount - 1)) * 2 - 1; // -1, 1
        const xPos = saveSlotsDistance * Math.cos(centeredIndex * Math.PI*2 * rotationalStrength - Math.PI/2);
        const zPos = saveSlotsDistance * Math.sin(centeredIndex * Math.PI*2 * rotationalStrength - Math.PI/2) + saveSlotsDistance;
        const pos = new vec3(xPos, saveSlotsHeight, zPos); // center horizontally, set height, arc in Z
        trf.setLocalPosition(pos);

        // rotation
        trf.setLocalRotation(quat.angleAxis(Math.PI*2*centeredIndex * -rotationalStrength, vec3.up()));

        // visuals
        var item = buttonObj.getComponent("Component.Script");

        // digits
        item.setDigit(i);

        // ground
        const groundMat = script.plasticTemplate.clone();
        groundMat.mainPass.c = script.saveSlots[i].groundColor;
        item.ground.addMaterial(groundMat);
    
        // ring (same as ground)
        const ringMat = script.plasticTemplate.clone();
        ringMat.mainPass.c = script.saveSlots[i].groundColor;
        item.ring.addMaterial(ringMat);
        
        // platform
        const platformMat = script.plasticTemplate.clone();
        platformMat.mainPass.c = script.saveSlots[i].platformColor;
        item.platform.addMaterial(platformMat);



        // - pinch callbacks

        // main button pinch event
        function mainPinch(){
            if(!mainMenuEnabled) return;
            openWorld(i);
        }
        const mainFunc = "mainPinch" + i.toString();
        script[mainFunc] = mainPinch;
        item.mainButton.onButtonPinchedFunctionNames[0] = mainFunc; // call function from this script

        // share button pinch event
        function sharePinch(){
            if(!mainMenuEnabled) return;
            shareWorld(i);
        }
        const shareFunc = "sharePinch" + i.toString();
        script[shareFunc] = sharePinch;
        item.shareButton.onButtonPinchedFunctionNames[0] = shareFunc;

        // remove button pinch event
        function removePinch(){
            if(!mainMenuEnabled) return;
            removeWorld(i);
        }
        const removeFunc = "removePinch" + i.toString();
        script[removeFunc] = removePinch;
        item.removeButton.onButtonPinchedFunctionNames[0] = removeFunc;



        // - highlight callbacks

        // main button highlight
        item.mainButton.interactable.onHoverEnter.add(function(){
            if(!mainMenuEnabled) return;

            // show sub buttons
            buttonInstances[i].shareButtonShow();
            buttonInstances[i].removeButtonShow();

            // update current highlighted main and hide all other subs
            crrHighlighted = i;
            subButtonsHideUnhighlighted();
        });
        function onHoverExit(){
            if(!mainMenuEnabled) return;
    
            // reset current highlighted main and start delay to check hiding subs
            if(crrHighlighted==i) crrHighlighted = null;
            showRemoveHideDelay.byTime(delayTime); // automatically hide all remove buttons later
        }
        item.mainButton.interactable.onHoverExit.add(onHoverExit);

        // sub buttons highlights
        function subHoverEnter(){
            if(!mainMenuEnabled) return;

            // set current highlighted main to this sub's main
            crrHighlighted = i;
        }

        // share button highlight
        item.shareButton.interactable.onHoverEnter.add(subHoverEnter);
        item.shareButton.interactable.onHoverExit.add(onHoverExit);

        // remove button highlight
        item.removeButton.interactable.onHoverEnter.add(subHoverEnter);
        item.removeButton.interactable.onHoverExit.add(onHoverExit);

        // hide on start
        item.mainButtonHide(instant=true);
        item.shareButtonHide(instant=true);
        item.removeButtonHide(instant=true);



        // - dot hints

        // if first menu open, show pinch dots
        var dot;
        if(firstOpen){
            dot = new Hints.Dot(item.meshPreviewAnchor.getTransform().getWorldPosition(), parent=script.buttonsParent); // place dot on ground
            dot.getSceneObject().enabled = false;
        }
        item.dot = dot; // assign to item as well

        // register
        buttonInstances.push(item);
    }

    firstOpen = false;
}



// allow interactions on buttons, while keeping animations
function setMenuEnabled(v){
    mainMenuEnabled = v;
}



function openWorld(n){
    setMenuEnabled(false); // don't allow any presses after this
    
    // some arbitrary delays
    new DoDelay(closeMenu).byTime(.2); // out-animations
    new DoDelay(Sequence.loadWorld, [worldData[n], n, buttonInstances[n].meshPreview.getTransform()]).byTime(.5); // loading new world
}

function shareWorld(n){
    hideMenu();

    // get current data and generate centered mesh
    const data = Storage.readData(n);
    WorldManager.centerMesh(data);
    const mesh = WorldManager.dataToMesh(data);
    QRManager.show(data, mesh);
}

function onQRReturn(){
    showMenu();

    // place in front of user
    new DoDelay(worldPlacement.start).byFrame();
}

function removeWorld(n){
    hideMenu();
    
    function yes(){
        // reset persistent storage for this world
        Storage.resetWorld(n, makeDefault=false);
        // if makeDefault==true, don't go back to slot-default and instead use default world (triangle) to start with a clean canvas
        // if makeDefault==false, each saving slot resets to a different mesh from the AddMesh menu in the radial

        start(); // rebuild menu buttons
        showMenu(); // animations
    }
    function no(){
        showMenu();

        // place in front of user
        new DoDelay(worldPlacement.start).byFrame();
    }
    
    // show dialog with rotating mesh
    const mesh = buttonInstances[n].meshPreview.mesh;
    Dialog.show("Delete this world?", 'No', no, 'Yes', yes, mesh);
}



function hideMenu(){
    logoQF.scaleOut();
    plateQF.scaleOut();

    for(var i = 0; i < buttonInstances.length; i++){
        buttonInstances[i].mainButtonHide();
        buttonInstances[i].shareButtonHide();
        buttonInstances[i].removeButtonHide();

        // hide dots
        if(buttonInstances[i].dot) buttonInstances[i].dot.getSceneObject().enabled = false;
    }
}

function showMenu(){
    // place in front of user
    worldPlacement.start(true);
    new DoDelay(billboardStep, [1]).byFrame(2);

    // flag radial
    RadialManager.allEnabledFlags.set('worldIsOpened', false);
    
    // flag SIK cursor
    Cursor.sikCursorAnyEnabled.set("MainMenuAllowed", true);

    logoQF.scaleIn();
    plateQF.scaleIn();

    for(var i = 0; i < buttonInstances.length; i++){
        buttonInstances[i].mainButtonShow();

        // show dots
        if(buttonInstances[i].dot) buttonInstances[i].dot.getSceneObject().enabled = true;
    }
}



// visuals out
function closeMenu(){
    if(logoQF) logoQF.scaleOut();
    if(plateQF) plateQF.scaleOut();

    // hide all buttons
    for(var i = 0; i < buttonInstances.length; i++){
        buttonInstances[i].mainButtonHide();
        buttonInstances[i].shareButtonHide();
        buttonInstances[i].removeButtonHide();

        // remove dots
        if(buttonInstances[i].dot) buttonInstances[i].dot.remove();
        buttonInstances[i].dot = null;
    }


    // unflag SIK cursor
    Cursor.sikCursorAnyEnabled.set("MainMenuAllowed", false);

    plateIsTranslating = false;
    mainMenuOpen = false;
}



function repeatTutorial(){
    // unflag SIK cursor
    Cursor.sikCursorAnyEnabled.set("MainMenuAllowed", false);

    hideMenu();
    new DoDelay(Tutorial.start, [showMenu, true]).byTime(1);
}