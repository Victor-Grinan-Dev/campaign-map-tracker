import React from "react";
import Tile from "../components/small_components/Tile";
import tilesImages, { tilesAddresses } from "./tilesImages";

const createValuesArray = (increment, iters, start) => {
    const values = [];
    for (let i = 0; i < iters; i++){
        values.push(Math.floor(start + i * increment))
    }
    //console.log(values)
    return values;
};
const fillCoords = (tileSize, rows, columns = rows, shape = "sq", topStart = 150, leftStart = 70) => {
    const coords = [];
    
    const topIncrement = tileSize * 0.75;
    const leftIncrement = tileSize;
    const initialPairRow = tileSize * 0.5;

    if (shape === "sq"){
        const oddRowColumns = columns;
        const pairRowColumns = columns - 1;
        const mapTopValuesArray = createValuesArray(topIncrement, rows, topStart); 
        const mapOddValuesLeft = createValuesArray(leftIncrement, oddRowColumns, leftStart); 
        const mapPairValuesLeft = createValuesArray(leftIncrement, pairRowColumns, Math.floor(leftStart + leftStart * 0.5));

        let row;
        let leftValue;

        for (let y = 0; y < rows; y++){
            const line = [];
            y % 2 === 0 ? row = oddRowColumns  : row =  pairRowColumns;
            y % 2 === 0 ? leftValue = mapOddValuesLeft : leftValue = mapPairValuesLeft  ;
            for (let x = 0; x < row; x++){
                line.push([mapTopValuesArray[y], leftValue[x]])
            } 
            coords.push(line);
        }
    return coords;
    }    
};

    //hard coded variables:
    const side = 50
    const topStart = 100;
    const leftStart = 150;

    //logic variables:
    const evenLeftStart = leftStart + side * 0.5;
    const left = side; //incrementor 
    const top = side * 0.75; //incrementor 

const handleLeft = (y, x) => {
    if(y % 2 === 0) {
        return leftStart + left * x
    } else {
        return evenLeftStart + left * x
    }
}
const mapReader = (map, action=null, showTilesId=false) => {
    //map is a nested array 
    return (
        <div className="mapReader">
            
            {
                map.map((row, y) => (
                    row.map((tile, x) => (  
                        
                        tile.image && <Tile 
                            key={tile.id} 
                            id={tile.id}
                            showId={showTilesId}
                            image={tile.image}  
                            posTop={topStart + top * y} 
                            posLeft={handleLeft(y, x)} 
                            tileWidth={side} 
                            tileHeight={side + 5}
                            func={action} 
                            startPlayer={tile.owned_by} 
                            objective={tile.objective} 
                            formation={tile.formation}
                        />
                    ))
                ))
            }
        </div>
        
    )
}
// const mapReader = (map, imageUrl='../assets/tile_images/blank.png') => {
//     return (
//         map.map((row, y) => (
//             row.map((tile, x) => (  
//                 //TODO: pass image url instead for use as css background image
//                 tile.image && <Tile key={tile.id} image={tilesImages[tile.image]}  posTop={topStart + top * y} posLeft={handleLeft(y, x)} tileWidth={side} func={testFunc}/>
//             ))
//         ))
//     )
// }

export default fillCoords;
export {mapReader}
