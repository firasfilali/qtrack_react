import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../assets/css/sidebar.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';



const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderLeft: '3px solid green',
          
        },
      },
    },
  },
});
const NotifIconWrapper = styled('div')(({ theme }) => ({
  color:'black'
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F4F4F4',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '10px',
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  left: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'grey',
  '& .MuiInputBase-input': {
    borderRadius:'6px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Topbar() {
  return (
   <div className='top-bar'>
    <div className="row px-3">
       <div className='col-md-6'><p>title</p></div> 
       <div className='col-md-6'> <form className="form-inline mt-2 mt-md-0 col-5">
          {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/> */}
          <div className='d-flex alignItems-center justifyContent-end' style={{width: '50%'}}>
            <Search sx={{marginLeft: '20px'}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <NotifIconWrapper>
              <NotificationsNoneRoundedIcon />
              <AccountCircleRoundedIcon />
            </NotifIconWrapper>
          </div>
         
        
        
       
        </form>
        </div>
      </div>
   </div>
  );
}

export default Topbar;
