import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CustomDataGrid from "../../components/CustomDataGrid";
import {
  OperateurColumns,
  OperateurRows,
  PhaseColumnsCcp,
  PhaseRows,
  references,
} from "../../utils/data";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { DateRangePicker } from "rsuite";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function Operateur() {
  const [tableDataProduit, setTableDataProduit] = useState([]);
  const [tableDataPhase, setTableDataPhase] = useState([]);
  const [tableDataOp, setTableDataOp] = useState([]);



  const fetchDataOp = () => {
    fetch("http://localhost:3030/operator_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataOp(data);
      });
  };

  const fetchDataPhase = () => {
    fetch("http://localhost:3030/phases")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataPhase(data);
      });
  };
  const fetchDataProduit = () => {
    fetch("http://localhost:3030/produits")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataProduit(data);
      });
  };
  useEffect(() => {
    fetchDataOp();
    fetchDataPhase();
    
  }, [tableDataOp],[tableDataPhase]);
  useEffect(() => {
    fetchDataProduit();
    
  }, [tableDataProduit],[]);

  const columnsOp = [
    {
      field: "code",
      headerName: "Code",
      flex: 0.1,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "nom",
      headerName: "Nom",
      flex: 0.2,
      align: "center",
      editable: true,
    },

     {
      field: "conforme",
      headerName: "% conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#2bc48a",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
      
    },
    {
      field: "nConforme",
      headerName: "% Non-conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#ea2525",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
      
    },
  ];

  const columnsPhase = [
    {
      field: "phase",
      headerName: "Phase",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "qt_controlé",
      headerName: "Q.Controlé",
      flex: 0.2,
      align: "center",
      editable: true
    },

     {
      field: "taux_c",
      headerName: "% conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#2bc48a",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
      
    },
    {
      field: "taux_nc",
      headerName: "% non-conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#ea2525",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
      
    },
  ];

  const columnsProduit = [
    {
      field: "ref",
      headerName: "Référence",
      flex: 0.1,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "qt_controlé",
      headerName: "Q.Controlé",
      flex: 0.2,
      align: "center",
      editable: true,
    },

    {
      field: "taux_c",
      headerName: "% conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#2bc48a",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "taux_nc",
      headerName: "% Non-conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#ea2525",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
  ];
  return (
    <div style={{height: "79vh"}}>
      <Row >
        <Col xl="7" lg="7">
          <div className="datepicker">
            <DateRangePicker
              showOneCalendar
              format="dd/MM/yy"
              size="lg"
              character=" - "
            />
          </div>
          <CustomDataGrid
            rows={tableDataOp}
            columns={columnsOp}
            height="79vh"
            className="custom-ccp"
            Pagination={CustomPagination}
            rowHeight={65}
            paginationPageSize={6}
            borderRadius="10px"
          />
        </Col>
        <Col xl="5" lg="5">
            <div className="bb">
          <Autocomplete
            sx={{marginBottom: "10px"}}
            disablePortal
            id="combo-box-demo"
            options={tableDataProduit}
            getOptionLabel={(option) => option.ref}
            renderInput={(params) => (
              <ThemeProvider theme={theme}>
                <TextField
                  {...params}
                  label="Insérer Référence"
                  color="custom"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </ThemeProvider>
            )}
          />
          <CustomDataGrid
            rows={tableDataPhase}
            columns={columnsPhase}
            height="37vh"
            className="custom-ccp"
            hideFooter={true}
            borderRadius="9px"
            marginBottom="10px"
            paginationPageSize={8}
          />
          <CustomDataGrid
            rows={tableDataProduit}
            columns={columnsProduit}
            height="37vh"
            className="custom-ccp"
            hideFooter={true}
            borderRadius="9px"
            paginationPageSize={8}
          /></div>
        </Col>
      </Row>
    </div>
  );
}
