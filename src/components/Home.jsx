import React, { useState, useEffect } from 'react';
import axios from 'axios';

//hooks:

//redux:
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { isLoggingSelector, isLoggedSelector, userIndexSelector, userNameSelector, userTypeSelector, toggleIsLoading, toggleIsLogged, changeUserName, changeUserType, changeUserIndex, toggleIsLogging, initializeData } from '../features/globalState/globalStateSlice';

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

const visitorEndPoint = 'http://localhost:8011/visitor';

function Home(){
    const dispatch = useDispatch()
    const isLogged = useSelector(isLoggedSelector);
    const isLogging = useSelector(isLoggingSelector);
    const currentUser = useSelector(userNameSelector);
    const userType = useSelector(userTypeSelector);
    const userIndex = useSelector(userIndexSelector);

    const userChanger = (e) => {
        dispatch(changeUserName(e.target.value));
    }

    const inComingVisitorHandler = (e) => {
        console.log("Incoming visitor!");
        dispatch(toggleIsLogging()); //set logging to true
        dispatch(changeUserType('visitor'));
    };

    const inComingUserHandler = (e) => {
        console.log("Incoming user!");
        dispatch(toggleIsLogging()); //set logging to true
        dispatch(changeUserType('user'));
    };
/*
    useEffect(()=>{
        axios.get(visitorEndPoint).then(res =>{
            setFormations(res.data[0].formations);
        })
    },[])
*/
useEffect(() => {
    
  }, [dispatch]);
    const createVisitorUser = () => {
        dispatch(changeUserIndex());
        //TODO:
        //create new user with dummy database.
        //populate this new user formations with dummy formation cards.

        /*
                const newUser = new User(userIndex, currentUser, null, null);
        axios.post(visitorEndPoint, newUser)
        .then(() => {
            axios.get(visitorEndPoint).then(res => {
                console.log(res.data)
            });
        });
        */
        dispatch(initializeData(visitorEndPoint)); //read database
        dispatch(toggleIsLogged());
    };

    const loginModalVisitor = (e) => {
        return <div>
            <h2>Oh, Hello there! </h2>
            <p>How should we call you?</p>
            <input type="text" name="tempUsername" placeholder="write a username..." onChange={userChanger}/>
            { currentUser && <NextPage pageUrl={"/profile"} pageName={"Welcome Page"} action={createVisitorUser}/>} 
        </div>
    }

    const loginModalUser = () => {
        return <div>
            <h2>Hello, friend! </h2>
            <p>Please login...</p>
            <input type="text" name="username" placeholder="Username..." />
            <input type="password" name="password" placeholder="Password..." />
            {/*if password match with user logics*/}
            
        </div>
    }

    return (
        <div className={css.homeContainer} >
                
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
                     
            <p>Welcome to the Campaing Tracker App.</p>               
            <p>Powered by <mark className={css.initialA}>H</mark>exes <mark className={css.initialA}>O</mark>n <mark className={css.initialA}>T</mark>he <mark className={css.initialB}>W</mark>eb™</p>    
            </header>

            <div className={css.gates}>
                <div className={css.gateContainer}>
                <p className={css.userGate}>Visitor:</p>
                <img className={css.gate} src={visitor} alt="visitor" onClick={inComingVisitorHandler}/>
                </div>
            
                <div className={css.gateContainer}>
                <p className={css.userGate}>Admin:</p>
                <img className={css.gate} src={admin} alt="admin" />
                </div>
           
                <div className={css.gateContainer}>
                <p className={css.userGate}>User: </p>
                <img className={css.gate} src={user} alt="user" onClick={inComingUserHandler}/>
                </div>
            
            </div>
            {/* TODO: get an custom username from the visitor */}
            { isLogging && userType === 'visitor' ? loginModalVisitor(): null}
            { isLogging && userType === 'user' ? loginModalUser() : null }
        </div>
    );
}

export default Home;
