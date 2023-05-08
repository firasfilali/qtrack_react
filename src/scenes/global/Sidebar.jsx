import '../../assets/css/sidebar.css';
import logo from '../../assets/50089614.jpg';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Topbar from './Topbar';
const Sidebar=()=>{
    const [activeLink, setActiveLink] = useState('dashboard');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
    return (
        
      
     
        <div className='col-2 px-0 bg-sideBar'>
            
            
            <img src={logo} alt="logo"  width="20%" />
        <Nav as="div"
        className="flex-column mt-5 "
       >
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('dashboard')}
      >
     Dashboard  
      </NavLink>
      <NavLink
        exact
        to="/ccp"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('ccp')}
      >
        CCP & prototype 
      </NavLink>
      <NavLink
        exact
        to="/controle"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('controle')}
      >
         Controle finale
      </NavLink>
    </Nav>
  
</div>

      
   
    )
}

export default Sidebar;