import React, { useEffect, useState } from 'react';
//components:
import Button from './Button';
//style:
import css from './AddCard.module.css';
//redux:
import { useDispatch, useSelector } from 'react-redux';
import {changeFormationName, changeComposition, changeS_description, changeL_description, changeImage, changeFaction, changeSubFaction} from '../../features/formation/formationSlice';
import {formNameSelector,
    compositionSelector,
    s_descriptionSelector,
    l_descriptionSelector,
    imageSelector, factionSelector, subfactionSelector} from '../../features/formation/formationSlice';

//functions:
import { factions, Formation } from '../../functions/Objects';

function CreateFormation() {
    const dispatch = useDispatch()
    const [factionList, setFactionList] = useState([])
    const [unitList, setUnitList,] = useState([]);
    const [isComposition, setIsComposition] = useState(false);
    const [totalPointCost, setTotalPointCost]= useState(0);

    useEffect(() => {
        //populate the factions names
        const temp = [];
            for (let faction in factions){
                temp.push(factions[faction]['name']);
            }
        setFactionList(temp);
    }, []);

    const nameFormation = useSelector(formNameSelector);
    const composition = useSelector(compositionSelector);

    const s_description = useSelector(s_descriptionSelector);
    const l_description = useSelector(l_descriptionSelector);
    const image = useSelector(imageSelector);
    const faction = useSelector(factionSelector);
    const subfaction = useSelector(subfactionSelector);

    //handlers
    const nameHandler = (e) => {
        dispatch(changeFormationName(e.target.value));
    }

    const s_descriptionHandler = (e) => {
        dispatch(changeS_description(e.target.value));
    }

    const l_descriptionHandler = (e) => {
        dispatch(changeL_description(e.target.value));
    }

    const imageHandler = (e) => {
        dispatch(changeImage(e.target.value));
    }

    const factionHandler = (e) => {
        dispatch(changeFaction(e.target.value));
    }

    const subfactionHandler = (e) => {
        dispatch(changeSubFaction(e.target.value));
    }

    const addFormation = (e) =>{
        const tempComposition = composition;
        if (nameFormation && composition.length > 0 && s_description && faction && subfaction){
            const newFormation = new Formation(nameFormation, tempComposition, s_description, l_description, image, faction, subfaction);
            //TODO: add to database
            console.log(newFormation);
            const form = e.nativeEvent.path[1];
            //reset form
            Array.from(form.elements).forEach(element => {
                console.log(element.name === "faction")
                if(element.name === "faction"){
                    element.value = "default";
                }else{
                    element.value = "";
                }
              });
            //reset state:
            dispatch(changeFormationName(undefined));
            dispatch(changeComposition([]));
            dispatch(changeS_description(""));
            dispatch(changeL_description(""));
            dispatch(changeImage(""));
            dispatch(changeFaction(undefined));
            dispatch(changeSubFaction(undefined));
        }else{
            console.log('empty field(s) modal')
        };
    };

    //UI elements
    const displayFactions = () => {
        return(   
            factionList.map((factionItem, i) => (
                <option value={factionItem} key={i} >{factionItem}</option>
            ))
        )
    };

    useEffect(() => {
        console.log(composition.length > 0)
        if(composition.length > 0){
            const temp = [];
            let tempPoints = 0;
            for(let unit in composition){  
                temp.push(composition[unit].name);
                //console.log(parseInt(composition[unit].point_const, 10));   
                tempPoints += parseInt(composition[unit].point_const, 10);  
                //console.log(composition[unit]);       
            };
            setUnitList(temp);
            if (composition.length > 0){
                setIsComposition(true);
            }else{
                setIsComposition(false);
            };
            setTotalPointCost(tempPoints);
        };
    }, [composition]);
   
  return (
    <div>
        <h2>CreateFormation</h2>
        <div>
            <form>
            <input className={css.addCardInput} type="text" name="name" placeholder='Name...' onChange={nameHandler}/>

            <select name="faction" defaultValue='default' onChange={factionHandler} >
                <option value="default" disabled> faction... </option>
                {displayFactions()}
            </select>

            <input className={css.addCardInput} type="text" name="subfaction" placeholder='subfaction...' 
            onChange={subfactionHandler}
            />

            <input className={css.addCardInputText} type="text" name="s_description" placeholder='Max 3 words description... ' 
            onChange={s_descriptionHandler}
            />

            <textarea className={css.addCardInputText} type="text" name="l_description" placeholder='Write a detailed description of this formation... (optional)' 
            onChange={l_descriptionHandler}
            />

            <input className='addCard-input' type="text" name="image" placeholder='Image url... (optional)' 
            onChange={imageHandler}
            />

            <p>Units in this formation: </p>
            <ol>
                {unitList.map((unitName, i) => (
                    <li key={i}>{unitName}</li>
                ))}
            </ol>
            { !isComposition ? <p style={{color:"tomato"}}>[ No units added yet ] </p>: null}

                <Button caption={'Add Formation'} action={addFormation}/>
            </form>
            <h3>Total: {totalPointCost}pts </h3>
            
          
            {image && <img src={image} style={{width:"75px", borderRadius:"5px"}}/>}
        </div>
    </div>
  )
}

export default CreateFormation;