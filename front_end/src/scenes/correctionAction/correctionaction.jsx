import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { listOperateurs } from "../../utils/data";
import PinnedSubheaderList from "../../components/lists/customList";
import "../../assets/css/correction.css";
import { Row, Col } from "react-bootstrap";

const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function Correctionaction() {
  return (
    <div>
      <Row>
        <Col xl="6" lg="6">
          <div className="corr">
            <span className="span-corr">Action de correction</span>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listOperateurs}
              sx={{ backgroundColor: "white", marginTop: "30px" }}
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

            <div className="list">
              <PinnedSubheaderList />
            </div>
            <span className="span2">Type de non-conformité</span>
            <div className="type-conf">
              <span className="span2">X</span>
            </div>
            <Row className="mm">
              <Col xl="6" lg="6">
                <span className="span-pilote">Pilote</span>
                <div className="type-conf">
                  <span className="span2">X</span>
                </div>
              </Col>

              <Col xl="6" lg="6">
                <span className="span-pilote">Etat d'avancement</span>
                <div className="type-conf">
                  <span className="span2">X</span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xl="6" lg="6">
          <div className="corr">
            <span className="span-corr">Planifier une action</span>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listOperateurs}
              sx={{ backgroundColor: "white", marginTop: "30px" }}
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
            <div className="k">
              <span className="span2">Action :</span>
            </div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listOperateurs}
              sx={{ backgroundColor: "white", marginTop: "30px" }}
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Insérer action"
                    color="custom"
                  />
                </ThemeProvider>
              )}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listOperateurs}
              sx={{ backgroundColor: "white", marginTop: "30px" }}
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Insérer pilote"
                    color="custom"
                  />
                </ThemeProvider>
              )}
            />

            <div className="k">
              <span className="span2">Action :</span>
            </div>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listOperateurs}
              sx={{ backgroundColor: "white", marginTop: "30px" }}
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Insérer type de non-conformité"
                    color="custom"
                  />
                </ThemeProvider>
              )}
            />
             <div className="type-date">
              <span className="span2">jj/mm/aa</span>
            </div>
            <div className="right">
            <div className="type-confir">
              <span className="span2">Confirmer</span>
            </div>
            </div>

          </div>
        </Col>
      </Row>
    </div>
  );
}
