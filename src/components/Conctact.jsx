import React from 'react';

//hooks:
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//redux:
import { useSelector } from 'react-redux';
import { userNameSelector, userTypeSelector } from '../features/globalState/globalStateSlice';

//comoponents:
import NavBar from './small_components/NavBar';

function Conctact() {
    const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userNameSelector);
  const navigate = useNavigate();
    useEffect(()=>{
      if (!currentUser && userType==='visitor'){
        navigate('/');
      }
    },[currentUser]);
  return (
    <div>
      <NavBar />
      <p>Conctacts:</p> 
      </div>
  )
}

export default Conctact