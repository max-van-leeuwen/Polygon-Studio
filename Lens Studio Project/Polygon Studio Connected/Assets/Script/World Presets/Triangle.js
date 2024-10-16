// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// create global store
if(!global.WorldPresets) global.WorldPresets = {};

// data
WorldPresets.Triangle = {
    l:[ // points
        {p: new vec3(0, 17.3, 0)}, // simple triangle positions
        {p: new vec3(-15, -17.3/2, 0)},
        {p: new vec3(15, -17.3/2, 0)}
    ],
    f:{ // faces
        0:{ // faceIDs will be overwritten later (just like locationIDs are created later)
            v:[0, 1, 2]
        }
    }
};