import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CustomDataGrid from "../../components/CustomDataGrid";
import { TypeRows, actionColumns, references, data1 } from "../../utils/data";
import { PieChart } from "@mui/x-charts/PieChart";
import { DateRangePicker } from "rsuite";
import "../../assets/css/matiere1ere.css";
import { BarChart } from "@mui/x-charts/BarChart";

const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function Actioncorrectives() {
  const [tableDataTypeNC, setTableDataTypeNC] = useState([]);
  const [tableDataTypeAC, setTableDataTypeAC] = useState([]);
  const [tableDataPro, setTableDataPro] = useState([]);

  const fetchDataNc = () => {
    fetch("http://localhost:3030/typeNC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeNC(data);
      });
  };
  const fetchDataAC = () => {
    fetch("http://localhost:3030/typeAC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeAC(data);
      });
  };

  const fetchDataProduit = () => {
    fetch("http://localhost:3030/produits")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataPro(data);
      });
  };

  useEffect(
    () => {
      fetchDataNc();
      fetchDataAC();
    },
    [tableDataTypeNC],
    [tableDataTypeAC]
  );

  useEffect(
    () => {
      fetchDataProduit();
    },
    [tableDataPro],
    []
  );

  const columnsNc = [
    {
      field: "typenc",
      headerName: "Type NC",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            style={{
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
      flex: 0.5,
      align: "center",
      headerAlign: "center",
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

  const columnsAC = [
    {
      field: "typeac",
      headerName: "Action de correction",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "agentquality",
      headerName: "Pilote",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "black",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
  ];
  const pData = [10, 20, 15, 10, 2, 0, 0];
  const xLabels = ["Mai", "Juin", "Juillet", "Aug", "Sep ", "Oct ", "Nov "];
  return (
    <div style={{ height: "80vh" }}>
      <Row>
        <Col xl="7" lg="7">
          <Row>
            <Col xl="8" lg="8">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={tableDataPro}
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
            <Col xl="4" lg="4">
              <div className="datepicker">
                <DateRangePicker
                  showOneCalendar
                  format="dd/MM/yy"
                  size="lg"
                  character=" - "
                />
              </div>
            </Col>
          </Row>
          <div className="ttt">
            <span className="tttt">Type de non-conformité</span>
          </div>
          <CustomDataGrid
            key="conformiteTypeGrid"
            rows={tableDataTypeNC}
            columns={columnsNc}
            className="custom-header-action"
            hideFooter={true}
            height="32vh"
            borderRadius="9px"
            paginationPageSize={6}
          />

          <div className="ttt">
            <span className="tttt">Action de correction</span>
          </div>
          <CustomDataGrid
            key="conformiteTypeGrid2"
            rows={tableDataTypeAC}
            columns={columnsAC}
            className="custom-header-action"
            hideFooter={true}
            height="32vh"
            borderRadius="9px"
            paginationPageSize={6}
          />
        </Col>

        <Col xl="5" lg="5">
          <div className="cadre-graph">
            <div className="cadre-3">
              <span className="typenc-3">Graphe de non-conformité</span>
            </div>

            <Row>
              <PieChart
                series={[
                  {
                    data: data1,
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
                height={225}
              />
            </Row>
          </div>
          <div className="ttt">
            <span className="tttt">Graphe des actions correctives</span>
          </div>

          <div className="barchart">
            <Row>
              <BarChart
                width={500}
                height={350}
                series={[{ data: pData, label: "nombre d'action", id: "pvId" }]}
                xAxis={[{ data: xLabels, scaleType: "band" }]}
              />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
