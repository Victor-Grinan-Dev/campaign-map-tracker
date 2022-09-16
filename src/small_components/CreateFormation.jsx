import React, { useEffect, useState } from 'react';

//components:
import Button from './Button';
//style:
import css from './AddCard.module.css';
//redux:
import { useDispatch, useSelector } from 'react-redux';

import {changeFormationName, addUnitToComposition, changeS_description, changeL_description, changeImage, changeFaction, changeSubFaction} from '../features/formation/formationSlice';

import {formNameSelector,
    compositionSelector,
    s_descriptionSelector,
    l_descriptionSelector,
    imageSelector, factionSelector, subfactionSelector} from '../features/formation/formationSlice';

import { factions, Formation } from '../functions/Objects';

function CreateFormation() {
    const [formation, setFormation] = useState({});
    const [factionList, setFactionList] = useState([])

    const [formation_name, set_formation_name] = useState()
    const [formation_composition, set_formation_composition] = useState()
    const [formation_s_description, set_formation_s_description] = useState()
    const [formation_l_description, set_formation_l_description] = useState()
    const [formation_image, set_formation_image] = useState()
    const [formation_faction, set_formation_faction] = useState()
    const [formation_subfaction, set_formation_subfaction] = useState()
    const dispatch = useDispatch();

    const nameFormation = useSelector(formNameSelector);
    const composition = useSelector(compositionSelector);
    const s_description = useSelector(s_descriptionSelector);
    const l_description = useSelector(l_descriptionSelector);
    const image = useSelector(imageSelector);
    const faction = useSelector(factionSelector);
    const subfaction = useSelector(subfactionSelector);

    let testFormation;

    const nameHandler = (e) => {
        dispatch(changeFormationName(e.target.value));
        set_formation_name(e.target.value)
        populateFormation()
    }

    const compositionHandler = (e) => {
        dispatch(addUnitToComposition(e.target.value));
        const temporalComposition = formation_composition;
        temporalComposition.push(e.target.value);
        set_formation_composition(temporalComposition);
        populateFormation();
    }

    const s_descriptionHandler = (e) => {
        dispatch(changeS_description(e.target.value));
        set_formation_s_description(e.target.value);
        populateFormation()
    }

    const l_descriptionHandler = (e) => {
        dispatch(changeL_description(e.target.value));
        set_formation_l_description(e.target.value);
        populateFormation()
    }

    const imageHandler = (e) => {
        dispatch(changeImage(e.target.value));
        set_formation_image(e.target.value);
        populateFormation()
    }

    const factionHandler = (e) => {
        dispatch(changeFaction(e.target.value));
        set_formation_faction(e.target.value);
        console.log(faction)
        console.log(formation_faction)
        populateFormation()
    }

    const subfactionHandler = (e) => {
        dispatch(changeSubFaction(e.target.value));
        set_formation_subfaction(e.target.value)
        console.log(subfaction)
        console.log(formation_subfaction)
        populateFormation()
    }
    //ui components
    const displayUnits = () => {
        
        return(
            composition.map((unit, i) =>{
                <p key={i}>{unit.name}, {unit.skills.type}</p>
            })
        )
    }

    useEffect(() => {
        //populate the factions names
        const tempFactions = [];
            for (let faction in factions){
                tempFactions.push(factions[faction]['name']);
            }
        setFactionList(tempFactions);
    })
    const displayFactions = () => {
        return(
            
            factionList.map((factionItem, i) => (
                <option value={factionItem} key={i} >{factionItem}</option>
            ))
        )
    }
    const populateFormation = () => {
        testFormation = new Formation(formation_name, formation_composition, formation_s_description, formation_l_description, formation_image, formation_faction,formation_subfaction)
        setFormation(testFormation);
        
    }
        
   useEffect(()=>{
    console.log(testFormation)
   },[testFormation])
    
  return (
    <div>
        <h2>CreateFormation</h2>
        <div>
            <form>
            <input className={css.addCardInput} type="text" name="name" placeholder='Name...' onChange={nameHandler}/>

            <select name="faction" defaultValue={'default'} onChange={factionHandler}>
                <option value="default" disabled> faction... </option>
                {displayFactions()}
            </select>

            <input className={css.addCardInput} type="text" name="subfaction" placeholder='subfaction...' onChange={subfactionHandler}/>

            <input className={css.addCardInputText} type="text" name="s_description" placeholder='Max 3 words description... ' onChange={s_descriptionHandler}/>

            <textarea className={css.addCardInputText} type="text" name="l_description" placeholder='Write a detailed description of this formation... (optional)' onChange={l_descriptionHandler}/>

            <input className='addCard-input' type="text" name="image" placeholder='Image url... (optional)' onChange={imageHandler}/>

            <p>Unit in this formation: </p>

            {composition ? displayUnits() : <p style={{color:"tomato"}}>[ No units added yet ]</p>}
                <Button role='submit' caption={'Add Formation'}/>
            </form>
            <h3>Formation data:</h3>
            <p>total points:{}</p>
        </div>
    </div>
  )
}

export default CreateFormation;