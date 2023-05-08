import React from 'react'
import Sidebar from '../global/Sidebar'
import Topbar from '../global/Topbar'

export default function Ccp() {
  return (
    <div class="container-fluid">
    <div class="row flex-nowrap">
     
        <Sidebar /> 
        
        <div className="col p-3">
          <Topbar></Topbar>
          <div className='py-2'><h1>CCP </h1></div></div>
        
    </div>
</div>
  )
}

