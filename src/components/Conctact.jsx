import React from 'react'
import NavBar from '../small_components/NavBar';
import { useSelector } from 'react-redux';
import { userSelector, userTypeSelector } from '../features/logged/loggedSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Conctact() {
    const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userSelector);
  const navigate = useNavigate();
    useEffect(()=>{
      if (!currentUser && userType==='visitor'){
        navigate('/');
      }
    },[currentUser]);
  return (
    <div>
      <NavBar />
      Conctact
      </div>
  )
}

export default Conctact