import React from 'react';
import css from './game.module.css';
import { mapReader } from '../../functions/positions';
import { availableMaps } from '../../functions/mapGenerator';

import Token from './Token';

const map = availableMaps[3];

function Game() {
  return (
    <div className={css.game}>
        <div>
        {mapReader(map.map)}
        </div>
    </div>
  )
}

export default Game;