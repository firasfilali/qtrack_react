import React from 'react'
import Sidebar from '../global/Sidebar'

export default function history() {
  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center", height: "100vh", width:"200vh"}}>
        <div>
            <h1 style={{margin: "10px"}}>Historique et indicateurs</h1>
            
            
        </div> 
        <div>
        <Sidebar />
        </div>

    </div> 
  )
}
