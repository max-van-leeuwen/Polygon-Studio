# Polygon-Studio

<img src="https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Polygon%20Studio.webp" alt="Polygon Studio" width="300">
<br>

<br>
<b>Polygon Studio is a (multiplayer) low-poly 3D modeling tool for the Spectacles 😎</b>
<br>
Draw individual polygons with your hands in Augmented Reality, and build together with friends.
<br> You can even export your creations as 3D files!
<br>
<br>
The full project is open source, feel free to use parts of this project for your own work!
<br>

https://maxandliisi.com/polygon-studio

<br>
The contents of this repo are:
<br>

- Project files
  - The full Lens Studio 5 project files including the Connected Lens setup and Spectacles Interaction Kit
- Web Export tool
  - The web tool ([bottom of this page](https://maxandliisi.com/polygon-studio)) consists of a Three.JS mesh preview feature, and a PLY file download
  - This tool is necessary, because Polygon Studio exports meshes through a sequence of QR codes! An experimental feature.


<br><br>
![Polygon Studio Preview](https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Polygon%20Studio%20Preview.gif)


<br><br>
# Technical Details (for nerds 🤓)

<br>
There are different data types at work in Polygon Studio, that make it possible to easily access and optimally export through QR codes.

<br><br>
To get started with modifying the Lens Studio project, begin by unchecking 'Delivery' in Sequence’s Inspector!
This will enable debugging options.
Now you can start the lens at different stages

<div style="display: flex; gap: 10px;">
  <img src="https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Sequence%20Delivery.png" alt="Sequence Delivery" width="200"/>
  <img src="https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Sequence%20Debugging.png" alt="Sequence Debug" width="200"/>
  <img src="https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Sequence%20Options.png" alt="Sequence Options" width="200"/>
</div>


<br><br>
## Data Types
There are 3 main data types in this project, and they can all be converted into each other:
- Minified (String)
- Live (JavaScript object)
- PLY (3D model geometry file)

<br>
Minified and Live are used internally in this project.
<br>*.PLY is a 3D file type for export.
<br><br>

Convert Minified and Live anywhere using `Storage.minifiedToLive(data)` and `Storage.liveToMinified(data)`

<br>
See below for an explanation of each data type.

<br><br>
## Minified

Geometry is stored persistently (on-device/local storage) as an optimized string in this format.
<br><br>
Here’s an example of a valid minified 3D mesh stored in Persistent Storage as a string:


<sub>12 5 -11 -16 37 -13 -10 3 -8 16 29 -17 39 18 -13 33 35 -16 12 51 -17 -43 26 13 -36 32 10 -36 25 14 -44 33 6 -38 35 3 -50 27 8 -41 19 14 -48 19 11 -44 12 11 -31 19 12 -36 11 10 -29 12 7 -29 26 10 -25 19 6 -25 27 2 -31 33 3 -34 35 -5 -27 30 -5 -33 30 -12 -24 21 -4 -26 12 -1 -33 7 2 -43 7 4 -39 7 -4 -50 12 4 -53 21 3 -53 15 -3 -51 30 0 -44 35 -3 -48 30 -8 -41 32 -11 -29 23 -12 -33 9 -7 -47 9 -4 -52 23 -7 -37 23 -15 -46 23 -13 -42 17 -15 -48 16 -11 -41 10 -11 -34 16 -14 27 -19 12 28 -17 12 19 -21 11 45 -15 4 43 -13 3 49 5 -5 49 -19 3 43 -19 7 49 -13 0 59 -21 -1 41 -6 -1 21 -14 7 31 -12 8 34 -15 20 34 -14 8 32 -19 26 58 -18 -2 42 -21 7 34 -6 0 21 2 -1 23 -7 1 12 -22 9 -5 -42 15 -1 -39 28 -4 -33 15 -3 -31 13 3 -28 12 2 -17 8 12 -11 3 23 -24 -5 24 -22 -7 17 -24 -1 42 -18 -8 41 -16 -8 43 -16 -7 47 -22 -7 40 -23 -8 47 -16 -7 58 -22 -7 40 -8 -7 19 -17 -2 28 -17 -7 26 -25 -16 31 -18 -7 22 -31 -19 57 -19 -7 39 -25 -6 32 -8 -5 21 2 -3 22 -8 -1 11 -24 4 -7 -46 3 -5 -34 11 -3 -31 11 3 -29 8 1 -18 6  0 1 2 8 0 1 3 8 0 3 4 8 5 3 4 8 5 6 3 5 6 1 3 3 7 8 9 3 10 11 8 3 12 10 7 3 7 10 8 3 13 7 9 3 14 12 7 3 15 14 13 3 13 14 7 3 16 13 9 3 17 15 13 3 18 17 16 3 16 17 13 3 19 16 9 3 20 18 16 3 21 20 19 3 19 20 16 3 8 19 9 3 22 21 19 3 11 22 8 3 8 22 19 3 23 22 11 3 24 21 22 3 25 24 23 3 23 24 22 3 26 20 21 3 27 18 20 3 27 26 2 3 26 27 20 3 28 17 18 3 29 15 17 3 30 29 28 3 28 29 17 3 31 14 15 3 32 12 14 3 33 32 31 3 31 32 14 3 34 10 12 3 35 11 10 3 36 35 34 3 34 35 10 3 35 23 11 3 37 25 23 3 36 37 35 3 35 37 23 3 24 26 21 3 38 26 2 3 25 38 24 3 24 38 26 3 27 28 18 3 39 30 28 3 39 27 2 3 27 39 28 3 29 31 15 3 40 33 31 3 30 40 29 3 29 40 31 3 32 34 12 3 41 36 34 3 33 41 32 3 32 41 34 3 42 43 44 3 37 36 43 3 25 37 42 3 42 37 43 3 43 45 44 3 41 33 45 3 36 41 43 3 43 41 45 3 45 46 44 3 40 30 46 3 33 40 45 3 45 40 46 3 46 47 44 3 39 47 2 3 30 39 46 3 46 39 47 3 47 42 44 3 38 25 42 3 38 47 2 3 47 38 42 3 48 49 50 14 51 52 53 7 54 55 56 5 54 57 56 4 55 56 58 4 58 55 49 5 59 60 61 5 60 62 61 4 59 61 63 6 57 56 64 4 54 55 65 14 49 55 65 14 48 49 65 14 57 54 65 14 66 67 68 5 49 50 69 14 70 71 72 5 70 72 73 5 70 74 73 5 74 73 75 6 74 69 75 5 69 75 76 6 49 69 76 5 66 68 76 5 58 66 76 5 49 58 76 6 77 78 79 14 80 81 82 7 83 84 85 5 83 86 85 4 84 85 87 4 87 84 78 5 88 89 90 5 89 91 90 4 88 90 92 6 86 85 93 4 83 84 94 14 78 84 94 14 77 78 94 14 86 83 94 14 95 96 97 5 78 79 98 14 70 99 100 5 70 100 101 5 70 102 101 5 102 101 103 6 102 98 103 5 98 103 76 6 78 98 76 5 95 97 76 5 87 95 76 5 78 87 76 6 101 70 73 5 103 101 73 6 76 103 75 6 76 97 68 5 68 67 96 5 96 95 66 5 95 87 58 5 87 85 56 4 93 85 56 4 86 93 64 4 57 65 94 14 48 65 94 14 48 50 79 14 69 50 79 14 69 74 102 5 74 70 102 5 102 98 69 5 79 98 69 14 79 77 48 14 94 77 48 14 94 86 57 14 64 57 86 4 56 64 93 4 56 58 87 4 58 66 95 5 66 67 96 5 96 97 68 5 73 75 103 6 96 95 4 3 96 4 2 3</sub>


<br><br>
There are two int arrays here, separated by a double space ("  ").
<br><small>(In future versions, this will be stored to Persistent Storage as 2 int arrays instead of 1 string.)</small>

The 1st array is per-position, containing xyz data interleaved.
<br>For example: `vec3(0, 1, 2)` becomes <i>“0 1 2”</i>.
<br><br>

The 2nd array is per-face (triangles), containing point indices and colors (palette index for color), interleaved.
<br>For example: the string <i>“0 1 2 4 1 2 0 5”</i> contains two triangles:
- Triangle 1: P indices (0, 1, 2), color 4
- Triangle 2: P indices (1, 2, 0), color 5
<br><br>

In the case of a multiplayer session, each face also has its faceID embedded.
<br>In the above example, for faceIDs 100 and 101, this would look like: <i>“0 1 2 4 100 1 2 0 5 101”</i>

<br>

![Reading Persistent Storage](https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Printing%20Persistent%20Storage.gif)
<br><i>Each saving slot has its own minified string array.</i>

<br><br>
## Mesh Exporting (QR Codes)
Mesh exporting is done by recording a video of a sequence of RGB QR codes (1 QR code per color channel (R, G, B) = 3 codes per frame).
<br>These videos are converted to a 3D model (PLY) using the webtool.

<br><br>
![Web Export tool](https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/QR%20to%20Dolphin%20Polygon%20Studio.gif)

<br>
Why PLY and not .OBJ?
<br>Both are human-readable, but not all softwares support color attributes for .OBJ files.
<br>PLY files support custom attributes of any kind (which could be fun for future updates), and this file type can be imported in the big 3D softwares as well - e.g. Blender, Cinema4D, Houdini, and Maya.

<br><br>

## Mesh Importing (.PLY -> Live)

Mesh importing is also possible!
<br>Useful, for example, when you want to add your own models to the Radial Menu's "add mesh" list.

Use the provided python script ([Additional Files/PLY_to_Polygon_Studio.py](https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Additional%20Files/PLY_to_Polygon_Studio.py)) to convert all PLY 3D files in its folder into JS files (live data).
You can test this with the included Dolphin.PLY model.

<br>

<img src="https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Additional%20Files.png" alt="Additional Files" width="300">

<br><i>The Python script, along with a Dolphin.PLY that it can convert into Dolphin.js.</i>

<br>

The 3D model’s colors are automatically remapped to the closest Radial Menu’s color palette index!
<br>Add the resulting JS files under the 'World Presets' SceneObject, and you can access them from anywhere using `global.WorldPresets.\<filename\>`
<br>
<br>

<img src="https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Triangle.png" alt="Triangle" width="100">
<br>⬇️
<br>
<br>

<img src="https://github.com/max-van-leeuwen/Polygon-Studio/blob/main/Media/Triangle%20JS.png" alt="Triangle JS" width="300">
