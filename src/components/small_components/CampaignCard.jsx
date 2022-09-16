import React from 'react';
import Button from './Button';
import css from './campaignCards.module.css';

function CampaignCard({id, name, players, maxPlayers, rounds, roundDuration}) {
  return (
    <div className={css.card}>
        <p className={css.details}>{id} {name} - {players}/{maxPlayers} - {rounds} - {roundDuration} <Button caption="Info" />  </p>
    </div>
  )
}

export default CampaignCard;