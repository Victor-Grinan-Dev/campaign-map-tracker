import React from 'react';
import css from './home.module.css'
import logo from '../logo.svg';
import NextPage from '../small_components/NextPage';
import Button from '../small_components/Button';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loggedSelector, userSelector } from '../features/logged/loggedSlice';
import { changeLogStatus, changeUser } from '../features/logged/loggedSlice';

const visitor = "https://source.unsplash.com/R_6kw7NUTLY";
const admin = "https://source.unsplash.com/BoISbSP0HVk";
const user = "https://source.unsplash.com/1vC4ZwkJNdA";

function Home(){
    const dispatch = useDispatch()
    const isLogged = useSelector(loggedSelector);
    const currentUser = useSelector(userSelector);

    const usernameHandler = () => {
        dispatch(changeLogStatus("visitor"));
    }
    const userChanger = (e) => {
        //console.log(e.target.value)
        dispatch(changeUser(e.target.value));
        console.log(currentUser)
    }

    const loginModal = () => {
        return <div>
            <h2>Oh, Hello there! </h2>
            <p>How should we call you?</p>
            <input type="text" name="tempUsername" placeholder="write a username..." onChange={userChanger}/>
            { currentUser && <NextPage pageUrl={"/profile"} pageName={"Welcome Page"} />} 
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
                <img className={css.gate} src={user} alt="boardgamer" onClick={loginModal}/>
                </div>
            
            </div>
            {/* TODO: get an custom username from the visitor */}
            {isLogged && loginModal() }
        </div>
    );
}

export default Home;
