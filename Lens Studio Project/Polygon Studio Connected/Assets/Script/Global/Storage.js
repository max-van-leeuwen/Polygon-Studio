// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages stored data



// --- data structures

// Live Data: The full mesh including runtime data
// For examples, see World Presets (Empty.js, Triangle.js, etc)
//
// const data = {
// 	l:[ // locations, array of objects
// 		...{p:pos, id:id, sp:pos} // pos is vec3, id is int (consistent throughout session, generated on runtime), sp is the custom position shader attribute, (mostly consistent throughout session, generated on rumtime)
// 	],
// 	f:{ // faces (t = unique face ID (int, consistent throughout session), which is creation epoch time minus startDate)
// 		...t:{v:[p1, p2, p3], c:i}, // v (vertex) always has length 3, [p1, p2, p3] are indices of data.l, i is index from radial menu colors (referring to vec3 color)
// 	}
// }

// Minified Data: Storing the mesh as a string with as little characters as possible (for QR export and Local Persistent store)
// const data = "p.x p.y p.z  p1 p2 p3 c"; // string with x,y,z ints (rounded to 1cm!) and after a double space all position and color indices per triangle
// 
// For connected lenses, the faceID (int) is interleaved in minified data, too!
// const data = "p.x p.y p.z  p1 p2 p3 c faceID";

// ---



// access
global.Storage = script;
script.liveToMinified = liveToMinified; // live -> minified data, args: liveData, connected (bool)
script.minifiedToLive = minifiedToLive; // minified -> live data, args: minified data, connected (bool)
script.storeData = storeData; // data, worldIndex
script.readData = readData; // worldIndex -> live data
script.resetWorld = resetWorld; // args: saving slot index, makeDefault (use defaultWorld if true)
script.initializeData = initializeData; // args: data - add runtime data to live data
script.getUniqueID = getUniqueID; // returns current epoch time minus startDate for a unique ID
script.getLocationFaces = getLocationFaces; // args: data, location index - returns all faceIDs (array) connected to this point
script.copyObject = copyObject; // JSON stringify and parse
script.JSONStringify = JSONStringify;
script.JSONParse = JSONParse;
script.setDataColor = setDataColor; // args: data, color index
script.getDefaultWorld = getDefaultWorld; // creates a copy of the world to show when none is available

// information about user
script.tutorialFinished; // true if the tutotial was finished before
script.setTutorialFinished = setTutorialFinished; // call when tutorial is done



// data
const defaultWorld = WorldPresets.Triangle;
const slotWorlds = { // per-slot default worlds
	0 : WorldPresets.Triangle,
	1 : WorldPresets.Box,
	2 : WorldPresets.Sphere,
	3 : WorldPresets.Torus,
	4 : WorldPresets.Dolphin
}
const startDate = Date.now(); // epoch timestamp on lens start, to arbitrarily offset all unique IDs with. this reduces the amount of characters needed for IDs
var store;
const tutorialName = "t"; // key for turorial finished boolean
const versionName = "v"; // key for lens version int
const slotName = "s"; // prefix for worldIndex key name (string)

// NOTE
// this (manually incremented) version number is stored persistently, and if this script finds a version number lesser than this one in the device's storage, it will clear the full local persistent storage on lens start! and it then stores this new value instead.
// this prevents old persistent data from messing with testing, and it makes the lens behave as a new lens for QA.
// don't change this number once the lens is published, unless you really have to, as this will clear all user's creations!
// - published Polygon Studio version number: 120
const clearBeforeVersion = 120;



function init(){
	store = global.persistentStorageSystem.store;

	// version check, clear if not outdated
	if(store.getInt(versionName) < clearBeforeVersion){
		store.clear();
		store.putInt(versionName, clearBeforeVersion);
	}

	// check if tutorial was finished earlier
	script.tutorialFinished = store.getBool(tutorialName);
}
init();



function storeData(data, worldIndex){
	// don't store if connected session
	if(worldIndex == -1) return;

	// process data
	data = copyObject(data); // make a copy for safety
	WorldManager.undoMeshDataWorldLocations(data); // undo transformations
	const minified = liveToMinified(data); // minify data to a string
	
	// persistent storage
	const thisSlotName = slotName + worldIndex.toString(); // unique key per saving slot
	store.putString(thisSlotName, minified);
}


function readData(worldIndex){
	const thisSlotName = slotName + worldIndex.toString();
	const thisData = store.getString(thisSlotName);
	var world;

	// if no world exists yet
	if(thisData == ''){
		world = resetWorld(worldIndex);
	
	// if a world was stored
	}else{
		world = minifiedToLive(thisData);
		if(!world) resetWorld(worldIndex); // reset if data is corrupted
	}

	initializeData(world);
	
	return world;
}



// creates a copy of defaultWorld and loads/stores it to the current slot (returns data)
function resetWorld(worldIndex, makeDefault){
	world = script.getDefaultWorld(MainMenu.saveSlots[worldIndex].radialColorIndex, makeDefault ? null : worldIndex); // get this slot's default world and assign color
	storeData(world, worldIndex); // store for next lens start
	return world;
}



function getDefaultWorld(colorIndex, worldIndex){
	const thisDefaultWorld = slotWorlds[worldIndex] || defaultWorld;
	var world = copyObject(thisDefaultWorld);
	setDataColor(world, colorIndex);
	return world;
}



function setTutorialFinished(){
	store.putBool(tutorialName, true);
	script.tutorialFinished = true;
}



// make Lens Studio's vec3 compatible with JSON parse (use Storage.JSONParse anywhere to automatically implement!)
function vec3Reviver(key, value){
	if(value && typeof value === 'object' && 'x' in value && 'y' in value && 'z' in value) return new vec3(value.x, value.y, value.z);
	return value;
}

// modifying vec3.prototype is not allowed on device, so this function appends a toJSON function to all vec3 instances in an object
function patchVec3s(obj){
	if (obj instanceof vec3) {
		obj.toJSON = function() {
			return {
				x: Math.round(this.x),
				y: Math.round(this.y),
				z: Math.round(this.z)
			};
		};
	} else if (Array.isArray(obj)) {
		for (let i = 0; i < obj.length; i++) {
			patchVec3s(obj[i]);
		}
	} else if (typeof obj === 'object' && obj !== null) {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				patchVec3s(obj[key]);
			}
		}
	}
}

// stringify incl vec3
function JSONStringify(obj){
	patchVec3s(obj);
	return JSON.stringify(obj);
}

// parse incl vec3
function JSONParse(str){
	return JSON.parse(str, vec3Reviver);
}



function liveToMinified(data, connected){
	var s = ""; // start string

	for(var i = 0; i < data.l.length; i++){ // go through each position
		const p = data.l[i].p;
		// add each position to array separated by spaces (rounded to 1cm precision, although all data should already be rounded in the first place because of snapping! this is just an extra check before saving)
		s += p.x.toFixed(0) + ' ' + p.y.toFixed(0) + ' ' + p.z.toFixed(0) + ' ';
	}

	s += " "; // end positions, start faces (double space to separate lists)
	const triangles = Object.keys(data.f); // all triangle IDs
	for(var i = 0; i < triangles.length; i++){
		const id = triangles[i]; // get triangle ID
		const triangle = data.f[id]; // get triangle
		s += triangle.v[0] + ' ' + triangle.v[1] + ' ' + triangle.v[2] + ' ' + triangle.c + ' '; // append vertices and color
		if(connected) s += id + ' '; // also get faceID when in connected session
	}

	// remove last space from string
	s = s.slice(0, -1);

	// done!
	return s;
}



function minifiedToLive(str, connected){
	// data could be corrupted
	try{
		const data = {l:[], f:{}}; // empty data placeholder
		const stores = str.split('  '); // split locations, faces (double space)
		if(stores.length !== 2) return;

		const locations = stores[0].trim().split(' ');
		const faces = stores[1].trim().split(' ');

		// locations
		for(let i = 0; i < locations.length; i+=3){ // go through each 3 locations
			if(locations[i+2]==null) return; // check array validity
			const p1 = Number(locations[i]);
			const p2 = Number(locations[i+1]);
			const p3 = Number(locations[i+2]);
			const p = new vec3(p1, p2, p3); // create vec3 for location
			const id = getUniqueID() + Math.round(i/3); // unique location id
			data.l.push({p, id, sp:p}); // store location, duplicate custom attribute sp
		}
		
		// faces
		for(let i = 0; i < faces.length; i+=connected?5:4){ // go through each of the 4 indices (x, y, z, c) - or 5 if connected session (faceID)
			// check array validity
			const lastIndex = connected ? i+4 : i+3;
			if(faces[lastIndex]==null) return;

			// get data
			const p1 = Number(faces[i]);
			const p2 = Number(faces[i+1]);
			const p3 = Number(faces[i+2]);
			const c = Number(faces[i+3]);
			const id = connected ? Number(faces[i+4]) : getUniqueID() + Math.round(i/4); // face id (get from connected minified data, or generate new unique when in private session)
			data.f[id] = {v:[p1, p2, p3], c}; // store face
		}
		return data;

	}catch(error){
		return;
	}
}



// set data color to that of world index n
function setDataColor(data, n){
	// check if object already has colors by checking the first face's color attribute
	if(data.f[Object.keys(data.f)[0]].c) return;

	// per-world colors
	const faceIDs = Object.keys(data.f); // all faceIDs
	for(var i = 0; i < faceIDs.length; i++){
		const id = faceIDs[i]; // get face ID
		data.f[id].c = n; // assign color index
	}
}



// add runtime data to a new mesh
function initializeData(data){
	// assign unique location ids
	for(var i = 0; i < data.l.length; i++){
		if(data.l[i].id==null) data.l[i].id = getUniqueID() + i;
		if(data.l[i].sp==null) data.l[i].sp = data.l[i].p; // duplicate custom attribute sp
	}

	// adding unique face ids
	const newFaces = {};
	const keys = Object.keys(data.f);
	for(let i = 0; i < keys.length; i++){
		newFaces[getUniqueID() + i] = data.f[keys[i]];
	}
	data.f = newFaces;
}



// PERFORMANCE this could be more optimized by keeping a lookup table instead of brute-forcing (this function is called on every frame in some cases)
function getLocationFaces(data, locationIndex){
	const foundFaces = [];
	const faceIDs = Object.keys(data.f);
	
	for(var i = 0; i < faceIDs.length; i++){
		const faceID = faceIDs[i];
		if(data.f[faceID].v.includes(locationIndex)){ // if this face has locationIndex in its vertices, register
			foundFaces.push(faceID);
		}
	}
	return foundFaces;
}



function getUniqueID(){
	return Date.now() - startDate;
}



function copyObject(obj){
	// PERFORMANCE this function might be called a little too often (esp when opening main menu) - check if alternative solutions might be possible, and make sure that functions like patchVec3s aren't too heavy
	return JSONParse(JSONStringify(obj));
}