import React from 'react';
import css from './token.module.css';

function Token({name='token', color='black'}) {
  return (
    <div className={css.token}
    style={{
        backgroundColor:{color},
    }}
    >{name}
    </div>
  )
}

export default Token