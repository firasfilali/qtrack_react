import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;

const NotifIconWrapper = styled('div')(({ theme }) => ({
  color:'black'
}));

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
    marginLeft: theme.spacing(1),
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

export default function Topbar2() {
  return (
    <Box sx={{ display:'flex' }}>
      <AppBar position="fixed" sx={{bgcolor:'white', width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, boxShadow: "none"}}>
        <Toolbar>
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
    </Box>
  );
}
