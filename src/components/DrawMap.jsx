import React from 'react';

//hooks:
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//redux:
import { useSelector } from 'react-redux';
import { userNameSelector, userTypeSelector } from '../features/globalState/globalStateSlice';

//components:
import BackTo from './small_components/BackTo';
import Button from './small_components/Button';

//style
import css from './DrawMap.module.css';

//function and objects:
import { canvasSquare, canvasHex, generateSqareMap, generateHexagonalMap } from '../functions/mapGenerator';
import { mapReader } from '../functions/positions';

const tilesArrayImages = [
    "blank",
    "planes",
    //"fores_sonja",
    "mountains",
    "forest",
    "hills",
    "swamp"
];

function DrawMap() {
    const userType = useSelector(userTypeSelector);
    const currentUser = useSelector(userNameSelector);
    const emptySqMap = canvasSquare("Unknown Sq Map", 17, 17);
    const emptyHxMap = canvasHex("Unknown Hx Map", 9);
    const mapCanvas = {
        sq:emptySqMap,
        hx:emptyHxMap,
    };
    const [currentMap, setCurrentMap] = useState(emptySqMap);
    const [changingName, setChangingName] = useState(false);
    const [brush, setBrush] = useState ("blank");
    const [showTilesId, setShowTilesId] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
      if (!currentUser && userType==='visitor'){
        navigate('/');
      }
    },[currentUser]);

    const changeData = (e) => {  
        setCurrentMap({ ...currentMap, [e.target.name]: e.target.value });    
    };
    const nameHandler = () => {
        setChangingName(!changingName)
    };
    const shapeHandler = (e) => {
        setCurrentMap(mapCanvas[e.target.value])
    };
    const dimensionsHandler = (e) => {
        
        if(currentMap.shape === "hx"){
            setCurrentMap(canvasHex("Unknown Hx Map", e.target.value))
        }else if(currentMap.shape === "sq"){
           
            setCurrentMap(canvasSquare("Unknown Sq Map", e.target.value.split('x')[0], e.target.value.split('x')[1]));
            mapReader(currentMap.map)
        }
    };
    const resetHandler = () => { 
        const tempNestedArray = currentMap.map;
        tempNestedArray.map(row=>(
            row.map(tile => (
                tile.image ? tile.image = 'blank' : {}
            ))
        ))
        setCurrentMap({ ...currentMap, map: tempNestedArray });
    };
    const changeAllTiles = (toImage=null) => {
        const tempMap = currentMap.map;

        tempMap.map(row => (
            row.map(tile => (
                tile.image ? tile.image = brush : null
            ))
        ))
        setCurrentMap({ ...currentMap, map: tempMap }); 
    };
    const showHxDimension = () => {
        return <>
            <label> 3x </label>
            
            <select name="hexMapSize" onChange={dimensionsHandler} >
                <option  value={null}> Choose </option>
                <option  value="7"> 7 </option>
                <option  value="9"> 9 </option>
                <option  value="11"> 11 </option>
                <option  value="13"> 13 </option>
            </select>
        </>  
    };
    const showSqDimensions = () => {
        return <>
            <select name="hexMapSize" onChange={dimensionsHandler} >
                <option  value={null}> Choose </option>
                <option  value="7x7"> 7x7 </option>
                <option  value="9x9"> 9x9 </option>
                <option  value="11x11"> 11x11 </option>
                <option  value="15x15"> 15x15 </option>
                <option  value="17x17"> 17x17 </option>
                <option  value="19x19"> 19x19 </option>
            </select>
        </>  
    };
    const showTilesIdHandler = () => {
        setShowTilesId(!showTilesId);
    }
    const drawTileHandler = (e, image=brush) => {
        console.log("drawMap-drawtilehandler:", image);
        const tempNestedArray = currentMap.map;
        tempNestedArray.map(row=>(
            row.map(tile => (
                tile.id == e.target.id ? tile.image = image : null
            ))
        ))
        setCurrentMap({ ...currentMap, map: tempNestedArray });
    }
    const brushHandler = (e) => {
        setBrush(e.target.value)
    }
    const brushTool = () => {
        //TODO: read the available options from database.
        return <>
            <select name="brushTool" onChange={brushHandler} >
                <option  value="blank"> blank </option>
                <option  value="planes"> planes </option>
                <option  value="forest_sonja"> forest_sonja </option>
                <option  value="forest"> forest </option>
                <option  value="hills"> hills </option>
                <option  value="swamp"> swamp </option>
                <option  value="mountains"> mountains </option>
            </select>
        </>  
    };
    const percentageArray = (planesPercent = 50,mountainsPercent = 1,forestPercent = 24,hillsPercent = 15, swampPercent= 10) => {

        const planesTiles = new Array(planesPercent).fill(tilesArrayImages[1]);
        const mountainsTiles = new Array(mountainsPercent).fill(tilesArrayImages[2]);
        const forestTiles = new Array(forestPercent).fill(tilesArrayImages[3]);
        const hillsTiles = new Array(hillsPercent).fill(tilesArrayImages[4]);
        const swampTiles = new Array(swampPercent).fill(tilesArrayImages[5]);

        const percentsArray = planesTiles.concat(mountainsTiles, forestTiles, hillsTiles, swampTiles)

        return percentsArray;
    };
    const randomizerHandler = () => {
        const percentSrc = percentageArray();
        const tempMap = currentMap.map;

        tempMap.map(row => (
            row.map(tile => (
                tile.image ? tile.image = percentSrc[Math.floor(Math.random() * percentSrc.length )] : null  
            ))
        ))
        console.log(tempMap)
        setCurrentMap({ ...currentMap, map: tempMap });    
    }

    const cancelHandler = () => {
        navigate('/newcampaign')
        //TODO: empty the state here.
    }
  return (
    <div >
        <div className={css.drawPanel}>
            <BackTo pageUrl={"/newcampaign"} pageName={"Create Campaign"} />

            {changingName ? <span><input type="text" name="name" onChange={changeData}/> <button onClick={nameHandler}>Done</button> </span>:<span><span >"{currentMap.name}"</span> <button onClick={nameHandler}>rename</button></span>}
            <div>
            
            <Button caption="Cancel" action={cancelHandler}/>

            {changingName ? <span><input type="text" name="name" onChange={changeData}/> <button onClick={nameHandler}>Done</button> </span>:<span><span >"{currentMap.name}"</span> </span>}

            <Button caption="save map" />
            </div>
            
        </div>

        <div className={css.sidePanel}>
                <label>Shape: </label> 
                <select name="shape" onChange={shapeHandler}>
                    <option value="sq"> Square </option>
                    <option value="hx"> Hex </option>
                </select>
                <label> Dimension: </label> 
                {currentMap.shape === "sq" ? showSqDimensions() : showHxDimension()}
                <label>Brush</label>{brushTool()}
                <Button action={resetHandler} caption="reset" />
                <Button action={changeAllTiles} caption="change all" />
                <Button action={showTilesIdHandler} caption="show tiles Id" />
                <Button action={randomizerHandler} caption="randomize" />

                <Button caption="player start" />
                <Button caption="buildings" />
                <Button caption="neutral units" />
                <Button caption="hostile unit" />
                <Button caption="hostile bulding" />
                <Button caption="city" />
                <Button caption="neutral units" />
                <Button caption="objective" />
        </div>
        
        {mapReader(currentMap.map, drawTileHandler, showTilesId)}
    </div>
  )
}
export default DrawMap;