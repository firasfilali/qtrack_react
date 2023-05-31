import React from 'react'
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { matiereColumns, matiereRows,top100Films } from "../../utils/data";
import { GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import CustomDataGrid from '../../components/CustomDataGrid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../assets/css/matiere1ere.css'


const theme = createTheme({
  palette: {
    custom:{
      main: '#808080',
      contrastText: '#fff',

    },
  },
});


function CustomToolbar() {
  return (
    <GridToolbarContainer className="table-title py-3">
            <h5>Statistiques totales</h5>
            <div className="export-button-container">
            <GridToolbarExport sx={{color: 'black'}}
             />
            </div>
    </GridToolbarContainer>
  );
}

export default function MatiérePremiére() {

  return (
    <div className="container mt-5">
      <div className="row" >
        <div className="col-md-7 ">
          <CustomDataGrid
            rows={matiereRows}
            columns={matiereColumns}
            className="custom-ccp"
            Toolbar={CustomToolbar}
            Pagination={CustomPagination}
            rowHeight={65}
            paginationPageSize={6}
            borderRadius="10px" 
          />
        </div>
        <div className="col-md-5" >
         <div className='cc-m'>
          <div className="row">
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 500 }}
                  renderInput={(params) =>
                    <ThemeProvider theme={theme}>  
                  <TextField {...params} label="Insérer Référence"
                  className='auto'
                  color='custom'
                   /></ThemeProvider>}
                  className='auto'
                />
              </div>
              <div className='row'>
                <div className='col-md-6'>
                    <span class="number3">Type :</span>
                </div>
                <div className='col-md-6'>
                <span className="number3">Type :</span>

                </div>
              </div>
              </div>
        </div>

      </div>
   
    </div>
  )
}
