import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './navBar.module.css';
import Button from './Button';
import logo from '../../logo.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeUserIndex, loggedSelector, userIndexSelector, userTypeSelector } from '../../features/logged/loggedSlice';
import { changeLogStatus, changeUser } from '../../features/logged/loggedSlice';
import { deleteData } from '../../services/db2connAxios';
import axios from 'axios';

const url = 'http://localhost:8011/visitors';

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userType = useSelector(userTypeSelector);
  const  userIndex = useSelector(userIndexSelector);
  const logOutHandler = () => {

    dispatch(changeLogStatus(null));
    dispatch(changeUser(undefined));
    dispatch(changeUserIndex(undefined));
    navigate('/');
    console.log('TODO: erase the profile creted for this user:', userType, 'at db2 index', userIndex);
/*
    axios.delete( url + '/' + userIndex).catch(err => {
      console("delete error", err);
    });
*/ 
}

  return (
 
        <nav className={css.navbar}>
         <div className={css.logo}>
                <img src={logo} alt="logo" className={css.logo}/>
         </div>

          <ul>
            <li><Link to="/hall"> Campaigns </Link></li>
            <li><Link to="/newcampaign"> New Campaign </Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {/* <li><Link to="/myarmy">My Army</Link></li> */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/game">TEST GAME</Link></li>
          </ul>

          <Button caption="Log Out" action={logOutHandler}/>
        </nav>
        
  )
}

export default NavBar;