import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../assets/css/sidebar.css';

function Topbar() {
  return (
   <div className='top-bar'>
    <div className="row px-3">
       <div className='col-md-6'><p>title</p></div> 
       <div className='col-md-6'> <form className="form-inline mt-2 mt-md-0 col-5">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
       
        </form></div>
      </div>
   </div>
  );
}

export default Topbar;
