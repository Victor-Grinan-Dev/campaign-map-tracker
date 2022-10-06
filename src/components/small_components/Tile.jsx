import React from 'react';
import css from './Tile.module.css';
import Token from '../game_components/Token';
//hooks:
//redux:
//components:
//style:
//function and objects:
//TODO: change the changes of the map tile in temporary db? global state? 

function Tile({id, posLeft, posTop, image, func = null, showId, formation=null }) {

  return (
    <div
    id={id}
    className={css.Tile}
    onClick={func} 
    style={{
      backgroundImage:`url(/assets/${image}.png)`, 
      left:`${posLeft}px`,
      top:`${posTop}px`,
    }}
    >
      <div className="tileContent">
        {showId && <p>{id}</p>}
        {formation && <Token formation={formation} />}
      </div>
      
    </div>
  )
}

export default Tile;