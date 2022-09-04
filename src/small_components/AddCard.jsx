import React from 'react';
import axios from 'axios';
import css from './AddCard.module.css';
import Button from './Button';
import { ArmyList, Formation, Unit } from '../functions/Objects';
import { useState } from 'react';
import { useEffect } from 'react';
import { capitalStart } from '../functions/functions'
import { unitTypes } from '../functions/objectsGame';



const databaseApi = 'http://localhost:8010/database';
const formationsEndPoint = '/users/0/formations';
const armyListEndPoint = '/users/0/army_lists';

const sampleUnit = new Unit(1,"sample 1", 5, 100, unitTypes.infantry);
const sampleFormation = new Formation(2, "sampl2 form", [sampleUnit]);
const sampleArmy = new ArmyList('sample army', [sampleFormation],)


function AddCard() {

    const [formationData, setFormationData] = useState(new Formation(undefined, "", []));
    const [units, setUnits] = useState([new Unit(1, "", null, null, null, "")]);
   
    const changeFormationData = (e) => {
        setFormationData({ ...formationData, [e.target.name]: capitalStart(e.target.value) });
      };

      /*//TODO: read the unitTypes available from the database.
       //const [unitTypes, setUnitTypes] = useState()
      useEffect(() => {
        const alltypes = [];
        axios.get(databaseApi).then(res => {
            res.data.units.types.forEach(type => {
                alltypes.push(type) 
            })
        })
        setUnitTypes(alltypes)
        //console.log(unitTypes)
      },[])
      */
 

      const changeUnits = (e, i) => {
        const { name, value } = e.target;
        const unitList = [...units];
        unitList[i][name] = value;
        setUnits(unitList);
        setFormationData({ ...formationData, composition: unitList });
        console.log(formationData)
      };

      const addUnit = (e) => {
        e.preventDefault();
        const newUnit = new Unit(units.length + 1, "", null, null, null, "");
        setUnits([...units, newUnit])
      }

      const submitData = (e) => {
        e.preventDefault()
        axios.get(databaseApi + formationsEndPoint).then(res => {
            console.log(res.data)
            
        })
        //axios.post(, formationData);
        setFormationData(new Formation(undefined, "", []));
      };

  return (
    <div className={css.addCardContainer}>
        <form>

            <input className={css.addCardInput} type="text" name="name" placeholder='Name...' onChange={changeFormationData}/>
            <textarea className={css.addCardInputText} type="text" name="sDescription" placeholder='Short Description... (optional)' onChange={changeFormationData}/>
            <textarea className={css.addCardInputText} type="text" name="lDescription" placeholder='Long Description... (optional)' onChange={changeFormationData}/>

            <div className={css.components}>

                {
                    units.map((_,index) => {
                        return (
                            <div className={css.componentLine} key={index}>
                                <div className={css.singleComponent}>
                                    <p>Unit name: </p>
                                    <input type="text" name="name" placeholder='Unit name (Optional)' onChange={(e) => changeUnits(e, index)}/>
                                </div>
                                <div className={css.singleComponent}>
                                    <p>Unit type</p>
                                    <select className={css.componentTypeSelect} name="type" onChange={(e) => changeUnits(e, index)}>
                                        <option value='none'> Choose Type </option>
                                        {unitTypes.map((type) => 
                                            <option 
                                            value= {type.type}
                                            key={type.id}
                                            >
                                            - {type.type}

                                            </option>
                                        )}  
                                    </select>
                                </div>
                                
                                
                                <div className={css.singleComponent}>
                            <p> move</p>
                                <select className={css.componentTypeSelect} name="movement" onChange={(e) => changeUnits(e, index)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                </div>

                                
                                <div className={css.singleComponent}>
                                    <p>models</p>
                                    <select className={css.componentTypeSelect} name="models" onChange={(e) => changeUnits(e, index)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                    </select>
                                </div>

                                <div className={css.singleComponent}>
                                    <p>points</p>
                                    <input className={css.numInput} type="number" min={1} placeholder="point cost..." name="point_const" onChange={(e) => changeUnits(e, index)}/>
                                </div>
                            </div>
                        )
                    })
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