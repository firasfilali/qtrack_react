import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CustomDataGrid from "../../components/CustomDataGrid";
import {
  PhaseColumnsCcp,
  PhaseRows,
  controleFinalCol,
  controleFinalRow,
  references,
  dataPieChart,
  StatiqueRows,
  OpColumns,
} from "../../utils/data";
import { PieChart } from "@mui/x-charts/PieChart";
import { DateRangePicker } from "rsuite";
import "../../assets/css/matiere1ere.css";

const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function CycleProductionCf() {
  const [tableDataPhase, setTableDataPhase] = useState([]);
  const [tableDataProduit, setTableDataProduit] = useState([]);

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
  useEffect(
    () => {
      fetchDataPhase();
      fetchDataProduit();
    },
    [tableDataPhase],
    [tableDataProduit]
  );

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
    <div style={{ height: "80vh" }}>
      <Row>
        <Col xl="4" lg="4" style={{ width: "40%" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={references}
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
        </Col>
        <Col xl="3" lg="3">
          <div className="datepicker" style={{ marginRight: "20px" }}>
            <DateRangePicker
              showOneCalendar
              format="dd/MM/yy"
              size="lg"
              character=" - "
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl="7" lg="7">
          <div className="ttt">
            <span className="tttt">Cycle de production</span>
          </div>
          <CustomDataGrid
            rows={tableDataPhase}
            columns={columnsPhase}
            height="31vh"
            className="custom-ccp"
            hideFooter={true}
            borderRadius="9px"
            marginBottom="10px"
            paginationPageSize={8}
          />

          <div className="ttt">
            <span className="tttt">Opérateurs</span>
          </div>
          <CustomDataGrid
            rows={tableDataProduit}
            columns={columnsProduit}
            hideFooter={true}
            className="custom-ccp"
            height="31vh"
            marginBottom="10px"
            paginationPageSize={6}
            borderRadius="10px"
          />
        </Col>
        <Col xl="5" lg="5">
          <div className="cadre-graph" style={{marginTop:"150px"}}>
            <div className="cadre-3">
              <span className="typenc-3">Graphe des risques</span>
            </div>

            <Row >
              <PieChart
                series={[
                  {
                    data: dataPieChart,
                    innerRadius: 50,
                    outerRadius: 100,
                    cx: 120,
                  },
                ]}
                sx={{
                  "--ChartsLegend-rootOffsetX": "-60px",
                  "--ChartsLegend-rootOffsetY": "-20px",
                }}
                width={450}
                height={300}
              />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
