import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../assets/css/controlefinale.css'

const CustomDataGrid = ({ rows, columns, height, paginationPageSize,
     borderRadius, hideFooter, marginBottom, Toolbar, Pagination, rowHeight, className }) => {
    
   
    
    return(
    
        <div>
            <DataGrid 
            sx={{height, borderRadius, marginBottom}}
            rows={rows}
            columns={columns}
            slots={{toolbar: Toolbar,
            pagination: Pagination}}
            className= {className}
            columnHeaderHeight={40}
            rowHeight={rowHeight}
            hideFooter={hideFooter}
            initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: paginationPageSize,
                  },
                },
            }}
            pageSizeOptions={[5]}
            checkboxSelection={false}
            disableRowSelectionOnClick
            />
        </div>
    )
};

export default CustomDataGrid;
