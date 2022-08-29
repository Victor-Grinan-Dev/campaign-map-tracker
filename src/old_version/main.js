//alert("yo!");
//dummy DATABASE
//top values x 13 tiles
const topValues = [0, 175, 350, 525, 700, 875, 1050, 1225, 1400, 1575, 1750, 1925, 2100]

//left values per odd rows x 13 tiles
const leftValuesOdd = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400]

//left values per even rows x 12 tiles
const leftValuesEven = [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300]

const tilesPosition = {
    a01: [topValues[0], leftValuesOdd[0]],
    b01: [topValues[0], leftValuesOdd[1]],
    c01: [topValues[0], leftValuesOdd[2]],
    d01: [topValues[0], leftValuesOdd[3]],
    e01: [topValues[0], leftValuesOdd[4]],
    f01: [topValues[0], leftValuesOdd[5]],
    g01: [topValues[0], leftValuesOdd[6]],
    h01: [topValues[0], leftValuesOdd[7]],
    i01: [topValues[0], leftValuesOdd[8]], 
    j01: [topValues[0], leftValuesOdd[9]], 
    k01: [topValues[0], leftValuesOdd[10]], 
    l01: [topValues[0], leftValuesOdd[11]], 
    m01: [topValues[0], leftValuesOdd[12]],

    b02: [topValues[1], leftValuesEven[0]], 
    c02: [topValues[1], leftValuesEven[1]], 
    d02: [topValues[1], leftValuesEven[2]], 
    e02: [topValues[1], leftValuesEven[3]], 
    f02: [topValues[1], leftValuesEven[4]], 
    g02: [topValues[1], leftValuesEven[5]], 
    h02: [topValues[1], leftValuesEven[6]], 
    i02: [topValues[1], leftValuesEven[7]], 
    j02: [topValues[1], leftValuesEven[8]], 
    k02: [topValues[1], leftValuesEven[9]], 
    l02: [topValues[1], leftValuesEven[10]], 
    m02: [topValues[1], leftValuesEven[11]], 

    b03: [topValues[2], leftValuesOdd[0]], 
    c03: [topValues[2], leftValuesOdd[1]], 
    d03: [topValues[2], leftValuesOdd[2]], 
    e03: [topValues[2], leftValuesOdd[3]], 
    f03: [topValues[2], leftValuesOdd[4]], 
    g03: [topValues[2], leftValuesOdd[5]], 
    h03: [topValues[2], leftValuesOdd[6]], 
    i03: [topValues[2], leftValuesOdd[7]], 
    j03: [topValues[2], leftValuesOdd[8]], 
    k03: [topValues[2], leftValuesOdd[9]], 
    l03: [topValues[2], leftValuesOdd[10]], 
    m03: [topValues[2], leftValuesOdd[11]], 
    n03: [topValues[2], leftValuesOdd[12]],

    c04: [topValues[3], leftValuesEven[0]], 
    d04: [topValues[3], leftValuesEven[1]], 
    e04: [topValues[3], leftValuesEven[2]], 
    f04: [topValues[3], leftValuesEven[3]], 
    g04: [topValues[3], leftValuesEven[4]], 
    h04: [topValues[3], leftValuesEven[5]], 
    i04: [topValues[3], leftValuesEven[6]], 
    j04: [topValues[3], leftValuesEven[7]], 
    k04: [topValues[3], leftValuesEven[8]], 
    l04: [topValues[3], leftValuesEven[9]], 
    m04: [topValues[3], leftValuesEven[10]], 
    n04: [topValues[3], leftValuesEven[11]],

    c05: [topValues[4], leftValuesOdd[0]], 
    d05: [topValues[4], leftValuesOdd[1]], 
    e05: [topValues[4], leftValuesOdd[2]], 
    f05: [topValues[4], leftValuesOdd[3]], 
    g05: [topValues[4], leftValuesOdd[4]], 
    h05: [topValues[4], leftValuesOdd[5]], 
    i05: [topValues[4], leftValuesOdd[6]], 
    j05: [topValues[4], leftValuesOdd[7]], 
    k05: [topValues[4], leftValuesOdd[8]], 
    l05: [topValues[4], leftValuesOdd[9]], 
    m05: [topValues[4], leftValuesOdd[10]], 
    n05: [topValues[4], leftValuesOdd[11]], 
    o05: [topValues[4], leftValuesOdd[12]],

    d06: [topValues[5], leftValuesEven[0]], 
    e06: [topValues[5], leftValuesEven[1]], 
    f06: [topValues[5], leftValuesEven[2]], 
    g06: [topValues[5], leftValuesEven[3]], 
    h06: [topValues[5], leftValuesEven[4]], 
    i06: [topValues[5], leftValuesEven[5]], 
    j06: [topValues[5], leftValuesEven[6]], 
    k06: [topValues[5], leftValuesEven[7]], 
    l06: [topValues[5], leftValuesEven[8]], 
    m06: [topValues[5], leftValuesEven[9]], 
    n06: [topValues[5], leftValuesEven[10]], 
    o06: [topValues[5], leftValuesEven[11]],

    d07: [topValues[6], leftValuesOdd[0]], 
    e07: [topValues[6], leftValuesOdd[1]], 
    f07: [topValues[6], leftValuesOdd[2]], 
    g07: [topValues[6], leftValuesOdd[3]], 
    h07: [topValues[6], leftValuesOdd[4]], 
    i07: [topValues[6], leftValuesOdd[5]], 
    j07: [topValues[6], leftValuesOdd[6]], 
    k07: [topValues[6], leftValuesOdd[7]], 
    l07: [topValues[6], leftValuesOdd[8]], 
    m07: [topValues[6], leftValuesOdd[9]], 
    n07: [topValues[6], leftValuesOdd[10]], 
    o07: [topValues[6], leftValuesOdd[11]], 
    p07: [topValues[6], leftValuesOdd[12]], 

    e08: [topValues[7], leftValuesEven[0]], 
    f08: [topValues[7], leftValuesEven[1]], 
    g08: [topValues[7], leftValuesEven[2]], 
    h08: [topValues[7], leftValuesEven[3]], 
    i08: [topValues[7], leftValuesEven[4]], 
    j08: [topValues[7], leftValuesEven[5]], 
    k08: [topValues[7], leftValuesEven[6]], 
    l08: [topValues[7], leftValuesEven[7]], 
    m08: [topValues[7], leftValuesEven[8]], 
    n08: [topValues[7], leftValuesEven[9]], 
    o08: [topValues[7], leftValuesEven[10]], 
    p08: [topValues[7], leftValuesEven[11]],

    e09: [topValues[8], leftValuesOdd[0]], 
    f09: [topValues[8], leftValuesOdd[1]], 
    g09: [topValues[8], leftValuesOdd[2]], 
    h09: [topValues[8], leftValuesOdd[3]], 
    i09: [topValues[8], leftValuesOdd[4]], 
    j09: [topValues[8], leftValuesOdd[5]], 
    k09: [topValues[8], leftValuesOdd[6]], 
    l09: [topValues[8], leftValuesOdd[7]], 
    m09: [topValues[8], leftValuesOdd[8]], 
    n09: [topValues[8], leftValuesOdd[9]], 
    o09: [topValues[8], leftValuesOdd[10]], 
    p09: [topValues[8], leftValuesOdd[11]], 
    q09: [topValues[8], leftValuesOdd[12]],

    f10: [topValues[9], leftValuesEven[0]], 
    g10: [topValues[9], leftValuesEven[1]], 
    h10: [topValues[9], leftValuesEven[2]], 
    i10: [topValues[9], leftValuesEven[3]], 
    j10: [topValues[9], leftValuesEven[4]], 
    k10: [topValues[9], leftValuesEven[5]], 
    l10: [topValues[9], leftValuesEven[6]], 
    m10: [topValues[9], leftValuesEven[7]], 
    n10: [topValues[9], leftValuesEven[8]], 
    o10: [topValues[9], leftValuesEven[9]], 
    p10: [topValues[9], leftValuesEven[10]], 
    q10: [topValues[9], leftValuesEven[11]],

    f11: [topValues[10], leftValuesOdd[0]], 
    g11: [topValues[10], leftValuesOdd[1]], 
    h11: [topValues[10], leftValuesOdd[2]], 
    i11: [topValues[10], leftValuesOdd[3]], 
    j11: [topValues[10], leftValuesOdd[4]], 
    k11: [topValues[10], leftValuesOdd[5]], 
    l11: [topValues[10], leftValuesOdd[6]], 
    m11: [topValues[10], leftValuesOdd[7]], 
    n11: [topValues[10], leftValuesOdd[8]], 
    o11: [topValues[10], leftValuesOdd[9]], 
    p11: [topValues[10], leftValuesOdd[10]], 
    q11: [topValues[10], leftValuesOdd[11]], 
    r11: [topValues[10], leftValuesOdd[12]],

    g12: [topValues[11], leftValuesEven[0]], 
    h12: [topValues[11], leftValuesEven[1]], 
    i12: [topValues[11], leftValuesEven[2]], 
    j12: [topValues[11], leftValuesEven[3]], 
    k12: [topValues[11], leftValuesEven[4]], 
    l12: [topValues[11], leftValuesEven[5]], 
    m12: [topValues[11], leftValuesEven[6]], 
    n12: [topValues[11], leftValuesEven[7]], 
    o12: [topValues[11], leftValuesEven[8]], 
    p12: [topValues[11], leftValuesEven[9]], 
    q12: [topValues[11], leftValuesEven[10]], 
    r12: [topValues[11], leftValuesEven[11]],

    g13: [topValues[12], leftValuesOdd[0]], 
    h13: [topValues[12], leftValuesOdd[1]], 
    i13: [topValues[12], leftValuesOdd[2]], 
    j13: [topValues[12], leftValuesOdd[3]], 
    k13: [topValues[12], leftValuesOdd[4]], 
    l13: [topValues[12], leftValuesOdd[5]], 
    m13: [topValues[12], leftValuesOdd[6]], 
    n13: [topValues[12], leftValuesOdd[7]], 
    o13: [topValues[12], leftValuesOdd[8]], 
    p13: [topValues[12], leftValuesOdd[9]], 
    q13: [topValues[12], leftValuesOdd[10]], 
    r13: [topValues[12], leftValuesOdd[11]], 
    s13: [topValues[12], leftValuesOdd[12]], 
}

//13x13
const tilesByRows = {
    1:["a01", "b01", "c01", "d01", "e01", "f01", "g01", "h01", "i01", "j01", "k01", "l01", "m01",],
    2:["b02", "c02", "d02", "e02", "f02", "g02", "h02", "i02", "j02", "k02", "l02", "m02",],
    3:["b03", "c03", "d03", "e03", "f03", "g03", "h03", "i03", "j03", "k03", "l03", "m03", "n03",],
    4:["c04", "d04", "e04", "f04", "g04", "h04", "i04", "j04", "k04", "l04", "m04", "n04",],
    5:["c05", "d05", "e05", "f05", "g05", "h05", "i05", "j05", "k05", "l05", "m05", "n05", "o05",],
    6:["d06", "e06", "f06", "g06", "h06", "i06", "j06", "k06", "l06", "m06", "n06", "o06",],
    7:["d07", "e07", "f07", "g07", "h07", "i07", "j07", "k07", "l07", "m07", "n07", "o07", "p07",],
    8:["e08", "f08", "g08", "h08", "i08", "j08", "k08", "l08", "m08", "n08", "o08", "p08"],
    9:["e09", "f09", "g09", "h09", "i09", "j09", "k09", "l09", "m09", "n09", "o09", "p09", "q09",],
    10:["f10", "g10", "h10", "i10", "j10", "k10", "l10", "m10", "n10", "o10", "p10", "q10",],
    11:["f11", "g11", "h11", "i11", "j11", "k11", "l11", "m11", "n11", "o11", "p11", "q11", "r11",],
    12:["g12", "h12", "i12", "j12", "k12", "l12", "m12", "n12", "o12", "p12", "q12", "r12",],
    13:["g13", "h13", "i13", "j13", "k13", "l13", "m13", "n13", "o13", "p13", "q13", "r13", "s13",],   
}

const testMap = [
    "a01", "b01", "c01",
    "b02", "c02",
    "b03", "c03", "d03"
]
const fiveByFive = [
    "a01", "b01", "c01", "d01", "e01",
    "b02", "c02", "d02", "e02",
    "b03", "c03", "d03", "e03", "f03",
    "c04", "d04", "e04", "f04",
    "c05", "d05", "e05", "f05", "g05",
]  
const testHexMap3 = [
        "b01", "c01", "d01",
    "b02", "d02", "c02", "e02",
"b03", "c03", "d03", "e03", "f03", 
    "c04", "d04", "e04", "f04", 
        "d05", "e05", "f05",  
]
const testHexMap4 = [
            "c01", "d01", "e01", "f01",
        "d02", "c02", "e02", "f02", "g02", 
    "c03", "d03", "e03", "f03", "g03", "h03",
"c04", "d04", "e04", "f04", "g04", "h04", "i04",
    "d05", "e05", "f05",  "g05", "h05", "i05", 
        "e06", "f06", "g06", "h06", "i06", 
            "f07", "g07", "h07", "i07" 
]


const forest = "images/forest.png.png";
const hills = "images/hills.png.png";
const mountains = "images/mountains.png.png";
const planes = "images/planes.png.png";
const swamp = "images/swamp.png.png";

const tiles = [forest, hills, planes, swamp]; //mountains,

class Tile {

    constructor (id, image, position){ //, passable = Boolean, energyEnter = Number, energyExit = Number, modifyAttributes = Array){
        this.id = id;
        this.image = image; //url string
        this.topLeftCoords = position; //top, left object coords
        this.top = this.topLeftCoords[0];
        this.left = this.topLeftCoords[1];

        //OTHER GAME ATTRIBUTES:
        //this.passable = passable; 
        //this.energyEnter = energyEnter;
        //this.energyExit = energyExit;
        //this.modifyAttributes = modifyAttributes;
    };
};

//generate random image
const genTileImage = () => tiles[(Math.floor(Math.random() * tiles.length) + 1) - 1];

const mapDimensions = () => {

    const x = document.querySelector("#x").value;//e.target.value
    const y = document.querySelector("#y").value;//e.target.value
    console.log(x)
    const map = []

    for (let i = 1; i <= y; i++){
        let currentObject = tilesByRows[`row${i}`];
        //console.log(currentObject)
        if (i % 2 === 0){
            for (let j = 0; j < (x - 1); j++){
               
                map.push(currentObject[j])
            }
        }else{
            for (let j = 0; j < x; j++){
                    
                map.push(currentObject[j])
            }
        }
        
    }
    
    return map;
}

const generateNewMap = () => {
    const mapCanvas = document.querySelector("#map")
    const listOfTilesObjects = [];   
    const currentMap = mapDimensions();
    
    for (let i = 0; i < currentMap.length; i++){
        const tileId = currentMap[i];
        const currentTilePosition = tilesPosition[`${tileId}`]
        const newTileObject = new Tile(tileId, genTileImage(), currentTilePosition)
        listOfTilesObjects.push(newTileObject)  
    }
    mapCanvas.innerHTML = "";
    for (let i = 0; i < listOfTilesObjects.length; i++){
        mapCanvas.innerHTML += `<img src="${listOfTilesObjects[i].image}" id="${listOfTilesObjects[i].id}" class="tile" alt="tileImage"></img>`
    
        const tileHtmlTag = document.querySelector(`#${listOfTilesObjects[i].id}`);
    
        tileHtmlTag.style.top = `${listOfTilesObjects[i].top}px`
        tileHtmlTag.style.left = `${listOfTilesObjects[i].left}px`
    }
    
    const displayEvent = (event) => console.log(event.path)
    
    map.addEventListener("click", displayEvent)
}


const genBtn = document.querySelector("#genMap").addEventListener("click", generateNewMap);


