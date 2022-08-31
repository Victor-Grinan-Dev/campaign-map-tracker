import React from 'react';
import css from './home.module.css'
import logo from '../logo.svg';
import NextPage from '../small_components/NextPage';

import { useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loggedSelector } from '../features/logged/loggedSlice';
import { changeLogStatus } from '../features/logged/loggedSlice';

const visitor = "https://source.unsplash.com/R_6kw7NUTLY";
const admin = "https://source.unsplash.com/BoISbSP0HVk";
const user = "https://source.unsplash.com/1vC4ZwkJNdA";

const loginModal = () => {
    return (
        <div>
            login modal
        </div>
    )
}

function Home(){
    const dispatch = useDispatch()
    const isLogged = useSelector(loggedSelector);

    return (
        <div className={css.homeContainer}>
                
            <header className={css.homeHeader}>
            <img src={logo} className="App-logo" alt="logo" />             
            <p>Welcome to the Campaing Tracker.</p>               
            <p>Powered by Web-Hexes</p>    
            </header>

            <div className={css.gates}>
                <div className={css.gateContainer}>
                <p className={css.userGate}>Visitor:</p>
                <img className={css.gate} src={visitor} alt="visitor" onClick={()=> dispatch(changeLogStatus("visitor"))}/>
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
            {isLogged && <NextPage pageUrl={"/hall"} pageName={"Hall"} /> }
        </div>
    );
}

export default Home;
