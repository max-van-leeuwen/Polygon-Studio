// Max & Liisi
//  maxandliisi.com
//  by Max van Leeuwen - maxvanleeuwen.com

// create global store
if(!global.WorldPresets) global.WorldPresets = {};

// data
WorldPresets.Box = {
    l:[
        {p: new vec3(-10, 10, -10)},   // top-front-left
        {p: new vec3(10, 10, -10)},    // top-front-right
        {p: new vec3(10, 10, 10)},     // top-back-right
        {p: new vec3(-10, 10, 10)},    // top-back-left
        {p: new vec3(-10, -10, -10)},  // bottom-front-left
        {p: new vec3(10, -10, -10)},   // bottom-front-right
        {p: new vec3(10, -10, 10)},    // bottom-back-right
        {p: new vec3(-10, -10, 10)}    // bottom-back-left
    ],
    f:{
        0: { v: [0, 1, 2] }, // top face - triangle 1
        1: { v: [0, 2, 3] }, // top face - triangle 2
        2: { v: [4, 5, 6] }, // bottom face - triangle 1
        3: { v: [4, 6, 7] }, // bottom face - triangle 2
        4: { v: [0, 3, 7] }, // left face - triangle 1
        5: { v: [0, 7, 4] }, // left face - triangle 2
        6: { v: [1, 2, 6] }, // right face - triangle 1
        7: { v: [1, 6, 5] }, // right face - triangle 2
        8: { v: [0, 1, 5] }, // front face - triangle 1
        9: { v: [0, 5, 4] }, // front face - triangle 2
        10:{ v: [3, 2, 6] }, // back face - triangle 1
        11:{ v: [3, 6, 7] }  // back face - triangle 2
    }
};