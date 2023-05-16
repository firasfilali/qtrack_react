import React from 'react';
import '../../assets/css/sidebar.css';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {Search} from '../../assets/styleJs/Search';
import {SearchIconWrapper} from '../../assets/styleJs/SearchIconWrapper';
import {NotifIconWrapper} from '../../assets/styleJs/NotifIconWrapper';
import {StyledInputBase} from '../../assets/styleJs/StyledInputBase';
import { useDispatch, useSelector } from 'react-redux';





const drawerWidth = 240;

function Topbar() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const currentPage = useSelector(state => state.currentPage);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


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
            {currentPage}
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

   </Box>
  );
}

export default Topbar;
