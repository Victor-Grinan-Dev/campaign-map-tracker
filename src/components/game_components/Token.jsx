import React from 'react';
import css from './token.module.css';

function Token({formation}) {
  return (
    <div 
    className={css.token}
    style={{
      backgroundColor: `${formation.color}`
    }}
    >
      <p className={css.tokenName}>{formation.name}</p>
      <p className={css.tokenPoints}>{formation.point_const}</p>
    </div>
  )
}

export default Token;