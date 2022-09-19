import React from 'react';
import { useState } from 'react';
import checkMark from '../../assets/icon_package/answer-right.png'

const visit_for_cards = "https://freefrontend.com/css-cards/"
const randomArtillery = "https://source.unsplash.com/500x400/?artillery"
const randomTank = 'https://source.unsplash.com/500x400/?tank';
const randomSoldier = 'https://source.unsplash.com/500x400/?soldier';
const defaulImagen = "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg";



function Card({name, description = null, image = null, is_selected = false}) {
  const [checked, setChecked] = useState(is_selected);

  const changeEnlisted = () => {
    setChecked(!checked)
    //write to the database this unit.is_selected
  }

  const imgUrl = image ? image : randomSoldier;

  return (
      
        <div className="card">
          <div className='enlist' onClick={changeEnlisted}>Enlist {checked ? <img className='checked' src={checkMark}/> : null}</div>
          
            <h3 className="card__header">{name} </h3>
            <div className="imgContainer">
              <img className="cardImg" src={imgUrl} alt="img" />
            </div>
            
            <p className="card__info">{description}</p>
            <button className="card__button">Read now</button>
        </div>
       
  )
}

export default Card;

