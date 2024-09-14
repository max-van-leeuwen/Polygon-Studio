// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// Reading QR sequence from video, returning a PLY file!



// Polygon Studio has a limited color palette, you can set its colors in the Radial Manager script.
// If any colors were changed there, run the printColorIndices() function and paste the result down here to update the color indices for correct lookup while converting:
// (This is the same lookup table as used in PLY_to_Polygon_Studio.py)

const color_lookup = [
    [255, 0, 0],
    [255, 162, 0],
    [247, 255, 0],
    [0, 255, 0],
    [0, 255, 189],
    [0, 149, 255],
    [0, 0, 255],
    [119, 0, 255],
    [255, 0, 174],
    [255, 169, 128],
    [252, 255, 153],
    [153, 255, 153],
    [145, 224, 255],
    [255, 130, 208],
    [255, 255, 255],
]



import jsQR from "jsqr";

export function scanVideoForQRCode(videoElement, updateProgress, onFinished){
    // render video off-screen
    const offscreenCanvas = new OffscreenCanvas(videoElement.videoWidth, videoElement.videoHeight);
    const ctx = offscreenCanvas.getContext('2d', { willReadFrequently: true });
    videoElement.pause();


    // placeholders
    let accumulatedQRData = [];
    var lowResImageData;
    
    // cycling through next color channels to read (not all need to be scanned simultaneously))
    var currentChannel = 0; // 0, 1, 2 = r, g, b


    function stop(){
        updateProgress(videoElement.duration);
        if(accumulatedQRData.length == 0) return;
        const minified = combineData(accumulatedQRData);
        const data = minifiedToPLY(minified);
        onFinished(data);
    }


    // create low-res version of video frame (this helps against compression artefacts and actually improves QR reading!)
    function createLowResVariant(originalImageData, scaleFactor){
        // new canvas for scaling
        const tempCanvas = new OffscreenCanvas(
            Math.round(originalImageData.width * scaleFactor),
            Math.round(originalImageData.height * scaleFactor)
        );
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });
        tempCtx.imageSmoothingEnabled = true;
        tempCtx.imageSmoothingQuality = 'high';
    
        // original image
        const originalCanvas = new OffscreenCanvas(originalImageData.width, originalImageData.height);
        const originalCtx = originalCanvas.getContext('2d', { willReadFrequently: true });
        originalCtx.putImageData(originalImageData, 0, 0);
        tempCtx.drawImage(originalCanvas, 0, 0, originalCanvas.width, originalCanvas.height, 0, 0, tempCanvas.width, tempCanvas.height); // draw onto new canvas
        return tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    }


    // this function loops itself until the whole video has been scanned
    function processFrame(now, metadata){
        // convert to low-res
        ctx.drawImage(videoElement, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
        const imageData = ctx.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
        lowResImageData = createLowResVariant(imageData, .3);
        const data = lowResImageData.data;


        // - scan channels

        // red
        if(currentChannel == 0){
            const redChannel = new Uint8ClampedArray(data.length);
            for (let i = 0; i < data.length; i += 4) {
                redChannel[i] = redChannel[i + 1] = redChannel[i + 2] = data[i];
            }
            const redImageData = new ImageData(redChannel, lowResImageData.width, lowResImageData.height);
            var result = scanChannel(redImageData, 'Red');
            if(result.stopScanning){
                stop();
                return;
            }
            if(result.succesful) currentChannel = 1;
        }

        // green
        if(currentChannel == 1){
            const greenChannel = new Uint8ClampedArray(data.length);
            for (let i = 0; i < data.length; i += 4) {
                greenChannel[i] = greenChannel[i + 1] = greenChannel[i + 2] = data[i + 1];
            }
            const greenImageData = new ImageData(greenChannel, lowResImageData.width, lowResImageData.height);
            var result = scanChannel(greenImageData, 'Green');
            if(result.stopScanning){
                stop();
                return;
            }
            if(result.succesful) currentChannel = 2;
        }

        // blue
        if(currentChannel == 2){
            const blueChannel = new Uint8ClampedArray(data.length);
            for (let i = 0; i < data.length; i += 4) {
                blueChannel[i] = blueChannel[i + 1] = blueChannel[i + 2] = data[i + 2];
            }
            const blueImageData = new ImageData(blueChannel, lowResImageData.width, lowResImageData.height);
            var result = scanChannel(blueImageData, 'Blue');
            if(result.stopScanning){
                stop();
                return;
            }
            if(result.succesful) currentChannel = 0; // back to red channel for next frame
        }


        // increment to next frame
        videoElement.currentTime += 2/30; // assuming 30fps video, 1 in 2 frames
        updateProgress(videoElement.currentTime);
        if(videoElement.currentTime < videoElement.duration){
            videoElement.requestVideoFrameCallback(processFrame);
        }else{
            stop();
            return;
        }
    }

    // check an image for QR data
    function scanChannel(imageData, channelName){
        const qrCode = jsQR(imageData.data, lowResImageData.width, lowResImageData.height);
        if(qrCode){
            const isDataPresent = accumulatedQRData.some(item => item.data === qrCode.data);
            if(!isDataPresent){
                const qr = {channel:channelName, data:qrCode.data};
                accumulatedQRData.push(qr);
                if(qrCode.data.includes(']')) return {succesful:true, stopScanning:true}; // if end char ("]") found, end scanning here, the rest of the video is not important
            }
            return {succesful:true, stopScanning:false};
        }
        return {succesful:false, stopScanning:false};
    }

    // start scanning all frames
    videoElement.requestVideoFrameCallback(processFrame);
}



// process all individual QR scans and return as a single minified data string
function combineData(qrData){
    let combined = "";
    for(var i = 0; i < qrData.length; i++){
        const d = qrData[i].data;
        combined += d.replace(']', ''); // remove end char
    }
    return combined;
}



// convert minified string to .PLY 3D file format
function minifiedToPLY(data){
    // get vertices, faces as objects
    const dataSeparated = data.split('  ');
    if(dataSeparated.length != 2) return;
    const positionData = dataSeparated[0].split(' ');
    const faceData = dataSeparated[1].split(' ');

    // prepare positions (fused points, to be split into separate points per face later)
    const fusedPositions = [];
    for(let i = 0; i < positionData.length; i += 3){
        fusedPositions.push({ // x y z (string))
            x: positionData[i],
            y: positionData[i + 1],
            z: positionData[i + 2]
        });
    }

    // go over each face, build positions and faces lists
    const faces = [];
    const positions = [];
    for(let i = 0; i < faceData.length; i += 4){
        const facePositions = { // p1, p2, p3 (x, y, z objects, strings)
            p1: fusedPositions[faceData[i]],
            p2: fusedPositions[faceData[i + 1]],
            p3: fusedPositions[faceData[i + 2]]
        }

        // get color for all 3 points (r, g, b object, strings)
        const faceColor = getColorFromIndex(parseInt(faceData[i + 3]));

        // new positions to add to the positions list (per face)
        const newP1 = {...facePositions.p1};
        newP1.c = faceColor;
        const newP2 = {...facePositions.p2};
        newP2.c = faceColor;
        const newP3 = {...facePositions.p3};
        newP3.c = faceColor;

        // register positions and face
        positions.push(newP1, newP2, newP3);

        const faceIndices = [positions.length-3, positions.length-2, positions.length-1];
        faces.push(faceIndices);
    }



    // start writing PLY file

    // initial stuff
    let ply = `ply
format ascii 1.0
comment Created with Polygon Studio
comment by Max & Liisi
comment More information:
comment polygon-studio.maxandliisi.com`;

    // vertex count
    ply += "\nelement vertex " + positions.length.toString();
    
    // attributes
    ply += `
property float x
property float y
property float z
property uchar red
property uchar green
property uchar blue`;

    ply += "\nelement face " + faces.length.toString();
    
    // more attributes
    ply += "\nproperty list uchar int vertex_indices\nend_header";

    // start data export
    const s = " "; // space
    for(let i = 0; i < positions.length; i++){ // positions & color
        ply += "\n";
        const p = positions[i];
        ply += p.x + s + p.y + s + p.z + s + p.c.r + s + p.c.g + s + p.c.b;
    }
    for(let i = 0; i < faces.length; i++){ // triangles
        const f = faces[i];
        ply += "\n3 " + f[0] + s + f[1] + s + f[2];
    }
    return ply;
}



function getColorFromIndex(n){
    const c = color_lookup[n];
    return {
        r:c[0].toString(),
        g:c[1].toString(),
        b:c[2].toString()
    };
}