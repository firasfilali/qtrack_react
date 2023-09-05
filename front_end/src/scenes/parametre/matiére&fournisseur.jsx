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
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Option from "@mui/joy/Option";
import { Select, MenuItem, FormControl, FormLabel } from "@mui/material";
import { toast } from "react-toastify";

export default function ParametreMatiereFour() {
  const [id, idchange] = useState("");
  const [ref, refchange] = useState("");
  const [nom, nomchange] = useState("");
  const [contact, contactchange] = useState("");


const [idMatiere, idMatierechange] = useState("");
  const [refMatiere, refMatierechange] = useState("");
  const [type, typechange] = useState("");
  const [fournisseur, fournisseurchange] = useState("");

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
  const deleteMatiere = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/matiere1ere_rows/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          toast.success("Supprimé avec succès.");
          setTableData((prevRows) =>
            prevRows.filter((row) => row.id !== id)
          );
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    },
    []
  );

  const deleteFournisseur = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/fournisseur_rows/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          toast.success("Supprimé avec succès.");
          setTableDataFournisseur((prevRows) =>
            prevRows.filter((row) => row.id !== id)
          );
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
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
        setTableData(data);
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

  useEffect(
    () => {
      fetchDataFournisseur();
      fetchData();
    },
    [tableDataFournisseur],
    [tableData]
  );

  const handleSelectChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);
  };
  const handleOnChange = (event) => {
    fournisseurchange(event.target.value);
    handleSelectChange(event);
  };

  const handlesubmitFournisseur = (e) => {
    e.preventDefault();
    let obj = { id, ref, nom, contact };

    fetch("http://localhost:3030/fournisseur_rows", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        toast.success("Fournisseur enregistrer.");
        // window.location.reload();
        setOpenFour(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };

  const handlesubmitMatiere = (e) => {
    e.preventDefault();
    let objMat = { id, refMatiere, type, fournisseur };

    fetch("http://localhost:3030/matiere1ere_rows", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objMat),
    })
      .then((res) => {
        toast.success("Matiére 1ere enregistrer.");
        // window.location.reload();
        setOpen(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };

  const columnsMatiere = [
    {
      field: "refMatiere",
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
    { field: "type", headerName: "Type", flex: 0.1, align: "center" },
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
          onClick={deleteMatiere(params.id)}
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
    { field: "contact", headerName: "Contact", flex: 0.1, align: "center" },
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
          onClick={deleteFournisseur(params.id)}
        />,
      ],
    },
  ];
  return (
    <div style={{ height: "80vh" }}>
      <Row style={{ marginBottom: "13px" }}>
        <Col xl="6" lg="6">
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
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel sx={{ color: "black" }}>Référence matière</FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir référence "
                        autoFocus
                        required
                        value={refMatiere}
                        onChange={(e) => refMatierechange(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel sx={{ color: "black" }}>Type matière</FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir type matière"
                        required
                        value={type}
                        onChange={(e) => typechange(e.target.value)}
                      />
                    </FormControl>
                    <FormControl
                     sx={{ borderColor: "black" }}
                     variant="filled"
                     size="small" >
                      <FormLabel sx={{ color: "black" }}>Fournisseur</FormLabel>
                      <Select value={fournisseur} onChange={handleOnChange}>
                        <MenuItem value="" disabled>
                          Séléctionner fournisseur…
                        </MenuItem>
                        {tableDataFournisseur.map((item) => (
                          <MenuItem key={item.id} value={item.nom}>
                            {item.nom}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <DialogActions>
                      <Button
                      onClick={handlesubmitMatiere}
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
            columns={columnsMatiere}
            height="79vh"
            className="custom-opp"
            Pagination={CustomPagination}
            rowHeight={40}
            paginationPageSize={10}
            borderRadius="10px"
          />
        </Col>
        <Col xl="6" lg="6">
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
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel sx={{ color: "black" }}>
                        Référence fournisseur
                      </FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir référence"
                        autoFocus
                        required
                        value={ref}
                        onChange={(e) => refchange(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel sx={{ color: "black" }}>
                        Nom fournisseur
                      </FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir nom fournisseur"
                        required
                        value={nom}
                        onChange={(e) => nomchange(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel sx={{ color: "black" }}>Contact</FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir contact fournisseur"
                        required
                        value={contact}
                        onChange={(e) => contactchange(e.target.value)}
                      />
                    </FormControl>
                    <div style={{ marginTop: "100px" }}>
                      <DialogActions>
                        <Button
                          onClick={handlesubmitFournisseur}
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
      </Row>
    </div>
  );
}
