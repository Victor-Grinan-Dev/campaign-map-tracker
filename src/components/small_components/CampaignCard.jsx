import React from 'react'
import Button from '../small_components/Button';

function CampaignCard({id, name, players, maxPlayers, rounds, roundDuration}) {
  return (
    
    <div>
        <p>{id} {name} - {players}/{maxPlayers} - {rounds} - {roundDuration} <Button caption="Info" />   </p>
    </div>
  
  
  )
}

export default CampaignCard