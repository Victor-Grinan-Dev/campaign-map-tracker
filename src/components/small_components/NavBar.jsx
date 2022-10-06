import React from 'react';

//hooks:
import { Link, useNavigate } from 'react-router-dom';

//redux:
import { useDispatch } from 'react-redux';
import { changeUserName, changeUserType, setIsLogged } from '../../features/globalState/globalStateSlice';

//components:
import Button from './Button';

//style:
import css from './navBar.module.css';
import logo from '../../logo.svg';

//function and objects:

function NavBar() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

  const logOutHandler = () => {
      dispatch(setIsLogged(false));
      dispatch(changeUserType(undefined))
      dispatch(changeUserName(undefined));
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
            <li><Link to="/game">test game</Link></li>
          </ul>

          <Button caption="Log Out" action={logOutHandler}/>
        </nav>     
  )
}

export default NavBar;