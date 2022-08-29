import planes from '../assets/tile_images/planes.png';
import forest from '../assets/tile_images/forest.png';
import hills from '../assets/tile_images/hills.png';
import mountains from '../assets/tile_images/mountains.png';
import swamp from '../assets/tile_images/swamp.png';
import { Tile, Map, nullTile } from './Objects';


const relation = {
    5:1,
    7:2,
    9:4,
    11:6,
    13:8,
}
const tilesImages = [//is plains no planes
    "planes",
    "forest",
    "hills",
    "mountains",
    "swamp"
    ]
//example out come: 
const squareTestMap = {
    name:"Planes Valley",
    shape:"sq",
    dimensions: "7x7",
    map:[
        [{id:"a01", image:"planes", move_in:1,is_cover:false, is_starting_position:false}, {id:"b01", image:"planes", move_in:1,is_cover:false, is_starting_position:false}, {id:"c01", image:"planes", move_in:1,is_cover:false, is_starting_position:false}, {id:"d01", image:"planes", move_in:1,is_cover:false, is_starting_position:false}, {id:"e01", image:"planes", move_in:1,is_cover:false, is_starting_position:false}, {id:"f01", image:"planes", move_in:1,is_cover:false, is_starting_position:false}, {id:"g01", image:"planes", move_in:1,is_cover:false, is_starting_position:false}],

        [{id:"b02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"c02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"d02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"e02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"f02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"g02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}],

        [{id:"b03", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"c03", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"d03", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"e03", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"f03", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"g03", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"h03", image:"planes", move_in:1,is_cover:false,is_starting_position:false}],

        [{id:"c04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"d04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"e04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"f04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"g04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"h04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}],

        [{id:"c05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"d05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"e05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"f05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"g05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"h05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"i05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}],

        [{id:"d06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"e06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"f06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"g06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"h06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"i06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}],

        [{id:"d07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"e07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"f07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"g07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"h07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"i07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, {id:"j07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}],
    ],
    maxPlayers:4
    }

const hexTestMap = {
    name:"Devil's Arena",
    shape:"hx",
    dimensions: "4x4x4",
    map:[
            [
                {id:100,image:null},
                {id:110,image:null},
                {id:"a01", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"b01", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"c01", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"d01", image:"planes", move_in:1,is_cover:false,is_starting_position:false}
            ],
            [
                {id:140,image:null},
                {id:"a02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"b02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"c02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"d02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"e02", image:"planes", move_in:1,is_cover:false,is_starting_position:false}
            ], 
            [
                {id:200,image:null},
                {id:"a03", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"b03", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"c03", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"d03", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"e03", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"f03", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
            ],

            [
                {id:"a04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"b04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"c04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"d04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"e04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"f04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"g04", image:"planes", move_in:1,is_cover:false,is_starting_position:false}
            ],
            [
                {id:230,image:null}, 
                {id:"b05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"c05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"d05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"e05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"f05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"g05", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
            ], 
            [
                {id:240,image:null}, 
                {id:"c06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"d06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"e06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"f06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"g06", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 

            ],
            [
                {id:280,image:null},
                {id:290,image:null},
                {id:"d07", image:"planes", move_in:1,is_cover:false,is_starting_position:false},
                {id:"e07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"f07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}, 
                {id:"g07", image:"planes", move_in:1,is_cover:false,is_starting_position:false}
            ] 
        ],
    maxPlayers: 2
    }

const miniMapSq = {
    
        name:"the test map",
        shape:"sq",
        dimensions:"3x3",
        map:[
                [
                    {
                        id:"a01",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:true,
                        posY:null,
                        posX:null
                    },
                    {
                        id:"b01",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:false,
                        posY:null,
                        posX:null
                    },
                    {
                        id:"c01",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:false,
                        posY:null,
                        posX:null
                    }
                ],

                [
                    {
                        id:"b02",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:false,
                        posY:null,
                        posX:null
                    },
                    {
                        id:"c02",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:false,
                        posY:null,
                        posX:null
                    }
                ],
                [
                    {
                        id:"c03",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:false,
                        posY:null,
                        posX:null
                    },
                    {
                        id:"d03",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:false,
                        posY:null,
                        posX:null
                    },
                    {
                        id:"e03",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:true,
                        posY:null,
                        posX:null
                    }
                ]
            ],
        maxPlayers:2
    }

const miniMapHx = {
        name:"the mini hex",
        shape:"hx",
        dimensions:"3x3x3",
        map:[
                [
                    {
                        id:330,
                        image:null,
                        move_in:null,
                        cover:null,
                        is_starting_position:null,
                        posY:null,
                        posX:null
                    },
                    {
                        id:"a01",
                        image:"planes",
                        move_in:1,
                        cover:false,
                        is_starting_position:false,
                        posY:null,
                        posX:null
                    },
                {
                    id:"b01",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"c01",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                }
            ],
            [
                {
                    id:"a02",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"b02",
                    image:"forest",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"c02",
                    image:"forest",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"d02",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                }
            ],
            [
                {
                    id:"a03",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:true,
                    posY:null,
                    posX:null
                },
                {
                    id:"b03",
                    image:"forest",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"c03",
                    image:"mountains",
                    move_in:null,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"d03",
                    image:"forest",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"e03",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:true,
                    posY:null,
                    posX:null
                }
            ],
            [
                {
                    id:"b04",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"c04",
                    image:"forest",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"d04",
                    image:"forest",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"e04",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                }
            ],

            [
                {
                    id:500,
                    image:null,
                    move_in:null,
                    cover:null,
                    is_starting_position:null,
                    posY:null,
                    posX:null
                },
                {
                    id:"c05",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"d05",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:false,
                    posY:null,
                    posX:null
                },
                {
                    id:"e05",
                    image:"planes",
                    move_in:1,
                    cover:false,
                    is_starting_position:true,
                    posY:null,
                    posX:null
                }
            ]
        ],
        maxPlayers:2
    }

const terrains = [planes, forest, hills, mountains, swamp];

const diagonChar = [
    'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ]

const generateTileId = (y, x, alphabet_start) => {
    let id;
    if(y < 10){
        id = diagonChar[alphabet_start + x] + "0" + y;
    }else{
        id = `${diagonChar[alphabet_start + x] + y}`;
    }
    return id;
}
const hexCleaner = (nestedArray) => {

    let cleanedNestedArray = [];
    
    for (let y = 0; y < nestedArray.length; y++){
        let newArray = [];
        let has_started = false;
        const currentRow = nestedArray[y];
        for (let x = 0; x < nestedArray[y].length; x++){
            const currentTile = nestedArray[y][x]
            if (nestedArray[y][x].image !== null){
                has_started = true;
            }
            if(has_started && currentTile.image === null){
                // newArray = currentRow.slice(x - 1)
                newArray = currentRow.slice(0, x);
                cleanedNestedArray.push(newArray);
                break;
            }
        }
    }

    return cleanedNestedArray;
}
const canvasSquare = (name, maxRows, maxCols) => {

    let columns;
    const map = [];
    for (let y = 0; y < maxRows; y++){
        const rows = [];
        y % 2 === 0 ? columns = maxCols : columns = maxCols - 1;
        for (let x = 0; x < columns; x++){
            const alphaStart = y;
            const id = generateTileId(y,x, alphaStart)
            const newTile = new Tile(id, "blank");
            rows.push(newTile);
        }
        map.push(rows);
    }
    return new Map(name, "sq",`${maxRows}x${maxCols}`, map, null);
}
const canvasHex = (name, side = 13) => {
    //TODO: fix the generator to start in alphabet a instead of i

    if (side < 5){
        side = 5;
    }else if (side > 13){
        side = 13;
    }else if (side % 2 === 0){
        side += 1;
    }

    const width = side * 3 - 5;
    const height = side * 2 - 1;
    const empty = nullTile;

    let row;
    let funnyCase;  
    side > 5 ? funnyCase = 0 : funnyCase = 1;     
    let rule = Math.floor(side / 2) + 1;
    let hex = [];
		

    for (let y = 0; y < height; y++){
        let alphaStart = 0;
        y % 2 === 0 ? row = width : row = width - 1;
        
        if (y < side && y % 2 !== 0)
		    rule -= 1
	    else if (y > side && y % 2 === 0){
            rule += 1
        }
	    let line = [];
        
        for (let x = 0; x < row; x++){
    
            if (x < rule -1 || x > row - rule - relation[side] + 1 ){
                line.push(new Tile(null, null));
            }else if (x > rule - funnyCase){
                const id = generateTileId(y, x, alphaStart)
                line.push(new Tile(id, "blank"));
            }
        }
        hex.push(line);
        alphaStart += 1
    }
    hex = hexCleaner(hex)
    
    const hexMap = new Map(name, "hx",`${side}`, hex)
    
    return hexMap;
}


//TODO: generate a proper map:
const generateHexagonalMap = (name, side = 13) => {
    let hexMap;
    hexMap =  canvasHex(name, side);
    return hexMap;
}

//TODO: generate a proper map:
const generateSqMap  = (name = "Blank Canvas", maxRows = 25, maxCols = 25, shape="sq") => {
    //not done
    //this should be a random tile generator
    let map;
    map = canvasSquare(name, maxRows, maxCols);
    return map;
}

//TODO: switcth shapes
const generateMap = (name = "Unknown", dimensions="7x7", shape = "sq") => {
    //this should be the only function you need to generate any of the available map options as a canvas or a random tiles
    let map;
    let y;
    let x;
    if(shape === "sq"){
        if(dimensions.split('x').length === 2){
            y = dimensions.split('x')[0]
            x = dimensions.split('x')[1]
            map = generateSqMap(name, y, x);
        }else{
            map = generateSqMap(name, dimensions, dimensions);
        }
        
    }else if (shape === "hx"){
        map = generateHexagonalMap(name, dimensions);
    }
    return map;
}


const blankCanvas = canvasSquare();
const availableMaps = [squareTestMap, hexTestMap, miniMapSq , miniMapHx];

export default generateMap;
export {availableMaps, blankCanvas, canvasSquare, canvasHex, hexCleaner};