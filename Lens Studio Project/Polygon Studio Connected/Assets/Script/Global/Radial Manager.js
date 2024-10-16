// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages the Radial Menu



// access
global.RadialManager = script;
script.getRadial = () => radial; // gets the active radial instance
script.setColorIndex = onColorPress; // args: index
script.getColorIndex = () => colorIndex;
script.getColorByIndex = getColorByIndex; // index (int) -> color (vec3)
script.allEnabledFlags = new Flags(); // if any are false, radial menu is disabled
script.onRemove = onRemove; // emulate radial button press of removeMode

// tutorial mode
script.enableTutorial = enableTutorial; // args: onHomeButton (func), onWrongButton (func) - only the home button can be pressed if this function is called, for tutorial purposes. all others can still be highlighted etc but then only 'onWrongButton' will be called on button press. automatically disables itself when home button is pressed



// params
const addMeshStartScale = .4; // local scale (and minimum) for newly added mesh when setting their position
const scaleExaggerate = 1.4; // additional scaling multiplier for newly added mesh



// inputs
//@input Component.Camera cam
//@input SceneObject buttons

// sub-colors
//@ui {"widget":"label"}
//@ui {"widget":"group_start", "label":"colors"}
    /*
    @typedef subColors
    @property {vec3} color {"widget": "color"}
    */
    //@input subColors[] colorPalette
    
    // NOTE if you made any changes to the radial menu's colors,
    // print them by enabling the following function and copy/paste what comes out of that into PLY_to_Polygon_Studio.py! That way, the .PLY->.JS conversion tool will still work.
    // printColorIndices(); // <- uncomment me!

    //@input Asset.Material colorPalettePaint
//@ui {"widget":"group_end"}


// buttons
//@ui {"widget":"label"}
//@ui {"widget":"group_start", "label":"buttons"}
    //@input SceneObject exitButton
    //@input SceneObject colorButton
    //@input SceneObject removeButton
    //@input SceneObject snappingButton
    //@input SceneObject addMeshButton

    //@ui {"widget":"label"}
    //@input SceneObject subColorTemplateButton
    //@input SceneObject subTriangleMeshButton
    //@input SceneObject subSphereMeshButton
    //@input SceneObject subBoxMeshButton
    //@input SceneObject subTorusMeshButton
    //@input SceneObject subDolphinMeshButton
//@ui {"widget":"group_end"}



// placeholders
var radial;
var buttons; // all main buttons on the radial
var colorButtonShaders;
var colorIndex; // current color index
var allowFlags = { // if all are true, radial is enabled
    worldIsOpened : false,
    cursorIsFree : false,
    meshPlacementIsFree : true, // true until disabled
}
var removeModeAnim;
var tutorialData;



function init(){
    script.buttons.enabled = false; // hide button visuals from scene

    // flag change callback
    script.allEnabledFlags.onChange.add(onFlagChange);

    // multiplayer switch
    Sequence.onMultiPlayer.add(setMultiplayer);

    // build radial menu
    createRadial();
}
script.createEvent("OnStartEvent").bind(init);



function createRadial(){
    // initialize radial
    radial = new SpectaclesRadialMenu.Create();
    radial.buttonSize = 1.5;
    radial.radius = 5;
    radial.centerRadius = 3;
    radial.subRadius = 11; // slightly larger radius for sub-buttons ring

    // when no buttons are highlighted, don't show hand text hint
    radial.onNoneHighlighted.add(Hints.hideHandText);

    // wrap to the startfunction of the radial's open/close animation
    radial.openCloseAnim.startFunction = wrapFunction(radial.openCloseAnim.startFunction, function(inAnim){
        // when closing, don't show hand text hint anymore
        if(inAnim) SoundPools.tick4();
        else Hints.hideHandText();
    });


    // different tick sounds assigned to different presses/highlights on radial
    function mainHighlightSound(){
        SoundPools.tick1();
    }
    function colorSubHighlightSound(){
        SoundPools.tick5();
    }
    function meshSubHighlightSound(){
        SoundPools.tick2();
    }
    function pressSound(){
        SoundPools.tick3();
    }


    // add main buttons
    buttons = [];

    var exitButton = radial.addButton(script.exitButton, "exit");
    exitButton.onPress.add(function(){
        onExit();
        pressSound();
    }); // callback
    exitButton.highlightAnim.updateFunction = wrapFunction(exitButton.highlightAnim.updateFunction, extraExitButtonHighlightUpdate); // wrap a custom highlight animation
    exitButton.onHighlight.add(function(){
        let txt = Sequence.multiplayer ? "export" : "main menu"; // tooltip depends on single/multiplayer
        if(tutorialData) txt = 'release!'; // special when tutorial
        Hints.showHandText(txt);
        mainHighlightSound();
    });
    buttons.push(exitButton); // store button to main buttons list
    
    var colorButton = radial.addButton(script.colorButton, "color");
    colorButton.subOffsetDistance = .12; // arbitrary
    colorButton.onHighlight.add(function(){
        let txt = 'colors';
        if(tutorialData) txt = ''; // none when tutorial
        Hints.showHandText(txt);
        mainHighlightSound();
    });
    buttons.push(colorButton);

    var removeButton = radial.addButton(script.removeButton, "remove");
    removeButton.onPress.add(function(){
        onRemove();
        pressSound();
    });
    removeButton.highlightAnim.updateFunction = wrapFunction(removeButton.highlightAnim.updateFunction, extraRemoveButtonHighlightUpdate);
    removeButton.onHighlight.add(function(){
        let txt = MeshEditing.getRemoveMode() ? "stop removing" : "remove triangles";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        mainHighlightSound();
    });
    buttons.push(removeButton);

    var snappingButton = radial.addButton(script.snappingButton, "snapping");
    snappingButton.onPress.add(function(){
        onSnapping(snappingButton);
        pressSound();
    }); // call with current button as argument
    snappingButton.onHighlight.add(function(){
        let txt = WorldManager.getSnapping() ? "disable snapping" : "enable snapping";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        mainHighlightSound();
    });
    buttons.push(snappingButton);

    var addMeshButton = radial.addButton(script.addMeshButton, "addMesh");
    addMeshButton.subOffsetDistance = .20; // arbitrary
    addMeshButton.onHighlight.add(function(){
        let txt = "add mesh";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        mainHighlightSound();
    });
    buttons.push(addMeshButton);


    // add sub buttons

    // colors (create new SceneObjects per color, based on template)
    colorButtonShaders = [];
    for(var i = 0; i < script.colorPalette.length; i++){
        var subColorButtonObject = script.getSceneObject().copyWholeHierarchy(script.subColorTemplateButton);

        // custom color per button
        var subColorButtonScript = subColorButtonObject.getComponent("Component.Script");
        var mat = subColorButtonScript.colorObject.getMaterial(0).clone();
        colorButtonShaders.push(mat);
        subColorButtonScript.colorObject.clearMaterials();
        subColorButtonScript.colorObject.addMaterial(mat);
        mat.mainPass.c = script.colorPalette[i].color;

        // create with callback
        var subColorButton = radial.addSubButton("color", subColorButtonObject, "subColor" + i.toString());
        subColorButton.onPress.add(function(index){
            return function(){
                onColorPress(index);
                pressSound();
            };
        }(i));
        subColorButton.onHighlight.add(function(index){
            return function(){
                Hints.hideHandText();
                onColorHighlight(index);
                colorSubHighlightSound();
            };
        }(i));
    }


    // meshes
    
    var subDolphinMeshButton = radial.addSubButton("addMesh", script.subDolphinMeshButton, "subDolphinMesh");
    subDolphinMeshButton.onPress.add(function(){
        onSubDolphinMesh();
        pressSound();
    });
    subDolphinMeshButton.onHighlight.add(function(){
        let txt = "dolphin";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        meshSubHighlightSound();
    });

    var subTorusMeshButton = radial.addSubButton("addMesh", script.subTorusMeshButton, "subTorusMesh");
    subTorusMeshButton.onPress.add(function(){
        onSubTorusMesh();
        pressSound();
    });
    subTorusMeshButton.onHighlight.add(function(){
        let txt = "torus";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        meshSubHighlightSound();
    });

    var subBoxMeshButton = radial.addSubButton("addMesh", script.subBoxMeshButton, "subBoxMesh");
    subBoxMeshButton.onPress.add(function(){
        onSubBoxMesh();
        pressSound();
    });
    subBoxMeshButton.onHighlight.add(function(){
        let txt = "box";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        meshSubHighlightSound();
    });
    
    var subSphereMeshButton = radial.addSubButton("addMesh", script.subSphereMeshButton, "subSphereMesh");
    subSphereMeshButton.onPress.add(function(){
        onSubSphereMesh();
        pressSound();
    });
    subSphereMeshButton.onHighlight.add(function(){
        let txt = "sphere";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        meshSubHighlightSound();
    });
    
    var subTriangleMeshButton = radial.addSubButton("addMesh", script.subTriangleMeshButton, "subTriangleMesh");
    subTriangleMeshButton.onPress.add(function(){
        onTriangleMesh();
        pressSound();
    });
    subTriangleMeshButton.onHighlight.add(function(){
        let txt = "triangle";
        if(tutorialData) txt = '';
        Hints.showHandText(txt);
        meshSubHighlightSound();
    });
    

    // interactions (always listening to HandTracking)
    HandTracking.onPinchStart.add(radial.onPinchStart);
    HandTracking.onPinchHold.add(radial.onPinchHold);
    HandTracking.onPinchEnd.add(radial.onPinchEnd);



    // remove mode buttons animation
    removeModeAnim = new AnimateProperty(function(v){
        const disableButtonScale = vec3.one().uniformScale(radial.buttonSize * remap(v, 0, 1, 1, .5));

        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].buttonName == "remove") continue;

            // removeMode visual
            const button = buttons[i];
            const item = button.sceneObject.getComponent("Component.Script");
            if(!item || !item.removeModeVisuals) continue;
            for(var j = 0; j < item.removeModeVisuals.length; j++){ // apply removeMode mix value to visuals
                item.removeModeVisuals[j].mainPass.removeMode = v;
            }

            // smaller scale
            buttons[i].sceneObject.getTransform().setLocalScale(disableButtonScale);
        }
    });
    removeModeAnim.startFunction = function(){
        const enable = removeModeAnim.getReversed(); // disable buttons on animation start
        if(!enable){
            for(var i = 0; i < buttons.length; i++){
                if(buttons[i].buttonName == "remove") continue;
                buttons[i].isEnabled = false;
            }
        }
    }
    removeModeAnim.endFunction = function(){
        const enable = removeModeAnim.getReversed(); // enable buttons on animation end
        if(enable){
            for(var i = 0; i < buttons.length; i++){
                if(buttons[i].buttonName == "remove") continue;
                buttons[i].isEnabled = true;
            }
        }
    }
    removeModeAnim.duration = .2;

    // prepare removeModeAnim's visuals (making materials unique)
    for(var i = 0; i < buttons.length; i++){
        if(buttons[i].buttonName == "remove") continue;
        const item = buttons[i].sceneObject.getComponent("Component.Script");
        if(!item) continue;
        for(var j = 0; j < item.removeModeVisuals.length; j++){
            const visual = item.removeModeVisuals[j];
            const mat = visual.getMaterial(0).clone();
            visual.clearMaterials();
            visual.addMaterial(mat);
        }
    }


    // build and disable on start
    radial.build();
    radial.disable();
}



function setMultiplayer(){
    const item = radial.getAllButtons()['exit'].sceneObject.getComponent("Component.Script");
    item.ifExport.enabled = true;
    item.ifExit.enabled = false;
}



// flags toggle
function onFlagChange(state){
    if(state.anyFalse){
        radial.disable();
    }else if(state.allTrue){
        radial.enable();
    }
}



// get the radial menu's color by its index
function getColorByIndex(n){
    return script.colorPalette[n].color;
}



// on remove mode toggle, change the radial button's visuals (arg: anim in, bool)
function removeModeVisuals(v){
    removeModeAnim.setReversed(!v);
    removeModeAnim.start();
}



function enableTutorial(onHomeButton, onWrongButton){
    function homeButtonCallback(){
        new DoDelay(function(){
            tutorialData = null; // stop tutorial mode
        }).byTime(.4); // delayed, to prevent accidental double presses
        onHomeButton();
    }
    function wrongButtonCallback(){
        onWrongButton();
    }
    tutorialData = {homeButtonCallback, wrongButtonCallback};
}



// button presses

function onExit(){
    // if in tutorial mode
    if(tutorialData){
        tutorialData.homeButtonCallback();
        return;
    }

    // multiplayer alternative
    if(Sequence.multiplayer){
        onShare();
        return;
    }

    WorldManager.backToMenu();
    Intro.playSound2(); // play sound when returning to main menu
}

// same button as exit, but takes its place in multiplayer sessions
function onShare(){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    // get current data and generate centered mesh
    const data = Storage.copyObject(WorldManager.getLiveData());
    WorldManager.centerMesh(data); // PERFORMANCE if 'isCentered' flag from Main Menu's optimization in start() is applied, this step can be skipped if the mesh is already centered before
    const mesh = WorldManager.dataToMesh(data);

    // stop cursor events
    Cursor.pause();
    
    // create an end callback
    function customEndCallback(){
        Cursor.start();
    }

    // start qr dialog
    QRManager.show(data, mesh, customEndCallback);
}

function onRemove(){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    const removeMode = !MeshEditing.getRemoveMode(); // toggle
    MeshEditing.setRemoveMode(removeMode);
    removeModeVisuals(removeMode);
    Hints.setRemoveMode(removeMode); // show hint next to hand
    
    // show hand hint
    if(removeMode){
        new DoDelay(function(){
            Hints.showHandText("pinch a triangle to remove")
        }).byTime(.5)
    }else{
        Hints.hideHandText();
    }
}

function onColorPress(n){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    colorIndex = n;
    onColorHighlight(n); // force highlight visuals too, as this function can be called independently from radial menu
}

function onTriangleMesh(){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    startInsertMesh(WorldPresets.Triangle);
}

function onSubSphereMesh(){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    startInsertMesh(WorldPresets.Sphere);
}

function onSubBoxMesh(){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    startInsertMesh(WorldPresets.Box);
}

function onSubTorusMesh(){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    startInsertMesh(WorldPresets.Torus);
}

function onSubDolphinMesh(){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    startInsertMesh(WorldPresets.Dolphin);
}

function onSnapping(button){
    // if in turorial mode
    if(tutorialData){
        tutorialData.wrongButtonCallback();
        return;
    }

    const isSnapping = !WorldManager.getSnapping(); // toggle
    WorldManager.setSnapping(isSnapping);

    // get access to specific snapping visuals in radial menu
    const item = button.sceneObject.getComponent("Component.Script");

    // set shaders
    item.functionalityVisual.getMaterial(0).mainPass.turnedOff = !isSnapping;
    item.functionalityVisual2.getMaterial(0).mainPass.turnedOff = !isSnapping;
}



// new mesh sticking to hands until placing it somewhere
function startInsertMesh(data){
    script.allEnabledFlags.set('meshPlacementIsFree', false); // don't allow radial menu while placing a mesh

    // show hand hint
    new DoDelay(function(){
        Hints.showHandText('pinch to place');
    }).byTime(.3);

    // mesh placement mode
    MeshEditing.setMeshPlacementMode(true);

    // prepare mesh data
    data = Storage.copyObject(data); // clone to not change original
    Storage.setDataColor(data, colorIndex);
    Storage.initializeData(data);
    
    // assign mesh to a new visual
    const tempMeshObject = global.scene.createSceneObject("meshInsert");
    const rmv = tempMeshObject.createComponent("Component.RenderMeshVisual");
    const trf = tempMeshObject.getTransform();
    trf.setLocalScale(vec3.one().uniformScale(addMeshStartScale/2)); // arbitrarily half the scale so you can see it jump to its new scale when placing, makes the scale interaction more clear
    rmv.addMaterial(InteractionPreview.triangleRMV.getMaterial(0)); // add blinking material from Triangle Preview
    rmv.mesh = WorldManager.dataToMesh(data); // generate mesh using temporary meshbuilder instance

    // current interaction stage
    const Stages = {PlaceRotate:0, RefineScale:1}; 
    
    // placeholders
    var stage = Stages.PlaceRotate;
    var refineStartPos; // starting position for refine phase, use the difference with current position to refine mesh placement
    var normalizeScale; // scale multiplier to normalize mesh (number)

    
    // delay interaction binding to prevent accidental pinches
    var interactionEvent;
    new DoDelay(function(){
        HandTracking.onPinchStart.add(onMeshRelease);
        HandTracking.onPinchEnd.add(onMeshRelease);
        
        // bind interaction to every frame
        interactionEvent = script.createEvent("UpdateEvent");
        interactionEvent.bind(onMeshMove);
    }).byTime(.5);


    // on every frame, move the mesh with the user's hand
    function onMeshMove(){
        if(stage == Stages.PlaceRotate){

            const handPos = HandTracking.getPinchPosition() || HandTracking.getHoverWorldPosition();
            if(handPos) trf.setWorldPosition(handPos);
    
            const cursorFwd = HandTracking.getPinchForward();
            if(cursorFwd) trf.setWorldRotation(quat.lookAt(cursorFwd, HandTracking.getPinchUp()));

        }else if(stage == Stages.RefineScale){

            const handPos = HandTracking.getPinchPosition() || HandTracking.getHoverWorldPosition();
            if(handPos){
                const v = handPos.sub(refineStartPos); // vector
                const l = v.length; // distance
                trf.setWorldScale(vec3.one().uniformScale(l * normalizeScale * scaleExaggerate + addMeshStartScale)); // scale
                InteractionPreview.scalingLine(trf.getWorldPosition(), handPos); // temporarily show a scaling line here
            }
        }
    }

    // if the user takes too long to decide, show a hint
    var scalePinchReminder = new DoDelay(function(){
        Hints.showHandText('pinch when done!');
    });

    // on 1st pinch (or release, if user kept pinching the whole time)
    function onMeshRelease(p){
        // stop 1st pinch interactions
        HandTracking.onPinchStart.remove(onMeshRelease);
        HandTracking.onPinchEnd.remove(onMeshRelease);

        // start refine! 2nd stage of placing a mesh
        refineStartPos = p; // store hand position
        normalizeScale = normalizeMeshScale(rmv).x * 2;
        stage = Stages.RefineScale;

        // add 2nd pinch (after small delay to not accidentally pinch twice)
        new DoDelay(function(){
            HandTracking.onPinchStart.add(onRefineRelease);
            HandTracking.onPinchEnd.add(onRefineRelease);
        }).byTime(.3);

        // hand hint
        new DoDelay(function(){
            Hints.showHandText('scaling');
        }).byFrame();

        scalePinchReminder.byTime(9);
    };

    // on 2nd pinch
    function onRefineRelease(){
        scalePinchReminder.stop();

        // stop all interactions
        removeInteractions();

        // do shader animation
        const waitTime = WorldManager.shaderSnapAnimation(rmv.mainPass);

        // await shader animation before placement
        new DoDelay(function(){

            // place mesh
            const trm = trf.getWorldTransform(); // get transform to calculate custom locations with
            const invTrm = ConnectedChoice.meshRenderer.getTransform().getInvertedWorldTransform(); // get sync transform

            for(var i = 0; i < data.l.length; i++){
                data.l[i].p = trm.multiplyPoint(data.l[i].p); // reposition all locations
                if(Sequence.multiplayer) data.l[i].p = invTrm.multiplyPoint(data.l[i].p); // keep synced transform in mind
                data.l[i].p = WorldManager.snapToGrid(data.l[i].p); // snap to grid
            }
            WorldManager.meshAdd(data, snappingProhibited=true); // import into active world, do not allow any snapping
    
            // cleanup
            removeObject();
        }).byTime(waitTime);
    }

    // remove all interactions
    function removeInteractions(){
        // stop hint (if any)
        Hints.hideHandText();

        // stop mesh placement mode
        MeshEditing.setMeshPlacementMode(false);

        // update
        if(interactionEvent) script.removeEvent(interactionEvent);

        // 1st stage
        HandTracking.onPinchStart.remove(onMeshRelease);
        HandTracking.onPinchEnd.remove(onMeshRelease);

        // 2nd stage
        HandTracking.onPinchStart.remove(onRefineRelease);
        HandTracking.onPinchEnd.remove(onRefineRelease);

        // re-allow radial menu
        new DoDelay(function(){
            script.allEnabledFlags.set('meshPlacementIsFree', true);
        }).byFrame();
    }

    // remove objects
    function removeObject(){
        tempMeshObject.destroy();
        meshPlaceDelay = null;
    }
}



// button highlights

function onColorHighlight(n){
    const c = script.colorPalette[n].color;

    script.colorPalettePaint.mainPass.selectedColor = c;
    for(var i = 0; i < colorButtonShaders.length; i++){
        colorButtonShaders[i].mainPass.isSelected = i==n;
    }
}



// custom button highlight updates

function extraExitButtonHighlightUpdate(v){
    if(Sequence.multiplayer) return; // don't do if export button instead of main

    const exitButtonScript = script.exitButton.getComponent("Component.Script");

    // smoke animation
	const newSmokeScale = vec3.one().uniformScale(v);
	exitButtonScript.smoke1.setLocalScale(newSmokeScale);
	exitButtonScript.smoke2.setLocalScale(newSmokeScale);
	exitButtonScript.smoke3.setLocalScale(newSmokeScale);
    
    // door animation
	const newDoorRotation = quat.slerp(exitButtonScript.doorRotationStart, exitButtonScript.doorRotationEnd, v);
	exitButtonScript.doorRotationAnchor.setLocalRotation(newDoorRotation);
}


function extraRemoveButtonHighlightUpdate(v){
    // get remove button script
    const item = script.removeButton.getComponent("Component.Script");
	
    // trash pieces
    const newTrashScale = vec3.one().uniformScale(v);
    item.trash1.setLocalScale(newTrashScale);
    item.trash2.setLocalScale(newTrashScale);
    item.trash3.setLocalScale(newTrashScale);

    // can
    item.canTrf.setLocalPosition(vec3.lerp( item.canTrf1.getLocalPosition(), item.canTrf2.getLocalPosition(), v));
    item.canTrf.setLocalRotation(quat.slerp( item.canTrf1.getLocalRotation(), item.canTrf2.getLocalRotation(), v));

    // lid
    item.lidTrf.setLocalPosition(vec3.lerp( item.lidTrf1.getLocalPosition(), item.lidTrf2.getLocalPosition(), v));
    item.lidTrf.setLocalRotation(quat.slerp( item.lidTrf1.getLocalRotation(), item.lidTrf2.getLocalRotation(), v));
}






// print color indices for python conversion tool
function printColorIndices(){
    var colors = "color_lookup = [\n";
    for(var i = 0; i < script.colorPalette.length; i++){
        const color = script.colorPalette[i].color;
        const color255 = "    [" + Math.round(color.x*255).toString() + ", " + Math.round(color.y*255).toString() + ", " + Math.round(color.z*255).toString() + "],";
        colors += color255 + "\n";
    }
    colors += "]"
    print(colors); // print to logger, to copy & paste in python script for matching color palette! :)
}