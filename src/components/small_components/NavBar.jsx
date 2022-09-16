import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './navBar.module.css';
import Button from './Button';
import logo from '../logo.svg'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loggedSelector } from '../features/logged/loggedSlice';
import { changeLogStatus, changeUser } from '../features/logged/loggedSlice';



function NavBar() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

const logOutHandler = () => {
    dispatch(changeLogStatus(null));
    dispatch(changeUser(undefined));
    navigate('/');
}

  return (
 
        <nav className={css.navbar}>
         <div className={css.logo}>
                <img src={logo} alt="logo" className={css.logo}/>
         </div>

          <ul>
            <li><Link to="/hall"> Hall </Link></li>
            <li><Link to="/newcampaign"> New Campaign </Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/myarmy">My Army</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Button caption="Log Out" action={logOutHandler}/>
        </nav>
        
  )
}

export default NavBar;