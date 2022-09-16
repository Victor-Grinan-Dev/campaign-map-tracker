import React from 'react'
import NavBar from './small_components/NavBar';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector, userTypeSelector } from '../features/logged/loggedSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function HallSingle() {
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userSelector);
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