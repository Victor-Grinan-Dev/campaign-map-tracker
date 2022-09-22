import React from 'react'

const centerAll = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}

function Show404() {
  return (
    <div style={centerAll}>
        <div style={centerAll}>
            <h1>404</h1>
            <p> Oops! </p>
        </div>
    </div>
  )
}

export default Show404