import { styled, alpha } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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