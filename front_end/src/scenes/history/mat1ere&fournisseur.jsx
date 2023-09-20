import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CustomDataGrid from "../../components/CustomDataGrid";
import {
  matiereColumns,
  matiereRows,
  references,
  data1,
} from "../../utils/data";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import "../../assets/css/matiere1ere.css";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import { PieChart } from "@mui/x-charts/PieChart";
import InputAdornment from "@mui/material/InputAdornment";
import { DateRangePicker } from 'rsuite';
import '../../assets/css/datepicker.css'





const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function History() {
  const [tableData, setTableData] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    selectedTauxConf: "",
    selectedTauxNonConf: "",
    selectedType: "",
    
  });

  const handleChange = (event, newValue) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      selectedTauxConf: newValue ? newValue.taux_c : "",
      selectedTauxNonConf: newValue ? newValue.taux_nc : "",
      selectedType: newValue ? newValue.type : "",
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
  useEffect(
    () => {
      fetchData();
    },
    [tableData],
    []
  );
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
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#2bc48a",
              
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    
  ];
  return (
    <div style={{height: "82vh"}}>
      <Row>
        
        <Col xl="7" lg="7">
          <div className="datepicker">
          <DateRangePicker showOneCalendar format="dd/MM/yy" size="lg" character=" - "/>
          </div>
          <CustomDataGrid
            rows={tableData}
            columns={columnsMatiere}
            height="75vh"
            className="custom-ccp"
            Pagination={CustomPagination}
            rowHeight={40}
            paginationPageSize={10}
            borderRadius="10px"
          />
        </Col>
        <Col xl="5" lg="5">
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
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position='end'>
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </ThemeProvider>
            )}
          />

          <div className="cadre">
            <div className="typencc">
              <span className="typenc">Type NC</span>
            </div>
            <div className="cadre-2">
              <div className="cadre-3">
                <span className="typenc-2">{selectedValues.selectedType || "Non-conformité dimonsionnelle"}</span>
              </div>
            </div>
            <Row style={{ marginTop: "20px" }}>
              <Col xl="6" lg="6" className="card-cont">
                <img src={up} className="img" />
                <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                  <p className="up"> +{selectedValues.selectedTauxConf || "__"}%</p>
                </div>
              </Col>
              <Col xl="6" lg="6" className="card-cont">
                <img src={down} className="img" />
                <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                  <p className="up">-{selectedValues.selectedTauxNonConf || "__"}%</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="cadre">
            <div className="cadre-3">
              <span className="typenc-3">Statistiques</span>
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
              height={325}
            /></Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
