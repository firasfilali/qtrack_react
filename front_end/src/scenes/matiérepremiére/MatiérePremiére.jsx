import React, { useState, useEffect } from "react";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import CustomDataGrid from "../../components/CustomDataGrid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../assets/css/matiere1ere.css";
import Card from "../../components/cards/card";
import { Row, Col } from "react-bootstrap";

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

export default function MatiérePremiére() {
  const [tableData, setTableData] = useState([]);
  const [tableDataFournisseur, setTableDataFournisseur] = useState([]);
  const [tableDataTypeNC, setTableDataTypeNC] = useState([]);
  const [tableDataTypeAC, setTableDataTypeAC] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    selectedReference: "",
    selectedEtat: "",
    selectedAction: "",
    selectedFournisseur: "",
    selectedTypeNc: "",
  });

  const handleChange = (event, newValue) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      selectedReference: newValue ? newValue.type : "",
      selectedEtat: newValue ? newValue.etat : "",
      selectedAction: newValue ? newValue.action : "",
      selectedFournisseur: newValue ? newValue.fournisseur : "",
      selectedTypeNc: newValue ? newValue.typeNc : "",
    }));
  };

  const [selectedReference, setSelectedReference] = useState("");

  const handleEvent = (event, newValue) => {
    setSelectedReference((prevState) => ({
      ...prevState,
      selectedRef: newValue ? newValue.ref : "",
      selectedFamille: newValue ? newValue.famille : "",
      selectedUp: newValue ? newValue.taux_c : "",
      selectedDown: newValue ? newValue.taux_nc : "",
    }));
  };
  const fetchData = () => {
    fetch("http://localhost:3030/matiere1ere_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data);
      });
  };

  const fetchDataFournisseur = () => {
    fetch("http://localhost:3030/fournisseur_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataFournisseur(data);
      });
  };

  useEffect(
    () => {
      fetchDataFournisseur();
      fetchData();
    },
    [tableDataFournisseur],
    [tableData]
  );
  const fetchDataNc = () => {
    fetch("http://localhost:3030/typeNC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeNC(data);
      });
  };
  const fetchDataAc = () => {
    fetch("http://localhost:3030/typeAC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeAC(data);
      });
  };
  useEffect(() => {
    fetchDataNc();
    fetchDataAc();
  }, [tableDataTypeNC],[tableDataTypeAC]);

  const columnsMatiere = [
    {
      field: "refMatiere",
      headerName: "Référence",
      flex: 0.1,
      align: "center",
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
    { field: "type", headerName: "Type", flex: 0.1, align: "center" },
    {
      field: "fournisseur",
      headerName: "Fournisseur",
      flex: 0.1,
      align: "center",
    },
    {
      field: "etat",
      headerName: "Etat",
      flex: 0.1,
      align: "center",
    },
    
  ];
  return (
    <div>
      <Row>
        <Col xl="7" lg="7">
          <CustomDataGrid
            rows={tableData}
            columns={columnsMatiere}
            height="85vh"
            className="custom-ccp"
            Toolbar={CustomToolbar}
            Pagination={CustomPagination}
            rowHeight={65}
            paginationPageSize={6}
            borderRadius="10px"
          />
        </Col>

        <Col xl="5" lg="5">
          <div className="cc-m">
            <Row>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={tableData}
                getOptionLabel={(option) => option.refMatiere}
                onChange={handleChange}
                renderInput={(params) => (
                  <ThemeProvider theme={theme}>
                    <TextField
                      {...params}
                      label="Insérer Référence"
                      color="custom"
                    />
                  </ThemeProvider>
                )}
              />
            </Row>

            <div className="row">
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <span className="number3">
                  Type : {selectedValues.selectedReference || "type"}
                </span>
                <div style={{ marginTop: "30px" }}>
                  <div>
                    <span className="number3">
                      Etat : {selectedValues.selectedEtat || ""}
                    </span>
                  </div>
                  <div>
                    <span className="number3">
                      Type NC : {selectedValues.selectedTypeNc || ""}
                    </span>
                  </div>
                  <div>
                    <span className="number3">
                      Action : {selectedValues.selectedAction || ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <span className="number3">
                  Fournisseur : {selectedValues.selectedFournisseur || ""}
                </span>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableDataFournisseur}
              getOptionLabel={(option) => option.nom}
              onChange={handleEvent}
              className="autocomplete"
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Insérer Fournisseur"
                    color="custom"
                    className="autocomple"
                  />
                </ThemeProvider>
              )}
            />
          </div>

          <div className="cart mt-3">
            <Card
              title={selectedReference.selectedFamille || "Famille"}
              reference={selectedReference.selectedRef || "XXXX"}
              conforme={selectedReference.selectedUp || "__"}
              nonconforme={selectedReference.selectedDown || "__"}
              style={{ width: "80%" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
