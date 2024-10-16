// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages the currently active World and allows editing of mesh data, provides some handy editing functions



// access
global.WorldManager = script;
script.start = start; // arg: world index (save slot)
script.startConnected = startConnected; // arg: world data
script.initializeBuilder = initializeBuilder; // args: doColor, doCustomPAttribute - returns an initialized builder
script.resetBuilder = resetBuilder; // args: MeshBuilder, build - resets all data on MB, and rebuilds mesh if 'build' is true
script.dataToMesh = dataToMesh; // data -> mesh asset (e.g. for main menu buttons to render slots before opening them), temporarily creates a new MeshBuilder instance and instantly returns its mesh
script.getLiveData = () => liveData; // read-only, useful for cursor
script.snapCheck = snapCheck; // args: data, position (vec3), exactOnly (bool)
script.getLocationIndexByPosition = getLocationIndexByPosition; // args: data, pos (vec3)
script.getLocationIndexByID = getLocationIndexByID; // args: data, id (int)
script.getCurrentWorldIndex = () => crrWorldIndex;
script.backToMenu = backToMenu;
script.shaderSnapAnimation = shaderSnapAnimation; // animate the shader towards its rounded vertex positions, returns anim duration - args: mainPass (default is mesh renderer's)
script.undoMeshDataWorldLocations = undoMeshDataWorldLocations; // args: data - before storing, revert positions set by updateMeshDataWorldLocations to original
script.centerMesh = centerMesh; // args: data (returns center, vec3)
script.setSnapping = setSnapping; // args: bool
script.getSnapping = () => isSnapping;
script.getSnapDistance = () => snapDistance;
script.setConnectionBindings = setConnectionBindings; // for ConnectedManager to call whenever a new connection is made
script.snapToGrid = snapToGrid; // args: pos (vec3)

// mesh add/remove:
script.meshAdd = meshAdd; // arg: data to be imported into liveData (stores to persistent), snappingProhibited data for specific point masks (or bool! if true, all snapping is fully disabled), connected (bool), override liveData with empty (bool)
script.meshRemove = meshRemove; // arg: faceID (array), connected (bool) - removes faces (stores to persistent) and rebuilds mesh




// params
const snapDistance = 6.5;
const snapToGridShaderDuration = .1; // shader positions rounding animation (to help covering up the snap-to-grid jump)

// inputs
//@ui {"widget":"label"}
//@input Component.RenderMeshVisual meshRenderer
const meshRendererTrf = script.meshRenderer.getTransform();



// data
var worldBuilder;
var topology = MeshTopology.Triangles;
var liveData;
var crrWorldIndex;

var isSnapping = true; // snapping enabled by default
var worldPlacement;
var worldPlacementStartScale;
var worldPlacementStartRotation;



function init(){
    worldBuilder = initializeBuilder(doColor=true, doCustomPAttribute=true);
	script.meshRenderer.mesh = worldBuilder.getMesh();

    // animator for moving mesh renderer in front of the user (from the mesh preview on menu buttons)
    worldPlacement = new WorldPlacement(script.meshRenderer.getSceneObject());
    worldPlacement.onAnimatonStep.add(function(v){ // while moving towards user
        if(!worldPlacementStartScale) return; // animate scale (if given)

        // animate scale and rotation manually
        const eased = interp(0, 1, v, EaseFunctions.Cubic.InOut);
        meshRendererTrf.setWorldScale(vec3.lerp(worldPlacementStartScale, vec3.one(), eased));
        meshRendererTrf.setWorldRotation(quat.slerp(worldPlacementStartRotation, quat.quatIdentity(), eased));
    });
    worldPlacement.onEnd.add(function(){ // on animation end
        updateMeshDataWorldLocations(liveData); // update the mesh data to represent new world space positions
    });
    worldPlacement.distanceFromCamera = 70;
    worldPlacement.rotation = false; // don't do rotation, as that would create rounding deterioration of world positions over time (multiple loads/saves)
    worldPlacement.process = function(data){
        return {pos:snapToGrid(data.pos), rot:data.rot}; // round world positions for world placement, against rounding deterioration
    }
}
script.createEvent("OnStartEvent").bind(init);



function start(data, n, buttonMeshPreviewTrf){
    // reset
    liveData = null;
    resetBuilder(worldBuilder, true);
    
    crrWorldIndex = n;
    meshAdd(data); // import new world

    // animate from menu button to in front of the user
    if(buttonMeshPreviewTrf) meshRendererTrf.setWorldTransform(buttonMeshPreviewTrf.getWorldTransform());
    worldPlacementStartScale = meshRendererTrf.getWorldScale();
    worldPlacementStartRotation = meshRendererTrf.getWorldRotation();
    worldPlacement.start();
}



function startConnected(data){
    // reset
    liveData = data;
    resetBuilder(worldBuilder, true);

    crrWorldIndex = -1; // world index for connected lenses
    meshAdd(data); // import new world

    // place in front of user if host
    if(ConnectedManager.isHost()) worldPlacement.start(doInstant=true);
}



// create a new MeshBuilder (with optional color attribute)
function initializeBuilder(doColor, doCustomPAttribute){
    var b = new MeshBuilder([
		{name:"position", components:3},
        ...(doCustomPAttribute ? [{name:"p", components:3}] : []), // if enabled, store positions as a custom shader attribute as well - not ideal, but World & Local Surface Positions don't work since the renderer's transform is moving (this is used for things like the grainy texture and color gradients)
		...(doColor ? [{name:"color", components:3}] : []) // storing color if enabled
	]);
	b.topology = topology;
	b.indexType = MeshIndexType.UInt16;
    return b;
}



// overwrite callbacks for new connected session
function setConnectionBindings(){
    // mesh add
    ConnectedManager.onMeshAddReceive.clear();
    ConnectedManager.onMeshAddReceive.add(function(data){
        const connectedMinifiedToLive = Storage.minifiedToLive(data, connected=true);
        meshAdd(connectedMinifiedToLive, null, true); // add data to this user's active slot
    });

    // mesh remove
    ConnectedManager.onMeshRemoveReceive.clear();
    ConnectedManager.onMeshRemoveReceive.add(function(faceIDs){
        meshRemove(faceIDs, true); // remove face from this user's active slot
    });
}



// remove faces from liveData, render using MeshBuilder, store to persistent
function meshRemove(faceIDs, connected){
    // send to other devices (if not received via connected already)
    if(isMultiplayer() && !connected){
        ConnectedManager.meshRemoveSend(faceIDs);
    }

    // remove faces
    for(var i = 0; i < faceIDs.length; i++){
        const faceID = faceIDs[i];
        delete liveData.f[faceID];
    }

    // cleanup unused locations
    cleanUnusedLocations(liveData);

    // redraw geometry
    rebuildMesh(liveData, worldBuilder);

    // store to persistent
    Storage.storeData(liveData, crrWorldIndex);
}



// add data to liveData, render using MeshBuilder, store to persistent
function meshAdd(data, snappingProhibited, connected){
    // send to other devices (if not received via connected already)
    if(isMultiplayer() && !connected){
        const connectedLiveToMinified = Storage.liveToMinified(data, connected=true);
        ConnectedManager.meshAddSend(connectedLiveToMinified);
    }

    if(!liveData){ // liveData may be null, in which case start new world
        liveData = data;
        rebuildMesh(liveData, worldBuilder);

    }else{

        // go through each location
        var relinkedLocations = {}; // relinks for already existing locations, key: original index, value: new index
        var toAppendLiveDataLocations = []; // new locations (buffered delay so it won't affect snapCheck())
        for(var i = 0; i < data.l.length; i++){
            const pos = data.l[i].p; // vec3 world position

            // check for locations to snap to
            if(snappingProhibited!=null) var isMovingPoint = snappingProhibited.moving == i; // if current point is the one being moved
            if(snappingProhibited !== true) var snapping = snapCheck(liveData, pos, exactOnly=!isMovingPoint); // check point snapping, except if snappingProhibited is true (bool), this is a full stop for any snapping
            if(snapping!=null && snappingProhibited){
                
                // don't allow snapping to specific indices in data.l
                if(isMovingPoint){ // check if this is the moving point from liveTriangles
                    const snapDataIndex = getLocationIndexByID(data, liveData.l[snapping].id); // get index in 'data' of found liveData snapping location
                    const doNotSnapThisPoint = snappingProhibited.prohibited.includes(snapDataIndex); // check if this index is not allowed to snap to
                    if(doNotSnapThisPoint) snapping = null;
                }
            }

            // if still snapping
            if(snapping!=null){
                relinkedLocations[i] = snapping; // store the relink index to apply after this loop

            // if not snapping
            }else{
                const newLocationID = nullish(data.l[i].id, Storage.getUniqueID()+i); // reuse old location id if possible, otherwise generate new unique
                toAppendLiveDataLocations.push({p:pos, id:newLocationID, sp:pos}); // register new location, duplicate custom attribute sp
                relinkedLocations[i] = liveData.l.length + toAppendLiveDataLocations.length - 1; // relink this non-snapped position to the (yet to be) newly added position index
            }
        }

        // after snapping check, append all new locations
        for(var i = 0; i < toAppendLiveDataLocations.length; i++){
            liveData.l.push(toAppendLiveDataLocations[i]);
        }
        
        // go through each new face
        const faceIDs = Object.keys(data.f);
        for(var i = 0; i < faceIDs.length; i++){
            const faceID = faceIDs[i]; // get face ID
            liveData.f[faceID] = data.f[faceID]; // register new face
            
            // check if one of this face's positions needs to be relinked because of snapping
            const positionIndices = liveData.f[faceID].v;
            for(var j = 0; j < positionIndices.length; j++){ // check all 3 position indices on this face
                const thisPositionIndex = positionIndices[j];
                const relinkTo = relinkedLocations[thisPositionIndex]; // the index to relink this location to
                if(relinkTo != null) liveData.f[faceID].v[j] = relinkTo; // if a relink is found for this location, overwrite index
            }
            
            // in rare cases, a face.v can contain 2 of the same indices - delete the face if this happens, it's invalid
            const v = liveData.f[faceID].v;
            const hasDuplicates = new Set(v).size !== v.length;
            if(hasDuplicates) delete liveData.f[faceID];
        }
        
        // cleanup unused locations and duplicate faces created by point snapping
        cleanUnusedLocations(liveData);
        cleanupDoubleFaces(liveData);

        // redraw geometry
        rebuildMesh(liveData, worldBuilder);
        // PERFORMANCE use appendVerticesInterleaved and appendIndices by creating a temp data object to pass through generateMeshBuilderInterleavedData
    }

    // store to persistent
    Storage.storeData(liveData, crrWorldIndex);
}



// check if currently in a multiplayer session
function isMultiplayer(){
    return global.ConnectedManager && ConnectedManager.multiplayerStarted;
}



// remove unused locations and relink existing
function cleanUnusedLocations(data){
    const usedIndices = new Set();
    const remappedIndices = {};
    const newLocations = [];
    
    // remap old indices to new
    for(const faceId in data.f){
        const face = data.f[faceId];
        for(const vertexIndex of face.v){
            if(!usedIndices.has(vertexIndex)){
                usedIndices.add(vertexIndex);
                remappedIndices[vertexIndex] = newLocations.length;
                newLocations.push(data.l[vertexIndex]);
            }
        }
    }
    
    // update locations array
    data.l = newLocations;
    
    // update face vertex indices
    for(const faceId in data.f){
        const face = data.f[faceId];
        face.v = face.v.map(oldIndex => remappedIndices[oldIndex]);
    }
}



// remove double faces
function cleanupDoubleFaces(data){
    const seenFaces = {};

    for(const faceId in data.f){
      const face = data.f[faceId];
        const vertices = face.v.slice(); // create copy
        vertices.sort(); // sort vertex indices for consistent comparison
        const key = vertices.join(','); // create canonical representation (so faces are recognized as duplicates even when they're in different order, e.g. [0, 1, 2] and [0, 2, 1])

        if(!seenFaces[key]){
            seenFaces[key] = faceId; // store by original face ID
        }else{
            delete data.f[faceId]; // remove duplicate face
        }
    }
}



// remove all instances of value from array
function removeAllInstances(arr, value){
    return arr.filter(element => element !== value);
}



// check if this location (vec3) snaps with an existing one in given data, returns position index
// exactOnly makes snapping only happen when the location is exactly the same when rounded (as all geometry positions in Polygon Studio are rounded)
function snapCheck(data, pos, exactOnly){
    const thisSnapDistance = (exactOnly || !isSnapping) ? .5 : snapDistance;
    const closestPoint = {
        dist : Infinity,
        index : null
    }
    for(var i = 0; i < data.l.length; i++){
        const existingLocation = data.l[i];
        const dist = pos.distance(existingLocation.p);
        if(dist < thisSnapDistance){
            if(exactOnly) return i;
            if(dist < closestPoint.dist){
                closestPoint.dist = dist;
                closestPoint.index = i;
            }
        }
    }
    return closestPoint.index;
}



function setSnapping(v){
    isSnapping = v;
}



// re-center the mesh locations of the given data and return the center
function centerMesh(data){
    // get mesh center
    var center = new vec3(0,0,0);
    for(let i = 0; i < data.l.length; i++){
        center = center.add(data.l[i].p);
    }
    center = center.uniformScale(1/data.l.length);
    center = snapToGrid(center); // against rounding deterioration

    // translate all locations by negative center
    for(let i = 0; i < data.l.length; i++){
        data.l[i].p = data.l[i].p.sub(center);
    }

    return center;
}



// get the index of the data.l index of pos (-1 if none)
function getLocationIndexByPosition(data, pos){
    return data.l.findIndex(obj => obj.p.equal(pos));
}



// gets the location index in data by location ID
function getLocationIndexByID(data, id){
    return data.l.findIndex(obj => obj.id == id);
}



// clamp a vec3 at a maximum of 1
function clampVec3(vec){
    return new vec3(Math.min(vec.x, 1), Math.min(vec.y, 1), Math.min(vec.z, 1));
}



function shaderSnapAnimation(customMainPass){
    // assume mesh renderer
    if(!customMainPass) customMainPass = script.meshRenderer.mainPass;

    // start shader animation
    customMainPass.snapToGridAnimDuration = snapToGridShaderDuration;
    customMainPass.snapToGridAnimTime = getTime();

    // return animation duration
    return snapToGridShaderDuration;
}



var lastUsedMeshDataWorldLocationsTrm; // store last used inv trm
function updateMeshDataWorldLocations(data){
    const waitTime = shaderSnapAnimation();    

    // after shader animation, snap grid to mesh
    new DoDelay(function(){
        // if this function was called before, revert its effects first before applying new transform
        if(lastUsedMeshDataWorldLocationsTrm) undoMeshDataWorldLocations(data, lastUsedMeshDataWorldLocationsTrm)

        // store the inverse of what will be applied so it can be undone later
        lastUsedMeshDataWorldLocationsTrm = meshRendererTrf.getInvertedWorldTransform();

        // apply
        const trm = meshRendererTrf.getWorldTransform();
        for(var i = 0; i < data.l.length; i++){
            const p = data.l[i].p;
            data.l[i].p = trm.multiplyPoint(p);
            data.l[i].p = snapToGrid(data.l[i].p);
        }

        // reset transform now that mesh vertices have been baked
        meshRendererTrf.setWorldPosition(vec3.zero());
        meshRendererTrf.setWorldRotation(quat.quatIdentity());
        meshRendererTrf.setWorldScale(vec3.one());

        // rebuild mesh
        rebuildMesh(data, worldBuilder);

    }).byTime(waitTime);
}

// if overrideInvTrm is given, it will be used instead of meshRendererTrf.getInvertedWorldTransform()
function undoMeshDataWorldLocations(data, overrideInvTrm){
    const trm = overrideInvTrm || meshRendererTrf.getInvertedWorldTransform();
    for(var i = 0; i < data.l.length; i++){
        const p = data.l[i].p;
        data.l[i].p = trm.multiplyPoint(p);
    }

    // clear previous trm when done with it
    if(lastUsedMeshDataWorldLocationsTrm) lastUsedMeshDataWorldLocationsTrm = null;

    // not rebuilding mesh, because that's not usually necessary here - call manually if needed
}



// convert data to meshbuilder interleaved data {vertices, indices}
function generateMeshBuilderInterleavedData(data){
    // generate interleaved vertices like so:
    // position      p            color
    // [p1, p2, p3,  p1, p2, p3,  c1, c2, c3 ...]

    // 'p' is necessary as the renderer's transform moves a bunch, meaning both Sufrace Local and World positions in shader cannot be used as a seed. p is a custom attribute to replace that with

    // generate interleaved indices like so:
    // [pIndex1, pIndex2, pIndex3 ...]
    
    var vertices = [];
    var indices = [];

    const faceIDs = Object.keys(data.f); // all face IDs
    for(var i = 0; i < faceIDs.length; i++){
        const faceID = faceIDs[i];
        const face = data.f[faceID]; // get face

        for(var j = 0; j < face.v.length; j++){ // for each vertex
            const pIndex = face.v[j]; // get position index
            const p = data.l[pIndex].p; // get position
            const storedP = data.l[pIndex].sp; // get shader position
            let c = RadialManager.getColorByIndex(face.c); // get color (vec3)
            vertices.push( // register position, p, and color
                p.x, p.y, p.z,
                storedP.x, storedP.y, storedP.z,
                c.r, c.g, c.b
            );
        }
        const indexCount = i*3;
        indices.push(indexCount, indexCount+1, indexCount+2); // register triangle vertices as face
    }
    return {vertices, indices};
}



// snap p.x, p.y, p.z to whole units in world space
function snapToGrid(p){
    return new vec3(Math.round(p.x), Math.round(p.y), Math.round(p.z));
}



function resetBuilder(builder, build){
    if(!builder) return;
    
    // remove data if any exists
    if(builder.getVerticesCount() > 0) builder.eraseVertices(0, builder.getVerticesCount());
    if(builder.getIndicesCount() > 0) builder.eraseIndices(0, builder.getIndicesCount());

    // update mesh if flag is true and changes were made
    if(build) builder.updateMesh();
}



// regenerate mesh from scratch from data
function rebuildMesh(data, builder){
    resetBuilder(builder);
    const mbData = generateMeshBuilderInterleavedData(data);
    builder.appendVerticesInterleaved(mbData.vertices);
    builder.appendIndices(mbData.indices);
    builder.updateMesh();
    
    // reset cursor mesh search cycle to prevent it using old data
    Cursor.resetCycleData();
}



// create mesh asset right away using a disposable MeshBuilder instance
function dataToMesh(data){
    var tempBuilder = initializeBuilder(doColor=true, doCustomPAttribute=true);
    rebuildMesh(data, tempBuilder);
    return tempBuilder.getMesh();
}



function backToMenu(){
    // center this mesh right away, and move its transform to compensate so its rotations will be smooth
    meshRendererTrf.setWorldPosition(vec3.zero()); // center trf
    const center = centerMesh(liveData); // center mesh
    rebuildMesh(liveData, worldBuilder); // render new mesh
    meshRendererTrf.setWorldPosition(center); // move mesh back to original position, now with a pivot at the center

    Sequence.menu(meshRendererTrf, fromWorld=crrWorldIndex, Storage.copyObject(liveData));

    // after world-to-menu animation, clear world mesh
    new DoDelay(function(){
        resetBuilder(worldBuilder, true)
    }).byTime(MainMenu.worldToMenuDuration);
}