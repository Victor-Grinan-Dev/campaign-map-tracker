import React from 'react';

//component:
import NavBar from './small_components/NavBar';
import NextPage from './small_components/NextPage';

//style:
import NewCampaignCss from './newCampaign.module.css';

//hooks:
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//redux:
import { useDispatch, useSelector } from 'react-redux';
import { userDataSelector, userNameSelector, userTypeSelector } from '../features/globalState/globalStateSlice';
import { initializeData } from '../features/globalState/globalStateSlice';

//style:
const testStyle = {
  width:75,
  height:75,
  backgroundColor:"black",
  /* backgroundImage:`url(${currentUser.image})` */
}
//function and objects:

function Profile() {
  const dispatch = useDispatch();
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userNameSelector);
  const userData = useSelector(userDataSelector);
  const navigate = useNavigate();

  useEffect(()=>{
    if (!currentUser && userType==='visitor'){
      navigate('/');
    }
  },[currentUser]);

  useEffect(() => {
    dispatch(initializeData(`/${userType}`));
  }, [dispatch]);

    const visitorWelcoming = () => {
        if (userType === 'visitor'){
            return <div>
            <h2> Have a warm welcome {currentUser}!</h2>
            <p>
            Before starting browsing around is recomandable to take a look to our <a href="/about">About page</a>. Also take a look <a href="#">Terms and Conditions</a> and to our <a href="#">Privacy  Policy.</a> Is IMPORTANT to know that as a visitor you will be automatically logged out if you refresh the page, all your changes will be lost.
            </p>
        </div>
        }
    };
  console.log(currentUser);
  return (
    <div>
        <NavBar />
       { visitorWelcoming() }

       <NextPage pageUrl='/myarmy' pageName="My Army " />

       <div className={NewCampaignCss.section}>
       
        <div style={testStyle}>

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