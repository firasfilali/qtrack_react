import React from 'react'
import {  
  GridToolbarContainer, 
  GridToolbarExport,
} from '@mui/x-data-grid';
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { PhaseColumnsCcp, PhaseRows, OperateurColumns, OperateurRows, StatiqueColumns, StatiqueRows } from "../../utils/data";
import CustomDataGrid from '../../components/CustomDataGrid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../../assets/css/controleoperateur.css'



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
        <div className="col-md-7">
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
        <div className="col-md-4">
          <div className="bbb">
            <div className="cc">
              <div className="input-base-operateur">
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Insérer Code"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                 <ArrowForwardIosIcon fontSize='small'/>
                </IconButton>
              
              </div>
              <div className="input-base-operateur2">
                <InputBase
                  sx={{ ml: 1, flex: 1, paddingLeft: '5px' }}
                  placeholder="Nom Opérateur"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                </div>
              </div>
              <CustomDataGrid
                rows={StatiqueRows}
                columns={StatiqueColumns}
                hideFooter={true}
                className="custom-ccp"
                height="200px"
                marginBottom="10px"
                paginationPageSize={6}
                borderRadius="10px" 
              />

              <CustomDataGrid
                rows={StatiqueRows}
                columns={StatiqueColumns}
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
