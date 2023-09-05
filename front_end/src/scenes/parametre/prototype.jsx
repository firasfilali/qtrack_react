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
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Option from "@mui/joy/Option";
import { Select, MenuItem, FormControl, FormLabel } from "@mui/material";
import { toast } from "react-toastify";

export default function Prototype() {
  const [id, idchange] = useState("");
  const [refprototype, refprototypechange] = useState("");
  const [refproduit, refproduitchange] = useState("");
  const [desc, descchange] = useState("");
  const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableDataProduit, setTableDataProduit] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);
  };
  const handleOnChange = (event) => {
    refproduitchange(event.target.value);
    handleSelectChange(event);
  };
  const deletePrototype = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/protoype_rows/${id}`, {
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
    let obj = { id, refprototype, refproduit, desc };

    fetch("http://localhost:3030/protoype_rows", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        toast.success("Produit enregistrer.");
        // window.location.reload();
        setOpen(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };
  const fetchData = () => {
    fetch("http://localhost:3030/protoype_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data);
      });
  };

  const fetchDataProduit = () => {
    fetch("http://localhost:3030/produits")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataProduit(data);
      });
  };

  useEffect(
    () => {
      fetchData();
      fetchDataProduit();
    },
    [tableData],
    [tableDataProduit]
  );


  const columnsPrototype = [
    {
      field: "refprototype",
      headerName: "Référence prototype",
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
      field: "refproduit",
      headerName: "Référence produit",
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
      field: "desc",
      headerName: "Déscription",
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
          onClick={deletePrototype(params.id)}
        />,
      ],
    },
  ];
  return (
    <React.Fragment>
      <div style={{ height: "80vh" }}>
        <div style={{ marginBottom: "20px" }}>
          <BootstrapButton
            onClick={handleClickOpen}
            variant="contained"
            style={{ borderRadius: 10 }}
            size="small"
            startIcon={<AddRoundedIcon fontSize="small" />}
          >
            Ajouter prototype
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
              Ajouter Prototype
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
                  <FormLabel sx={{ color: "black" }}>Référence prototype</FormLabel>
                  <Input
                    sx={{
                      "--Input-focusedThickness": "white",
                      borderColor: "white",
                    }}
                    variant="soft"
                    placeholder="saisir référence "
                    autoFocus
                    required
                    value={refprototype}
                    onChange={(e) => refprototypechange(e.target.value)}
                  />
                </FormControl>

                <FormControl   sx={{ borderColor: "black" }}
                  variant="filled"
                  size="small">
                  <FormLabel sx={{ color: "black" }}>Référence produit</FormLabel>
                  <Select
                  value={refproduit}
                  onChange={handleOnChange}
                  >
                    <MenuItem value="" disabled>
                      Séléctionner référence…
                    </MenuItem>
                    {tableDataProduit.map((item) => (
                      <MenuItem key={item.id} value={item.ref}>
                        {item.ref}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel sx={{ color: "black" }}>Déscription</FormLabel>
                  <Textarea
                    placeholder="Type in here…"
                    required
                    minRows={3}
                    variant="soft"
                    value={desc}
                    onChange={(e) => descchange(e.target.value)}
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
        <CustomDataGrid
          rows={tableData}
          columns={columnsPrototype}
          height="79vh"
          className="custom-opp"
          Pagination={CustomPagination}
          rowHeight={40}
          paginationPageSize={10}
          borderRadius="10px"
        />
      </div>
    </React.Fragment>
  );
}
