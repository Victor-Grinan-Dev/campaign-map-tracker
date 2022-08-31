import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
        <nav>
          <ul>
            <li><Link to="/"> Hall </Link></li>
            <li><Link to="/newcampaign"> New Campaign </Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/myarmy">My Army</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
  )
}

export default NavBar