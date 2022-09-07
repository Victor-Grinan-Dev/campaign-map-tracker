import React from 'react';
import css from './game.module.css';
import { mapReader } from '../../functions/positions';
import { availableMaps } from '../../functions/mapGenerator';
import NavBar from '../../small_components/NavBar';
import BackTo from '../../small_components/BackTo';
import { useSelector } from 'react-redux';
import { userSelector, userTypeSelector } from '../../features/logged/loggedSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const map = availableMaps[3];

function Game() {
    const userType = useSelector(userTypeSelector);
    const currentUser = useSelector(userSelector);
    const navigate = useNavigate();
    useEffect(()=>{
      if (!currentUser && userType==='visitor'){
        navigate('/');
      }
    },[currentUser]);
  return (
    <div className={css.game}>
      <div>
      <NavBar/>
      <BackTo pageUrl={'/profile'} pageName={'Profile'} />
      </div>

        <div>
        {mapReader(map.map)}
        </div>
    </div>
  )
}

export default Game;