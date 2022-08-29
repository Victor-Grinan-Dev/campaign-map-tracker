import React from 'react';
import { useLocation } from 'react-router-dom';
import { mapReader } from '../functions/positions';
import BackTo from '../small_components/BackTo';

function ShowMap() {

    const location = useLocation();
    const data = location.state.map;
    const map = data.map;
    const mapName = data.name;

    return (
            <div>
                <div style={{ display:"flex", justifyContent:"space-between", width: "100vw", minWidth:"850px"}}>
                    <BackTo pageUrl={"/newcampaign"} pageName={"Create Campaign"} /> 
                    <h3 style={{ display:"inline"}}> {mapName}:</h3>
                    <div style={{ width: "170px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <button>Edit map</button>
                    </div>
                </div>
                {/* TODO: remove styles from here */}
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    minWidth:"100vw",
                    minHeight:"80vh"
                }}>
                    {
                        mapReader(map)
                    }
                </div>
            </div>
          )
}
export default ShowMap