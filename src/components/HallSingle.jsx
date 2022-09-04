import React from 'react'
import NavBar from '../small_components/NavBar';
import { useLocation } from 'react-router-dom';

function HallSingle() {
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