// Max van Leeuwen
//  maxvanleeuwen.com


// Simple debug text script with delayed fade-out
// Call with empty string (or no args) to anim out
// Requires LSQuickScripts 2.31



if(!global.lsqs){
    print("DebugText disabled, no LSQuickScripts found");
    return;
}



//@ui {"widget":"label", "label":"use global.debugText(str, opt. duration)!"}
//@ui {"widget":"label", "label":"for index > 0, use debugTextN(str)"}
//@input int index
//@input float defaultDuration



var text = script.getSceneObject().getComponent("Component.Text");

var endValues = {
    textColor : text.textFill.color,
    dropShadowColor : text.dropshadowSettings.fill.color,
    outlineColor : text.outlineSettings.fill.color,
    backgroundColor : text.backgroundSettings.fill.color
}
var startValues = {
    textColor : new vec4(endValues.textColor.r, endValues.textColor.g, endValues.textColor.b, 0),
    dropShadowColor : new vec4(endValues.dropShadowColor.r, endValues.dropShadowColor.g, endValues.dropShadowColor.b, 0),
    outlineColor : new vec4(endValues.outlineColor.r, endValues.outlineColor.g, endValues.outlineColor.b, 0),
    backgroundColor : new vec4(endValues.backgroundColor.r, endValues.backgroundColor.g, endValues.backgroundColor.b, 0)
}

var anim = new AnimateProperty();
anim.updateFunction = function(v){
    text.textFill.color = vec4.lerp(startValues.textColor, endValues.textColor, v);
    text.dropshadowSettings.fill.color = vec4.lerp(startValues.dropShadowColor, endValues.dropShadowColor, v);
    text.outlineSettings.fill.color = vec4.lerp(startValues.outlineColor, endValues.outlineColor, v);
    text.backgroundSettings.fill.color = vec4.lerp(startValues.backgroundColor, endValues.backgroundColor, v);
}



var delayEvent;
function stopDelay(){
    if(delayEvent){
        delayEvent.stop();
        delayEvent = null;
    }
}



function debugText(s, duration){
    if(global.Sequence && !Sequence.allowDebugTexts) return;

    stopDelay();

    if(!s){ // if no text given, animate out the current debug text now
        if(anim.getReversed()) return;
        anim.setReversed(true);
        anim.start();
        
    }else{ // text given, show and start anim out delay
        text.text = s.toString();

        // anim out
        anim.setReversed(false);
        anim.pulse(1);
        if(duration == null) duration = script.defaultDuration;
        if(duration >= 0){
            delayEvent = new DoDelay(debugText); // anim out
            delayEvent.byTime(duration);
        }
    }
}

if(script.index == 0) global["debugText"] = debugText; // if index is 0, use debugText
global["debugText" + script.index.toString()] = debugText; // other indices use debugTextN