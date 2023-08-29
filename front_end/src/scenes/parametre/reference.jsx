import React, { useState, useEffect } from "react";

import { GridActionsCellItem } from '@mui/x-data-grid';
import CustomDataGrid from "../../components/CustomDataGrid";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { BootstrapButton } from "../../assets/styleJs/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Row, Col } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function Reference() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openFamille, setOpenFamille] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableDataFamille, setTableDataFamille] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleClickOpenFamille = () => {
    setOpenFamille(true);
  };

  const handleCloseFamille = () => {
    setOpenFamille(false);
  };

  const handleSelectChange = event => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);
  };
    
    const deleteRef = React.useCallback(
        (id) => () => {
          setTimeout(() => {
            setTableData((prevRows) => prevRows.filter((row) => row.id !== id));
          });
        },
        [],
      );
      const deleteFam = React.useCallback(
        (id) => () => {
          setTimeout(() => {
            setTableDataFamille((prevRows) => prevRows.filter((row) => row.id !== id));
          });
        },
        [],
      );
    const fetchData = () => {
        fetch("http://localhost:3030/ref_rows")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableData(data.slice(0, 6));
          });
      };

      const fetchDataFamille = () => {
        fetch("http://localhost:3030/famille_rows")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableDataFamille(data.slice(0, 6));
          });
      };
    
      useEffect(() => {
        fetchData();
        fetchDataFamille();
      }, []);
      const columnsFamille = [
        {
          field: "famille",
          headerName: "Famille",
          flex: 0.1,
          align: "center"
        },
        {
          field: "ref",
          headerName: "Références",
          flex: 0.2,
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
     
        {
          field: "status",
          align: "center",
          flex: 0.1,
          headerName: "Actions",
          type: "actions",
          getActions: (params) => [
            <GridActionsCellItem
            icon={<i className="bi bi-trash" style={{color:'red'}}></i>}
            label="Delete"
            onClick={deleteFam(params.id)}
          />,
          ],
        },]
      const columns = [
        {
          field: "ref",
          headerName: "Références",
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
        {
          field: "status",
          align: "center",
          flex: 0.1,
          headerName: "Actions",
          type: "actions",
          getActions: (params) => [
            <GridActionsCellItem
            icon={<i className="bi bi-trash" style={{color:'red'}}></i>}
            label="Delete"
            onClick={deleteRef(params.id)}
          />,
          ],
        },]
    return (
      <div style={{ height: "80vh"}}>
        <Row>
          <Col xl="6" lg="6">
        <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
        onClick={handleClickOpen}
          variant="contained"
          style={{borderRadius: 10}}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter référence
        </BootstrapButton>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            sx: {
              width: "100vh",
              height: "60vh",
              borderRadius: "0",
              paddingLeft:"10px",
              paddingRight:"10px"
            },
          }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ marginTop: "17px" }}>
            <Typography component="div" paragraph
              style={{ fontWeight: "bold" }}
              variant="h5"
              align="center"
            >
              Ajouter Référence
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={25}>
                <FormControl>
                  <FormLabel>Référence</FormLabel>
                  <Input
                    sx={{
                      "--Input-focusedThickness": "white",
                      borderColor: "white",
                      
                    }}
                    variant="soft"
                    placeholder="saisir référence"
                    autoFocus
                    required
                  />
                </FormControl>
                
                <DialogActions>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "#18202c",
                      color: "white",
                      textTransform: "none",
                    }}
                  >
                    Ajouter
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textTransform: "none",
                      borderColor: "#18202c",
                    }}
                  >
                    Annuler
                  </Button>
                </DialogActions>
              </Stack>
            </form>
          </DialogContent>
        </Dialog>
        <CustomDataGrid
        rows={tableData}
        columns={columns}
        height="79vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
      </Col>
      <Col xl="6" lg="6">
        <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
         onClick={handleClickOpenFamille}
          variant="contained"
          style={{borderRadius: 10}}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter famille
        </BootstrapButton>
        </div>
        <Dialog
          open={openFamille}
          onClose={handleCloseFamille}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            sx: {
              width: "100vh",
              height: "60vh",
              borderRadius: "0",
              paddingLeft:"10px",
              paddingRight:"10px"
            },
          }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ marginTop: "17px" }}>
            <Typography component="div" paragraph
              style={{ fontWeight: "bold" }}
              variant="h5"
              align="center"
            >
              Ajouter Famille
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpenFamille(false);
              }}
            >
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel>Nom famille</FormLabel>
                  <Input
                    sx={{
                      "--Input-focusedThickness": "white",
                      borderColor: "white",
                      
                    }}
                    variant="soft"
                    placeholder="saisir référence"
                    autoFocus
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Références</FormLabel>
                 
                  <Select
                      
                      variant="soft"
                        slotProps={{
                          listbox: {
                            sx: {
                              zIndex: 1400,
                              innerHeight: "50px",
                              maxHeight: 150
                              
                            },
                          },
                        }}
                        
                        onChange={handleSelectChange}
                        placeholder="Séléctionner références…"
                        indicator={<KeyboardArrowRightIcon />}
                      >
                        {tableData.map(item => (
                          <Option key={item.id} value={item.ref}>
                            {item.ref}
                          </Option>
                        ))} 
                    
                      </Select>
                </FormControl>
                
                <DialogActions style={{marginTop:"100px"}}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "#18202c",
                      color: "white",
                      textTransform: "none",
                      
                    }}
                  >
                    Ajouter
                  </Button>
                  <Button
                    onClick={handleCloseFamille}
                    variant="outlined"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textTransform: "none",
                      borderColor: "#18202c",
                    }}
                  >
                    Annuler
                  </Button>
                </DialogActions>
              </Stack>
            </form>
          </DialogContent>
        </Dialog>
        <CustomDataGrid
        rows={tableDataFamille}
        columns={columnsFamille}
        height="79vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
      </Col>
      </Row>
    </div>
  )
}
