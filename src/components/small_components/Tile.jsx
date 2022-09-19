import React from 'react';
import { useState } from 'react';
import css from './Tile.module.css';
import { imported_tiles_images } from '../../functions/tilesImages';

//TODO: change the changes of the map tile in temporary db? global state? 

function Tile({id, posLeft, posTop, image, imgUrl, func = null, showId }) {

  //console.log(imgUrl)
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
      {showId && <p>{id}</p>}

    </div>
  )
}

export default Tile;