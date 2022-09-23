import React, {useEffect, useRef, useState} from 'react';

//components:
import NextPage from './NextPage';
import Button from './Button';
import BackTo from './BackTo';

const userImage = "https://source.unsplash.com/1vC4ZwkJNdA";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; //4 to 24
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/; //(?*=.*[!"$€£%"])
function SignUp() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validateName, setValidateName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validatePwd, setValidatePwd] = useState(false);
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
        console.log(result);
        console.log(user);
        setValidateName(result);
    },[user]);

    useEffect(()=>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidatePwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    },[pwd, matchPwd]);

    useEffect(()=>{
        setErrMsg('');
    },[user, pwd, matchPwd]);
    const handleSubmit = () =>{
        console.log('tada!')
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
                <NextPage pageUrl="/home" pageName="Front page"/>           
            </section >
        ) : (
            <section style={{width:"300px"}}>
                <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">
                {errMsg}
                </p>
                <h2>Enlist soldier, dutty calls... </h2>
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
                    <input 
                        type="password" 
                        name="confirm" 
                        placeholder="Confirm Password..."
                        onChange={(e)=>setMatchPwd(e.target.value)} 
                        value={matchPwd}
                        required
                    />

                    <Button caption="Sign Up" action={handleSubmit}/>
                </form>
                <p>
                    Are you already enlisted? <br />
                    {/* put a router her? */}       
                </p>
                <BackTo pageUrl="/" pageName="Log in"/>    
    </section>
        )
    }
    </div>
    </>
    
  )
}

export default SignUp;