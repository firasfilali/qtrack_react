import React from 'react'
import Sidebar from '../global/Sidebar'

export default function Correctionaction() {
  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center", height: "100vh", width:"200vh"}}>
        <div>
            <h1 style={{margin: "10px"}}>Action de correction</h1>
        </div> 
        <div>
        <Sidebar />
        </div>
    
    </div> 
  )
}
