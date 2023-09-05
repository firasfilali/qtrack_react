import React, { useState, useEffect } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import CustomDataGrid from "../../components/CustomDataGrid";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { BootstrapButton } from "../../assets/styleJs/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { toast } from "react-toastify";
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
import Textarea from "@mui/joy/Textarea";
import Option from "@mui/joy/Option";

import { Select, MenuItem, FormControl, FormLabel } from "@mui/material";

export default function Cp() {
  const [id, idchange] = useState("");
  const [titre, titrechange] = useState("");
  const [description, descriptionchange] = useState("");
  const [date, datechange] = useState("");

  const [phase, phasechange] = useState("");
  const [phase_description, phase_descriptionhange] = useState("");
  const [cycle, cyclechange] = useState("");

  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openCycle, setopenCycle] = React.useState(false);
  const [openPhase, setOpenPhase] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [cycleTable, setcycleTable] = useState([]);
  const [operateurTable, setOperateurTable] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickopenCycle = () => {
    setopenCycle(true);
  };

  const handleCloseCycle = () => {
    setopenCycle(false);
  };
  const handleClickOpenPhase = () => {
    setOpenPhase(true);
  };

  const handleClosePhase = () => {
    setOpenPhase(false);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, titre, description, date };
    //console.log(regobj);

    fetch("http://localhost:3030/cycle_production", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        toast.success("Cycle enregistrer.");
        // window.location.reload();
        setopenCycle(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };
  const handlesubmitPhase = (e) => {
    e.preventDefault();
    let phase2 = { id, phase, phase_description, cycle };
    //console.log(regobj);

    fetch("http://localhost:3030/phases", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(phase2),
    })
      .then((res) => {
        toast.success("Cycle enregistrer.");
        // window.location.reload();
        setOpenPhase(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };
  const handleSelectChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);
  };
  const handleOnChange = (event) => {
    cyclechange(event.target.value);
    handleSelectChange(event);
  };

  const deleteCycle = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/cycle_production/${id}`, {
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
          setcycleTable((prevRows) => prevRows.filter((row) => row.id !== id));
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    },
    []
  );
  const deletePhase = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/phases/${id}`, {
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
          setTableData((prevRows) => prevRows.filter((row) => row.id !== id));
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    },
    []
  );
  const fetchData = () => {
    fetch("http://localhost:3030/phases")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data.slice(0, 6));
      });
  };
  const fetchDataRef = () => {
    fetch("http://localhost:3030/cycle_production")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setcycleTable(data.slice(0, 6));
      });
  };

  useEffect(
    () => {
      fetchData();
      fetchDataRef();
    },
    [cycleTable],
    [tableData]
  );

  const cycleColumns = [
    {
      field: "titre",
      headerName: "Titre",
      flex: 0.2,
      align: "center",
      editable: true,
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
      field: "date",
      headerName: "Date de création",
      flex: 0.2,
      align: "center",
      type: "date",
      editable: true,
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: "description",
      headerName: "Déscription",
      flex: 0.4,
      align: "center",
      editable: true,
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
          onClick={deleteCycle(params.id)}
        />,
      ],
    },
  ];
  const phaseColumns = [
    {
      field: "phase",
      headerName: "Phase",
      flex: 0.2,
      align: "center",
      editable: true,
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
      field: "cycle",
      headerName: "Cycle de production",
      flex: 0.2,
      align: "center",
      editable: true,
    },
    {
      field: "phase_description",
      headerName: "Déscription",
      flex: 0.4,
      align: "center",
      editable: true,
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
          onClick={deletePhase(params.id)}
        />,
      ],
    },
  ];
  return (
    <div style={{ height: "80vh" }}>
      <div style={{ marginBottom: "5px" }}>
        <BootstrapButton
          onClick={handleClickopenCycle}
          variant="contained"
          style={{ borderRadius: 10 }}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter CP
        </BootstrapButton>
      </div>
      <Dialog
        open={openCycle}
        onClose={handleCloseCycle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "100vh",
            height: "60vh",
            borderRadius: "0",
            paddingLeft: "10px",
            paddingRight: "10px",
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
            Ajouter Cycle de production
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={1}>
              <FormControl>
                <FormLabel sx={{color:"black"}}>Titre</FormLabel>
                <Input
                  sx={{
                    "--Input-focusedThickness": "white",
                    borderColor: "white",
                  }}
                  variant="soft"
                  placeholder="saisir titre"
                  autoFocus
                  required
                  value={titre}
                  onChange={(e) => titrechange(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel sx={{color:"black"}}>Date de création</FormLabel>
                <Input
                  sx={{
                    "--Input-focusedThickness": "white",
                    borderColor: "white",
                  }}
                  variant="soft"
                  placeholder="saisir titre"
                  autoFocus
                  required
                  type="date"
                  value={date}
                  onChange={(e) => datechange(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel sx={{color:"black"}}>Déscription</FormLabel>
                <Textarea
                  placeholder="Type in here…"
                  required
                  minRows={5}
                  variant="soft"
                  sx={{
                    "--Textarea-focusedThickness": "white",
                    "--Textarea-minHeight": "3rem",
                    borderColor: "white",
                    paddingLeft: "15px",
                  }}
                  value={description}
                  onChange={(e) => descriptionchange(e.target.value)}
                />
              </FormControl>

              <DialogActions>
                <Button
                  onClick={handlesubmit}
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
                  onClick={handleCloseCycle}
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
        marginBottom={"5px"}
        rows={cycleTable}
        columns={cycleColumns}
        height="38vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
      <div style={{ marginBottom: "5px" }}>
        <BootstrapButton
          onClick={handleClickOpenPhase}
          variant="contained"
          style={{ borderRadius: 10 }}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter phase
        </BootstrapButton>
      </div>
      <Dialog
        open={openPhase}
        onClose={handleClosePhase}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "100vh",
            height: "60vh",
            borderRadius: "0",
            paddingLeft: "10px",
            paddingRight: "10px",
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
            Ajouter Phases
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={1}>
              <FormControl>
                <FormLabel sx={{ color: "black" }}>Phase</FormLabel>
                <Input
                  sx={{
                    "--Input-focusedThickness": "white",
                    borderColor: "white",
                  }}
                  variant="soft"
                  placeholder="saisir titre"
                  autoFocus
                  required
                  value={phase}
                  onChange={(e) => phasechange(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{borderColor:"black"}} variant="filled" size="small">
                <FormLabel sx={{color:"black"}}>Cycle de production</FormLabel>
                <Select
                  value={cycle}
                  onChange={handleOnChange}
                  placeholder="Séléctionner références…"
                >
                  {cycleTable.map((item) => (
                    <MenuItem key={item.id} value={item.titre}>
                      {item.titre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel sx={{color:"black"}}>Déscription</FormLabel>
                <Textarea
                  placeholder="Type in here…"
                  required
                  minRows={5}
                  variant="soft"
                  value={phase_description}
                  onChange={(e) => phase_descriptionhange(e.target.value)}
                  sx={{
                    "--Textarea-focusedThickness": "white",
                    "--Textarea-minHeight": "3rem",
                    borderColor: "white",
                    paddingLeft: "15px",
                  }}
                />
              </FormControl>

              <DialogActions>
                <Button
                  onClick={handlesubmitPhase}
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
                  onClick={handleClosePhase}
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
        columns={phaseColumns}
        height="38vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
    </div>
  );
}
