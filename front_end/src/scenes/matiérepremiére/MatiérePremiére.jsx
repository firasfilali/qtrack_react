import React from "react";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { matiereColumns, matiereRows, top100Films } from "../../utils/data";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import CustomDataGrid from "../../components/CustomDataGrid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../assets/css/matiere1ere.css";
import Card from "../../components/cards/card";
import { Row, Col, Container  } from "react-bootstrap";

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
                options={top100Films}
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
              <div className="col-md-6">
                <span className="number3">Type :</span>
                <div style={{ marginTop: "30px" }}>
                  <div>
                    <span className="number3">Etat :</span>
                  </div>
                  <div>
                    <span className="number3">Type NC :</span>
                  </div>
                  <div>
                    <span className="number3">Action :</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <span className="number3">Fournisseur :</span>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
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
              title="Famille"
              reference="A100"
              conforme="3.48"
              nonconforme="3.48"
              style={{ width: "80%" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
