import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Select, MenuItem, FormControl, FormLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";
import Input from "@mui/joy/Input";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { toast } from "react-toastify";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/joy/Button';
const theme = createTheme({
    palette: {
      custom: {
        main: "#808080",
        contrastText: "#fff",
      },
    },
  });
export default function ActionCorrective() {
  
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
            Action de correction
          </Typography>
        </Col>
        <Col xl="2" lg="2">
          {/* <FormControl
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
          </FormControl> */}
        </Col>
        <Col xl="3" lg="3">
          {/* <FormControl
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
          </FormControl> */}
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
      </Row>
      <Row style={{ marginTop: "80px" }}>
        <Col xl="2" lg="2" style={{ marginLeft: "50px" }}>
        <div>
            <FormControl>
              <FormLabel
                sx={{
                  color: "black",
                  marginBottom: "30px",
                  marginTop:"10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                
              </FormLabel>
              <Button size="lg" color="primary" variant="outlined" style={{width: "200px", height:"60px"}}>Problème Résolu</Button>
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
                
              </FormLabel>
              <Button size="lg" color="danger" variant="outlined" style={{height:"60px"}}>Problème non Résolu</Button>
            </FormControl>
          </div>
        </Col>

        <Col xl="4" lg="4" style={{marginLeft:"50px"}}>
          <Typography
            component="div"
            paragraph
            style={{ fontWeight: "bold",  }}
            variant="h5"
          >
            Action de correction
          </Typography>

          <FormControl
            style={{ }}
            fullWidth
            sx={{ borderColor: "black" }}
            variant="filled"
            size="large"
          >
            <div>
              <List
                sx={{
                  width: 500,
                  bgcolor: "white",
                  overflow: "auto",
                  height: 150,
                  borderRadius: "20px",
                  marginBottom: "30px",

                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                {[1,2].map((item) => (
                  <li key={`item-${item}`}>
                    <ul>
                      <ListItem>
                        <ListItemText
                          primary={`Action de correction ${item}`}
                        />
                      </ListItem>
                    </ul>
                  </li>
                ))}
              </List>
            </div>
          </FormControl>
         

       
         
        
                  
                  
              
        </Col>
        <Col xl="4" lg="4" style={{marginLeft: "130px"}}>
        <Typography
            component="div"
            paragraph
            style={{ fontWeight: "bold", }}
            variant="h5"
          >
            Etat d'avancement
          </Typography>
          <Input
                sx={{
                  
                  width:"205px",
                  height:"70px",
                 
                }}
                size="lg"
                
                placeholder="saisir etat d'avancement "
                autoFocus
                required
              
              />
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
                      marginRight: "100px",
                      marginTop:"50px",
                      marginBottom: "30px",
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
