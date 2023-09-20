import React, { useState, useEffect } from "react";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { CustomPagination } from "../../assets/styleJs/Pagination";

import CustomDataGrid from "../../components/CustomDataGrid";
import "../../assets/css/controleoperateur.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Row, Col} from "react-bootstrap";


const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

function CustomToolbar() {
  return (
    <GridToolbarContainer className="table-title py-3">
      <h5>Statistiques totales</h5>
      <div className="export-button-container">
        <GridToolbarExport sx={{ color: "black" }} />
      </div>
    </GridToolbarContainer>
  );
}

export default function ControleOperateur() {
  const [selectedCode, setSelectedCode] = useState("");
  const [selectedQt, setSelectedQt] = useState("");
  const [tableDataOp, setTableDataOp] = useState([]);
  const [tableDataPhase, setTableDataPhase] = useState([]);

  const [tableDataProduit, setTableDataProduit] = useState([]);


  const handleChange = (event, newValue) => {
    setSelectedCode(newValue ? newValue.nom : "");
    setSelectedQt(newValue ? newValue.qt_cntrl : "");
  };

  const fetchDataOp = () => {
    fetch("http://localhost:3030/operator_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataOp(data);
      });
  };
  const fetchDataProduit = () => {
    fetch("http://localhost:3030/controle")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataProduit(data);
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
  useEffect(() => {
    fetchDataOp();
    fetchDataProduit();
    
  }, [tableDataOp],[tableDataProduit]);

  useEffect(() => {
    fetchDataPhase();
    
  }, [tableDataPhase]);

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
      headerName: "Taux de conformité",
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
      headerName: "Taux de non-conformité",
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
      field: "ref_cntrl",
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
      field: "famille",
      headerName: "Famille",
      flex: 0.2,
      align: "center",
      editable: true,
    },

    {
      field: "conforme",
      headerName: "Taux de conformité",
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
      field: "nonConforme",
      headerName: "Taux de non-conformité",
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
      field: "phase_cntrl",
      headerName: "Phase",
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
      field: "nonConforme",
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
  return (
    <div style={{height: "80vh"}}>
      <Row>
        <Col xl="7" lg="7">
          <CustomDataGrid
            rows={tableDataOp}
            columns={columnsOp}
            height="88vh"
            className="custom-ccp"
            Toolbar={CustomToolbar}
            Pagination={CustomPagination}
            rowHeight={65}
            paginationPageSize={6}
            borderRadius="10px"
          />
        </Col>

        <Col xl="5" lg="5">
          <div className="bb">
            <div className="input-container">
              <Col xl="4" lg="4">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={tableDataOp}
                  getOptionLabel={(option) => option.code}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <ThemeProvider theme={theme}>
                      <TextField
                        {...params}
                        label="Insérer Code"
                        className="auto"
                        color="custom"
                      />
                    </ThemeProvider>
                  )}
                  className="auto"
                />
              </Col>

              <Col className="input-base-operateur2">
                <span className="number2">
                  {selectedCode || "Nom Opérateur"}
                </span>
              </Col>
            </div>

            <CustomDataGrid
              rows={tableDataProduit}
              columns={columnsProduit}
              hideFooter={true}
              className="custom-ccp"
              height="33vh"
              marginBottom="10px"
              paginationPageSize={6}
              borderRadius="10px"
            />
            <CustomDataGrid
              rows={tableDataProduit}
              columns={columnsPhase}
              hideFooter={true}
              className="custom-ccp"
              height="33vh"
              paginationPageSize={6}
              borderRadius="10px"
            />
            <div className="table-title-op">
              <h6>Quantité Controlée :</h6>
              <div className="square">
                <span className="number">{selectedQt || ""}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
