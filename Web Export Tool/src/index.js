// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com


import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { scanVideoForQRCode } from './qrCodeScanner.js';

// video importing elements
const videoElement = document.createElement('video');
const progressBar = document.getElementById('progressBar');
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.style.display = 'none';
progressBar.style.display = 'none';

// 3D model exporting
window.plyString;



// on content loaded
document.addEventListener('DOMContentLoaded', function(){

    // drag and drop on canvas
    var dropZone = document.getElementById('dropZone');
    function showDropZone(){
        dropZone.style.visibility = "visible";
    }
    function hideDropZone(){
        dropZone.style.visibility = "hidden";
    }
    function allowDrag(e){
        e.dataTransfer.dropEffect = 'copy';
        e.preventDefault();
    }
    function handleDrop(e){
        e.preventDefault();
        hideDropZone();

        var files = e.dataTransfer.files;
        if(files.length > 0){
            var file = files[0];
            var videoTypes = ['video/mp4'];

            progressBar.style.display = 'block';
            downloadBtn.style.display = 'none';
            progressBar.value = 0;

            if(videoTypes.includes(file.type)) startVideoProcess(file);
        }
    }
    window.addEventListener('dragenter', function(e) {
        showDropZone();
    });
    dropZone.addEventListener('dragenter', allowDrag);
    dropZone.addEventListener('dragover', allowDrag);
    dropZone.addEventListener('dragleave', function(e) {
        hideDropZone();
    });
    dropZone.addEventListener('drop', handleDrop);



    // on new file picked with button
    function buttonFilePicked(event){
        progressBar.style.display = 'block';
        downloadBtn.style.display = 'none';
        progressBar.value = 0;
        
        const file = event.target.files[0];
        if(!file) return;
        startVideoProcess(file);
    }



    // start processing new video file
    function startVideoProcess(file){
        removeModel();

        // hide site contents
        document.getElementById("dialog-image").style.display = "none";

        const url = URL.createObjectURL(file);
        videoElement.src = url;

        videoElement.addEventListener('loadedmetadata', onMetadataLoaded);
        videoElement.addEventListener('loadeddata', onDataLoaded);

        function onMetadataLoaded(){
            progressBar.max = videoElement.duration;
            progressBar.value = 0;
            videoElement.removeEventListener('loadedmetadata', onMetadataLoaded);
        }

        function onDataLoaded(){
            function updateProgress(currentTime) {
                progressBar.value = currentTime;
            }
            scanVideoForQRCode(videoElement, updateProgress, onFinished);
            videoElement.removeEventListener('loadeddata', onDataLoaded);
        }

        function onFinished(data){
            progressBar.style.display = 'none';

            if(!data){
                downloadBtn.style.display = 'none';
                removeModel();
                return;
            }

            controls.zoomSpeed = .8; // allow zooming
            importPLY(data);
            downloadBtn.style.display = "block";
        }
    }
    document.getElementById('videoInput').addEventListener('change', buttonFilePicked);



    // initialize threejs for 3D model preview
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75, // fov
        window.innerWidth / window.innerHeight, // aspect
        0.1, // near
        5000 // far
    )
    camera.position.z = 25;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    document.body.appendChild(renderer.domElement);

    // color gradient background canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const gr = context.createLinearGradient(0, 0, 0, canvas.height);
    gr.addColorStop(0, '#ffc247');
    gr.addColorStop(1, '#ff6e83');

    context.fillStyle = gr;
    context.fillRect(0, 0, canvas.width, canvas.height);
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    scene.background = texture;

    // set window size dynamically
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    function handleResize(){
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    // orbit
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = .5;
    controls.zoomSpeed = 0; // no zoooming on start, allow once first video is uploaded
    controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN,
    }
    controls.maxDistance = 4000; // under camera's max render distance

    // scene
    let rotatingGroup = scene.add(new THREE.Group());
    let model;



    // import PLY data (string) into threejs scene
    function importPLY(data){
        // make string available
        window.plyString = data;

        // create blob out of ply string
        const blob = new Blob([data], { type: 'text/plain' });
        const reader = new FileReader();
        reader.onload = function(event){
            const content = event.target.result;
            const arrayBuffer = new TextEncoder().encode(content).buffer;
            const loader = new PLYLoader();
            const geometry = loader.parse(arrayBuffer);
            const material = new THREE.ShaderMaterial({
                vertexShader: `
                    varying vec3 vColor;
                    void main() {
                        vColor = color;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    varying vec3 vColor;
                    void main() {
                        gl_FragColor = vec4(vColor, 1.0);
                    }
                `,
                vertexColors: true,
                side: THREE.DoubleSide
            });
            model = new THREE.Mesh(geometry, material);

            rotatingGroup.rotation.y = 0;
            rotatingGroup.add(model);

            // place camera far enough away to see model
            controls.reset();
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDimension = Math.max(size.x, size.y, size.z);
            const distance = maxDimension * .8;
            camera.position.set(0, 0, distance);
        }
        reader.readAsText(blob);
    }

    // remove model from threejs scene
    function removeModel(){
        if(model) rotatingGroup.remove(model);
        model = null;
    }

    // animate and render scene
    const clock = new THREE.Clock();
    function animate(){
        requestAnimationFrame(animate);

        // rotating scene
        const elapsedTime = clock.getDelta();
        rotatingGroup.rotation.y += 1.2*elapsedTime;

        renderer.render(scene, camera);
    }
    animate();





    // dolphin 3D model (PLY layout)
    const dolphinPly = `ply
    format ascii 1.0
    comment created by gply, a Houdini tool.
    comment converted from .[b]geo
    comment for more information about Houdini, try:
    comment www.sidefx.com
    element vertex 249
    property float x
    property float y
    property float z
    property uchar red
    property uchar green
    property uchar blue
    element face 83
    property list uchar int vertex_indices
    end_header
    1 -1 -9 255 255 255 
    0 1 -10 255 255 255 
    8 -2 -6 255 255 255 
    -18 4 -6 126 0 161 
    -17 6 -6 126 0 161 
    -19 6 -5 126 0 161 
    -23 0 -5 0 108 237 
    -16 -1 -8 0 108 237 
    -23 6 -4 0 108 237 
    -23 0 -5 0 237 206 
    -33 -1 -3 0 237 206 
    -23 6 -4 0 237 206 
    -16 -1 -8 0 252 221 
    -23 6 -4 0 252 221 
    -16 14 -3 0 252 221 
    -16 14 -3 0 123 252 
    -16 -1 -8 0 123 252 
    0 1 -10 0 123 252 
    6 5 -5 0 117 246 
    -4 6 -8 0 117 246 
    -4 0 -19 0 117 246 
    -4 6 -8 0 246 215 
    -7 4 -8 0 246 215 
    -4 0 -19 0 246 215 
    6 5 -5 13 0 255 
    -4 0 -19 13 0 255 
    -1 -5 -24 13 0 255 
    -33 -1 -3 0 237 206 
    -23 6 -4 0 237 206 
    -32 2 -3 0 237 206 
    -23 0 -5 255 255 255 
    -16 -1 -8 255 255 255 
    -15 -3 -7 255 255 255 
    0 1 -10 255 255 255 
    -16 -1 -8 255 255 255 
    -15 -3 -7 255 255 255 
    1 -1 -9 255 255 255 
    0 1 -10 255 255 255 
    -15 -3 -7 255 255 255 
    -33 -1 -3 255 255 255 
    -23 0 -5 255 255 255 
    -15 -3 -7 255 255 255 
    -8 14 -3 0 126 255 
    4 23 -1 0 126 255 
    3 13 -1 0 126 255 
    0 1 -10 255 255 255 
    8 -2 -6 255 255 255 
    15 -3 -3 255 255 255 
    33 -22 0 0 126 255 
    32 -23 -13 0 126 255 
    32 -14 -2 0 126 255 
    33 -22 0 0 126 255 
    32 -14 -2 0 126 255 
    30 -11 -1 0 126 255 
    33 -22 0 0 126 255 
    24 -8 -2 0 126 255 
    30 -11 -1 0 126 255 
    24 -8 -2 13 0 255 
    30 -11 -1 13 0 255 
    25 3 -1 13 0 255 
    24 -8 -2 0 126 255 
    15 -3 -3 0 126 255 
    25 3 -1 0 126 255 
    15 -3 -3 13 0 255 
    25 3 -1 13 0 255 
    14 10 0 13 0 255 
    0 1 -10 0 123 252 
    15 -3 -3 0 123 252 
    14 10 0 0 123 252 
    -8 14 -3 0 126 255 
    3 13 -1 0 126 255 
    14 10 0 0 126 255 
    -16 14 -3 0 126 255 
    -8 14 -3 0 126 255 
    14 10 0 0 126 255 
    0 1 -10 13 0 255 
    -16 14 -3 13 0 255 
    14 10 0 13 0 255 
    1 -1 9 255 255 255 
    0 1 10 255 255 255 
    8 -2 6 255 255 255 
    -18 4 6 126 0 161 
    -17 6 6 126 0 161 
    -19 6 5 126 0 161 
    -23 0 5 0 108 237 
    -16 -1 8 0 108 237 
    -23 6 4 0 108 237 
    -23 0 5 0 237 206 
    -33 -1 3 0 237 206 
    -23 6 4 0 237 206 
    -16 -1 8 0 252 221 
    -23 6 4 0 252 221 
    -16 14 3 0 252 221 
    -16 14 3 0 123 252 
    -16 -1 8 0 123 252 
    0 1 10 0 123 252 
    6 5 5 0 117 246 
    -4 6 8 0 117 246 
    -4 0 19 0 117 246 
    -4 6 8 0 246 215 
    -7 4 8 0 246 215 
    -4 0 19 0 246 215 
    6 5 5 13 0 255 
    -4 0 19 13 0 255 
    -1 -5 24 13 0 255 
    -33 -1 3 0 237 206 
    -23 6 4 0 237 206 
    -32 2 3 0 237 206 
    -23 0 5 255 255 255 
    -16 -1 8 255 255 255 
    -15 -3 7 255 255 255 
    0 1 10 255 255 255 
    -16 -1 8 255 255 255 
    -15 -3 7 255 255 255 
    1 -1 9 255 255 255 
    0 1 10 255 255 255 
    -15 -3 7 255 255 255 
    -33 -1 3 255 255 255 
    -23 0 5 255 255 255 
    -15 -3 7 255 255 255 
    -8 14 3 0 126 255 
    4 23 1 0 126 255 
    3 13 1 0 126 255 
    0 1 10 255 255 255 
    8 -2 6 255 255 255 
    15 -3 3 255 255 255 
    33 -22 0 0 126 255 
    32 -23 13 0 126 255 
    32 -14 2 0 126 255 
    33 -22 0 0 126 255 
    32 -14 2 0 126 255 
    30 -11 1 0 126 255 
    33 -22 0 0 126 255 
    24 -8 2 0 126 255 
    30 -11 1 0 126 255 
    24 -8 2 13 0 255 
    30 -11 1 13 0 255 
    25 3 1 13 0 255 
    24 -8 2 0 126 255 
    15 -3 3 0 126 255 
    25 3 1 0 126 255 
    15 -3 3 13 0 255 
    25 3 1 13 0 255 
    14 10 0 13 0 255 
    0 1 10 0 123 252 
    15 -3 3 0 123 252 
    14 10 0 0 123 252 
    -8 14 3 0 126 255 
    3 13 1 0 126 255 
    14 10 0 0 126 255 
    -16 14 3 0 126 255 
    -8 14 3 0 126 255 
    14 10 0 0 126 255 
    0 1 10 13 0 255 
    -16 14 3 13 0 255 
    14 10 0 13 0 255 
    33 -22 0 0 126 255 
    30 -11 -1 0 126 255 
    30 -11 1 0 126 255 
    30 -11 -1 13 0 255 
    30 -11 1 13 0 255 
    25 3 1 13 0 255 
    25 3 -1 13 0 255 
    25 3 1 13 0 255 
    14 10 0 13 0 255 
    3 13 -1 0 126 255 
    3 13 1 0 126 255 
    14 10 0 0 126 255 
    4 23 -1 0 126 255 
    3 13 -1 0 126 255 
    4 23 1 0 126 255 
    -8 14 -3 0 126 255 
    -8 14 3 0 126 255 
    4 23 1 0 126 255 
    -16 14 -3 0 126 255 
    -16 14 3 0 126 255 
    -8 14 3 0 126 255 
    -23 6 -4 0 252 221 
    -23 6 4 0 252 221 
    -16 14 3 0 252 221 
    -23 6 -4 0 237 206 
    -23 6 4 0 237 206 
    -32 2 3 0 237 206 
    -32 2 -3 0 237 206 
    -33 -1 3 0 237 206 
    -32 2 3 0 237 206 
    -33 -1 -3 255 255 255 
    -15 -3 -7 255 255 255 
    -15 -3 7 255 255 255 
    1 -1 -9 255 255 255 
    -15 -3 -7 255 255 255 
    -15 -3 7 255 255 255 
    1 -1 -9 255 255 255 
    8 -2 -6 255 255 255 
    8 -2 6 255 255 255 
    8 -2 -6 255 255 255 
    15 -3 -3 255 255 255 
    8 -2 6 255 255 255 
    24 -8 -2 0 126 255 
    15 -3 -3 0 126 255 
    24 -8 2 0 126 255 
    33 -22 0 0 126 255 
    24 -8 -2 0 126 255 
    24 -8 2 0 126 255 
    15 -3 -3 0 126 255 
    24 -8 2 0 126 255 
    15 -3 3 0 126 255 
    15 -3 -3 255 255 255 
    8 -2 6 255 255 255 
    15 -3 3 255 255 255 
    1 -1 -9 255 255 255 
    1 -1 9 255 255 255 
    8 -2 6 255 255 255 
    1 -1 -9 255 255 255 
    1 -1 9 255 255 255 
    -15 -3 7 255 255 255 
    -33 -1 -3 255 255 255 
    -33 -1 3 255 255 255 
    -15 -3 7 255 255 255 
    -33 -1 -3 0 237 206 
    -32 2 -3 0 237 206 
    -33 -1 3 0 237 206 
    -23 6 -4 0 237 206 
    -32 2 -3 0 237 206 
    -32 2 3 0 237 206 
    -23 6 -4 0 252 221 
    -16 14 -3 0 252 221 
    -16 14 3 0 252 221 
    -16 14 -3 0 126 255 
    -8 14 -3 0 126 255 
    -8 14 3 0 126 255 
    -8 14 -3 0 126 255 
    4 23 -1 0 126 255 
    4 23 1 0 126 255 
    3 13 -1 0 126 255 
    4 23 1 0 126 255 
    3 13 1 0 126 255 
    3 13 -1 0 126 255 
    14 10 0 0 126 255 
    14 10 0 0 126 255 
    25 3 -1 13 0 255 
    14 10 0 13 0 255 
    14 10 0 13 0 255 
    30 -11 -1 13 0 255 
    25 3 -1 13 0 255 
    25 3 1 13 0 255 
    33 -22 0 0 126 255 
    30 -11 -1 0 126 255 
    30 -11 1 0 126 255 
    3 0 1 2 
    3 3 4 5 
    3 6 7 8 
    3 9 10 11 
    3 12 13 14 
    3 15 16 17 
    3 18 19 20 
    3 21 22 23 
    3 24 25 26 
    3 27 28 29 
    3 30 31 32 
    3 33 34 35 
    3 36 37 38 
    3 39 40 41 
    3 42 43 44 
    3 45 46 47 
    3 48 49 50 
    3 51 52 53 
    3 54 55 56 
    3 57 58 59 
    3 60 61 62 
    3 63 64 65 
    3 66 67 68 
    3 69 70 71 
    3 72 73 74 
    3 75 76 77 
    3 78 79 80 
    3 81 82 83 
    3 84 85 86 
    3 87 88 89 
    3 90 91 92 
    3 93 94 95 
    3 96 97 98 
    3 99 100 101 
    3 102 103 104 
    3 105 106 107 
    3 108 109 110 
    3 111 112 113 
    3 114 115 116 
    3 117 118 119 
    3 120 121 122 
    3 123 124 125 
    3 126 127 128 
    3 129 130 131 
    3 132 133 134 
    3 135 136 137 
    3 138 139 140 
    3 141 142 143 
    3 144 145 146 
    3 147 148 149 
    3 150 151 152 
    3 153 154 155 
    3 158 156 157 
    3 161 160 159 
    3 164 163 162 
    3 167 166 165 
    3 169 168 170 
    3 173 172 171 
    3 176 175 174 
    3 179 178 177 
    3 182 181 180 
    3 184 185 183 
    3 186 187 188 
    3 189 190 191 
    3 192 193 194 
    3 196 195 197 
    3 199 198 200 
    3 202 201 203 
    3 205 206 204 
    3 208 209 207 
    3 212 211 210 
    3 215 214 213 
    3 218 217 216 
    3 220 219 221 
    3 222 223 224 
    3 225 226 227 
    3 228 229 230 
    3 231 232 233 
    3 235 236 234 
    3 237 238 239 
    3 240 241 242 
    3 243 244 245 
    3 248 247 246`;

    // dolphin on start by default
    importPLY(dolphinPly);
});