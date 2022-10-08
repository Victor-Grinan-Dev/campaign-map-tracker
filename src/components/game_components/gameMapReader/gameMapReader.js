import Tile from "../../small_components/Tile";
import GameTile from "../GameTile";
const mapAreaStyle ={
    backgroundColor:"black",
    position:"relative"
}

//hard coded variables:
    const side = 100
    const topStart = 100;
    const leftStart = 0;

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

export const gameMapReader = (map, action=null, showTilesId=false) => {
    //map is a nested array 
    return (
        <div className="mapArea" style={{mapAreaStyle}}>
            
            {
                map.map((row, y) => (
                    row.map((tile, x) => (  
                        
                        tile.image && <GameTile 
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