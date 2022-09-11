import React from 'react';
import axios from 'axios';
import css from './AddCard.module.css';
import Button from './Button';
import { ArmyList, Formation, Unit, skills_by_unit_type } from '../functions/Objects';
import { useState } from 'react';
import { useEffect } from 'react';

//import { capitalStart } from '../functions/functions'
//import { unitTypesArray } from '../functions/objectsGame';

const databaseApi = 'http://localhost:8010/database';
const databaseApi2 = 'http://localhost:8011/database';

const emptyFormation = new Formation("", [], "", "", "");
const emptyUnit = new Unit(1, "", null, null, null);

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
      setUnits( unitList );
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
      const name = formationData.name;
      const s_desc = formationData.s_description;
      const l_desc = formationData.l_description;
      const comp = formationData.composition;
      //const formation = new Formation(emptyFormation.name)
        console.log(comp.skills)
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
                <input className={css.addCardInput} type="text" name="name" placeholder='Unit name (Optional)' onChange={(e) => changeUnits(e, index)}/>
            </div>
        )
    }
    const unitTypeInput = (index) =>{
        return (
                <div className={css.singleComponent}>
                    <p>Unit_type</p>
                    <select className={css.addCardInput} name="skills" onChange={(e) => changeUnits(e, index)} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled >Choose...</option>
                        {types.map((type, i)=>(
                            <option value={skills_by_unit_type[type]} key={i}> {type} </option>
                        ))
                    }</select>
                </div>
        )
    }
    const unitModelsInput = (index) => {
        return(
            <div className={css.singleComponent}>
                <p>models</p>
                <input type="number" name="models" className={css.numInput} onChange={(e) => changeUnits(e, index)}placeholder='Models...' min={1} max={30}/>
            </div>
        )
    }
    const unitPointCostInput = (index) => {
        return (
            <div className={css.singleComponent}>
                <p>points</p>
                <input className={css.numInput} type="number" min={1} placeholder="point cost..." name="point_const" onChange={(e) => changeUnits(e, index)} />
            </div>
        )
    }
    const unitEntry = (index) => {
        return(
            <div className={css.componentLine} key={index}>
                {unitNameInput(index)}
                {unitTypeInput(index)}
                {unitModelsInput(index)}
                {unitPointCostInput(index)}
            </div>
        )
    }
    const resetFormHandler = () => {
        resetFormHandler(emptyFormation)
    }
  return (
    <div className={css.addCardContainer}>
        <form>
            <input className={css.addCardInput} type="text" name="name" placeholder='Name...' onChange={changeFormationData}/>
                
            <input className={css.addCardInputText} type="text" name="s_description" placeholder='Write a short description to keep track of your creations... ' onChange={changeFormationData}/>
            <textarea className={css.addCardInputText} type="text" name="l_description" placeholder='Write a detailed description or the story of this formation... (optional)' onChange={changeFormationData}/>
            <div className={css.components}>

                    {
                        units.map((_,index) => unitEntry(index))
                    }
                
                    <Button caption="Add unit to formation" action={addUnit}/>

                </div>
            <input className='addCard-input' type="text" name="image" placeholder='Image url... (optional)' onChange={changeFormationData}/>
            <Button caption="Create Formation" role="submit" action={submitData}/>
        </form>
    </div>
  )
}

export default AddCard;

