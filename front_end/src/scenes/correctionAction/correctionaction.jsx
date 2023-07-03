import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { listOperateurs } from "../../utils/data";
import PinnedSubheaderList from "../../components/lists/customList";
import "../../assets/css/correction.css"
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
        <Col xl="6" lg="6" >
          <div className="corr">
          <span className="span-corr">Action de correction</span>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={listOperateurs}
            sx={{backgroundColor: "white", marginTop: "30px" }}
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
          </div>
        </Col>
        <Col xl="6" lg="6" >
          <div className="corr">
          <span className="span-corr">Planifier une action</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
