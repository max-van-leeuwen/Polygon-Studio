// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages the Radial Menu



// access
global.Intro = script;
script.start = start; // arg: callback on end
script.playSound2 = playSound2; // play the 'return to main menu' sound
script.polygonStudioShaderAnim = polygonStudioShaderAnim; // play the polygon studio logo shader animation



// inputs
//@ui {"widget":"label"}
//@input SceneObject introObj
//@input SceneObject maxAndLiisiObj
//@input SceneObject logoObj
//@input Asset.Material[] logoMat

//@ui {"widget":"label"}
//@input Component.AudioComponent introSound1
//@input Component.AudioComponent introSound2



function init(){
    script.introObj.enabled = false;
}
init();



function start(callbackOnEnd){
    script.introObj.enabled = true;

    // in front of user
    var worldPlacement = new WorldPlacement(script.introObj);
    worldPlacement.distanceFromCamera = 400;
    worldPlacement.smoothing = .1;
    worldPlacement.start(true);
    
    
    // scale in, fade in, scale out, fade out out, then call the next stage
    new QuickFlow(script.maxAndLiisiObj).scaleIn(0, 1.4, .8).fadeIn(0, 1.4).scaleOut(1.5, 1.4, .9).fadeOut(1.5, 1.4); // arbitrary durations

    // after max&liisi logo, play Polygon Studio logo
    new DoDelay(function(){
        polygonStudioShaderAnim(); // start shader animation on logo
        new QuickFlow(script.logoObj).scaleOut(1.7, .8); // anim-out
    }).byTime(2.8);


    // play both intro sounds
    const playSoundsAfter = 1.4;
    const delayBetween = 2.2;
    new DoDelay(function(){
        script.introSound1.play(0);
    }).byTime(playSoundsAfter);
    new DoDelay(function(){
        script.introSound2.play(0);
    }).byTime(playSoundsAfter + delayBetween);

    // callback
    new DoDelay(callbackOnEnd).byTime(5.1);

    // clean up when all animations are done
    new DoDelay(function(){
        script.introObj.enabled = false;
    }).byTime(6);
}



function playSound2(){
    script.introSound2.play(0);
}



function polygonStudioShaderAnim(){
    const shaderAnimDuration = 1;
    for(var i = 0; i < script.logoMat.length; i++){
        script.logoMat[i].mainPass.duration = shaderAnimDuration;
        script.logoMat[i].mainPass.startTime = getTime();
    }
}