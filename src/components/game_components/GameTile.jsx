import React from 'react';
import css from './gameTile.module.css';
import Token from './Token';

const GameTile = ({id, posLeft, posTop, image, func=null, showId=false, formation=null }) => {

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

export default GameTile;