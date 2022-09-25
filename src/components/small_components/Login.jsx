import React, { useRef, useState, useEffect, useContext } from 'react';
import axios from '../../api/axios';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { changeUserIndex, changeUserName, isLoggedSelector, setIsLogged, userDataSelector, userNameSelector } from '../../features/globalState/globalStateSlice';
import { initializeUser } from '../../features/globalState/globalStateSlice';
//Auth:
import AuthContext from '../../context/AuthProvider';

//components:
import Button from './Button';
import NextPage from './NextPage';

const LOGIN_URL = '/user'; //auth

const Login = () => {
    const isLogged = useSelector(isLoggedSelector);
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();
    const dispatch = useDispatch();
    const currentUser = useSelector(userNameSelector);
    const setCurrentUser = useDispatch(changeUserName());
    const userData = useSelector(userDataSelector)
    const [errMsg, setErrMsg] = useState('');
    const [pwd, setPwd] = useState('');
    const [user, setUser] = useState('');
    //const [userData, setUserData] = useState({});

    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
        setErrMsg('');
    },[user, pwd]);

    const handleSubmit = async () => {
        try{
            const response = await axios.get(LOGIN_URL)
            const data = response.data;
            for(let item in data){
                if (data[item].username === user && data[item].password === pwd){
                    //set
                    dispatch(setIsLogged(true));
                    dispatch(changeUserName(data[item].username));
                    dispatch(changeUserIndex(item))
                    //reset
                    setUser('');
                    setPwd('');
                }
            };

        } catch (err){
            if(!err?.response){
                setErrMsg('No server response');
            } else if (err.response?.status === 400){
                setErrMsg('Missing Username or password');
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
    }


  return (
    <>
    {
        isLogged ? (
            <section>
                <h1>You are logged in!</h1>
                <br />           
                <NextPage pageUrl="/profile" pageName="Profile"/>           
            </section>
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">
                {errMsg}
                </p>
                <h2>Halt !!! Identify yourself... </h2>
                <form>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username..." 
                        onChange={(e)=>setUser(e.target.value)}
                        ref={userRef} 
                        autoComplete="off"
                        value={user}
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password..."
                        onChange={(e)=>setPwd(e.target.value)} 
                        value={pwd}
                        required
                    />

                    <Button caption="log in" action={handleSubmit}/>
                </form>
                <p>
                    Want to enlist for war? <br />
                    {/* put a router her? */}     
                </p>
                <NextPage pageUrl="/signup" pageName="Sign Up"/> 
    </section>
        )
    }
</>
    
  )
}

export default Login;