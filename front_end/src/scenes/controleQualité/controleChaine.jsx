import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Select, MenuItem, FormControl, FormLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";

export default function ControleChaine() {
    const [tableData, setTableData] = useState([]);
    const [tableDataOp, setTableDataOp] = useState([]);



    const fetchDataProduit = () => {
        fetch("http://localhost:3030/produits")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableData(data.slice(0, 6));
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
      useEffect(
        () => {
            fetchDataProduit();
            fetchDataOp();
        },
        [tableData],
        [tableDataOp]
      );
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
            <InputLabel id="demo-simple-select1-label">Référence</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Référence"
            >
              <MenuItem value="" disabled>
                Séléctionner référence…
              </MenuItem>
              {tableData.map((item) => (
                          <MenuItem key={item.id} value={item.ref}>
                            {item.ref}
                          </MenuItem>
                        ))}
            </Select>
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
            <InputLabel id="demo-simple-select-label">Code employée</InputLabel>
            <Select
              labelId="demo-simple-select2-label"
              id="demo-simple-select2"
              label="Code"
            >
              <MenuItem value="" disabled>
                Séléctionner code…
              </MenuItem>
              {tableDataOp.map((item) => (
                          <MenuItem key={item.id} value={item.code}>
                            {item.code}
                          </MenuItem>
                        ))}
            </Select>
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
            <InputLabel id="demo-simple-select-label">Phase</InputLabel>
            <Select
              labelId="demo-simple-select3-label"
              id="demo-simple-select3"
              label="Phase"
            >
              <MenuItem value="" disabled>
                Séléctionner phase…
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
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
            <Select
              labelId="demo-simple-select2-label"
              id="demo-simple-select2"
              label="Code"
            >
              <MenuItem value="" disabled>
                Séléctionner type de non-conformité…
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
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
            <Select
              labelId="demo-simple-select2-label"
              id="demo-simple-select2"
              label="Code"
            >
              <MenuItem value="" disabled>
                Séléctionner type de non-conformité…
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
         
          <div className="type-confir2">
              <Button
                    
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      textTransform: "none",
                      fontSize: "20px"
                    }}
                  >
                    Confirmer
                  </Button>
                  </div>
                  
                  
              
        </Col>
      </Row>
    </div>
  );
}
