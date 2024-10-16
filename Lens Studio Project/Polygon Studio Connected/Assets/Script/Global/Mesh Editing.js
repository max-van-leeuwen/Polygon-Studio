// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages mesh editing interactions, talking mostly with World Manager and Cursor



global.MeshEditing = script;
script.start = start;
script.stop = stop;
script.active = false; // (read-only) if currently pinching a point or line
script.setRemoveMode = setRemoveMode; // args: bool
script.getRemoveMode = () => removeMode;
script.getCurrentlyRemoving = () => isCurrentlyRemoving;
script.setMeshPlacementMode = setMeshPlacementMode; // args: bool
script.getMeshPlacementMode = () => meshPlacementMode;



// params
const doBackupTriangles = true; // allows going one back step, useful for shake-to-undo (set allowShakeUndo 'true' in Cursor!) and minimumPinchTime
const minimumPinchTime = .1; // shorter pinches are not allowed (needs doBackupTriangles)



// placeholders
var editingAllowed;
const EditingTypes = {
    None : 0,
    Point : 1,
    Line : 2
}
var editingType = EditingTypes.None;
var previewEvent;
var liveTriangles; // if active, will contain array of objects containing: vec3 positions, ids, color index, faceID, and an array with position indices
var backupTriangles; // if active, will contain the same as liveTriangles but from the first pinch frame
var liveData; // most recent live data
var removeMode; // if currently removing faces
var isCurrentlyRemoving; // if currently pinching to remove faces
var meshPlacementMode; // if currently placing a face somewhere
var selectedFace; // if in removeMode, this stores the most recently selected face to be removed
var pinchStartedTime; // keeps track of pinch duration
var lastSnapIndex; // keeping track of the last snapped location to know when to play the vertexSnapSound



function init(){
    startInteractions();
}
init();



function start(){
    previewEvent.enabled = true;
}



function stop(){
    removeMode = false;
    previewEvent.enabled = false;
    editingType = EditingTypes.None;
    InteractionPreview.stop();
}



function startInteractions(){
    previewEvent = script.createEvent("UpdateEvent");
    previewEvent.bind(previewUpdate);
    previewEvent.enabled = false;

    // start vertex editing on pinch
    HandTracking.onPinchStart.add(function(){
        if(!previewEvent.enabled) return; // only if currently editing
        if(!Cursor.selection.p1) return; // only if cursor is initialized

        // current world data
        liveData = WorldManager.getLiveData();

        // keep track of pinch duration
        pinchStartedTime = getTime();

        // reset snapping index
        lastSnapIndex = null;

        // reset backupTriangles
        backupTriangles = null;

        if(editingType == EditingTypes.Point){

            // flag active
            MeshEditing.active = true;

            // get data
            const connectedFaces = Storage.getLocationFaces(liveData, Cursor.selection.p1.index); // get all faces connected to this point (faceIDs)
            const cursorPosition = liveData.l[Cursor.selection.p1.index].p; // position of selected point (vec3)
            liveTriangles = []; // start collecting all triangles to preview when moving this vertex around
            for(var i = 0; i < connectedFaces.length; i++){
                const faceID = connectedFaces[i];
                const c = liveData.f[faceID].c; // triangle color index
                const points = liveData.f[faceID].v; // triangle's position indices (always size 3)
                const leftoverPoints = points.filter(element => element !== Cursor.selection.p1.index); // 2 base points (indices)
                
                const liveTriangle = { // make live triangle
                    p1:liveData.l[leftoverPoints[0]].p,
                    p2:liveData.l[leftoverPoints[1]].p,
                    id1:liveData.l[leftoverPoints[0]].id,
                    id2:liveData.l[leftoverPoints[1]].id,
                    id3:liveData.l[Cursor.selection.p1.index].id, // remember the moving point's id
                    pos:cursorPosition,
                    c,
                    faceID
                };
                liveTriangles.push(liveTriangle); // add to all previewing triangles
            }

            // create backupTriangles
            if(doBackupTriangles && liveTriangles) backupTriangles = Storage.copyObject(liveTriangles);

            // delete existing triangles
            WorldManager.meshRemove(connectedFaces);

            // show previews for triangles
            previewLiveTriangles();

            // sound
            SoundPools.tick4();


        }else if(editingType == EditingTypes.Line){

            // flag active
            MeshEditing.active = true;
            
            // current world data
            liveData = WorldManager.getLiveData();
            
            // live triangle data
            const c = RadialManager.getColorIndex();
            liveTriangles = [{
                p1:liveData.l[Cursor.selection.p1.index].p,
                p2:liveData.l[Cursor.selection.p2.index].p,
                id1:liveData.l[Cursor.selection.p1.index].id,
                id2:liveData.l[Cursor.selection.p2.index].id,
                id3:null, // not relevant for line editing (the moving point is newly added)
                pos:Cursor.cursorPosition,
                c,
                // no faceID here, because this is a new face and an id will be generated later
            }];

            // make 1 live triangle (vec3 positions, color index)
            previewLiveTriangles();

            // sound
            SoundPools.tick4();

        }else if(removeMode){

            if(selectedFace != null){ // delete selected faceID
                // flag active
                MeshEditing.active = true;
                isCurrentlyRemoving = true;

                const removedFaceP1 = liveData.l[liveData.f[selectedFace.faceID].v[0]].p; // get the vertex positions of the face about to be deleted
                const removedFaceP2 = liveData.l[liveData.f[selectedFace.faceID].v[1]].p;
                const removedFaceP3 = liveData.l[liveData.f[selectedFace.faceID].v[2]].p;
                InteractionPreview.faceRemoved(removedFaceP1, removedFaceP2, removedFaceP3, selectedFace.center); // show faceRemoved visual
                WorldManager.meshRemove([selectedFace.faceID]); // remove face

                // sound
                SoundPools.deleteFace();

                // if all faces are deleted, automatically disable removeMode
                if(Object.keys(liveData.f).length == 0) RadialManager.onRemove(); // emulate button press
            }

        }else{ // no current editing mode, pinching in empty space
        }
    });

    HandTracking.onPinchHold.add(function(){
        if(!MeshEditing.active || !previewEvent.enabled || Cursor.selection.p1==null){ // only if currently editing, only if cursor is initialized
            InteractionPreview.stop();
            editingType = EditingTypes.None;
            MeshEditing.active = false;
            return;
        }

        // get mesh data
        const liveData = WorldManager.getLiveData();

        // check if removing faces (pinch-and-hold)
        if(removeMode){
            if(selectedFace != null){ // delete selected faceID
                const removedFaceP1 = liveData.l[liveData.f[selectedFace.faceID].v[0]].p; // get the vertex positions of the face about to be deleted
                const removedFaceP2 = liveData.l[liveData.f[selectedFace.faceID].v[1]].p;
                const removedFaceP3 = liveData.l[liveData.f[selectedFace.faceID].v[2]].p;
                InteractionPreview.faceRemoved(removedFaceP1, removedFaceP2, removedFaceP3, selectedFace.center); // show faceRemoved visual
                WorldManager.meshRemove([selectedFace.faceID]);

                // sound
                SoundPools.deleteFace();

                // if all faces are deleted, automatically disable removeMode
                if(Object.keys(liveData.f).length == 0) RadialManager.onRemove(); // emulate button press
            }
        }


        // from here on forward, liveTriangles is required
        if(!liveTriangles) return;

        // check if pinch-shaking, in which case cancel whatever the user is doing right now
        if(Cursor.getPinchShake()){
            InteractionPreview.stop();

            // get old triangles back if moving a point
            if(editingType == EditingTypes.Point && backupTriangles){
                const converted = liveTrianglesToData(backupTriangles);
                WorldManager.meshAdd(converted.data, converted.snappingProhibited);
            }
            
            // reset
            editingType = EditingTypes.None;
            MeshEditing.active = false;
            isCurrentlyRemoving = false;
            liveTriangles = null;
            backupTriangles = null;

            return;
        }

        
        // check if cursor snaps with existing mesh
        var cursorPos = Cursor.cursorPosition;
        var snaps = WorldManager.snapCheck(liveData, cursorPos);

        // check if this position is not part of the liveTriangles positions (can't snap to itself)
        if(snaps!=null){
            for(var i = 0; i < liveTriangles.length; i++){
                const indices = [
                    WorldManager.getLocationIndexByID(liveData, liveTriangles[i].id1), // get the location indices of unsnappable locations (by their ids)
                    WorldManager.getLocationIndexByID(liveData, liveTriangles[i].id2)
                ];
                if(indices.includes(snaps)) snaps = null; // ignore this snapping point
            }
            if(snaps!=null){
                cursorPos = liveData.l[snaps].p;
                
                // if new snapping point
                if(lastSnapIndex != snaps){
                    lastSnapIndex = snaps;
                    SoundPools.tick5();
                }
            }
        }
        if(snaps==null) lastSnapIndex = null; // reset

        // update 'pos' in all the faces of liveTriangles
        for(var i = 0; i < liveTriangles.length; i++){
            liveTriangles[i].pos = cursorPos;
        }

        // redraw preview
        previewLiveTriangles();
    });

    HandTracking.onPinchEnd.add(function(){
        // stop all current previews
        InteractionPreview.stop();

        // check if pinch was longer than threshold duration
        const pinchDuration = getTime() - pinchStartedTime;
        if(pinchDuration < minimumPinchTime){ // too short, revert to backupTriangles
            if(editingType == EditingTypes.Point){
                if(backupTriangles){
                    const converted = liveTrianglesToData(backupTriangles);
                    WorldManager.meshAdd(converted.data, converted.snappingProhibited);
                }
            }else if(editingType == EditingTypes.Line){
                // don't add the newly created line
            }
        }else{
            // convert liveTriangles to data, send to WorldManager
            if(liveTriangles){
                const converted = liveTrianglesToData(liveTriangles);
                WorldManager.meshAdd(converted.data, converted.snappingProhibited);
                
                // sound
                SoundPools.tick1();
            }
        }

        // reset
        editingType = EditingTypes.None;
        MeshEditing.active = false;
        isCurrentlyRemoving = false;
        liveTriangles = null; // reset previewing triangles
    });
}



// converts liveTriangles to data, also exports a 'snappingProhibited' object with info about which location indices cannot be snapped
function liveTrianglesToData(triangles){
    const data = {l:[], f:{}}; // empty data placeholder
    var snappingProhibited = {moving:-1, prohibited:[]}; // indices of points that were moved, and points that they cannot be snapped to

    for(var i = 0; i < triangles.length; i++){ // for each triangle (containing vec3 positions, faceID, color index)
        // triangle data
        const triangle = triangles[i];
        const vertices = [triangle.p1, triangle.p2, triangle.pos]; // array of location positions (vec3)
        const ids = [triangle.id1, triangle.id2, triangle.id3]; // array of location indices (int)

        // remove duplicate locations, relink
        const indices = [];
        for(var j = 0; j < vertices.length; j++){ // go through each vertex on this face (0, 1, 2)

            // get the index of this vertex in data (local) by its position, to automatically snap duplicate points together within this data object
            const positionIndex = WorldManager.getLocationIndexByPosition(data, vertices[j]);
            
            if(positionIndex == -1){ // position didn't already exist
                const newLocationID = nullish(ids[j], Storage.getUniqueID()+(i*(vertices.length)+j)); // reuse old id if possible, otherwise generate new unique
                data.l.push({p:vertices[j], id:newLocationID}); // store new location
                indices.push(data.l.length-1); // link to new location
                if(j!=2){
                    snappingProhibited.prohibited.push(data.l.length-1); // register as unsnappable (for moving), index refers to location inside data.l
                }else{
                    snappingProhibited.moving = data.l.length-1; // register as moving, index refers to location inside data.l
                }
            }else{ // position already exists in data.l
                indices.push(positionIndex); // relink to existing location
            }
        }

        // store face (by unique ID), indices to create triangle and c is color index
        const newFaceID = nullish(triangle.faceID, Storage.getUniqueID()+i); // pick original faceID if it exists, or for new faces generate a new unique ID
        data.f[newFaceID] = {v:indices, c:triangle.c};
    }

    return {data, snappingProhibited};
}



function previewUpdate(){
    if(Cursor.selection.p1==null || RadialManager.getRadial().isOpen()){ // only continue if cursor is initialized and radial is not open
        InteractionPreview.stop();
        editingType = EditingTypes.None;
        return;
    }

    const liveData = WorldManager.getLiveData();

    // if in face-remove mode
    if(removeMode){
        // face previewing
        selectedFace = Cursor.getClosestFace(); // get the selected face from cursor
        if(selectedFace!=null){
            const face = liveData.f[selectedFace.faceID];
            const p1 = liveData.l[face.v[0]].p;
            const p2 = liveData.l[face.v[1]].p;
            const p3 = liveData.l[face.v[2]].p;
            InteractionPreview.face(p1, p2, p3); // highlight face
        }else{
            InteractionPreview.stop();
        }
        
        // no other interaction types when in removeMode
        return;
    }

    // if in mesh placement mode, stop here
    if(meshPlacementMode){
        return;
    }
    

    // interaction type switch
    if(Cursor.selection.isLine){ // creating new triangle
        if(!Cursor.selection.p2) return; // only if cursor is initialized
        if(MeshEditing.active) return; // not if currently modifying the mesh

        // visualize line
        if(Cursor.selection.p1==null || liveData.l[Cursor.selection.p1.index]==null) return; // do some direct checks to prevent any edge cases from throwing errors
        if(Cursor.selection.p2==null || liveData.l[Cursor.selection.p2.index]==null) return;
        const p1 = liveData.l[Cursor.selection.p1.index].p;
        const p2 = liveData.l[Cursor.selection.p2.index].p;
    
        // select line
        InteractionPreview.line(p1, p2);
        editingType = EditingTypes.Line;

    }else if(Cursor.selection.isPoint){ // moving existing vertex
        if(MeshEditing.active) return; // not if currently modifying the mesh

        // select point
        if(Cursor.selection.p1==null || liveData.l[Cursor.selection.p1.index]==null) return;
        const p1 = liveData.l[Cursor.selection.p1.index].p;
        InteractionPreview.point(p1);
        editingType = EditingTypes.Point;

    }else{ // no valid selection type
        InteractionPreview.stop();
        editingType = EditingTypes.None;
    }
}



// convert liveTriangles data to pure positional triangle data to render with InteractionPreview.triangle
function previewLiveTriangles(){
    if(!liveTriangles) return;
    InteractionPreview.stop(); // stop remaining visuals

    // render triangles
    InteractionPreview.triangles(liveTriangles);
}



function setRemoveMode(v){
    removeMode = v;
}



function setMeshPlacementMode(v){
    meshPlacementMode = v;
}