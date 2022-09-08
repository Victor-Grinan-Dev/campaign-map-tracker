import React from 'react';
import axios from 'axios';

//hooks:
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userSelector, userTypeSelector, userIndexSelector } from '../features/logged/loggedSlice';
import { useNavigate } from 'react-router-dom';

//components:
import Card from '../small_components/Card';
import AddCard from '../small_components/AddCard';
import BackTo from '../small_components/BackTo';
import NavBar from '../small_components/NavBar';

//objects:
import { Unit, Formation } from '../functions/Objects';

const databaseApi = 'http://localhost:8011/database';
const visitorDb2 = 'http://localhost:8011/visitors';

function MyArmies() {
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userSelector);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [formations, setformations] = useState([]);
  const [search, setSearch] = useState('');
  const [enlisted, setEnlisted] = useState([]);
  const [loading, setLoading] = useState(false);
  const userIndex = useSelector(userIndexSelector);;

  //useEffect(()=>{
  //  //on page reload, log out.
  //  if (!currentUser && userType==='visitor'){
  //    navigate('/');
  //  }
  //},[currentUser]);

  const formationsFilter = formations.filter((res) => {
    res.name = res.name.toLowerCase()
    return res.name.includes(search.toLowerCase());
  });

  const getData = () => axios.get(visitorDb2)
  //const getformations = () => axios.get(databaseApi);
  const searchHandler = (e) => {
    setSearch(e.target.value); 
    };

  //const currentUserId = 'v01';

    useEffect(() => {
      setLoading(true);
      Promise.all([getData()]).then((res) => {

        console.log(res[0].data[userIndex].formations)
        //const userData = results[0].data.users.filter((user)=>{
        //  return user.id == currentUserId;
        //})
        //const  armyList = userData[0].armyList;
        setformations(res[0].data[userIndex].formations)
        setLoading(false);
      });
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

  return (

    <div className='browseAndAdd-container'>
      <NavBar/>
      <div className="panel">
        <div className='add-card-container'>
        <h1 className='h1-title'>Add Formation:</h1>
          <AddCard />
        </div>

        <div className='info-panel'>
            <h1 className='h1-title'>Army Info: </h1>
          <div className='info-container'>
            
          <div className="enlisted-formations">
              <p>listed formations:</p>
              <ul>
              {enlisted.map((formation, index) => (
                  <li key={index}> - {formation.name} </li>
                  ))}
              </ul>
            </div>
            
            <div className='data-collection'>
                  <p>infantry: 75</p>
                  <p>vehicles: 45</p>
                  <p>total units:10</p>
            </div>   
          </div>
          <p>Total amount of points: </p>
        </div>
      </div>

      <div className='search-container'> 
      <BackTo pageUrl={'/profile'} pageName="Profile"/>
        <input type="text" placeholder='Serach'/></div>
      <div className={"browser"}>

        {
         formations.map(formation => (
          <Card key={formation.id} name={formation.name} description={formation.description} is_selected={formation.is_selected} image={formation.image} />
        ))
         }

      </div>
    </div>
  )
}

export default MyArmies;
