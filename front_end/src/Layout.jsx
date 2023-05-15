import React from 'react'
import '../src/assets/css/dashboard.css'
import Sidebar2 from './scenes/global/Sidebar2'
import Toolbar from '@mui/material/Toolbar';



const Layout = ({children}) => {
    return (

       <div style={{flex: 1, flexDirection: "row", display: "flex"}}>
            <div style={{flex: 0.15}}>
                <Sidebar2 />
           </div>
          <div>
               
               <div >
                    <Toolbar />
                {children}
               </div>

               </div>
                
               
             
        
        
        </div>
      
      
    

      )
}

export default Layout;


  

