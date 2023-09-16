import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Select, MenuItem, FormControl, FormLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { toast } from "react-toastify";

const theme = createTheme({
    palette: {
      custom: {
        main: "#808080",
        contrastText: "#fff",
      },
    },
  });
export default function ControleChaine() {
    const [tableData, setTableData] = useState([]);
    const [tableDataOp, setTableDataOp] = useState([]);
    const [tableDataPhase, setTableDataPhase] = useState([]);
    const [tableDataTypeNC, setTableDataTypeNC] = useState([]);
    const [tableDataTypeAC, setTableDataTypeAC] = useState([]);
    const [id, idchange] = useState("");
    const [ref, refchange] = useState("");
    const [code, codechange] = useState("");
    const [phase, phasechange] = useState("");
  
  
  const [typenc, typencchange] = useState("");
    const [action, actionchange] = useState("");
    const [qt_cntrl, qt_cntrlchange] = useState("");
    const [qt_nc, qt_ncchange] = useState("");


    const handlesubmit = (e) => {
      e.preventDefault();
      let obj = {   id, 
        ref_cntrl: ref?.ref || ref, 
        code_cntrl: code?.code || code, 
        phase_cntrl: phase?.phase || phase, 
        typenc_cntrl: typenc?.typenc || typenc,
        action_cntrl: action?.typeac || action, 
        qt_cntrl, 
        qt_nc };
  
      fetch("http://localhost:3030/controle", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((res) => {
          toast.success("Controle enregistrer.");
          // window.location.reload();
          
        })
        .catch((err) => {
          toast.error("Echoué :" + err.message);
        });
    };


    const fetchDataProduit = () => {
        fetch("http://localhost:3030/produits")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableData(data);
          });
      };
      const fetchDataPhase = () => {
        fetch("http://localhost:3030/phases")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableDataPhase(data);
          });
      };
      const fetchDataOp = () => {
        fetch("http://localhost:3030/operator_rows")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableDataOp(data);
          });
      };
      const fetchDataTypeNC = () => {
        fetch("http://localhost:3030/typeNC_rows")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableDataTypeNC(data);
          });
      };
      const fetchDataTypeAC = () => {
        fetch("http://localhost:3030/typeAC_rows")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableDataTypeAC(data);
          });
      };
      useEffect(() => {
        fetchDataProduit();
        fetchDataOp();
        fetchDataPhase();
        fetchDataTypeNC();
        fetchDataTypeAC();
    }, []);
    
  return (
    <div style={{background: '#EBEBEE', padding: '10px', borderRadius: '8px'}}>
      <Row >
        <Col xl="4" lg="4">
          {" "}
          <Typography
            component="div"
            paragraph
            style={{ fontWeight: "bold" }}
            variant="h3"
            align="center"
          >
            Contrôle à la chaine
          </Typography>
        </Col>
        <Col xl="2" lg="2">
          <FormControl
            style={{ width: "200px", marginLeft: "25px" }}
            fullWidth
            sx={{ borderColor: "black" }}
            variant="filled"
            size="large"
          >
           <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableData}
              getOptionLabel={(option) => option.ref?option.ref:''}
              value={ref}
              onChange={(event, newValue) => refchange(newValue)}
              sx={{ backgroundColor: "white" }}
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
          </FormControl>
        </Col>
        <Col xl="3" lg="3">
          <FormControl
            style={{ marginLeft: "25px" }}
            fullWidth
            sx={{ borderColor: "black" }}
            variant="filled"
            size="large"
          >
             <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableDataOp}
              value={code}
              onChange={(event, newValue) => codechange(newValue)}
              getOptionLabel={(option) => option.code?option.code:''}
              sx={{ backgroundColor: "white", }}
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Code employée"
                    color="custom"
                  />
                </ThemeProvider>
              )}
            />
          </FormControl>
        </Col>
        <Col xl="3" lg="3">
          <FormControl
            style={{ width: "200px", marginLeft: "25px" }}
            fullWidth
            sx={{ borderColor: "black" }}
            variant="filled"
            size="large"
          >
               <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableDataPhase}
              value={phase}
              onChange={(event, newValue) => phasechange(newValue)}
              getOptionLabel={(option) => option.phase?option.phase:''}
              sx={{ backgroundColor: "white", }}
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Phase"
                    color="custom"
                  />
                </ThemeProvider>
              )}
            />
          </FormControl>
        </Col>
      </Row>
      <Row style={{ marginTop: "150px" }}>
        <Col xl="3" lg="3" style={{ marginLeft: "90px" }}>
          <div>
            <FormControl>
              <FormLabel
                sx={{
                  color: "black",
                  marginBottom: "30px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Quantité controlée
              </FormLabel>
              <Input
                sx={{
                  "--Input-focusedThickness": "white",
                }}
                size="lg"
                color="primary"
                placeholder="saisir quantité controlé "
                autoFocus
                required
                value={qt_cntrl}
                onChange={(e) => qt_cntrlchange(e.target.value)}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <FormLabel
                sx={{
                  color: "black",
                  marginTop: "30px",
                  marginBottom: "30px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Quantité NC
              </FormLabel>
              <Input
                sx={{
                  "--Input-focusedThickness": "white",
                }}
                size="lg"
                color="danger"
                placeholder="saisir quantité NC "
                autoFocus
                required
                value={qt_nc}
                onChange={(e) => qt_ncchange(e.target.value)}
              />
            </FormControl>
          </div>
        </Col>

        <Col xl="7" lg="7">
          <Typography
            component="div"
            paragraph
            style={{ fontWeight: "bold", marginLeft: "27px" }}
            variant="h5"
          >
            Type de non-conformité
          </Typography>

          <FormControl
            style={{ marginLeft: "30px" }}
            fullWidth
            sx={{ borderColor: "black" }}
            variant="filled"
            size="large"
          >
           <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableDataTypeNC}
              value={typenc}
              onChange={(event, newValue) => typencchange(newValue)}
              getOptionLabel={(option) => option.typenc?option.typenc:''}
              sx={{ backgroundColor: "white", }}
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
          </FormControl>
          <Typography
            component="div"
            paragraph
            style={{ fontWeight: "bold", marginLeft: "27px", marginTop:'30px' }}
            variant="h5"
          >
            Action de correction
          </Typography>

          <FormControl
            style={{ marginLeft: "30px" }}
            fullWidth
            sx={{ borderColor: "black" }}
            variant="filled"
            size="large"
          >
           <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tableDataTypeAC}
              value={action}
              onChange={(event, newValue) => actionchange(newValue)}
              getOptionLabel={(option) => option.typeac?option.typeac:''}
              sx={{ backgroundColor: "white", }}
              renderInput={(params) => (
                <ThemeProvider theme={theme}>
                  <TextField
                    {...params}
                    label="Code employée"
                    color="custom"
                  />
                </ThemeProvider>
              )}
            />
          </FormControl>
         
  
                  
                  
              
        </Col>
        <div className="type-confir2">
              <Button
                    onClick={handlesubmit}
                    type="submit"
                    variant="contained"
                    style={{
                      
                        backgroundColor: "black",
                        color: "white",
                        textTransform: "none",
                        fontSize: "20px",
                        marginRight: "110px",
                        height:"60px",
                        width: "200px",
                     
                    }}
                  >
                    Confirmer
                  </Button>
                  </div>
      </Row>
    </div>
  );
}
