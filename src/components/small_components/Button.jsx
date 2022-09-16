import React from 'react'

function Button({caption, action, role='button'}) {
  return (
    <button type={role} onClick={action} style={{
      minWidth:"50px",
      maxWidth:"fit-content"
    }}>{caption}</button>
  )
}

export default Button