import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData, userDataSelector } from '../../features/globalState/globalStateSlice';



const AdminLogin = () => {
    const dispatch = useDispatch();
    const userData = useSelector(userDataSelector);
  
    useEffect(()=>{
        dispatch(changeUserData(localStorage.getItem("CMT")));
        console.log(userData)
    },[]);

  return (
    <div>AdminLogin</div>
  )
}

export default AdminLogin