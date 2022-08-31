import React from 'react';
import NavBar from '../small_components/NavBar';
import css from './hall.module.css';

function Hall() {
  return (
        <div>
            <NavBar/>

            <div className={css.hall}>
                <div className={css.chatBlock}>

                </div>

                <div className={css.displayAvailableCampaingsContainer}>

                </div>
            </div>
        </div>
  )
}

export default Hall;