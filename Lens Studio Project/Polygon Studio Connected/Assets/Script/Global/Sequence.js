// Max van Leeuwen
//  maxvanleeuwen.com

// Plays the full sequence of the lens, this is where all other scripts are started from.



// access
global.Sequence = script;
script.startAt = script.startAt;

script.multiplayer; // assigned 'true' as soon as 'multiplayer' button is pressed
script.onMultiPlayer; // callback, called once when switching to multiplayer

global.StartAtType = { // global, matching with script.startAt
	Begin : 0,
	Intro : 1,
	Tutorial : 2,
	ConnectedChoice : 3,
	Menu : 4,
	World : 5,
}



//@ui {"widget":"label"}
//@ui {"widget":"separator"}
//@ui {"widget":"label", "label":"<big><b>Polygon Studio</b> <small>by Max & Liisi"}
//@ui {"widget":"label", "label":"See the readme for more info!"}
//@ui {"widget":"label"}
//@ui {"widget":"label", "label":"<small><a href=\"https://www.maxandliisi.com/polygon-studio\">maxandliisi.com/polygon-studio</a>"}
//@ui {"widget":"label", "label":"<small><a href=\"https://github.com/max-van-leeuwen/Polygon-Studio\">github</a>"}
//@ui {"widget":"separator"}

//@ui {"widget":"label"}
//@input bool delivery
//@input bool alwaysTutorial {"showIf":"delivery", "showIfValue":"true"}
//@ui {"widget":"label"}
//@ui {"widget":"group_start", "label":"Debugging 🤓", "showIf":"delivery", "showIfValue":"false"}
	//@input bool doTutorial
	//@input bool allowDebugTexts
	//@input bool allowQRRecordingEmulation
	//@input int startAt = 0 {"widget":"combobox", "values":[{"label":"Begin", "value":0}, {"label":"Intro", "value":1}, {"label":"Tutorial", "value":2}, {"label":"Connected Choice", "value":3}, {"label":"Menu", "value":4}, {"label":"World", "value":5}]}
	//@input int worldIndex {"min":"0", "showIf":"startAt", "showIfValue":5}
	//@ui {"widget":"label"}
//@ui {"widget":"group_end"}

// override all debug options to be false if delivery
if(script.delivery){
	script.doTutorial = null; // irrelevant, this is now decided by Tutorial.js
	script.allowDebugTexts = false;
	script.allowQRRecordingEmulation = false;
	script.startAt = StartAtType.Begin;
}



function init(){
	// callback
	script.onMultiPlayer = new Callback();
	script.onMultiPlayer.add(function(){script.multiplayer=true}); // switch flag on multiplayer start

	// 3d position visualizer for debugging - simply call Sequence.v.show(positions)
	if(!script.delivery) script.v = new VisualizePoints();

	// begin lens
	new DoDelay(start).byFrame(); // one-frame delay to give all scripts initialization time
}
script.createEvent("OnStartEvent").bind(init); // initialize other scripts first



// start lens here
function start(){
	if(script.startAt == StartAtType.Begin){
		Sequence.begin();
	}else if(script.startAt == StartAtType.Intro){
		Sequence.intro();
	}else if(script.startAt == StartAtType.Tutorial){
		Sequence.tutorial();
	}else if(script.startAt == StartAtType.ConnectedChoice){
		Sequence.connectedChoice();
	}else if(script.startAt == StartAtType.Menu){
		Sequence.menu();
	}else if(script.startAt == StartAtType.World){
		const loadWorldData = Storage.readData(script.worldIndex);
		Sequence.loadWorld(loadWorldData, script.worldIndex);
	}
}



// StartAtType stages

script.begin = function(){
	script.intro();
}


script.intro = function(){
	Intro.start(script.tutorial);
}


script.tutorial = function(){
	new DoDelay(function(){
		Tutorial.start(script.connectedChoice);
	}).byTime(1);
}


script.connectedChoice = function(){
	function onSinglePlayer(){
		Sequence.menu();
	}
	function onMultiPlayer(data, colorIndex){
		Sequence.loadConnected(data, colorIndex); // go to connected world after intro
	}
	ConnectedChoice.start(onSinglePlayer, onMultiPlayer);
}


// args:
//	meshRendererTrf (Transform) 		animates the world mesh renderer towards its corresponding main menu button
//	fromWorld (int)						world saving slot index that that we came from before opening the menu
//	newData (livedata)					final world data of the opened world (already centered)
script.menu = function(meshRendererTrf, fromWorld, newData){
	Cursor.pause();
	MeshEditing.stop();
	MainMenu.start(meshRendererTrf, fromWorld, newData);
	RadialManager.allEnabledFlags.set('worldIsOpened', false); // radial disable flag
}


// args:
//	data						the world's livedata to load
//	n							world saving slot index to load
//	buttonMeshPreviewTrf		the mesh preview transform on the button (for mesh animation)
script.loadWorld = function(data, n, buttonMeshPreviewTrf){
	Cursor.start();
	MeshEditing.start();
	WorldManager.start(data, n, buttonMeshPreviewTrf);
	RadialManager.allEnabledFlags.set('worldIsOpened', true);
	RadialManager.setColorIndex(MainMenu.saveSlots[n].radialColorIndex);
}


// args:
//	data			to be provided by onConnectionSuccess callback
//	colorIndex		to be provided by onConnectionSuccess callback
script.loadConnected = function(data, colorIndex){
	Cursor.start();
	MeshEditing.start();
	WorldManager.startConnected(data);
	RadialManager.allEnabledFlags.set('worldIsOpened', true);
	RadialManager.setColorIndex(colorIndex); // set a random color on world start
}