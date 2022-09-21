import React from 'react'
//hooks:
//redux:
//components:
//style:
//function and objects:
function Button({caption, action, role='button'}) {
  return (
    <button type={role} onClick={action} style={{
      minWidth:"50px",
      maxWidth:"fit-content"
    }}>{caption}</button>
  )
}

export default Button