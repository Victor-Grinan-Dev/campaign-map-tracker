import React from 'react';
import NavBar from './small_components/NavBar';
import css from './hall.module.css';

import Campaign from '../functions/Objects'
import {availableMaps} from '../functions/mapGenerator';

const dummyCampaign = new Campaign('testCampaign', 1000, 'hx', '7x7', availableMaps[3], 2, 'all', 4, "xoxo")

//TODO: Read from the database all created campaigns that hav not started yet

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