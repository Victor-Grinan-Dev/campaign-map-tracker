import React from 'react'

const centerAll = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    height:"70vh",
}

function Show404() {
  return (
    <div style={centerAll}>
        <div style={centerAll}>
            <h1> 404 </h1>
            <p> Oops! </p>
        </div>
    </div>
  )
}

export default Show404