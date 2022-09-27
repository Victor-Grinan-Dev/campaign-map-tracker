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
import { enlistedSelector, userDataSelector, userNameSelector, userTypeSelector } from '../features/globalState/globalStateSlice';
import { initializeData } from '../features/globalState/globalStateSlice';

//style:

//functions and objects:

function Profile() {
  const dispatch = useDispatch();
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userNameSelector);
  const userData = useSelector(userDataSelector);
  const army = useSelector(enlistedSelector)
  const navigate = useNavigate();

  const testStyle = {
    width:75,
    height:75,
    backgroundColor:"black",
    backgroundImage:`url(${currentUser.image})`,
  }

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

    const displayArmy = () => {
      return( 
        <ol>
          {
            army.map((formation) =>{
              <li key={formation.id}>{formation.name}-{formation.pointCost}</li>
            })
          }
        </ol>
      )
    }

  return (
    <div>
        <NavBar />
       { visitorWelcoming() }

       <NextPage pageUrl='/myarmy' pageName="My Army " />

       <div className={NewCampaignCss.section}>
       
        <div style={testStyle}>
          <img src={`/assets/conscript_red.png`} alt="profileimg" style={{
            objectFit:"fill",
            width:"100%"
          }}/>{/*${userData.image}*/}
        </div>
        <h2>{userData?.rank} {currentUser}</h2>
       </div>

       <div className={NewCampaignCss.section}>
        
        <p> Level: {userData?.level}</p>
        <p> Battles: {userData?.battles}</p>
        <p> WinRate: {userData?.winRate}</p>
        {userData?.badges.length > 0 ? <p> Badges: </p>
        : null}
        <ol>
          {userData?.badges.map((badge, i)=>{
            <li key={i}>{badge}</li>
          })}
        </ol>
       </div>
       
       <div className={NewCampaignCss.section}>
        <p> Current Army: </p>
        { army.length > 0 ? displayArmy() : <p style={{color:"tomato"}} >[ No formations enlisted yet ]</p>}
       </div>

    </div>
  )
}

export default Profile;