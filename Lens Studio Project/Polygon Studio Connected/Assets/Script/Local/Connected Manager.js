// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Enabled when colocated world is ready.
// Handles data sending/receiving using Sync framework.
// Use ConnectedManager.onMeshAddReceive.add(func) and ConnectedManager.onMeshRemoveReceive(func) to be notified with minified mesh data each time another user makes a change to the shared mesh.



global.ConnectedManager = script;
script.multiplayerStarted = false;
script.ID; // assigned on each new session (string)
script.isHost = isHost; // returns bool

const meshAddEventName = "MeshAdd";
script.meshAddSend;                                         // args: minified mesh data to add (string)
script.onMeshAddReceive = new Callback();                   // args: minified mesh data to add (string)

const meshRemoveEventName = "MeshRemove";
script.meshRemoveSend;                                      // args: faceIDs to remove ([int])
script.onMeshRemoveReceive = new Callback();                // args: faceIDs to remove ([int])

const worldRequestEventName = "WorldRequest";



// placeholders
var syncEntity;
const worldStoreName = "WorldStore";



function createSync(){
    // create sync entity - first user claims the session and becomes host
    syncEntity = new SyncEntity(script, null, true);

    // create world store, updated when requested by newly joining users (downloaded on change)
    var worldStoreProperty = StorageProperty.manualString(worldStoreName, ""); // empty on start
    syncEntity.addStorageProperty(worldStoreProperty);

    // per-user random color for radial palette selection
    var colorIndex = randInt(0, RadialManager.colorPalette.length - 1); // subtracting 1 to exclude white from random colors (the last index)



    // -- events

    // create mesh add event (receiver)
    syncEntity.onEventReceived.add(meshAddEventName, function(networkMessage){
        const senderID = networkMessage.senderConnectionId;
        const thisID = global.sessionController.getLocalConnectionId();
        if(senderID == thisID) return; // ignore if event came from this user

        script.onMeshAddReceive.callback(networkMessage.data);
    });

    // create mesh remove event (receiver)
    syncEntity.onEventReceived.add(meshRemoveEventName, function(networkMessage){
        const senderID = networkMessage.senderConnectionId;
        const thisID = global.sessionController.getLocalConnectionId();
        if(senderID == thisID) return; // ignore if event came from this user
        
        const faceIDs = JSON.parse(networkMessage.data);
        script.onMeshRemoveReceive.callback(faceIDs);
    });

    // create world request event (receiver)
    syncEntity.onEventReceived.add(worldRequestEventName, function(networkMessage){
        if(!isHost()) return; // only the host can update the current world store

        var currentWorld = WorldManager.getLiveData();
        const minifiedWorld = Storage.liveToMinified(currentWorld, connected=true);
        worldStoreProperty.setPendingValue(minifiedWorld); // send to store
    });



    // on session started
    syncEntity.notifyOnReady(function(){
        // set mesh add function (sender)
        script.meshAddSend = function(data){
            syncEntity.sendEvent(meshAddEventName, data);
        }

        // set mesh remove function (sender)
        script.meshRemoveSend = function(faceIDs){
            const data = JSON.stringify(faceIDs);
            syncEntity.sendEvent(meshRemoveEventName, data);
        }

        // flag
        script.multiplayerStarted = true;

        // world manager callback
        WorldManager.setConnectionBindings();
        
        // assign ID to this user
        script.ID = global.sessionController.getLocalConnectionId() + (isHost()?' (host)':''); // assign ID (with host name embedded)
        if(Sequence.allowDebugTexts) debugText1(script.ID); // show IDs on screen

        // connection established
        if(isHost()){

            // start new empty world (default), in front of user
            const world = Storage.getDefaultWorld(colorIndex); // default starting world for connected lens
            Storage.initializeData(world); // initialize
            ConnectedChoice.onConnectionSuccess.callback(world, colorIndex); // send
                
        }else{ // if not host

            // keep track of changes to store
            function onChanges(newValue, oldValue){
                worldStoreProperty.onAnyChange.remove(onChanges); // stop checking for changes
                const world = Storage.minifiedToLive(newValue, connected=true); // convert to live data
                ConnectedChoice.onConnectionSuccess.callback(world, colorIndex); // send all the way back to Sequence to start a new world with
            }
            worldStoreProperty.onAnyChange.add(onChanges);

            // request world update to store
            syncEntity.sendEvent(worldRequestEventName);
        }
    });
}
new DoDelay(createSync).byFrame(3); // arbitrary delay time, waiting for other scripts to be fully done initializing



// check if hosting & permission to change store
function isHost(){
    return syncEntity.isSetupFinished && syncEntity.doIOwnStore();
}