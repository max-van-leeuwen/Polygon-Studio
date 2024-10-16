// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// QR Exporting Manager



global.QRManager = script;
script.show = show; // args: liveData, mesh (asset for dialog preview) - show qr export screen, starts QR sequence on recording start



//@ui {"widget":"label"}
//@input SceneObject followingUser
//@input SceneObject loadingScreen

//@ui {"widget":"label"}
//@input Component.Image qrRenderer



// params
const maxCharsPerQR = 180; // maximum characters per qr in sequence
const frameInterval = 12; // frames inbetween qr codes for safety (compression, frame drops, etc)
const rankedLabel = 'interactables'; // the priority pool name (should be same for other interactables)



// placeholders
var followingWorldPlacement; // world placement instance
var qrRenderers; // Image Components
var recordEvent; // recording start event
var isShown = false; // if any QR screen is currently shown
var isRecording = false; // if currently recording QRs
var emulatingRecording = false; // debugging tool
var onEnd; // cursom end callback



function init(){
    // hide screens
    script.loadingScreen.enabled = false;

    // hide template
    script.qrRenderer.getSceneObject().enabled = false;
    
    // create recording event
    recordEvent = script.createEvent("SnapRecordStartEvent");
    recordEvent.bind(onRecordingStart);
    recordEvent.enabled = false;
}
script.createEvent("OnStartEvent").bind(init);



function show(data, mesh, customEndCallback){
    // flag
    isShown = true;
    
    // radial menu disable
    RadialManager.allEnabledFlags.set("QRisFree", false);

    // set end callback
    onEnd = customEndCallback

    // hide current mesh (only relevant if in multiplayer mode)
    if(Sequence.multiplayer) WorldManager.meshRenderer.enabled = false;
    

    // follow user continuously
    followingWorldPlacement = new WorldPlacement(script.followingUser);
    followingWorldPlacement.smoothing = .2; // arbitrary
    followingWorldPlacement.distanceFromCamera = 60;
    followingWorldPlacement.lookAt = true;
    followingWorldPlacement.startContinuous();

    new DoDelay(startLoading).byTime(1); // await main menu out-anim

    function startLoading(){
        // show loading screen (while processing, could take a few frames)
        script.loadingScreen.enabled = true;
    
        function onQRsRendered(){
    
            // allow recording event
            recordEvent.enabled = true;
    
            // hide loading screen
            script.loadingScreen.enabled = false;
            
            // show instructions dialog
            const exportDialogText = "To export this 3D model to your computer, start recording a video now!";
            if(Sequence.allowQRRecordingEmulation){
                Dialog.show(exportDialogText, 'Cancel', exit, '🪲 Emulate', function(){ onRecordingStart(); emulatingRecording=true;}, mesh);
            }else{
                Dialog.show(exportDialogText, 'Cancel', exit, null, null, mesh);
            }
        }
    
        // when loading text is visible, render qrs
        new DoDelay(renderQRs, [data, onQRsRendered]).byFrame(2); // give the world placement visuals some time before starting the QR generation
    }
}



// n: world index
// callback: function to call on processing end
function renderQRs(data, callback){
    var minified = Storage.liveToMinified(data); // minified string
    minified += "]"; // this signifies the end of data (so the web app can stop scanning after this frame)

    // split into smaller strings
    let miniParts = [];
    for(let i = 0; i < minified.length; i += maxCharsPerQR){
        miniParts.push(minified.substring(i, i + maxCharsPerQR));
    }
    
    // create a qr code for each miniPart
    qrRenderers = [];
    for(let i = 0; i < miniParts.length; i++){
        // each 3 qr textures, create a duplicate or qrRenderer to place the following textures on
        const i3 = i%3; // 0, 1, 2 recurring
        if(i3 == 0){
            // create image
            const obj = script.getSceneObject().copyWholeHierarchy(script.qrRenderer.getSceneObject());
            const image = obj.getComponent("Component.Image");
            image.setRenderOrder(9999); // always on top
            qrRenderers.push(image);

            // parent to follower
            obj.setParent(script.followingUser);

            // unique shader
            const mat = image.getMaterial(0).clone();
            image.clearMaterials();
            image.addMaterial(mat);
        }

        // render texture asset
        const part = miniParts[i];
        const qr = generateQR(part);

        // apply to most recent renderer
        const textureName = i3==0? 'baseTex' : i3==1 ? 'qr2' : 'qr3'; // cycle through parameter names
        qrRenderers[qrRenderers.length-1].mainPass[textureName] = qr; // apply texture
        qrRenderers[qrRenderers.length-1].mainPass.samplers[textureName].filtering = FilteringMode.Nearest; // set filtering
    }

    // callback on end
    callback();
}



function onRecordingStart(){
    if(!qrRenderers){ // something went wrong here, reset and back to main menu
        exit();
        return;
    }

    isRecording = true;

    var renderIndex = 0;
    function qrRenderLoop(){
        // if last frame is already showing
        if(!qrRenderers[renderIndex]){
            qrRenderers[renderIndex-1].getSceneObject().enabled = false; // hide last qr
            onQREnd();
            return;
        }

        // hide previous frame
        if(qrRenderers[renderIndex-1]) qrRenderers[renderIndex-1].getSceneObject().enabled = false;

        // show current frame
        qrRenderers[renderIndex].getSceneObject().enabled = true;
        
        // increment
        renderIndex++;

        // show next frame after interval
        new DoDelay(qrRenderLoop).byFrame(frameInterval);
    }
    new DoDelay(qrRenderLoop).byTime(.5); // arbitrary wait to make sure recording has fully started
}



function onQREnd(){
    if(!global.scene.isRecording() && !emulatingRecording){
        Dialog.show("The recording stopped too soon! Try again.", 'Back', exit);
        return;
    }

    isRecording = false;

    // keep track of when recording ends
    var stopRecordEvent = script.createEvent("SnapRecordStopEvent");
    stopRecordEvent.bind(onRecordingEnd);

    // show stop recording dialog
    if(Sequence.allowQRRecordingEmulation){
        Dialog.show("🔴\n\nStop recording!", '🪲 Emulate', onRecordingEnd);
    }else{
        Dialog.show("🔴\n\nStop recording!");
    }

    function onRecordingEnd(){
        script.removeEvent(stopRecordEvent);

        // show end dialog
        Dialog.show("Done!\n\nUpload this video to:\nmaxandliisi.com/polygon-studio", 'Back', exit);
    }
}



// exits the qr exporting screen before a recording was started
function exit(){
    isShown = false;

    // don't allow recording event
    recordEvent.enabled = false;

    // remove all renderers
    if(qrRenderers){
        for(let i = 0; i < qrRenderers.length; i++){
            qrRenderers[i].destroy();
        }
        qrRenderers = null;
    }

    // stop following user
    if(followingWorldPlacement) followingWorldPlacement.stopContinuous();
    followingWorldPlacement = null;

    // unhide current mesh (only relevant if in multiplayer mode)
    if(Sequence.multiplayer) WorldManager.meshRenderer.enabled = true;

    // on end callback
    if(onEnd){
        onEnd();

    }else{
        // back to main menu
        MainMenu.onQRReturn();
    }

    // radial menu enable
    RadialManager.allEnabledFlags.set("QRisFree", true);
}