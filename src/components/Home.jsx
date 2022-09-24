import React, { useState, useEffect } from 'react';
import axios from 'axios';

//hooks:

//redux:
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { isLoggingSelector, isLoggedSelector, userIndexSelector, userNameSelector, userTypeSelector, toggleIsLoading, setIsLogging,toggleIsLogged, changeUserName, changeUserType, changeUserIndex, toggleIsLogging, initializeData, setIsLogged } from '../features/globalState/globalStateSlice';

//components:
import NextPage from './small_components/NextPage';
import Button from './small_components/Button';
import Login from './small_components/Login';
//style:
import css from './home.module.css';
import logo from '../logo.svg';

//function and objects:
import { User } from '../functions/Objects';

const visitor = "https://source.unsplash.com/R_6kw7NUTLY";
const admin = "https://source.unsplash.com/BoISbSP0HVk";
const user = "https://source.unsplash.com/1vC4ZwkJNdA";

function Home(){

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const dispatch = useDispatch()
    const isLogged = useSelector(isLoggedSelector);
    const isLogging = useSelector(isLoggingSelector);
    const currentUser = useSelector(userNameSelector);
    const userType = useSelector(userTypeSelector);
    const userIndex = useSelector(userIndexSelector);

    const renderErrorMessage = (name) =>{
        name === errorMessages.name && (<div className="error">{errorMessages.message}</div>)
    };

    const userChanger = (e) => {
        dispatch(changeUserName(e.target.value));
    }

    const displayUserType = (text = "Incoming") => {
        console.log(text, userType, "!");
    }
    const inComingVisitorHandler = () => {
        dispatch(changeUserType('visitor'));
        dispatch(toggleIsLogging()); //set logging to true      
       // displayUserType("user type switch to: ")
    };

    const inComingUserHandler = () => {   
        dispatch(toggleIsLogging()); //set logging to true
        dispatch(changeUserType('user'));
       // displayUserType("user type switch to: ")
    };

    const createVisitorUser = () => {
        dispatch(changeUserIndex());
        //TODO:
        //1- create new user with dummy database.
        //2- populate this new user formations with dummy formation cards.

        /*
        const newUser = new User(userIndex, currentUser, null, null);
        axios.post(visitorEndPoint, newUser) //use middleware instead
        .then(() => {
            axios.get(visitorEndPoint).then(res => {
                console.log(res.data)
            });
        });
        */
        dispatch(changeUserType('visitor'));
        dispatch(initializeData(userType)); //reads database
        displayUserType();
        dispatch(setIsLogged(true));
        dispatch(setIsLogging(false));
    };

    const displayModal = () => {
        if (isLogging){
            if (userType === 'visitor'){
                return loginModalVisitor()
            }else if (userType === 'user'){
                return <Login />
            }
        }
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
      };
    // JSX code for login form
    const renderForm = (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
            <input type="submit" />
            </div>
        </form>
        </div>
    );
    const loginModalVisitor = () => {
        return <div>
            <h2>Oh, Hello there! </h2>
            <p>How should we call you?</p>
            <input type="text" name="tempUsername" placeholder="write a username..." onChange={userChanger}/>
            { currentUser && <NextPage pageUrl={"/profile"} pageName={"Welcome Page"} action={createVisitorUser}/>} 
        </div>
    }

    const loginUser = () => {
        dispatch(changeUserType('user'));
        displayUserType()
    }

    const loginModalUser = () => {
        return <Login/>
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
            { displayModal()}
        </div>
    );
}

export default Home;
