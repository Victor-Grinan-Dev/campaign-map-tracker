import React from 'react';
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
    const unitModels = useSelector//(unitModelsSelector);
    const unitPointCost = useSelector//(unitPointConstSelector);
    const unitSkills = useSelector(skillsSelector);
    console.log(unitSkills)
    //dispatch(changeSkills('transport_tank'))
  return (
    <div>
        
       

    </div>
  )
}

export default AddCard2;