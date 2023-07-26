import React from "react";
import { useState } from "react";
import "../../assets/css/sidebar.css";
import { Nav } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import store from "../../store/reducer";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const route = [
  {
    url: "/dashboard",
    handleLinkClick: "dashboard",
    handleButtonClick: "Dashboard",
    title: "Dashboard",
  },
  {
    url: "/ccp",
    handleLinkClick: "ccp",
    handleButtonClick: "CCP & prototype",
    title: "CCP & prototype",
  },
  {
    url: "/controle",
    handleLinkClick: "controle",
    handleButtonClick: "Controle finale",
    title: "Controle finale",
  },
  {
    url: "/controle_operateurs",
    handleLinkClick: "controle_operateurs",
    handleButtonClick: "Controle opérateurs",
    title: "Controle opérateurs",
  },
  {
    url: "/matiere_premiere",
    handleLinkClick: "matiere_premiere",
    handleButtonClick: "Matière 1ere",
    title: "Matière 1ere",
  },
  {
    url: "/correction_action",
    handleLinkClick: "correction_action",
    handleButtonClick: "Action Correctives & Préventives",
    title: "Action Correctives",
  },
  {
    url: "/historique",
    handleLinkClick: "historique",
    handleButtonClick: "Historiques et indicateurs",
    title: "Historiques et indicateurs",
    childrens: [
      {
        url: "/matiere_1ere&fournisseur",
        handleLinkClick: "matiere_1ere&fournisseur",
        handleButtonClick: "Matière 1ere & Fournisseur",
        title: "Matière 1ere & Fournisseur",
      },
      {
        url: "/action_correctives",
        handleLinkClick: "action_correctives",
        handleButtonClick: "Actions Correctives",
        title: "Actions Correctives",
      },
      {
        url: "/operateurs",
        handleLinkClick: "operateurs",
        handleButtonClick: "Opérateurs",
        title: "Opérateurs",
      },
      {
        url: "/cycle-production",
        handleLinkClick: "cycle-production",
        handleButtonClick: "Cycle Production & CF",
        title: "Cycle Production & CF",
      },
    ],
  },

  {
    url: "/parametre",
    handleLinkClick: "parametre",
    handleButtonClick: "Parametre",
    title: "Parametre",
  },
];

const VerticalNav = () => {
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleButtonClick = (pageName) => {
    store.dispatch({ type: "SET_CURRENT_PAGE", payload: pageName });
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Nav as="div" className="flex-column ">
      <div>
        <Accordion  disableGutters={true} square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{backgroundColor:"#18202c", color:"white"}}
          >
            <div className="style-accordion">Historiques et Indicateurs</div>
          </AccordionSummary>
          <AccordionDetails>
            <NavLink
              exact="true"
              to="/ccp"
              className="nav-link"
              activeclassname="active"
              onClick={() => {
                handleLinkClick();
                handleButtonClick();
              }}
            >
              ggggg
            </NavLink>
          </AccordionDetails>
        </Accordion>
        <NavLink
              exact="true"
              to="/controle"
              className="nav-link"
              activeclassname="active"
              onClick={() => {
                handleLinkClick();
                handleButtonClick();
              }}
            >
              ggggg
            </NavLink>
      </div>
    </Nav>
  );
};

export default VerticalNav;

// const [open, setOpen] = useState(false)

// if(item.childrens){
//   return (

//     <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
//       <div className='sidebar-title'>
//         <span>
//           {item.title}
//         </span>
//         <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)}></i>
//       </div>
//       <div className='sidebar-content'>
//       { item.childrens.map((child, index) => <Verticalnav key={index} item={child} />) }
//       </div>

//     </div>
//   )

// }else{
//   return (

//     <div className='sidebar-item'>
//       <div className='sidebar-title'>
//       <span>
//           {item.title}
//         </span>
//       </div>
//     </div>
//   )
// }
