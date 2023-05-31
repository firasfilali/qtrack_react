import React from 'react'
import {  
  GridToolbarContainer, 
  GridToolbarExport,
} from '@mui/x-data-grid';
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { PhaseColumnsCcp, PhaseRows, OperateurColumns, OperateurRows,top100Films, StatiqueRows, OpColumns } from "../../utils/data";
import CustomDataGrid from '../../components/CustomDataGrid';
import '../../assets/css/controleoperateur.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

export default function ControleOperateur() {
  return (
    <div className="container mt-5">
      <div className="row" style={{justifyContent: 'space-evenly'}}>
        <div className="col-md-7 ">
          
        <CustomDataGrid
          rows={OperateurRows}
          columns={OperateurColumns}
          className="custom-ccp"
          Toolbar={CustomToolbar}
          Pagination={CustomPagination}
          rowHeight={65}
          paginationPageSize={6}
          borderRadius="10px" 
          />
        </div>
        <div className="col-md-5">
          <div className="bbb">
            <div className="cc">
              <div className="input-base-operateur">
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) =>
                    <ThemeProvider theme={theme}>  
                  <TextField {...params} label="Insérer Code"
                  className='auto'
                  color='custom'
                   /></ThemeProvider>}
                  className='auto'
                />
              </div>
              <div className='input-base-operateur2'>
              <span class="number2">Nom Opérateur</span>
                </div>
              </div>
              <CustomDataGrid
                rows={StatiqueRows}
                columns={OpColumns}
                hideFooter={true}
                className="custom-ccp"
                height="200px"
                marginBottom="10px"
                paginationPageSize={6}
                borderRadius="10px" 
              />
              <CustomDataGrid
                rows={PhaseRows}
                columns={PhaseColumnsCcp}
                hideFooter={true}
                className="custom-ccp"
                height="200px"
                paginationPageSize={6}
                borderRadius="10px" 
              />
              <div className='table-title-op'>
                <h7>Quantité Controlée :</h7>
                <div className='square'>
                <span class="number">30</span>

                </div>
              </div>
          </div>

        </div>

      </div>
   
    </div>
  )
}
