import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
const theme = createTheme({
    palette: {
      neutral: {
        main: '#2bc48a',
        contrastText: '#fff',
    },
 
     custom:{
        main: '#ea2525',
     contrastText: '#fff',
 
      },
    },
 });


export default function Check() {
  return (
    <ThemeProvider theme={theme}>
    <div><CheckCircleOutlineIcon color='neutral' />
        
    </div>
    </ThemeProvider>
  )
}

export const  Cancel = () => {
  return(
    <ThemeProvider theme={theme}>
    <div>
      <CancelOutlinedIcon color='custom' />
    </div>
    </ThemeProvider>
  )
}


 