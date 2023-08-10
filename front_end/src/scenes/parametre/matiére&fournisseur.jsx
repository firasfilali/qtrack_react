import React, { useState, useEffect } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
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

export default function ParametreMatiereFour() {
  const [tableData, setTableData] = useState([]);
  const [tableDataFournisseur, setTableDataFournisseur] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openFourn, setOpenFour] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenFourn = () => {
    setOpenFour(true);
  };
  const handleCloseFourn = () => {
    setOpenFour(false);
  };
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setTableData((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );
  const fetchData = () => {
    fetch("http://localhost:3030/matiere1ere_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data.slice(0, 6));
      });
  };

  const fetchDataFournisseur = () => {
    fetch("http://localhost:3030/fournisseur_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataFournisseur(data.slice(0, 6));
      });
  };

  useEffect(() => {
    fetchDataFournisseur();
    fetchData();
    
  }, []);

  const handleSelectChange = event => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);
  };
  const columns = [
    {
      field: "ref",
      headerName: "Référence matière",
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
    { field: "type", headerName: "Type matière", flex: 0.1, align: "center" },
    {
      field: "fournisseur",
      headerName: "Fournisseur",
      flex: 0.1,
      align: "center",
    },
    {
      field: "status",
      align: "center",
      flex: 0.1,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<i className="bi bi-trash" style={{ color: "red" }}></i>}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];
  const columnsFournisseur = [
    {
      field: "ref",
      headerName: "Référence fournisseur",
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
    { field: "nom", headerName: "Nom fournisseur", flex: 0.1, align: "center" },
    {
      field: "status",
      align: "center",
      flex: 0.1,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<i className="bi bi-trash" style={{ color: "red" }}></i>}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];
  return (
    <div style={{ height: "80vh" }}>
      <Row style={{ marginBottom: "13px" }}>
        <Col xl="5" lg="5">
          <div style={{ marginBottom: "10px" }}>
            <BootstrapButton
              onClick={handleClickOpenFourn}
              variant="contained"
              style={{ borderRadius: 10 }}
              size="small"
              startIcon={<AddRoundedIcon fontSize="small" />}
            >
              Ajouter Fournisseur
            </BootstrapButton>
            <Dialog
              open={openFourn}
              onClose={handleCloseFourn}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              PaperProps={{
                sx: {
                  width: "100vh",
                  height: "60vh",
                  borderRadius: "0",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                },
              }}
            >
              <DialogTitle id="alert-dialog-title" sx={{ marginTop: "17px" }}>
                <Typography
                  component="div"
                  paragraph
                  style={{ fontWeight: "bold" }}
                  variant="h5"
                  align="center"
                >
                  Ajouter Fournisseur
                </Typography>
              </DialogTitle>
              <DialogContent>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setOpen(false);
                  }}
                >
                  <Stack spacing={3}>
                    <FormControl>
                      <FormLabel>Référence fournisseur</FormLabel>
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
                      <FormLabel>Nom fournisseur</FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir nom fournisseur"
                        required
                      />
                    </FormControl>
                    <div style={{ marginTop: "100px" }}>
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
                          onClick={handleCloseFourn}
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
                    </div>
                  </Stack>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <CustomDataGrid
            rows={tableDataFournisseur}
            columns={columnsFournisseur}
            height="79vh"
            className="custom-opp"
            Pagination={CustomPagination}
            rowHeight={40}
            paginationPageSize={10}
            borderRadius="10px"
          />
        </Col>
        <Col xl="7" lg="7">
          <div style={{ marginBottom: "10px" }}>
            <BootstrapButton
              onClick={handleClickOpen}
              variant="contained"
              style={{ borderRadius: 10 }}
              size="small"
              startIcon={<AddRoundedIcon fontSize="small" />}
            >
              Ajouter Matiére 1ere
            </BootstrapButton>
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
                  paddingLeft: "15px",
                  paddingRight: "15px",
                },
              }}
            >
              <DialogTitle id="alert-dialog-title" sx={{ marginTop: "17px" }}>
                <Typography
                  component="div"
                  paragraph
                  style={{ fontWeight: "bold" }}
                  variant="h5"
                  align="center"
                >
                  Ajouter Matière 1ere
                </Typography>
              </DialogTitle>
              <DialogContent>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setOpen(false);
                  }}
                >
                  <Stack spacing={3}>
                    <FormControl>
                      <FormLabel>Référence matière</FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir référence "
                        autoFocus
                        required
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Nom fournisseur</FormLabel>

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
                        placeholder="Select fournisseur…"
                        indicator={<KeyboardArrowRightIcon />}
                      >
                        {tableDataFournisseur.map(item => (
                          <Option key={item.id} value={item.nom}>
                            {item.nom}
                          </Option>
                        ))} 
                    
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Type matière</FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir type matière"
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
          </div>
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
      </Row>
    </div>
  );
}
