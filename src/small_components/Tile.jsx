import React from 'react';
import { useState } from 'react';
import css from './Tile.module.css';
//import { imported_tiles_images } from '../functions/tilesImages';

//TODO: change the changes of the map tile in temporary db? global state? 

const setFlag = (color) => {
  return(
    <div className="wrapper" style={{display: 'flex'}}>
        <div className="stick"
        style={{
          height: '20px',
          width: '5px',
          background: 'black',
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
          borderBottomRightRadius:'5px'
        }}
        >
        </div>
        <div className="flag"
        style={{
          width: "15px",
          height: "10px",
          boxShadow: "0px 0px 90px 1px #989",
          backgroundColor: `${color}`,
          position: "relative",
        }}
        ></div>
    </div>
  )
}
        <div  
          style={{
            height: '450px',
            width: '10px',
            background: 'black',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius:'5px'
          }}>
        </div>
function Tile({id, posLeft, posTop, image, imgUrl, func = null, showId, startPlayer=null }) {

  
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
      {startPlayer && setFlag(startPlayer)}
    </div>
  )
}

export default Tile;