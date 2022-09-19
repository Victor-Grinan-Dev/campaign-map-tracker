import React, {useEffect} from 'react';
//data:
import { skills_by_unit_type, Unit } from '../../functions/Objects';

//comopents:
import Button from './Button';

//redux:
//unit
import { useDispatch, useSelector } from 'react-redux';
import { unitIdSelector, unitNameSelector, unitModelsSelector, unitPointConstSelector, skillsSelector} from '../../features/unit/unitSlice';
import {changeUnitId, changeUnitName, changeModels, changePointCost, changeSkills} from '../../features/unit/unitSlice';
//formation
import { compositionSelector } from '../../features/formation/formationSlice';
import { addUnitToComposition } from '../../features/formation/formationSlice';

function CreateUnit() {
    const skillsByUnitType = [];
    const dispatch = useDispatch();

    //from formation slice:
    const unitList = useSelector(compositionSelector);

    //from unit slice
    const unitId = useSelector(unitIdSelector);
    const unitName = useSelector(unitNameSelector);
    const unitModels = useSelector(unitModelsSelector);
    const unitPointCost = useSelector(unitPointConstSelector);
    const unitSkills = useSelector(skillsSelector);

 
    for(let unitType in skills_by_unit_type){
        skillsByUnitType.push(unitType)
    }
        
  const addUnitToFormation = () => {
    
    dispatch(changeUnitId())
    
    const newUnit = new Unit(unitId, unitName, unitModels, unitPointCost, skills_by_unit_type[unitSkills] )
    
    dispatch(addUnitToComposition(newUnit))

    console.log(newUnit)
  }


  return (
    <div>
        <h2>Create Unit</h2>
        <div>
            <p>id: {unitId} - "{unitName}" - {unitSkills} - {unitModels} models - {unitPointCost}pts </p>         
            <form>
                <p>Name:</p>
                <input type="text" onChange={(e)=>dispatch(changeUnitName(e.target.value))}/>
                <p>Unit Type:</p>
                <select name="unitTypeSkills" id="" onChange={(e)=>dispatch(changeSkills(e.target.value)) } defaultValue='Choose' >
                    <option value="Choose" disabled> Choose...</option>
                    {
                    skillsByUnitType.map((skill, i) => (
                        <option value={skill} key={i}>{skill}</option>
                    ))
                    }
                </select>
                <p>Models:</p>
                <input type="number" onChange={(e)=>dispatch(changeModels(e.target.value))}/>
                <p>Point cost:</p>
                <input type="number" onChange={(e)=>dispatch(changePointCost(e.target.value))}/>
                <Button  caption={' <<< Add Unit to Formation'} action={addUnitToFormation}/>
            </form>
        </div>
    </div>
  )
}

export default CreateUnit;

/*
role='submit'
*/