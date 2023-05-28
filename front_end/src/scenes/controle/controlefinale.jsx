import React from "react";
import '../../assets/css/controlefinale.css';
import {  
  GridToolbarContainer, 
  GridToolbarExport,
} from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { PhaseColumns, PhaseRows, TypeColumns, TypeRows, StatiqueColumns, StatiqueRows } from "../../utils/data";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import CustomDataGrid from "../../components/CustomDataGrid";

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


const Controle = () => {
    return(
      <div className="container mt-5" >
       <div className="row " style={{justifyContent: 'space-evenly'}}>
        <div className="col-md-7  ">
                <CustomDataGrid 
                rows={StatiqueRows}
                columns={StatiqueColumns}
                Toolbar={CustomToolbar}
                Pagination={CustomPagination}
                rowHeight={60}
                paginationPageSize={6}
                borderRadius="10px"
                />
            </div>
            <div className="col-md-4">
              <div className="bb">
              <div>
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
                      columns={PhaseColumns}
                      hideFooter={true}
                      height="200px"
                      borderRadius="9px"
                      marginBottom="10px"
                      paginationPageSize={8}
                    />
                </div>
                <div>
                  <div className="table-title2">
                    <h6>% Type de non-conformité</h6>
                  </div>
                      <CustomDataGrid
                        rows={TypeRows}
                        columns={TypeColumns}
                        hideFooter={true}
                        height="250px"
                        borderRadius="9px"
                        paginationPageSize={6}
                      />
                </div>

            </div></div>
        </div>
        </div>
    
    ) 
}

export default Controle;