import React from 'react'
import '../src/assets/css/dashboard.css'
import Sidebar2 from './scenes/global/Sidebar2'
import Toolbar from '@mui/material/Toolbar';



const Layout = ({children}) => {
    return (

       <div className='row w-100'>
            <div className='col-md-2'>
                <Sidebar2 />
           </div>
          <div className='col-md-10'>
               
               
                    <Toolbar />
                {children}
               

               </div>
                
               
             
        
        
        </div>
      
      
    

      )
}

export default Layout;


  

