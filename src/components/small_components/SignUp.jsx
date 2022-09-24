import React, {useEffect, useRef, useState} from 'react';
import axios from '../../api/axios';
import { getIsUsernameDuplicated } from '../../services/db2connAxios';

//components:
import NextPage from './NextPage';
import Button from './Button';
import BackTo from './BackTo';
import { User } from '../../functions/Objects';

const userImage = "https://source.unsplash.com/1vC4ZwkJNdA";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; //4 to 24
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/; //(?*=.*[!"$@€£%"])

const USER_URL = "/user";

function SignUp() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [isUsernameTaken, setIsUsernameTaken] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
        const result = USER_REGEX.test(user);
        //console.log(result);
        //console.log(user);
        setValidName(result);
    },[user]);

    useEffect(()=>{
        const result = PWD_REGEX.test(pwd);
        //console.log(result);
        //console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    },[pwd, matchPwd]);

    useEffect(()=>{
        setErrMsg('');
    },[user, pwd, matchPwd]);


    useEffect(()=>{
        
        axios.get('/user').then(res=>{
            setIsUsernameTaken(false);
            for (let item in res.data){
                if (res.data[item].username === user){
                    setIsUsernameTaken(res.data[item].username === user);
                }
            }  
        },
    )
        
    },[user]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1||!v2){
            setErrMsg("Invalid Entry");
            //set an alarm here and log  
        }
        try {
            const newUser = new User(user, pwd);
            const response = await axios.post(USER_URL, JSON.stringify(newUser),
            {
                headers: { "Content-Type": "application/json"},
                withCredentioals: true 
            }
            );
            console.log(response.data);
            setSuccess(true);
        } catch (error) {
            if (!error.response){
                setErrMsg('No server response');
            }else if(errMsg.response?.status === 409){
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
        
    }
  return (
    <>
    <div style={{
        display:"grid",
        placeContent:"center"
    }}>
        
    <img src={userImage} alt="user Image" 
        style={{ 
            filter: "grayscale(100%)",
            height: "50vh"
            }}
    />
    {
        success ? (
            <section >
                <h1>You are Signed up!</h1>
                <br />           
                <NextPage pageUrl="/" pageName="Front page"/>           
            </section >
        ) : (
            <section style={{width:"300px"}}>
                <p ref={errRef} className={ errMsg ? "errMsg" : "invisible"} aria-live="assertive">
                {errMsg}
                </p>
                <h2>Enlist soldier, dutty calls... </h2>
                <form>
                    <label htmlFor="username">
                        Username:
                        <span className={validName && !isUsernameTaken ? "valid" : "inexistent"}>
                        ✅
                        </span>
                        <span className={validName || !user ? "inexistent" : "invalid"}>
                        ❌
                        </span>
                        <span className={!isUsernameTaken ? "inexistent" : "invalid"}>
                        ❌
                        </span>
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username..." 
                        onChange={(e)=>setUser(e.target.value)}
                        ref={userRef} 
                        autoComplete="off"
                        value={user}
                        aria-invalid={validName ? false : true}
                        aria-describedby="uidnote"
                        onFocus={()=>setUserFocus(true)}
                        onBlur={()=>setUserFocus(false)}
                        required
                    />
                    <label htmlFor="password">
                        Password:
                        <span className={validPwd ? "valid" : "inexistent"}>
                        ✅
                        </span>
                        <span className={validPwd || !pwd ? "inexistent" : "invalid"}>
                        ❌
                        </span>
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password..."
                        onChange={(e)=>setPwd(e.target.value)} 
                        value={pwd}
                        required
                        aria-invalid={validPwd ? false : true}
                        aria-describedby="pwdnote"
                        onFocus={()=>setPwdFocus(true)}
                        onBlur={()=>setPwdFocus(false)}
                        
                    />
                    <label htmlFor="match">
                        Confirm Password:
                        <span className={ validMatch && matchPwd ? "valid" : "inexistent"}>
                        ✅
                        </span>
                        <span className={ validMatch || !matchPwd ? "inexistent" : "invalid"}>
                        ❌
                        </span>
                    </label>
                    <input 
                        type="password" 
                        name="match" 
                        placeholder="Confirm Password..."
                        onChange={(e)=>setMatchPwd(e.target.value)} 
                        value={matchPwd}
                        required
                        aria-invalid={validPwd ? false : true}
                        aria-describedby="matchnote"
                        onFocus={()=>setMatchFocus(true)}
                        onBlur={()=>setMatchFocus(false)}
                    />

                    <Button caption="Sign Up" action={handleSubmit} disabled={!validName || !validPwd || !validMatch || isUsernameTaken ? true : false}/>
                </form>
                <p>
                    Are you already enlisted? <br />    
                </p>
                <BackTo pageUrl="/" pageName="Log in"/>    
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "inexistent"} >
                    4 to 24 characters. <br />
                    Must begin with a letter. <br />
                    Allowed: letters, numbers, underscores and hyphens.
                </p>
                <p id="uidnote" className={userFocus && user && isUsernameTaken ? "UsernameTaken" : "inexistent"} >
                    Username Taken
                </p>
                <p id="pwdnote" className={ pwdFocus && pwd && !validPwd ? "instructions" : "inexistent"} >
                    8 to 24 characters. <br />
                    Must include upperCase and lowercase letter and a number. <br />
                    {/*Allowed special characters: @ # ! $ € £ %*/}
                </p>
                <p id="matchnote" className={ matchFocus && matchPwd && !validMatch ? "instructions" : "inexistent"} >
                    Must match the password. <br />
                    {/*Allowed special characters: @ # ! $ € £ %*/}
                </p>
    </section>
        )
    }
    </div>
    </>
    
  )
}

export default SignUp;