import React from 'react';
import axios from 'axios';

//hooks:
import { useState } from 'react';
import { useEffect } from 'react';

//redux:
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loggedSelector, userIndexSelector, userSelector, userTypeSelector, changeLogStatus, changeUser, changeUserIndex } from '../features/globalState/globalStateSlice';

//components:
import NextPage from './small_components/NextPage';
import Button from './small_components/Button';

//style:
import css from './home.module.css';
import logo from '../logo.svg';

//function and objects:
import { User } from '../functions/Objects';

const visitor = "https://source.unsplash.com/R_6kw7NUTLY";
const admin = "https://source.unsplash.com/BoISbSP0HVk";
const user = "https://source.unsplash.com/1vC4ZwkJNdA";

const visitorEndPoint = 'http://localhost:8011/visitors';

function Home(){
    const dispatch = useDispatch()
    const isLogged = useSelector(loggedSelector);
    const currentUser = useSelector(userSelector);
    const userType = useSelector(userTypeSelector);
    const userIndex = useSelector(userIndexSelector);
    const [commonFormations, setFormations] = useState([]);

    const usernameHandler = () => {
        dispatch(changeLogStatus("visitor"));
    }
    const userChanger = (e) => {
        dispatch(changeUser(e.target.value));
    }

    useEffect(()=>{
        axios.get(visitorEndPoint).then(res =>{
            setFormations(res.data[0].formations);
        })
    },[])
    const createUser = () => {
        let index;
        dispatch(changeUserIndex(userType + '_' + currentUser + '_' + Math.floor(Math.random() * 100)));
        const newUser = new User(userIndex, currentUser, null, null);
        newUser.formations = commonFormations;
        axios.post(visitorEndPoint, newUser)
        .then(() => {
            axios.get(visitorEndPoint).then(res => {
                index = res.data.length
                dispatch(changeUserIndex(index - 1))
            })
        })
    }

    const loginModalVisitor = () => {
              
        return <div>
            <h2>Oh, Hello there! </h2>
            <p>How should we call you?</p>
            <input type="text" name="tempUsername" placeholder="write a username..." onChange={userChanger}/>
            { currentUser && <NextPage pageUrl={"/profile"} pageName={"Welcome Page"} action={createUser}/>} 
        </div>
    }
    return (
        <div className={css.homeContainer}>
                
            <header className={css.homeHeader}>
                <div style={{
                    position:"relative"
                }}>
                <img src={logo} className="App-logo" alt="logo" />    
                <h1 style={{
                    position:"relative",
                    top:"-70px",
                    left:12,
                    display:"flex"
                }}>
                    H.O.T. <div style={{
                    color:"tomato"
                }}>W</div> 
                </h1>
                </div>
                     
            <p>Welcome to the Campaing Tracker.</p>               
            <p>Powered by Hexes On The Web</p>    
            </header>

            <div className={css.gates}>
                <div className={css.gateContainer}>
                <p className={css.userGate}>Visitor:</p>
                <img className={css.gate} src={visitor} alt="visitor" onClick={usernameHandler}/>
                </div>
            
                <div className={css.gateContainer}>
                <p className={css.userGate}>Admin :</p>
                <img className={css.gate} src={admin} alt="admin" />
                </div>
           
                <div className={css.gateContainer}>
                <p className={css.userGate}>User: </p>
                <img className={css.gate} src={user} alt="boardgamer" onClick={loginModalVisitor}/>
                </div>
            
            </div>
            {/* TODO: get an custom username from the visitor */}
            {isLogged && loginModalVisitor() }
        </div>
    );
}

export default Home;
