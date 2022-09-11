import React, {useEffect} from 'react';
//comopents:
import Button from './Button';

//redux:
import { useDispatch, useSelector } from 'react-redux';
import { unitNameSelector, unitModelsSelector, unitPointConstSelector, skillsSelector} from '../features/unit/unitSlice';
import {changeUnitName, changeModels, changePointCost, changeSkills} from '../features/unit/unitSlice';

function CreateUnit() {
    const dispatch = useDispatch()
    const unitName = useSelector(unitNameSelector);
    const unitModels = useSelector(unitModelsSelector);
    const unitPointCost = useSelector(unitPointConstSelector);
    const unitSkills = useSelector(skillsSelector);
    useEffect(()=>{
        dispatch(changeSkills('infantry'));
        dispatch(changeModels(5));
        dispatch(changePointCost(90));
        dispatch(changeUnitName('the cool infantry'));
    },[])
  return (
    <div>
        <h2>Create Unit</h2>
        <div>
            <form>
                <Button role='submit' caption={'Add Unit to Formation <<<'}/>
            </form>
        </div>
    </div>
  )
}

export default CreateUnit;