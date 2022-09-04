import React from 'react';
import css from './game.module.css';
import { mapReader } from '../../functions/positions';
import { availableMaps } from '../../functions/mapGenerator';
import BackTo from '../../small_components/BackTo';

const map = availableMaps[3];

function Game() {
  return (
    <div className={css.game}>
      <BackTo pageUrl={'/profile'} pageName={'Profile'} />
        <div>
        
        {mapReader(map.map)}
        </div>
    </div>
  )
}

export default Game;