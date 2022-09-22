import React from 'react';

//hooks:
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//redux:
import { useSelector } from 'react-redux';
import { userNameSelector, userTypeSelector } from '../features/globalState/globalStateSlice';

//components:
import NavBar from './small_components/NavBar';

//style:
//function and objects:

function HallSingle() {
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userNameSelector);
  const navigate = useNavigate();
    useEffect(()=>{
      if (!currentUser && userType==='visitor'){
        navigate('/');
      }
    },[currentUser]);

  const location = useLocation();
  const data = location.state.data;
  
  return (
    <div>
      <NavBar />
      HallSingle
      </div>
  )
}

export default HallSingle