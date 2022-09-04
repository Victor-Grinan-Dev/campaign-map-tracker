import React from 'react';
import axios from 'axios';
import Card from '../small_components/Card';
import { useState, useEffect } from 'react';
import AddCard from '../small_components/AddCard';
import BackTo from '../small_components/BackTo';
import { Unit, Formation } from '../functions/Objects';
import Database from '../functions/dbConnection';
import NavBar from '../small_components/NavBar';
const databaseApi = 'http://localhost:8010/database';

const testUnit1 = new Unit('vg', 'Vitrix guards', 2, 5, 100, "infantry")
const testUnit2 = new Unit('vgT', "Vitrix guards's tank", 4, 1, 125, "transport-tank")
//const formation1 = new Formation(1, "Vitrix Guards", 3, [testUnit1, testUnit2] );

function MyArmies() {
  const [data, setData] = useState({})
  //const [formations, setformations] = useState([formation1]);
  // const [country, setCountry] = useState([]);
  // const [search, setSearch] = useState('');
  const [enlisted, setEnlisted] = useState(undefined)
  const [loading, setLoading] = useState(false);

  // const formationsFilter = formations.filter((res) => {
  //   res.name = res.name.toLowerCase()
  //   return res.name.includes(search.toLowerCase());
  // });

  const getData = () => axios.get(databaseApi)

  const getformations = () => axios.get(databaseApi);
  
  // const searchHandler = (e) => {
  //   setSearch(e.target.value); 
  //   };

  const currentUserId = 'v01';

    useEffect(() => {
      setLoading(true);
      Promise.all([getData()]).then(function (results) {
        const userData = results[0].data.users.filter((user)=>{
          return user.id == currentUserId;
        })
        //const formations = userData[0].formations;
        //const  armyList = userData[0].armyList;
        //setformations(formations)
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

        {/**
         formations.map(formation => (
          <Card key={formation.id} name={formation.name} description={formation.description} is_selected={formation.is_selected} image={formation.image} />
        ))
         */}

      </div>
    </div>
  )
}

export default MyArmies;
