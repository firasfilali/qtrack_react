import { 
    gridPageCountSelector,
    GridPagination,
    useGridApiContext,
    useGridSelector, 
} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      neutral: {
        main: '#18202c',
        contrastText: '#fff',
      },

      custom:{
        main: '#000000',
        contrastText: '#fff',

      },
    },
});
  
function Pagination({ page, onPageChange, className }) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <ThemeProvider theme={theme}>
      <MuiPagination
        color="neutral"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event, newPage - 1);
        }}
      />
       </ThemeProvider>
    );
}
  
export function CustomPagination(props) {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
}

