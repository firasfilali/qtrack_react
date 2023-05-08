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
      <NavLink
        exact
        to="/prototype"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('prototype')}
      >
         Prototype
      </NavLink>
      <NavLink
        exact
        to="/controle_operateurs"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('controle_operateurs')}
      >
        Controle opérateurs
      </NavLink>
      <NavLink
        exact
        to="/controle_aq"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('controle_aq')}
      >
        Controle des AQ
      </NavLink>
      <NavLink
        exact
        to="/matiere_premiere"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('matiere_premiere')}
      >
        Matiére premiére
      </NavLink>
      <NavLink
        exact
        to="/correction_action"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('correction_action')}
      >
        Action de correction
      </NavLink>
      <NavLink
        exact
        to="/historique"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('historique')}
      >
        Historique et indicateurs
      </NavLink>
      <NavLink
        exact
        to="/parametre"
        className="nav-link"
        activeClassName="active"
        onClick={() => handleLinkClick('parametre')}
      >
        Parametres
      </NavLink>
    </Nav>
  
</div>

      
   
    )
}

export default Sidebar;