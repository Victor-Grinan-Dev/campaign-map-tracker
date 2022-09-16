import React, { useEffect } from 'react';

//style & UI:
import css from './AddCard.module.css';
import Button from './Button';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { unitNameSelector, unitModelsSelector, unitPointConstSelector, skillsSelector} from '../features/unit/unitSlice';

import {changeUnitName, changeModels, changePointCost, changeSkills} from '../features/unit/unitSlice';

function AddCard2() {
    const dispatch = useDispatch()
    const unitName = useSelector(unitNameSelector);
    const unitModels = useSelector(unitModelsSelector);
    const unitPointCost = useSelector(unitPointConstSelector);
    const unitSkills = useSelector(skillsSelector);
    
    //dispatch(changeSkills('transport_tank'))
/*
    useEffect(()=>{
        dispatch(changeSkills('infantry'));
        dispatch(changeModels(5));
        dispatch(changePointCost(90));
        dispatch(changeUnitName('the cool infantry'));
    },[])
*/
    
  return (
    <div style={{backgroundColor:"blue"}}>
        <div >AddCard2</div>
        <p>unitName: {unitName}</p>
        <p>unitModels: {unitModels}</p>
        <p>unitPointCost: {unitPointCost}</p>
        <p>type: {unitSkills}</p>

    </div>
  )
}

export default AddCard2;