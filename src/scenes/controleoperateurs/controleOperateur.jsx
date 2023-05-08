import React from 'react'
import Sidebar from '../global/Sidebar'

export default function ControleOperateur() {
  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center", height: "100vh", width:"200vh"}}>
    <div>
        <h1 style={{margin: "10px"}}>Controle des operateurs</h1>
    </div> 
    <div>
    <Sidebar />
    </div>

</div> 
  )
}
