import React from "react";
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

const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function actioncorrectives() {
  return (
    <div style={{height: "80vh"}}>
      <Row>
        <Col xl="7" lg="7">
          <Row>
            <Col xl="8" lg="8">
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
            rows={TypeRows}
            columns={actionColumns}
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
            rows={TypeRows}
            columns={actionColumns}
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
                height={200}
              />
            </Row>
          </div>
          <div className="ttt">
            <span className="tttt">Graphe des actions correctives</span>
          </div>
          <div className="barchart">
            <Row></Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
