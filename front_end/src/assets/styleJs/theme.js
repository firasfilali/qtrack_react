import { styled, alpha } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";


export const theme = createTheme({
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

export const BootstrapButton = styled(Button)({
  
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 2,
  backgroundColor: '#18202c',
  borderColor: '#18202c',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#18202c',
    borderColor: '#18202c',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#18202c',
    borderColor: '#005cbf',
  },
  '&:focus': {
    
  },

});