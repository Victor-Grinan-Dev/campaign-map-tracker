import React from 'react';
import axios from 'axios';

//hooks:
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//redux:
import { useDispatch, useSelector } from 'react-redux';
import { userNameSelector, userTypeSelector , userIndexSelector, formationsSelector, searchSelector, changeSearch, toggleIsLoading, setIsLoading } from '../features/globalState/globalStateSlice';
import { isLoadingSelector } from '../features/globalState/globalStateSlice';

//components:
import Card from './small_components/Card';
import BackTo from './small_components/BackTo';
import NavBar from './small_components/NavBar';
import CreateUnit from './small_components/CreateUnit';
import Button from './small_components/Button';
import CreateFormation from './small_components/CreateFormation';

//function and objects
import { Unit, Formation } from '../functions/Objects';
import { skills_by_unit_type } from '../functions/Objects';
import { unitTypesArray } from '../functions/objectsGame';

//style:

//console.log(unitTypes)
/*
const dog = new Unit(1, "firulais", 1, 15, skills_by_unit_type.beast);
const victor = new Unit(2, "dt-26", 5, 100, skills_by_unit_type.infantry);
const victor3 = new Unit(3, "dt-26", 5, 100, skills_by_unit_type.infantry);
const transport = new Unit(4, "victor's transport", 1, 150, skills_by_unit_type.transport_tank);
transport.skills.movement = 4
const yoamelInABike = new Unit(5, "yoamel", 1, 55, skills_by_unit_type.rider)
const yoamelInABike2 = new Unit(6, "yoamel", 1, 55, skills_by_unit_type.rider)
const yoamelInABike3 = new Unit(7, "yoamel", 1, 55, skills_by_unit_type.rider)
const victor2 = new Unit(8, "dt-26", 10, 100, skills_by_unit_type.infantry);
const transport2 = new Unit(9, "victor's transport", 1, 150, skills_by_unit_type.transport_tank);

const riding_victor = new Formation("riding victor", [yoamelInABike, yoamelInABike2, yoamelInABike3, victor, victor3, transport, victor2, transport2, dog], "assault", "is just me as a lone wolve model assaulting in a tank", "https://i.pinimg.com/474x/5d/69/1c/5d691c4e1e7b4a6f9913033d805e301e.jpg")
*/
//console.log(riding_victor)
const databaseApi = 'http://localhost:8011/database';
const visitorEndPoint = 'http://localhost:8011/visitor';

function MyArmies() {
  const dispatch = useDispatch();
  
  const loading = useSelector(isLoadingSelector);
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userNameSelector);
  const formations = useSelector(formationsSelector);
  const search = useSelector(searchSelector);
  const userIndex = useSelector(userIndexSelector);;

/*
  useEffect(()=>{
    //on page reload, log out.
    if (!currentUser && userType==='visitor'){
      ('/');
    }
  },[currentUser]);
*/

  const formationsFilter = formations.filter((item) => {
    return item?.name?.toLowerCase().includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    dispatch(changeSearch(e.target.value)); 
    };

  useEffect(() => {  
    dispatch(setIsLoading(true));
    if(formations.length > 0){
      console.log(formations) 
      dispatch(setIsLoading(false));
    }
  }, [formations]);

  if (loading) {
    return(
    <div className='browseAndAdd-container'>
      <NavBar/>
      <div className="panel">

        <div className='add-card-container'>
        <CreateFormation />
        </div>
        <div className='add-card-container'>
          <CreateUnit />
        </div>
      </div>

      <div className='search-container'> 
      
        <input type="text" placeholder='Search...' onChange={searchHandler}/>
        </div>
      <div className={"browser"}>

      <p>Loading...</p>

      </div>
    </div>
     )
  }

  return (

    <div className='browseAndAdd-container'>
      <NavBar/>
      <div className="panel">

        <div className='add-card-container'>
        <CreateFormation />
        </div>
        <div className='add-card-container'>{/* Add unit container */}
          <CreateUnit />
        </div>
      </div>

      <div className='search-container'> 
      
        <input type="text" placeholder='Search...' onChange={searchHandler}/>
        </div>
      <div className={"browser"}>

        {
         formations.map(formation => (
          console.log(formation.name),
          <Card key={formation.id} name={formation.name} description={formation.description} is_selected={formation.is_selected} image={formation.image} />
        ))
         }

      </div>
    </div>
  )
}

export default MyArmies;
/**
<BackTo pageUrl={'/profile'} pageName="Profile"/>
 */
/*
        <div className='add-card-container'>
        <h1 className='h1-title'>Add Formation:</h1>
          <AddCard2 />
          <AddCard />
        </div>

        <div className='info-panel'>
            <h1 className='h1-title'>Formation Info: </h1>
          <div >
            
          <div className="enlisted-formations">
            <p>Name: "Unknown"</p>
          </div>
          
          <div>
          <div className="enlisted-formations">
            <p>Units:</p>
            <ul style={{
              display:"flex",
              flexDirection:"column"
            }}>
                <li key={1}> unit 1 <Button caption={'X'}/></li>
                <li key={2}> unit 2 <Button caption={'X'}/></li>
                <li key={3}> unit 3 <Button caption={'X'}/></li>
            </ul>
          </div>
          </div>
          
            <div className='data-collection'>
                  <p>description: Harrasment unit</p>
                  <p>total damage: 123</p>
                  <p>work force: 12</p>
                  <p>movement: 2</p>
            </div>   
          </div>
          <p>Total amount of points: 12345</p>
        </div>
*/
/*
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
*/