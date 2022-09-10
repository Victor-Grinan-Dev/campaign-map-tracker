import React from 'react';
import axios from 'axios';
import css from './AddCard.module.css';
import Button from './Button';
import { ArmyList, Formation, Unit, skills_by_unit_type } from '../functions/Objects';
import { useState } from 'react';
import { useEffect } from 'react';
import { type } from '@testing-library/user-event/dist/type';

//import { capitalStart } from '../functions/functions'
//import { unitTypesArray } from '../functions/objectsGame';

const databaseApi = 'http://localhost:8010/database';
const databaseApi2 = 'http://localhost:8011/database';

const emptyFormation = new Formation("", [], "", "", "");
const emptyUnit = new Unit(1, "", null, null, undefined);

function AddCard() {
    const [formationData, setFormationData] = useState(emptyFormation);
    const [units, setUnits] = useState([emptyUnit]);
    const [types, setTypes] = useState([])

    const changeFormationData = (e) => {
        if(!e.target.value){
          console.log("no data"); 
        }else{
            console.log(e.target.name, ":", e.target.value);
        }
        
        setFormationData({ ...formationData, [e.target.name]: e.target.value });
    };

    const changeUnits = (e, i) => {
      const { name, value } = e.target;
      const unitList = [...units];
      unitList[i][name] = value;
      setUnits(unitList);
      setFormationData({ ...formationData, composition: units });
    };

    const addUnit = (e) => {
      e.preventDefault();
      const newUnit = emptyUnit;
      newUnit.id = units.length + 1;
      setUnits([...units, newUnit])
    }

    const submitData = (e) => {
      e.preventDefault();

        console.log(formationData)
      //axios.post(formationData);
      setFormationData(emptyFormation);
    };

    useEffect(()=>{
        const tempTypes = [];
        for (let item in skills_by_unit_type){
            tempTypes.push(skills_by_unit_type[item]["type"]); 
        }
        setTypes(tempTypes);
    },[]);

    const unitNameInput = (index) =>{
        return (
            <div className={css.singleComponent}>
                <p>Unit name: </p>
                <input type="text" name="name" placeholder='Unit name (Optional)' onChange={(e) => changeUnits(e, index)}/>
            </div>
        )
    }

    const unitTypeInput = (index) =>{
        
        return (
                <div className={css.singleComponent}>
                    <p>Unit_type</p>
                    <select className={css.componentTypeSelect} name="type" onChange={(e) => changeUnits(e, index)}>{
                        types.map((item, i)=>(
                            <option value={item} key={i}> {item} </option>
                        ))
                    }</select>
                </div>
        )

    }

    const unitModelsInput = (index) => {
        return(
            <div className={css.singleComponent}>
                <p>models</p>
                <input type="number" name="models" className={css.numInput} onChange={(e) => changeUnits(e, index)}/>
            </div>
        )
    }
    const unitPointCostInput = (index) => {
        return (
            <div className={css.singleComponent}>
                <p>points</p>
                <input className={css.numInput} type="number" min={1} placeholder="point cost..." name="point_const" onChange={(e) => changeUnits(e, index)}/>
            </div>
        )
    }
    const unitEntry = (index) => {
        return(
            <div className={css.componentLine} key={index}>
                {unitNameInput()}
                {unitTypeInput()}
                {unitModelsInput()}
                {unitPointCostInput()}
            </div>
        )
    }

  return (
    <div className={css.addCardContainer}>
        <form>
        <input className={css.addCardInput} type="text" name="name" placeholder='Name...' onChange={changeFormationData}/>
        <textarea className={css.addCardInputText} type="text" name="sDescription" placeholder='Short Description... (optional)' onChange={changeFormationData}/>
        </form>
        <textarea className={css.addCardInputText} type="text" name="lDescription" placeholder='Long Description... (optional)' onChange={changeFormationData}/>
        <div className={css.components}>

                {
                    //console.log(units)
                    units.map((_,index) => unitEntry(index))
                }
            
                <Button caption="Add unit to formation" action={addUnit}/>

            </div>
    </div>
  )
}

export default AddCard;

/*
<form>
      
            <div className={css.components}>

                {
                    units.map((_,index) => unitEntry(index))
                }
            
                <Button caption="Add unit to formation" action={addUnit}/>

            </div>
            

            <div className={css.components}>

                {
                    units.map((_,index) => unitEntry(index))
                }
            
                <Button caption="Add unit to formation" action={addUnit}/>

            </div>
            
            <input className='addCard-input' type="text" name="image" placeholder='Image url... (optional)' onChange={changeFormationData}/>
            
            <Button caption="Create Formation" role="submit" action={submitData}/>
        </form>
*/