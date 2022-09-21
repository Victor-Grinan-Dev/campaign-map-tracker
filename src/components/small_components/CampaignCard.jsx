import React from 'react'
import Button from '../small_components/Button';
//hooks:
//redux:
//components:
//style:
//function and objects:
function CampaignCard({id, name, players, maxPlayers, rounds, roundDuration}) {
  return (
    
    <div>
        <p>{id} {name} - {players}/{maxPlayers} - {rounds} - {roundDuration} <Button caption="Info" />   </p>
    </div>
  
  
  )
}

export default CampaignCard