import React from 'react';

//hooks:
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//redux:
import { useSelector } from 'react-redux';
import { userNameSelector, userTypeSelector } from '../features/globalState/globalStateSlice';

//components:
import NavBar from './small_components/NavBar';
import CampaignCard from './small_components/CampaignCard';

//style:
import css from './hall.module.css';

//function and objects:
import Campaign from '../functions/Objects';
import {availableMaps} from '../functions/mapGenerator';



const dummyCampaign = new Campaign('testCampaign', 1000, 'hx', '7x7', availableMaps[3], 2, 'all', 4, "xoxo")

const allCampaigns = [dummyCampaign];

//TODO: Read from the database all created campaigns that hav not started yet

function Hall() {
        const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userNameSelector);
  const navigate = useNavigate();
    useEffect(()=>{
      if (!currentUser && userType==='visitor'){
        navigate('/');
      }
    },[currentUser]);
  return (
        <div>
            <NavBar/>

            <div className={css.hall}>
                <div className={css.chatBlock}>

                </div>

                <div className={css.displayAvailableCampaingsContainer}>
                    <ul className={css.campaignList}>
                        <li className={css.detailsHeader}>
                             id name - player/maxPlayers - rounds - duration
                        </li>
                    {allCampaigns.map( (item, i) => (
                       <li key={i} className={css.campaignLi}> 
                            <CampaignCard key={item.campaignCode} id={item.code} name={item.name} players={item.players} maxPlayers={item.maxPlayers} rounds={item.rounds} roundDuration={item.rounds}/>
                       </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Hall;