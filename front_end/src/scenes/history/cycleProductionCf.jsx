import React from "react";
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

export default function cycleProductionCf() {
  return (
    <div style={{ height: "80vh" }}>
      <Row>
        <Col xl="4" lg="4" style={{width:"40%"}}>
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
          <div className="datepicker" style={{ marginRight:"20px" }}>
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
            rows={PhaseRows}
            columns={PhaseColumnsCcp}
            height="31vh"
            className="custom-ccp"
            hideFooter={true}
            borderRadius="9px"
            marginBottom="10px"
            paginationPageSize={8}
          />

          <div className="ttt">
            <span className="tttt">% Opérateurs</span>
          </div>
          <CustomDataGrid
            rows={StatiqueRows}
            columns={OpColumns}
            hideFooter={true}
            className="custom-ccp"
            height="31vh"
            marginBottom="10px"
            paginationPageSize={6}
            borderRadius="10px"
          />
        </Col>
        <Col xl="5" lg="5">
          <div className="ttt">
            <span className="tttt">Contrôle finale</span>
          </div>
          <CustomDataGrid
            rows={controleFinalRow}
            columns={controleFinalCol}
            hideFooter={true}
            className="custom-ccp"
            height="31vh"
            marginBottom="10px"
            paginationPageSize={6}
            borderRadius="10px"
          />
          <div className="cadre-graph">
            <div className="cadre-3">
              <span className="typenc-3">Graphe des risques</span>
            </div>

            <Row>
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
                height={210}
              />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
