import React, { useState, useEffect } from "react";
import { BootstrapButton } from "../../assets/styleJs/theme";
import { GridActionsCellItem } from "@mui/x-data-grid";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import CustomDataGrid from "../../components/CustomDataGrid";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#2bc48a",
      contrastText: "#fff",
    },

    custom: {
      main: "#ea2525",
      contrastText: "#fff",
    },
  },
});

const Data = () => {
  const [id, idchange] = useState("");
  const [code, codechange] = useState("");
  const [nom, nomchange] = useState("");
  const [prénom, prénomchange] = useState("");
  const [status, statuschange] = useState("Active");
   const [tableData, setTableData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const fetchData = () => {
    fetch("http://localhost:3030/operator_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data.map(item => ({
          ...item,
          chipLabel: item.status,
          chipColor: item.status === 'Active' ? 'neutral' : 'custom'
        })));
      });
     
  };

  useEffect(() => {
    fetchData();
  }, [tableData]);
  const deleteOp = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/operator_rows/${id}`, {
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
  const handlesubmit = (e) => {
    e.preventDefault();
    let obj = { id, code, nom, prénom, status};
    //console.log(regobj);

    fetch("http://localhost:3030/operator_rows", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        toast.success("Cycle enregistrer.");
        // window.location.reload();
        setOpen(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };
  const updateStatus = (id, status) => {
    fetch(`http://localhost:3030/operator_rows/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Status updated.");
        } else {
          throw new Error("Failed to update status");
        }
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };
  const changeChipActive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Active", chipColor: "neutral", status: "Active" }
          : item
      )
    );
    updateStatus(id, "Active");
  };

  const changeChipDesactive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Desactive", chipColor: "custom", status: "Desactive"  }
          : item
      )
    );
    updateStatus(id, "Desactive");
  };



  
  const columns = [
    {
      field: "code",
      headerName: "Code Opérateur",
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
    { field: "nom", headerName: "Nom", flex: 0.2, align: "center" },
    {
      field: "prénom",
      headerName: "Prénom",
      flex: 0.2,
      align: "center",
    },
    {
      field: "status",
      align: "center",
      flex: 0.2,
      headerName: "Status",
      type: "actions",
      getActions: (params) => [
        <ThemeProvider theme={theme}>
          <Chip label={params.row.chipLabel} color={params.row.chipColor} />
        </ThemeProvider>,
      ],
    },
    {
      field: "actions",
      flex: 0.2,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <ThemeProvider theme={theme}>
          <GridActionsCellItem
            icon={<CheckCircleOutlineIcon color="neutral" />}
            label="Active"
            onClick={() => {
              changeChipActive(params.row.id);
              // handleSave(params.row.id, {
              //   chipLabel: "Desactive",
              //   chipColor: "error",
              // });
            }}
          />
          <GridActionsCellItem
            icon={<CancelOutlinedIcon color="custom" />}
            label="Desactive"
            onClick={() => {
              changeChipDesactive(params.row.id);
              // handleSave(params.row.id, {
              //   chipLabel: "Active",
              //   chipColor: "success",
              // });
            }}
            
          />
          <GridActionsCellItem
          icon={<i className="bi bi-trash" style={{ color: "red" }}></i>}
          label="Delete"
          onClick={deleteOp(params.id)}
        />
        </ThemeProvider>
      ],
    },
  ];
  return (
    <div style={{ height: "80vh" }}>
      <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
          onClick={handleClickOpen}
          variant="contained"
          style={{ borderRadius: 10 }}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter opérateur
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
              Ajouter Opérateur
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
                  <FormLabel>Code</FormLabel>
                  <Input
                    sx={{
                      "--Input-focusedThickness": "white",
                      borderColor: "white",
                    }}
                    variant="soft"
                    placeholder="saisir code agent qualité"
                    autoFocus
                    required
                    value={code}
                    onChange={(e) => codechange(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Nom</FormLabel>
                  <Input
                    sx={{
                      "--Input-focusedThickness": "white",
                      borderColor: "white",
                    }}
                    variant="soft"
                    placeholder="saisir nom"
                    required
                    value={nom}
                    onChange={(e) => nomchange(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Prénom</FormLabel>
                  <Input
                    sx={{
                      "--Input-focusedThickness": "white",
                      borderColor: "white",
                    }}
                    variant="soft"
                    placeholder="saisir prénom"
                    required
                    value={prénom}
                    onChange={(e) => prénomchange(e.target.value)}
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
    </div>
  );
};

export default Data;
