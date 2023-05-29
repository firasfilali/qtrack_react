import React from 'react'
import '../../assets/css/ccp.css'
import {  
  GridToolbarContainer, 
  GridToolbarExport,
} from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { CustomPagination } from "../../assets/styleJs/Pagination";
import CustomDataGrid from '../../components/CustomDataGrid';
import { PhaseColumnsCcp, PhaseRows, OperateurColumns, OperateurRows, StatiqueColumns, StatiqueRows } from "../../utils/data";




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


export default function Ccp() {
  return (
    
    <div className="container mt-5">
      <div className="row" style={{justifyContent: 'space-evenly'}}>
        <div className="col-md-7">
          <CustomDataGrid
          rows={StatiqueRows}
          columns={StatiqueColumns}
          className="custom-ccp"
          Toolbar={CustomToolbar}
          Pagination={CustomPagination}
          rowHeight={60}
          paginationPageSize={6}
          borderRadius="10px" 
          />
        </div>
        <div className="col-md-4">
          <div className="bb">
            <div className="input-base">
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                 <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Insérer famille ou référence"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
            </div>
            <div className="table-title2">
                <h6>% Phase</h6>
            </div>
            <CustomDataGrid
              rows={PhaseRows}
              columns={PhaseColumnsCcp}
              className="custom-ccp"
              hideFooter={true}
              height="200px"
              borderRadius="9px"
              marginBottom="10px"
              paginationPageSize={8}
            />
            <div>
            <div className="table-title2">
                <h6>% Opérateur</h6>
            </div>
            <CustomDataGrid
              rows={OperateurRows}
              columns={OperateurColumns}
              className="custom-ccp"
              hideFooter={true}
              height="250px"
              borderRadius="9px"
              paginationPageSize={8}
            />
          </div>
        </div>
          

      </div>
    </div>

  </div>

  )
}

