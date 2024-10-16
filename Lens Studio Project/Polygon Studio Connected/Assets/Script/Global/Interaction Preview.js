// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Manages mesh editing interaction previews



global.InteractionPreview = script;
script.point = point; // arg: vec3 point world position - highlighted point
script.line = line; // args: 2x vec3 world positions - highlighted line
script.face = face; // args: 3x vec3 world positions - highlighted face (for removal)
script.faceRemoved = faceRemoved; // args: 3x vec3 world positions, vec3 face center - highlighted face gets removed
script.triangles = triangles; // args: array of [3x vec3 world positions, color vec3] - new face(s) currently being added to the mesh
script.scalingLine = scalingLine; // args: pos1, pos2 (vec3) - shows a line to guide the object's scaling (automatically fades out if not called every frame)
script.stop = stop; // stops all current visualizers



// visualizer inputs
//@ui {"widget":"label"}
//@input SceneObject pointVisualizer
const p = script.pointVisualizer;
const pTrf = script.pointVisualizer.getTransform();

//@ui {"widget":"label"}
//@input SceneObject lineVisualizer
//@input Asset.Material lineMat
const l = script.lineVisualizer;
const lTrf = script.lineVisualizer.getTransform();

//@ui {"widget":"label"}
//@input SceneObject scalingLineVisualizer
//@input Asset.Material scalingLineMat
const scalingLineTrf = script.scalingLineVisualizer.getTransform();

// meshbuilder rmvs
//@ui {"widget":"label"}
//@input Component.RenderMeshVisual faceRMV
//@input Component.RenderMeshVisual triangleRMV



// placeholders
const lineRot = quat.angleAxis(Math.PI/2, vec3.up());
const lineWidth = .25;
const pointRadius = .5;
const scalingLineWidth = .08;
var faceBuilder;
var triangleBuilder;



function init(){
    // hide on start
    p.enabled = false;
    l.enabled = false;

    // initialize point scale
    pTrf.setLocalScale(vec3.one().uniformScale(pointRadius));

    // update
    updateEvent = script.createEvent("UpdateEvent");
    updateEvent.bind(onUpdate);
    updateEvent.enabled = false;


    // face meshbuilder (for removal selection)
    faceBuilder = WorldManager.initializeBuilder(doColor=false, doCustomPAttribute=false);
    script.faceRMV.mesh = faceBuilder.getMesh();

    // triangle meshbuilder (currently adding this triangle to the mesh)
    triangleBuilder = WorldManager.initializeBuilder(doColor=true, doCustomPAttribute=false);
    script.triangleRMV.mesh = triangleBuilder.getMesh();
}
init();



// multiplayer sync position pass, this makes sure the SyncTransform is respected (when used)
function makeSyncPos(p){
    if(!Sequence.multiplayer) return p;
    const invTrm = ConnectedChoice.meshRenderer.getTransform().getWorldTransform();
    return invTrm.multiplyPoint(p);
}



function point(p1){
    hideLine();
    showPoint();

    p1 = makeSyncPos(p1);
    pTrf.setWorldPosition(p1);
}

function line(p1, p2){
    hidePoint();
    showLine();

    p1 = makeSyncPos(p1);
    p2 = makeSyncPos(p2);

    lTrf.setWorldPosition(p1);
    var lookAt = quat.lookAt(p1.sub(p2), vec3.up());
    if(isNaN(lookAt.x)) lookAt = quat.lookAt(p1.sub(p2), vec3.right()); // catch nan values for points directly above each other
    const rot = lookAt.multiply(lineRot);
    lTrf.setWorldRotation(rot);
    lTrf.setWorldScale(new vec3(p1.distance(p2), lineWidth, lineWidth));
}

function face(p1, p2, p3){
    // empty builder data, don't update mesh yet
    WorldManager.resetBuilder(faceBuilder);

    p1 = makeSyncPos(p1);
    p2 = makeSyncPos(p2);
    p3 = makeSyncPos(p3);

    // create triangle
    faceBuilder.appendVerticesInterleaved([
        p1.x, p1.y, p1.z,
        p2.x, p2.y, p2.z,
        p3.x, p3.y, p3.z
    ]);
    faceBuilder.appendIndices([0, 1, 2]);
    faceBuilder.updateMesh();
}

function faceRemoved(p1, p2, p3, faceCenter){ // triangle removal out-anim visual
    // create new meshbuilder
    let faceRemovedBuilder = WorldManager.initializeBuilder(doColor=false, doCustomPAttribute=false);

    p1 = makeSyncPos(p1);
    p2 = makeSyncPos(p2);
    p3 = makeSyncPos(p3);

    // create triangle
    faceRemovedBuilder.appendVerticesInterleaved([
        p1.x, p1.y, p1.z,
        p2.x, p2.y, p2.z,
        p3.x, p3.y, p3.z
    ]);
    faceRemovedBuilder.appendIndices([0, 1, 2]);
    faceRemovedBuilder.updateMesh();

    // create rmv
    let obj = global.scene.createSceneObject("faceRemovedVisual");
    let rmv = obj.createComponent("Component.RenderMeshVisual");
    let mat = script.faceRMV.getMaterial(0).clone();
    mat.mainPass.blendMode = BlendMode.Normal;
    mat.mainPass.startTime = getTime();
    mat.mainPass.meshCenter = faceCenter;
    rmv.addMaterial(mat);
    rmv.mesh = faceRemovedBuilder.getMesh();

    // destroy visual after animation
    new DoDelay(function(){
        rmv.destroy();
        obj.destroy();
    }).byTime(.5); // arbitrary duration, any time after shader animation has ended
}

// needs an array of triangles [{p1, p2, p3, c}] all values vec3
function triangles(trianglesData){
    WorldManager.resetBuilder(triangleBuilder); // empty builder data, don't update mesh yet

    for(var i = 0; i < trianglesData.length; i++){
        let p1 = trianglesData[i].p1;
        let p2 = trianglesData[i].p2;
        let p3 = trianglesData[i].pos;
        const c = RadialManager.getColorByIndex(trianglesData[i].c); // convert index to color

        p1 = makeSyncPos(p1);
        p2 = makeSyncPos(p2);
        p3 = makeSyncPos(p3);

        // add 3 vertices
        triangleBuilder.appendVerticesInterleaved([
            p1.x, p1.y, p1.z, c.r, c.g, c.b,
            p2.x, p2.y, p2.z, c.r, c.g, c.b,
            p3.x, p3.y, p3.z, c.r, c.g, c.b,
        ]);

        // connect using indices
        triangleBuilder.appendIndices([
            i*3, i*3+1, i*3+2
        ]);
    }
    triangleBuilder.updateMesh();
}

var scalingLineDisableDelay = new DoDelay(function(){script.scalingLineVisualizer.enabled = false;});
function scalingLine(p1, p2){
    script.scalingLineVisualizer.enabled = true;
    scalingLineDisableDelay.byTime(.5); // disable automatically
    script.scalingLineMat.mainPass.lastSeenTime = getTime(); // shader anim-out

    // placement on mesh
    scalingLineTrf.setWorldPosition(p1);
    var lookAt = quat.lookAt(p1.sub(p2), vec3.up());
    if(isNaN(lookAt.x)) lookAt = quat.lookAt(p1.sub(p2), vec3.right()); // catch nan values for points directly above each other
    const rot = lookAt.multiply(lineRot);
    scalingLineTrf.setWorldRotation(rot);
    scalingLineTrf.setWorldScale(new vec3(p1.distance(p2), scalingLineWidth, scalingLineWidth));
}



function showPoint(){
    updateEvent.enabled = true;
    p.enabled = true;
}

function showLine(){
    updateEvent.enabled = true;
    l.enabled = true;
}

function hidePoint(){
    updateEvent.enabled = false;
    p.enabled = false;
}

function hideLine(){
    updateEvent.enabled = false;
    l.enabled = false;
}

function hideBuilder(builder){
    WorldManager.resetBuilder(builder, true);
}

function stop(){
    hidePoint();
    hideLine();
    hideBuilder(faceBuilder);
    hideBuilder(triangleBuilder);
}

function onUpdate(){
    if(Cursor.cursorPosition) script.lineMat.mainPass.cursorPos = Cursor.cursorPosition;
}