import React from 'react'
import NavBar from '../small_components/NavBar';

import { useSelector } from 'react-redux';
import { userSelector, loggedSelector, userTypeSelector } from '../features/logged/loggedSlice';

function Profile() {
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userSelector);


    const visitorWelcoming = () => {
        console.log(userType);
        if (userType === 'visitor'){
            return <div>
            <h2>first time welcome</h2>
        </div>
        }else{
            return <div>
                <h2>  Welcome back {currentUser} </h2>
            </div>
        }
        
    }

  return (
    <div>
        <NavBar />
       { visitorWelcoming() }

        
    </div>
  )
}

export default Profile