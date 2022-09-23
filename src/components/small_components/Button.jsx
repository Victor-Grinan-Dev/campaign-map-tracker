import React from 'react';
//hooks:
//redux:
//components:
//style:
//function and objects:
function Button({caption, action=undefined, role='button', disabled=false}) {
  return (
    <button 
      type={role} 
      onClick={action}
      disabled={disabled} 
      style={{
        minWidth:"50px",
        maxWidth:"fit-content"
      }}>
        {caption}
    </button>
  )
}

export default Button;