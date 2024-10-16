// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Connected Choice screen (single player/multiplayer)



// access
global.ConnectedChoice = script;
script.start = start;
script.onConnectionSuccess; // to be assigned later



//@ui {"widget":"label"}
//@input SceneObject connected
//@input SceneObject connectedMenu
//@input Component.Script sessionController
//@input Component.Script singlePlayerButton
//@input Component.Script multiPlayerButton

//@ui {"widget":"label"}
//@input SceneObject meshRenderer
//@input SceneObject colocatedParent
//@input Component.Script syncTransformScript



// placeholders
var qf; // quickflow for connected menu



// when joining from Active Live in Lens Explore, go to mapping flow directly
global.sessionController.onStartColocated.add(()=>{
    // hide join menu (multiplayer/ singleplayer)
    script.connectedMenu.enabled = false;
});



function start(onSinglePlayer, onMultiPlayer){
    // sik cursor invisible
    Cursor.sikCursorAnyEnabled.set("ConnectingDialog", true);
    
    // radial disable
    RadialManager.allEnabledFlags.set("ConnectedChoiceIsFree", false);
    
    // enable connected lens stuff (disabled on start)
    script.connectedMenu.enabled = true;

    // show connected lens UI (if not skipping this step for debugging purposes)
	if(!script.sessionController.skipUiInStudio){
        qf = new QuickFlow(script.connectedMenu);
        qf.scaleIn();
    }

	// single player button
	script.singlePlayerButton.onButtonPinched.add(function(){
		Cursor.sikCursorAnyEnabled.set("ConnectingDialog", false); // sik cursor visibility
        RadialManager.allEnabledFlags.set("ConnectedChoiceIsFree", true); // radial enable

        // scale-out animation on connected menu
        if(qf) qf.scaleOut();
        
        new DoDelay(function(){ // await out-anim
            script.connected.enabled = false; // disable all multiplayer objects for single player session
            onSinglePlayer(); // callback
        }).byTime(.5);
	});

	// on connection established (multiplayer)
	// this callback is created before checking if multiplayer or single player button was pressed, because it should already exist in case of debugging using 'skip ui in studio' (SessionController)
	script.onConnectionSuccess = new Callback();
	script.onConnectionSuccess.add(function(liveData, colorIndex){
		Cursor.sikCursorAnyEnabled.set("ConnectingDialog", false); // sik cursor visibility
        RadialManager.allEnabledFlags.set("ConnectedChoiceIsFree", true); // radial enable
        
		Sequence.onMultiPlayer.callback(); // multiplayer flag
        onMultiPlayer(liveData, colorIndex); // callback

        // move mesh renderer to colocated
        script.meshRenderer.setParent(script.colocatedParent);
        script.syncTransformScript.enabled = true;
	});

    // place dialog in front of user
    const placement = new WorldPlacement(script.connectedMenu);
    placement.distanceFromCamera = 200;
    placement.rankedPriority = null;
    placement.start(true);
}