import { terrainTypes, Tile, Map } from "./objects/map";


export const hexTestMap = {
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

export const firstAutomatedMap = {
        name:"Devil's Arena",
        shape:"hx",
        dimensions: "4x4x4",
        map:[ 
                [undefined,     undefined,      "a01,planes",   "b01,planes",   "c01,planes",   "d01,planes"],
                [       undefined,     "a02,planes",   "b02,planes",   "c02,planes",   "d02,planes",   "e02,planes"], 
                [undefined,     "a03,planes",   "b03,planes",   "c03,planes",   "d03,planes",   "e03,planes",   "f03,planes"],
                [       "a04,planes",  "b04,planes",   "c04,planes",   "d04,planes",   "e04,planes",   "f04,planes",   "g04,planes"],
                [undefined,     "b05,planes",   "c05,planes",   "d05,planes",   "e05,planes",   "f05,planes",   "g05,planes"], 
                [       undefined,     "c06,planes",   "d06,planes",   "e06,planes",   "f06,planes",   "g06,planes"],
                [undefined,     undefined,      "d07,planes",   "e07,planes",   "f07,planes",   "g07,planes"] 
            ],
        maxPlayers: 2
        }

export const automatedMap = ( mapName, nestedArray, shape, dimensions) => {
    let newMap = []
    nestedArray.map((row, i) => {
        let newRow = []
        row.map((autoTile, j) => {
            if (autoTile){
                const [id, terrain] = autoTile.split(',')
                
                newRow.push(new Tile(id, terrainTypes[terrain]))
            }
            else{
                const null_id = `${i+1}${j}`;
                newRow.push(new Tile(null_id, null))
            }
        })
        newMap.push(newRow);
    })
    newMap.map(row=>{
        row.map(tile=>{
            console.log(tile)
        })
    })
    return new Map(mapName, shape, dimensions, newMap);
}      
           
                
