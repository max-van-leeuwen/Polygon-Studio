// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Continuous (optimized) cursor interaction check for mesh editing



global.Cursor = script;
script.start = start;
script.pause = pause;
script.selection; // cursor info
script.cursorPosition; // the current vec3 world position of the cursor
script.getClosestFace = getClosestFace; // returns face ID of currently selected face (or null if none)
script.getPinchShake = () => pinchShake; // returns bool
script.resetCycleData = resetCycleData; // on any mesh changes, reset the cursor search cycle data (otherwise it keeps old entries while cycling)
script.sikCursorAnyEnabled = new Flags(); // the SIK cursor will be enabled when any of these boolean flags are true



// params
const allowShakeUndo = false; // whether to allow shake-to-undo (this is experimental)
const searchCount = 100; // maximum face count to search on each frame (cycling)
const distToLineThreshold = 7.5;
const pointRadius = 5; // don't allow cursor interactions with points outside of this distance
const faceRadiusScalar = 1; // extra scale around faces for bounding sphere check
const closestFaceDistThreshold = 10; // threshold to closest face



// inputs
//@ui {"widget":"label"}
//@input SceneObject cursorDot
//@input SceneObject sikInteractorCursors



// placeholders
var closestP; // cycling data
var cursorEvent;
var lastSearchIndex;

var shakeDetection;
var pinchShake;



function init(){
    // cursor detection event
    cursorEvent = script.createEvent("UpdateEvent");
    cursorEvent.bind(cursorUpdate);
    cursorEvent.enabled = false;
    resetCycleData(); // initialize cycling data

    // initial selection data
    initializeSelection();

    // set cursor visual visibility flag
    script.sikInteractorCursors.enabled = false;
    script.sikCursorAnyEnabled.onChange.add(function(state){
        script.sikInteractorCursors.enabled = state.anyTrue;
    });

    // shake detection
    if(allowShakeUndo){
        shakeDetection = new ShakeDetector();
        HandTracking.onPinchStart.add(function(){ // reset shake detection on pinch start
            shakeDetection.reset();
        });
        HandTracking.onPinchHold.add(function(p){
            shakeDetection.update(p);
        })
        shakeDetection.onShake.add(function(){
            pinchShake = true;
            new DoDelay(function(){ // keep flag enabled for 1 frame
                pinchShake = false;
            }).byFrame();
        });
    }

    // cursor dot
    var cursorDotEvent = script.createEvent("UpdateEvent");
    cursorDotEvent.bind(function(){
        // always visible, except when pinching
        if(HandTracking.getPinching() && !RadialManager.getRadial().isOpen()){ // do show while radial menu is open
            script.cursorDot.enabled = false;
            return;
        }

        // set position
        const crrPos = HandTracking.getPinchPosition() || HandTracking.getHoverWorldPosition();
        script.cursorDot.enabled = !!crrPos;
        if(!!crrPos) script.cursorDot.getTransform().setWorldPosition(crrPos);
    })
}
script.createEvent("OnStartEvent").bind(init);



function start(){
    cursorEvent.enabled = true;
}



function pause(){
    cursorEvent.enabled = false;

    // stop existing
    resetCycleData();
    initializeSelection();
}



function initializeSelection(){
    script.selection = {
        p1:null,
        p2:null,
        p3:null,
        isPoint:false,
        isLine:false,
        faceID:null,
    }
}



function cursorUpdate(){
    // get cursor position
    var crrPos = HandTracking.getPinchPosition() || HandTracking.getHoverWorldPosition();
    script.cursorPosition = crrPos; // export for other scripts

    // abort if no cursor found
    if(!crrPos) return cursorFailed();

    // make cursor position align with sync transform
    if(Sequence.multiplayer){
        const invTrm = ConnectedChoice.meshRenderer.getTransform().getInvertedWorldTransform();
        crrPos = invTrm.multiplyPoint(crrPos);
        script.cursorPosition = crrPos;
    }

    // only allow cursor if there is data to compare to
    const liveData = WorldManager.getLiveData();
    if(!liveData) return cursorFailed();

    // don't update cursor data when mesh editing is active
    if(MeshEditing.active) return cursorFailed();
    if(MeshEditing.getRemoveMode()) return cursorFailed();

    // set radial flag when all cursorFailed()'s have had their chance
    RadialManager.allEnabledFlags.set('cursorIsFree', true);

    // search for closest location via lines (optimized)
    var newCycle; // flag whether to update the live value
    const faceIDs = Object.keys(liveData.f); // faces to search (over multiple cycles

    // if no faces, empty the selection object
    if(faceIDs.length == 0){
        initializeSelection();
        return;
    }


    // do full search
    const crrSearchLength = Math.min(faceIDs.length, searchCount); // amount of faces to search in this cycle (searchCount or fewer)
    for(var i = lastSearchIndex; i < lastSearchIndex+crrSearchLength; i++){ // search through points (optimized)
        const faceIndex = i%(faceIDs.length);
        const face = liveData.f[faceIDs[faceIndex]]; // get face
        
        // create 3 lines by vertex index (local on face)
        const line1 = [0, 1];
        const line2 = [1, 2];
        const line3 = [2, 0];
        const localIndexLines = [line1, line2, line3];

        // convert lines to location index
        const positions1 = [face.v[line1[0]], face.v[line1[1]]];
        const positions2 = [face.v[line2[0]], face.v[line2[1]]];
        const positions3 = [face.v[line3[0]], face.v[line3[1]]];
        const indexLines = [positions1, positions2, positions3];

        // get the distances to each line
        const pointOnLine1 = distanceToLine(liveData.l[positions1[0]].p, liveData.l[positions1[1]].p, crrPos); // get closest distance to crrPos for each line
        const pointOnLine2 = distanceToLine(liveData.l[positions2[0]].p, liveData.l[positions2[1]].p, crrPos);
        const pointOnLine3 = distanceToLine(liveData.l[positions3[0]].p, liveData.l[positions3[1]].p, crrPos);

        // collect these distances and positions as arrays
        const distances = [pointOnLine1.dist, pointOnLine2.dist, pointOnLine3.dist];
        const positions = [pointOnLine1.pos, pointOnLine2.pos, pointOnLine3.pos];

        // get closest (winning) line data
        const winningLineIndex = getSmallestIndex(distances); // 0, 1, 2
        const winningDistToLine = distances[winningLineIndex]; // distance to winning line
        const winningLine = indexLines[winningLineIndex]; // winning line (indices)

        // get info about both of winning line's points
        const linePointDistances = [
            crrPos.distance(liveData.l[winningLine[0]].p), // distances from cursor to both endpoints on line
            crrPos.distance(liveData.l[winningLine[1]].p)
        ];
        const winningLinePoint = getSmallestIndex(linePointDistances); // returns index of closest point on line (0, 1)
        const winningLocationDistance = linePointDistances[winningLinePoint]; // get distance to this point

        // all data gathered about this face, now do a comparison
        if(winningLocationDistance < closestP.dist || (winningLocationDistance == closestP.dist && winningDistToLine < closestP.lineDist)){ // if this point is closer than current record, or if equal but on a better face
            // additional data
            const winningPosOnLine = positions[winningLineIndex]; // the position of the closest point on the closest line
            const p1LocationIndex = winningLine[winningLinePoint]; // the index of the closest location on the closest line
            const p2LocalLinePoint = 1-winningLinePoint; // the other point on this line (0, 1)
            const p2LocalFaceIndex = localIndexLines[winningLineIndex][p2LocalLinePoint]; // (0,1) local line index converted to (0,1,2) local face index for .v

            // update winning data
            closestP = {
                dist : winningLocationDistance,
                lineDist : winningDistToLine,
                index : p1LocationIndex,
                faceID : faceIDs[faceIndex],
                linePos : winningPosOnLine,
                winningLine : winningLine,
                faceP2LocalIndex : p2LocalFaceIndex,
            }
        }

        // if all points have been searched (cycle end), update the live selection value
        if(faceIndex == faceIDs.length-1) newCycle = true;
    }
    lastSearchIndex += crrSearchLength;


    // if end of search cycle (all locations have been searched)
    if(newCycle){
        // get the remaining vertices on this face
        var faceVertices = liveData.f[closestP.faceID].v; // the location indices on the closest face
        const closestP1 = closestP.index;
        var closestP2;
        var closestP3;
        for(var i = 0; i < faceVertices.length; i++){ // 0, 1, 2
            const thisLocationIndex = faceVertices[i];
            if(thisLocationIndex == closestP.index) continue; // this is closest1, do nothing
            if(i == closestP.faceP2LocalIndex){
                closestP2 = thisLocationIndex;
            }else{
                closestP3 = thisLocationIndex;
            }
        }
        
        // check if highlighting a location or a line
        const isPoint = closestP.dist < pointRadius;
        const isLine = !isPoint && closestP.lineDist < distToLineThreshold;

        resetCycleData();
        script.selection = {
            p1: closestP1!=null ? { // whole object is null if no index found
                index:closestP1
            } : null,
            p2: closestP2!=null ? {
                index:closestP2
            } : null,
            p3: closestP3!=null ? {
                index:closestP3,
            } : null,
            isPoint,
            isLine,
            faceID : closestP.faceID,
        }
    }
}



function resetCycleData(){
    lastSearchIndex = 0;
    closestP = {
        dist : Infinity,
        lineDist : Infinity,
        index : null,
        faceID : null,
        linePos : null,
        winningLine : null
    }
}



// when getting cursor info wasn't possible
function cursorFailed(){

    // if currently in removeMode (but not removing faces), allow radial
    if(MeshEditing.getRemoveMode() && !MeshEditing.getCurrentlyRemoving()){
        RadialManager.allEnabledFlags.set('cursorIsFree', true);

    // if currently in meshPlacementMode, do not allow radial
    }else if(MeshEditing.getMeshPlacementMode()){
        RadialManager.allEnabledFlags.set('cursorIsFree', false);

    // if none of the above, assume cursor is currently not free
    }else{
        RadialManager.allEnabledFlags.set('cursorIsFree', false);
    }
}



// get closest point (and distance to it) from p to triangle a,b,c (all vec3)
function closestPointOnTriangle(p, a, b, c){
    let ab = b.sub(a);
    let ac = c.sub(a);
    let ap = p.sub(a);

    // project p onto triangle
    let normal = ab.cross(ac).normalize();
    let distanceToPlane = ap.dot(normal);
    let pProjected = p.sub(normal.uniformScale(distanceToPlane));

    // barycentric coordinates
    let d1 = ab.dot(ap);
    let d2 = ac.dot(ap);
    let d3 = ab.dot(ab);
    let d4 = ab.dot(ac);
    let d5 = ac.dot(ac);

    let denom = d3 * d5 - d4 * d4;
    let v = (d5 * d1 - d4 * d2) / denom;
    let w = (d3 * d2 - d4 * d1) / denom;
    let u = 1 - v - w;

    // get closest point
    if(u >= 0 && v >= 0 && w >= 0){ // is inside triangle
        return {point: pProjected, distance: Math.abs(distanceToPlane), isInside:true};
    
    }else{ // is outside triangle, check edges
        let closestPoint = a;
        let minDist = p.distance(a);

        let bDist = p.distance(b);
        if(bDist < minDist){
            closestPoint = b;
            minDist = bDist;
        }

        let cDist = p.distance(c);
        if(cDist < minDist){
            closestPoint = c;
            minDist = cDist;
        }

        let abClosest = closestPointOnSegment(p, a, b);
        let acClosest = closestPointOnSegment(p, a, c);
        let bcClosest = closestPointOnSegment(p, b, c);

        if(abClosest.distance < minDist){
            closestPoint = abClosest.point;
            minDist = abClosest.distance;
        }

        if(acClosest.distance < minDist){
            closestPoint = acClosest.point;
            minDist = acClosest.distance;
        }

        if(bcClosest.distance < minDist){
            closestPoint = bcClosest.point;
            minDist = bcClosest.distance;
        }

        return {point: closestPoint, distance: minDist, isInside:false};
    }
}

function closestPointOnSegment(p, a, b){
    let ab = b.sub(a);
    let t = p.sub(a).dot(ab) / ab.dot(ab);
    t = Math.max(0, Math.min(1, t));
    let closestPoint = a.add(ab.uniformScale(t));
    return {point: closestPoint, distance: p.distance(closestPoint)};
}



// get currently selected face (based on cursorPosition)
function getClosestFace(){
    // no data
    if(!script.cursorPosition) return;

    // get data
    const crrPos = script.cursorPosition;
    const liveData = WorldManager.getLiveData();
    
    // go through all faces
    var closestFaceID;
    var closestDist = Infinity;
    var closestFaceCenter;
    for(const faceID in liveData.f){
        const face = liveData.f[faceID];

        // get vertices and bounding sphere
        const vertex1 = liveData.l[face.v[0]].p;
        const vertex2 = liveData.l[face.v[1]].p;
        const vertex3 = liveData.l[face.v[2]].p;
        const triangleBoundingSphere = getBoundingSphere(vertex1, vertex2, vertex3);

        // if point is not within face bounding sphere, ignore
        if(!isPointInsideSphere(crrPos, triangleBoundingSphere.center, triangleBoundingSphere.radius * faceRadiusScalar)) continue;

        // distance to face
        const distToFace = closestPointOnTriangle(crrPos, vertex1, vertex2, vertex3);
        if(distToFace.isInside && distToFace.distance < closestDist){ // compare distance and make sure the cursor is 'inside' the face (within its faceted normal range), not on one of the edges
            closestDist = distToFace.distance;
            closestFaceID = faceID;
            closestFaceCenter = triangleBoundingSphere.center;
        }
    }

    // only if closest triangle is within threshold distance
    if(closestDist < closestFaceDistThreshold) return {faceID:closestFaceID, center:closestFaceCenter};
}



// returns a world point and a radius that perfectly fits three world positions
function getBoundingSphere(p1, p2, p3){
    const center = p1.add(p2).add(p3).uniformScale(1/3);

    // get maximum squared distance from the center to any point
    let maxSquaredDistance = 0;
    for(const position of [p1, p2, p3]){
        const distanceSquared = position.sub(center).dot(position.sub(center));
        maxSquaredDistance = Math.max(maxSquaredDistance, distanceSquared);
    }

    // radius is square root of maximum squared distance
    const radius = Math.sqrt(maxSquaredDistance);
    return {center, radius};
}



// check if a point is inside a sphere
function isPointInsideSphere(p, c, r){
    const distance = p.sub(c).length;
    return distance <= r;
}



// get the index of the smallest value in the given array
function getSmallestIndex(array){
    let smallestIndex = 0;
    for(let i = 1; i < array.length; i++){
        if(array[i] < array[smallestIndex]){
            smallestIndex = i;
        }
    }
    return smallestIndex;
}



// detect shakes (by checking velocity of continuously given positions over a short duration of time)
class ShakeDetector{
    constructor(){
        // params
        this.velocity = 75; // minimum sustained velocity (cm/s)
        this.duration = .7; // ... for this many seconds
        this.radius = 30; // maximum travel distance during shake duration
        
        // placeholders
        this.prvPos;
        this.lastCheckPoint = -Infinity;
        this.lastCheckPointPos;
        this.smoothVelocity = new SmoothFollow();
        this.smoothVelocity.smoothing = .3;

        // callback on shake
        this.onShake = new Callback();
    }

    update(p){
        // get direction
        if(this.prvPos) var dir = this.prvPos.sub(p);
        if(dir){
            if(this.lastCheckPointPos){
                if(p.distance(this.lastCheckPointPos) > this.radius){
                    this.reset(); // out of radius
                }
            }
    
            const vel = dir.length / getDeltaTime();
            this.smoothVelocity.addValue(vel);
            
            const smoothVel = this.smoothVelocity.getValue();
            if(smoothVel < this.velocity){
                this.lastCheckPoint = getTime();
                this.lastCheckPointPos = p;
            }
            if(getTime() - this.lastCheckPoint > this.duration){
                this.onShake.callback();
                this.reset();
            }
        }
        this.prvPos = p;
    }

    reset(){
        this.prvPos = null;
        this.lastCheckPoint = -Infinity;
        this.lastCheckPointPos = null;
        this.smoothVelocity.addValue(0, true);
    }
}