// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages dialog boxes



global.Dialog = script;
script.show = show; // args: descr (string), text1 (string), callback1, text2 (string), callback2, mesh

// callbacks for SIK buttons
script.onCallbackLeft = function(){};
script.onCallbackRight = function(){};
script.onCallbackCenter = function(){};



// params
const outAnimTime = .5; // arbitrary wait time before callback
const sikCursorVisualFlagName = "dialogShowing";



//@ui {"widget":"label"}
//@input SceneObject dialog

//@ui {"widget":"label"}
//@input SceneObject left
//@input Component.Text leftText
//@input SceneObject right
//@input Component.Text rightText
//@input SceneObject center
//@input Component.Text centerText
//@input Component.Text text

//@ui {"widget":"label"}
//@input SceneObject meshPreview
//@input Component.RenderMeshVisual rmv



// placeholders
var qf;
var worldPlacement;



function init(){
    script.dialog.enabled = false;

    // scale animation
    qf = new QuickFlow(script.dialog);

    // place in front of user
    worldPlacement = new WorldPlacement(script.dialog);
    worldPlacement.rankedPriority = null;
}
script.createEvent("OnStartEvent").bind(init);



function show(descr, text1, callback1, text2, callback2, mesh){
    // cursor flag
    Cursor.sikCursorAnyEnabled.set(sikCursorVisualFlagName, true);

    // mesh
    if(mesh){
        script.meshPreview.enabled = true;
        script.rmv.mesh = mesh;
        const normalizedMeshScale = normalizeMeshScale(script.rmv); // normalize mesh scale
        script.rmv.getTransform().setLocalScale(normalizedMeshScale);
    }else{
        script.meshPreview.enabled = false;
    }
    
    // main text
    script.text.text = descr;
    
    // placeholder wrapped functions
    function onCallback(){
        Cursor.sikCursorAnyEnabled.set(sikCursorVisualFlagName, false); // cursor unflag
        qf.scaleOut(0, outAnimTime); // scale out anim
    }

    // set button callbacks
    if(callback1){
        if(callback2){ // callback1 is left
            script.onCallbackLeft = function(){
                onCallback();
                new DoDelay(callback1).byTime(outAnimTime);
            }
            script.onCallbackRight = function(){
                onCallback();
                new DoDelay(callback2).byTime(outAnimTime);
            }
            script.leftText.text = text1;
            script.rightText.text = text2;
        }else{ // callback1 is center
            script.onCallbackCenter = function(){
                onCallback();
                new DoDelay(callback1).byTime(outAnimTime);
            }
            script.centerText.text = text1;
        }
    }

    // enable buttons
    script.left.enabled = callback1 && callback2;
    script.right.enabled = callback1 && callback2;
    script.center.enabled = callback1 && !callback2;

    // animation and placement
    worldPlacement.start(true);
    new DoDelay(qf.scaleIn).byFrame();
}