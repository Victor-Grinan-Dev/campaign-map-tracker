import React from 'react';

//hooks:
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//redux:
import { useSelector } from 'react-redux';
import { userNameSelector, userTypeSelector } from '../../features/globalState/globalStateSlice';

//components:
import NavBar from '.././small_components/NavBar';
import BackTo from '.././small_components/BackTo';

//style:
import css from './game.module.css';

//function and objects:
import { mapReader } from '../../functions/positions';
import { availableMaps } from '../../functions/mapGenerator';
import { hexTestMap } from './maps';
//test
import './Data.js';

import { firstAutomatedMap, automatedMap } from './maps';
import { gameMapReader } from './gameMapReader/gameMapReader';


const map = hexTestMap;

const autoMap = automatedMap(firstAutomatedMap.map)
console.log(autoMap)
function Game() {
    const userType = useSelector(userTypeSelector);
    const currentUser = useSelector(userNameSelector);
    const navigate = useNavigate();
    useEffect(()=>{
      if (!currentUser && userType==='visitor'){
        navigate('/');
      }
    },[currentUser]);
  return (
    <div className={css.game}>
      <div style={{
        position:'absolute',
        top:20,
        left:20
      }}>
      <BackTo pageUrl={'/profile'} pageName={'Profile'} />
      </div>

        <div>
        {gameMapReader(map.map)}
        </div>
    </div>
  )
}

export default Game;