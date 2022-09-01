

import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {availableMaps} from '../functions/mapGenerator';
import Campaign, {campaign_Object} from '../functions/Objects';
import Button from '../small_components/Button';
import NavBar from '../small_components/NavBar';

import css from './NewCampaign.module.css'
const justiceAlianceColor = "#309abb";
const darkForcesColor = "#830202";
const aliensEtColor = "#1fc778";
const deathMachinesColor = "#395B64";
const beastHordesColor = "#0F3D3E";
const infestationColor = "#D1512D";

//TODO: change to read data from database
const factions = [
    {
        id:"ja",
        name:"The Justice Aliance",
        color:"#309abb"},
    {
        id:"df",
        name:"The Dark Forces",
        color:"#830202"},
    {
        id:"ae",
        name:"The Aliens and ET's",
        color:"#1fc778"},
    {
        id:"dm",
        name:"The Death Machines",
        color:"#395B64"},
    {
        id:"bh",
        name:"The Beast Hordes",
        color:"#0F3D3E"},
    {
        id:"ib",
        name:"The Infestation Bugs",
        color:"#D1512D"
    }
]

const available_maps = availableMaps;

function NewCampaign() {

    const [isMap, setIsMap] = useState(false)
    const [map, setMap] = useState([])
    const [data, setData] = useState(campaign_Object);
    const [database, setDatabase] = useState()

    //data handling fuctions:
    const changeData = (e) => {
        if (e.target.name === "map"){
            const mapName = e.target.value;
            const elementName = e.target.name
            setIsMap(true)
            const choice = available_maps.filter(function(map){
                return map.name === e.target.value
            })           
            setMap(choice[0]);  
            setData({ ...data, playersAmount: choice[0].maxPlayers });
        }else{
            setData({ ...data, [e.target.name]: e.target.value });
        }
        
      };
      useEffect(() => {// this will set the rigth map in the 
        setData({ ...data, "map" : map });
      }, [map])
    const saveCampaignData = (e) => {
        e.preventDefault()
        console.table(data)
        //write to the data base the new campaign
    }
    //html elements:
    const writeCampaignName = () => {
        return (
        <div className={css.section}>
            <p className={css.sectionName}> Campaing Name: </p>
            <input type="text" name="campaignName" className='textImput' onChange={changeData} placeholder="Write a name..." />
        </div>
        )
    }
//className={css.}

    const setGameRounds = () => {
        return(
            <div className={css.section} >
                <p className={css.sectionName} >Game rounds:</p> 
                <input type="number" name="rounds" placeholder="Choose" onChange={changeData} min="3" 
                className={css.numInput}/>
            </div>
        )
    }
    const pickArmySize = () => {
        return (
            <div className={css.section}>
            <p className={css.sectionName}>Army size:</p>
                
            <div className={css.subSectionArea}>
                <p className={css.subSectionName}>Tactic commando size:</p>
                <div className={css.subSection}>
                        
                    <div> 
                        <input  type="radio" name="armySize" defaultValue="100" onClick={changeData} />
                        100pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="200" onClick={changeData} />
                        200pts
                    </div>
                            
                    <div>
                        <input type="radio" name="armySize" defaultValue="300" onClick={changeData} />300pts
                    </div>


                    <div>
                        <input type="radio" name="armySize" defaultValue="400" onClick={changeData} />400pts
                    </div>


                    <div>
                        <input type="radio" name="armySize" defaultValue="500" onClick={changeData} />500pts
                    </div>

                </div>

            </div>

            <div className={css.subSectionArea}>
                <p className={css.subSectionName}>Combat Groups size: </p>
                <div className={css.subSection}>
                    <div>
                        <input type="radio" name="armySize" defaultValue="500" onClick={changeData} />500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="750" onClick={changeData} />750pts
                    </div>
                            
                    <div>
                        <input type="radio" name="armySize" defaultValue="1000" onClick={changeData} />1000pts
                    </div>
                            
                    <div>
                        <input type="radio" name="armySize" defaultValue="1500" onClick={changeData} />1500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="1750" onClick={changeData} />1750pts
                    </div>

                </div>

            </div>

            <div className={css.subSectionArea}>
                <p className={css.subSectionName}>Crusade War size: </p>
                <div className={css.subSection}>
                    <div>
                        <input type="radio" name="armySize" defaultValue="2000" onClick={changeData} />2000pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="2500" onClick={changeData} />2500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="3000" onClick={changeData} />3000pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="3500" onClick={changeData} />3500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="4000" onClick={changeData} />4000pts
                    </div>
                            
                </div>
            </div>

        </div>
        )
    }
    const availableFactions = () => {
        return (
            <div className={css.section} >
                    <p className={css.sectionName}>Available Factions:</p> 
                    ⚠️ Upcoming feature
                    <div>
                    {factions.map(faction => (
                            <div key={faction.id}>
                                <input type="checkbox" name="factions"  /><label htmlFor="factions">{faction.name}</label><span style={{backgroundColor:faction.color, marginLeft:"20px", borderRadius:"20px", 
                            padding:"0 5px 0 5px"}} >_ </span>
                            </div>

                        ))}
                                    {/* <div>            
                                <div >
                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Justice Aliance" /> 
                                        <p>"The Justice Aliance" </p>
                                        <input type="color" defaultValue="#309abb"/>
                                    </div>

                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Dark Forces" /> 
                                        <p>"The Dark Forces"</p> 
                                        <input type="color" defaultValue="#830202"/>
                                    </div>


                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Aliens and ET's" /> 
                                        <p>"The Aliens and ET's" </p>
                                        <input type="color" defaultValue="#1fc778"/>
                                    </div>
                                    

                                    <div className="selectFaction"> 
                                        <input type="checkbox" name="factions" defaultValue="The Death Machines" /> 
                                        <p> "The Death Machines" </p>
                                    
                                        <input type="color" defaultValue={deathMachinesColor} />
                                    </div>
                                    
                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Beast Hordes" /> 
                                        <p>"The Beast Hordes" </p>
                                        <input type="color" defaultValue={beastHordesColor} />
                                    </div>
                                    
                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Infestation Bugs"  /> 
                                    <p> "The Infestation Bugs" </p>
                                        <input type="color" defaultValue={infestationColor} />
                                    </div>
                                    
                                </div> 
                        </div> */}
                    </div>
            </div>
        )
    }
    const pickMap = () => {
        
        return (
            <div className={css.section}>
            <p className={css.sectionName}>Available maps: </p>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }}>
                <div>      
                    {available_maps.map(option => (
                        <div key={option.name}>
                            <input type="radio" name="map" defaultValue={option.name} onClick={changeData} /> 
                            <label htmlFor={option.name}>{option.name}</label>
                        </div>       
                    ))}                        
                </div> 
                <div>
                    <Link to={"/drawmap"}> <button>Draw a map in blank canvas</button> </Link>
                </div>
            </div>
        </div>
        )
    }

    const mapData = (data) => {
        return <div>
            <p>Map name: {data.name}</p>
            <p>Shape: {data.shape}</p>
            <p>Dimensions: {data.dimensions}</p>
            <p>max players: {data.maxPlayers}</p>
        </div>
    }
    const mapArea = () => {
        return(
            <div className={css.section} >
                <p className={css.sectionName}>Map:</p> ⚠️ Upcoming feature
                {isMap ? <Link to={map.name} state={{map:map}} >
                        <button>Show</button>
                    </Link> : <button disabled>Show</button> }
                <div style={{
                    backgroundColor:"black",
                    width:300,
                    height:200
                }}>
                    {/* {isMap && console.log(data.map)} */}
                    {isMap &&  mapData(data.map) }
                    
                </div>
                <div className={css.mapTile}>
                </div>
            </div>
        )
    }
    const setPlayerAmount = () => {
        let players = data.map.maxPlayers
        return(
            <div className={css.section} >
                <p className={css.sectionName}>Amount of players:</p>    
                <div className='flexRow'>
                <div>
                    <input type="number" name="playersAmount" max={players} min={2} onChange={changeData} placeholder="Choose" className='numInput'/> 
                </div>
                <div className='extraInfo'>                    
                    <p>max: {players}</p>
                    <p>min: {2}</p>
                </div>
                </div>        
                
            </div>
        )
    }

  return (
    <div className="NewCampaign">
        <NavBar />
        
        <form onSubmit={saveCampaignData}>

            {writeCampaignName()}
                    
            {pickArmySize()}

            {setGameRounds()}    

            {availableFactions()}

            {pickMap()}

            {/*mapArea() */}

            {setPlayerAmount()}
   
            {/* <div className="section" >     
                    <p className='sectionName'>Campaing Code: "{data.campaignName}": {data.armySize}-{data.mapShape}-{data.mapSize}-{data.playersAmount}p-f{data.factionCode}-{data.rounds}r </p>
                </div> */}

                <div>
                    <Button caption={"Create"} role={"submit"} />    
                    <Button caption={"Cancel"} /> 
                </div>
            </form>
    </div>
  )
}

export default NewCampaign;


