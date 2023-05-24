import React from "react";
import '../../assets/css/controlefinale.css'
import { 
  DataGrid, 
  GridToolbarContainer, 
  GridToolbarExport,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,

} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const column = [
  { field: 'id', headerName: 'Contrôle', flex: 0.4 },
  {
    field: 'firstName',
    headerName: '% conformité',
    flex: 0.3,
    editable: true,
    
  },
  {
    field: 'lastName',
    headerName: '% non-conformité',
    flex: 0.3,
    editable: true,
  },
];

const column3 = [
  { field: 'id', headerName: 'Type', width: 120, },
  {
    field: 'firstName',
    headerName: '%',
    width: 120,
    editable: true,
    
  },

];
const row3 = [
  { id: 1,  firstName: 'Jon' ,lastName: 'Snow' },
  { id: 2, firstName: 'Cersei',lastName: 'Snow' },
];

const row = [
  { id: 1,  firstName: 'Jon' ,lastName: 'Snow' },
  { id: 2, firstName: 'Cersei',lastName: 'Snow' },
  { id: 3,  firstName: 'Jaime',lastName: 'Snow' },
  { id: 4,  firstName: 'Arya',lastName: 'Snow' },
  { id: 5,  firstName: 'Daenerys',lastName: 'Snow' },
  { id: 6,  firstName: null,lastName: 'Snow'},

]
const columns = [
  { field: 'id', headerName: 'Références', flex:0.2, },
  {
    field: 'firstName',
    headerName: 'Famille',
    flex: 0.2,
    editable: true,
    
  },
  {
    field: 'lastName',
    headerName: 'Taux de conformité',
    flex: 0.3,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Taux de non-conformité',
    type: 'number',
    flex: 0.3,
    editable: true,
  },
];


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer className="table-title" style={{height: '80px'}}>
            <h5>Statistiques totales</h5>
            <div className="export-button-container">
            <GridToolbarExport
             />
            </div>
    </GridToolbarContainer>
  );
}
const theme = createTheme({
  palette: {
    neutral: {
      main: '#18202c',
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

function CustomPagination(props) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

const Controle = () => {
    return(
      <div className="mt-5" style={{width: '100%', backgroundColor: "red"}}>
       <div className="row ">
        <div className="col-md-7  ">
              <div className="table-responsive">
                  {/* <DataGrid
                  sx={{borderRadius:'10px'}}
                  slots={{ toolbar: CustomToolbar,
                  pagination: CustomPagination}}
                  rows={rows}
                  columns={columns}
                  className="custom-header"
                  columnHeaderHeight={40}
                  
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 6,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection={false}
                  disableRowSelectionOnClick
                /> */}
              </div>
              
            </div>
            <div className="col-md-5">
              <div className="bb">
              <div>
              <div className="table-title2">
                <h6>% Phase</h6>
                </div>
            <DataGrid
                  sx={{marginBottom:'10px'}}
                  rows={row}
                  columns={column}
                  className="custom-header"
                  hideFooter={true}
                  columnHeaderHeight={40}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection={false}
                  disableRowSelectionOnClick
                /></div>
                <div>
                <div className="table-title2">
                <h6>% Type de non-conformité</h6>
                </div>
                    <DataGrid
                    sx={{borderRadius:'10px'}}
                  rows={row3}
                  columns={column3}
                  className="custom-header"
                  columnHeaderHeight={40}
                  hideFooter={true}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection={false}
                  disableRowSelectionOnClick
                />
                </div>

            </div></div>
        </div>
        </div>
    
    ) 
}

export default Controle;