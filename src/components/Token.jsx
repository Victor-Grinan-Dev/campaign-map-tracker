import React from 'react';

function Token({color='black', dragable=true}) {

    const showEvent = (e) => {
        console.log(e)
      }
      const dragStart = e => {
        const target = e.target;
    
        e.dataTransfer.setData('card_id', target.id);
    
        setTimeout(() => {
            target.style.display ="none";
        }, 0);
    }
    
    const dragOver = e => {
        e.stopPropagation();
    }

  return (
    <div
    style={{
        width:'20px',
        height:'20px',
        backgroundColor:`${color}`,
        zIndex: 3,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
    }}
    draggable={dragable}
    onClick={showEvent}
    onDragStart={dragStart}
    onDragOver={dragOver}
    >
        <p>X</p>
    </div>
  )
}

export default Token;

