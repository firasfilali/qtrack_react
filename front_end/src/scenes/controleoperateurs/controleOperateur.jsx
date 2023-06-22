import React from "react";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import {
  PhaseColumnsCcp,
  PhaseRows,
  OperateurColumns,
  OperateurRows,
  listOperateurs,
  StatiqueRows,
  OpColumns,
} from "../../utils/data";
import CustomDataGrid from "../../components/CustomDataGrid";
import "../../assets/css/controleoperateur.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Row, Col} from "react-bootstrap";
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

export default function ControleOperateur() {
  const [selectedCode, setSelectedCode] = useState("");

  const handleChange = (event, newValue) => {
    setSelectedCode(newValue ? newValue.label : "");
  };

  return (
    <div>
      <Row>
        <Col xl="7" lg="7">
          <CustomDataGrid
            rows={OperateurRows}
            columns={OperateurColumns}
            height="90vh"
            className="custom-ccp"
            Toolbar={CustomToolbar}
            Pagination={CustomPagination}
            rowHeight={65}
            paginationPageSize={6}
            borderRadius="10px"
          />
        </Col>

        <Col xl="5" lg="5">
          <div className="bbb">
            <div className="input-container">
              <Col xl="4" lg="4">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={listOperateurs}
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
              rows={StatiqueRows}
              columns={OpColumns}
              hideFooter={true}
              className="custom-ccp"
              height="220px"
              marginBottom="10px"
              paginationPageSize={6}
              borderRadius="10px"
            />
            <CustomDataGrid
              rows={PhaseRows}
              columns={PhaseColumnsCcp}
              hideFooter={true}
              className="custom-ccp"
              height="220px"
              paginationPageSize={6}
              borderRadius="10px"
            />
            <div className="table-title-op">
              <h6>Quantité Controlée :</h6>
              <div className="square">
                <span className="number">30</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
