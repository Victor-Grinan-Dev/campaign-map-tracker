import React from 'react'
import NavBar from '../small_components/NavBar';
import NextPage from '../small_components/NextPage';
import { useSelector } from 'react-redux';
//import { capitalStart } from '../functions/functions';
import { userSelector, userTypeSelector } from '../features/logged/loggedSlice';
import NewCampaignCss from './newCampaign.module.css';

function Profile() {
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userSelector);


    const visitorWelcoming = () => {
        console.log(userType);
        if (userType === 'visitor'){
            return <div>
            <h2>Have a warm welcome {currentUser}!</h2>
            Before starting browsing around is recomandable to take a look to our <a href="/about">About page</a>. Also take a look <a href="#">Terms and Conditions</a> and to our <a href="#">Privacy  Policy</a> 
        </div>
        }
    }

  return (
    <div>
        <NavBar />
       { visitorWelcoming() }

       <NextPage pageUrl='/myarmy' pageName="My Army " />

       <div className={NewCampaignCss.section}>
       
        <div style={{
          width:75,
          height:75,
          backgroundColor:"black",
          /* backgroundImage:`url(${currentUser.image})` */
        }}>

        </div>
        <h2>{currentUser}</h2>
       </div>

       <div className={NewCampaignCss.section}>
        
        <p> Player level: </p>
        <p> Rank: </p>
        <p> Battles fought: </p>
        <p> WinRate: </p>
        <p> Badges: </p>
       </div>
       
       <div className={NewCampaignCss.section}>
        <p> Current Army: </p>
       </div>

    </div>
  )
}

export default Profile;