import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { listOperateurs, references } from "../../utils/data";
import PinnedSubheaderList from "../../components/lists/customList";
import "../../assets/css/correction.css";
import { Row, Col } from "react-bootstrap";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function Correctionaction() {
  const [tableData, setTableData] = useState([]);
  const [tableDataTypeAC, setTableDataTypeAC] = useState([]);
  const [tableDataAgent, setTableDataAgent] = useState([]);
  const [tableDataNC, setTableDataNC] = useState([]);

  const [selectedValues, setSelectedValues] = useState({
    selectedReference: "",
    selectedPilote: "",
    selectedEtat: "",
    selectedAction: "",
  });

  const handleChange = (event, newValue) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      selectedReference: newValue ? newValue.typenc_cntrl : "",
      selectedPilote: newValue ? newValue.agent : "",
      selectedEtat: newValue ? newValue.etat : "",
      selectedAction: newValue ? newValue.action_cntrl : "",
    }));
  };

  const handlesubmit = () => {
    toast.success("Action de correction créée avec succès.");
  };
  const fetchData = () => {
    fetch("http://localhost:3030/controle")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data);
      });
  };
  const fetchDataAc = () => {
    fetch("http://localhost:3030/typeAC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeAC(data.slice(0, 6));
      });
  };

  const fetchDataAgent = () => {
    fetch("http://localhost:3030/agentquality_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataAgent(data);
      });
  };
  const fetchDataNC = () => {
    fetch("http://localhost:3030/typeNC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataNC(data);
      });
  };

  useEffect(
    () => {
      fetchData();
      fetchDataAc();
    },
    [tableData],
    [tableDataTypeAC]
  );
  useEffect(
    () => {
      fetchDataAgent();
      fetchDataNC();
    },
    [tableDataAgent],
    [tableDataNC]
  );

  return (
    <div>
      <Row>
        <Col xl="6" lg="6">
          <div className="corr">
            <span className="span-corr">Action de correction</span>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableData}
              getOptionLabel={(option) => option.ref_cntrl}
              onChange={handleChange}
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
              <List
                sx={{
                  width: "100%",
                  bgcolor: "white",
                  overflow: "auto",
                  height: 200,
                  borderRadius: "20px",

                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                {[1].map((item) => (
                  <li key={`item-${item}`}>
                    <ul>
                      <ListItem>
                        <ListItemText
                          primary={selectedValues.selectedAction || "-"}
                        />
                      </ListItem>
                    </ul>
                  </li>
                ))}
              </List>
            </div>
            <span className="span-pilote">Type de non-conformité</span>
            <div className="type-conf">
              <span className="span2">
                {selectedValues.selectedReference || "-"}
              </span>
            </div>
            <Row className="mm">
              <Col xl="6" lg="6">
                <span className="span-pilote">Pilote</span>
                <div className="type-conf">
                  <span className="span2">
                    {selectedValues.selectedPilote || "-"}
                  </span>
                </div>
              </Col>

              <Col xl="6" lg="6">
                <span className="span-pilote">Etat d'avancement</span>
                <div className="type-conf">
                  <span className="span2">
                    {selectedValues.selectedEtat || "-"}
                  </span>
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
              options={tableData}
              getOptionLabel={(option) => option.ref_cntrl}
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
              options={tableData}
              getOptionLabel={(option) => option.action_cntrl}
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
              options={tableData}
              getOptionLabel={(option) => option.code_cntrl}
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
              <span className="span2">Type de non-conformité :</span>
            </div>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableData}
              getOptionLabel={(option) => option.typenc_cntrl}
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ backgroundColor: "white", marginTop: "10px" }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <div className="right">
              <div className="type-confir">
                <Button
                  onClick={handlesubmit}
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    fontSize: "18px",
                  }}
                >
                  Ajouter
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
