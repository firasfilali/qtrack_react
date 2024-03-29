import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/50089614.jpg';
import {Search} from '../../assets/styleJs/Search';
import {SearchIconWrapper} from '../../assets/styleJs/SearchIconWrapper';
import {NotifIconWrapper} from '../../assets/styleJs/NotifIconWrapper';
import {StyledInputBase} from '../../assets/styleJs/StyledInputBase';


const drawerWidth = 240;


function Sidebar(props) {
  const [activeLink, setActiveLink] = useState('dashboard');
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{bgcolor:'white', width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, boxShadow: "none"}}>
        <Toolbar>
        <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color:'black', flexGrow: 1, display: { xs: 'none', sm: 'block' }, ml:"20px" }}
          >
            Home
          </Typography>
          <Search sx={{marginRight: '20px'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <NotifIconWrapper sx={{marginRight: '20px'}}>
          <NotificationsNoneRoundedIcon />
          </NotifIconWrapper>
          <NotifIconWrapper>
          <AccountCircleRoundedIcon />
          </NotifIconWrapper>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{ 
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor:'#18202c'}}
          }
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'#18202c' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Sidebar;
