import React from "react";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { matiereColumns, matiereRows, references } from "../../utils/data";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import CustomDataGrid from "../../components/CustomDataGrid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../assets/css/matiere1ere.css";
import Card from "../../components/cards/card";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

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
      selectedUp: newValue ? newValue.up : "",
      selectedDown: newValue ? newValue.down : "",
    }));
  };

  return (
    <div>
      <Row>
        <Col xl="7" lg="7">
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
        </Col>

        <Col xl="5" lg="5">
          <div className="cc-m">
            <Row>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={references}
                getOptionLabel={(option) => option.ref}
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
              options={references}
              getOptionLabel={(option) => option.ref}
              onChange={handleEvent}
              className="autocomplete"
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Insérer Référence"
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
