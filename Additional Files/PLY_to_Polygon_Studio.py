# Max & Liisi
#   maxandliisi.com
#   by Max van Leeuwen - maxvanleeuwen.com


# This Python script converts all ply-files in its folder to js-files! These files can then be imported in the Polygon Studio project, to be used as meshes.
#
# How to use:
# 	Simply run this script in a terminal by calling 'python3 PLY_to_Polygon_Studio.py'.
#   Have the model.ply file ready in the same folder, and a model.js will appear next to it!
#
#   Tips:
# 	- The filename of the 3D file (e.g. 'file.ply', but without '.ply') is used as the 'WorldPresets' variable name in Lens Studio! Make sure there are no spaces or weird characters in it.
#	- The mesh you're converting should consist of triangles only, vertex colors will be interpreted as face colors (if there are any).
#	- Any duplicate positions in the PLY file will automatically be fused and relinked! Keep in mind that all positions in Polygon Studio are rounded to 1 unit (1cm).
#   - The mesh you're converting should not have vertices that are closer to each other than 1 unit. If you're not certain if that is the case, it's best to just scale the whole model up a bunch and then scale it down in Lens Studio.


# Polygon Studio has a limited color palette, its colors can be set in the Radial Manager script Inspector in Lens Studio.
# This Python script automatically finds the color on the radial that's closest to the mesh color, and stores the mesh colors as indices on the radial instead of RGB values.
# If you changed the colors on the radial in Lens Studio, run the printColorIndices() function in RadialManager.js (in Lens Studio) and paste the result down here:

color_lookup = [
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

# ******





# imports
import os
from os import listdir
from os.path import isfile, join
import math

def getPlyFiles():
    thisDir = os.path.dirname(os.path.realpath(__file__))
    items = listdir(thisDir)
    plyPaths = []
    for item in items:
        if(isfile(join(thisDir, item)) and item.endswith('.ply')):
            plyPaths.append(join(thisDir, item))
    return plyPaths

def plyToJS(plyPath):
    # read file to lines
    f = open(plyPath, "r")
    lines = []
    for line in f.readlines():
        lines.append(line)
    f.close()

    # get data
    vertexCount = -1
    endHeaderLine = -1
    i = 0
    for line in lines:
        if(line.startswith('element vertex ')):
            vertexCount = int( line[len('element vertex '):] )
        if(line.startswith('end_header')):
            endHeaderLine = i
        i += 1

    # get positions, color
    vertices = []
    i = 0
    for line in lines:
        if(i > endHeaderLine and i <= endHeaderLine + vertexCount):
            data = line.split()
            if len(data) > 5:
                colors = [float(data[3]), float(data[4]), float(data[5])]
            else:
                colors = []
            vertices.append([[round(float(data[0])), round(float(data[1])), round(float(data[2]))], colors])
        i += 1

    # Merge duplicate vertices
    uniqueVertices = []
    vertexMap = {}
    for index, vertex in enumerate(vertices):
        pos = tuple(vertex[0])
        if pos not in vertexMap:
            vertexMap[pos] = len(uniqueVertices)
            uniqueVertices.append(vertex)
        else:
            vertexMap[pos] = vertexMap[pos]

    # write initial lines (same for all models)
    fileName = os.path.basename(plyPath)[:-4] # file name becomes mesh name
    out = ["// Max & Liisi\n", "//  maxandliisi.com\n", "//  by Max van Leeuwen - maxvanleeuwen.com\n\n", "// automatically generated using the 'PLY to Polygon Studio.py' script!\n\n", "// create global store\n", "if(!global.WorldPresets) global.WorldPresets = {};\n", "\n", "// data\n", "WorldPresets." + fileName + " = {\n", "    l:[ // points\n"]
    
    # go through each unique location on the mesh
    for i, vertex in enumerate(uniqueVertices):
        location = "        {p: new vec3(" + str(vertex[0][0]) + ", " + str(vertex[0][1]) + ", " + str(vertex[0][2]) + ")}"
        out.append(location)
        if i < len(uniqueVertices) - 1:
            out.append(",\n")
        else:
            out.append("\n")
    out.append("    ],\n")
    out.append("    f:{ // faces\n")
    
    # go through each face
    i = 0
    startLineIndex = endHeaderLine + vertexCount
    for line in lines:
        data = line.split()
        if(i > startLineIndex): # faces
            thisIndex = i - startLineIndex - 1
            v1 = vertexMap[tuple(vertices[int(data[1])][0])]
            v2 = vertexMap[tuple(vertices[int(data[2])][0])]
            v3 = vertexMap[tuple(vertices[int(data[3])][0])]
            if v1 != v2 and v2 != v3 and v3 != v1: # only add face if no double vertices
                out.append("        " + str(thisIndex) + ":{v:[" + str(v1) + ", " + str(v2) + ", " + str(v3) + "]")
                colorIndex = getColorIndex(vertices[int(data[1])][1])
                if(colorIndex is not None): out.append(", c:" + str(colorIndex)) # only append color data if it was part of the PLY file
                out.append("},\n")
        i += 1
    out[len(out)-1] = out[len(out)-1][:-2]
    out.append('\n    }\n')
    out.append('};')
    return out

# convert a color from PLY to the closest index in color_lookup
def getColorIndex(color):
    if(color == []): return
    def distance(c1, c2):
        return math.sqrt((c1[0] - c2[0])**2 + (c1[1] - c2[1])**2 + (c1[2] - c2[2])**2)
    return min(range(len(color_lookup)), key=lambda i: distance(color_lookup[i], color))

def writeJS(plyPath):
    lines = plyToJS(plyPath)
    newPath = plyPath[:-4] + '.js'
    if(os.path.exists(newPath)): # overwrites existing files
        os.remove(newPath)
    js = open(newPath, "w")
    js.writelines(lines)
    js.close()

    print('- ' + plyPath + " -> " + os.path.basename(newPath))
    print("file converted!")

def start():
    print("")
    print("--- conversion started")
    for plyPath in getPlyFiles():
        writeJS(plyPath)
        
start()