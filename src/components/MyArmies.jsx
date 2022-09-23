import React, { useEffect } from 'react';

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

function MyArmies() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingSelector);
  const userType = useSelector(userTypeSelector);
  const currentUser = useSelector(userNameSelector);
  const formations = useSelector(formationsSelector);
  const search = useSelector(searchSelector);
  const userIndex = useSelector(userIndexSelector);;

  const formationsFilter = formations.filter((item) => {
    return item?.name?.toLowerCase().includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    dispatch(changeSearch(e.target.value)); 
    };

  useEffect(() => {  
    dispatch(setIsLoading(true));
    if(formations.length > 0){

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