import React, { useRef, useState, useEffect, useContext } from 'react';
import axios from '../../api/axios';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { changeUserName, setIsLogged, userNameSelector } from '../../features/globalState/globalStateSlice';

//Auth:
import AuthContext from '../../context/AuthProvider';

//components:
import Button from './Button';
import NextPage from './NextPage';

const LOGIN_URL = '/user'; //auth

const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();
    const dispatch = useDispatch();
    const currentUser = useSelector(userNameSelector);
    const setCurrentUser = useDispatch(changeUserName());
    const [errMsg, setErrMsg] = useState('');
    const [pwd, setPwd] = useState('');
    const [user, setUser] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
        setErrMsg('');
    },[user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);

        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}), {
                
                headers: { 'Content-Type' : 'application/json'},
                withCredentials: true

            });
            setUser('');
            setPwd('');
            dispatch(setIsLogged(true))
            setSuccess(true);
        } catch (err){

        }
    }


  return (
    <>
    {
        success ? (
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