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
import { Select, MenuItem, FormControl, FormLabel } from "@mui/material";
import { toast } from "react-toastify";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Option from "@mui/joy/Option";

export default function Reference() {
  const [id, idchange] = useState("");
  const [ref, refchange] = useState("");
  const [matiere1ere, matiere1erechange] = useState("");
  const [famille, famillechange] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openFamille, setOpenFamille] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableDataMatiere, setTableDataMatiere] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const deleteRef = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/produits/${id}`, {
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
    let obj = { id, ref, matiere1ere, famille };

    fetch("http://localhost:3030/produits", {
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
    fetch("http://localhost:3030/produits")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data.slice(0, 6));
      });
  };
  const fetchDataMatiere = () => {
    fetch("http://localhost:3030/matiere1ere_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataMatiere(data);
      });
  };

  useEffect(
    () => {
      fetchData();
      fetchDataMatiere();
    },
    [tableData],
    [tableDataMatiere]
  );
  const columnsProduit = [
    {
      field: "ref",
      headerName: "Référence",
      flex: 0.1,
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
      field: "matiere1ere",
      headerName: "Matière première",
      flex: 0.2,
      align: "center",
      editable: true,
    },
    {
      field: "famille",
      headerName: "Famille",
      flex: 0.2,
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
          onClick={deleteRef(params.id)}
        />,
      ],
    },
  ];

  const handleSelectChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);
  };
  const handleOnChange = (event) => {
    matiere1erechange(event.target.value);
    handleSelectChange(event);
  };

  return (
    <div style={{ height: "80vh" }}>
      <Row>
        <div style={{ marginBottom: "20px" }}>
          <BootstrapButton
            onClick={handleClickOpen}
            variant="contained"
            style={{ borderRadius: 10 }}
            size="small"
            startIcon={<AddRoundedIcon fontSize="small" />}
          >
            Ajouter produit
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
              Ajouter Produit
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
                  <FormLabel sx={{ color: "black" }}>Référence</FormLabel>
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
                <FormControl
                  sx={{ borderColor: "black" }}
                  variant="filled"
                  size="small"
                >
                  <FormLabel sx={{ color: "black" }}>
                    Matière première
                  </FormLabel>
                  <Select
                    value={matiere1ere}
                    onChange={handleOnChange}
                  >
                               <MenuItem value="" disabled>
                               Séléctionner matiére 1ere…
                              </MenuItem>
                    {tableDataMatiere.map((item) => (
                      <MenuItem key={item.id} value={item.type}>
                        {item.type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel sx={{ color: "black" }}>Famille</FormLabel>
                  <Input
                    sx={{
                      "--Input-focusedThickness": "white",
                      borderColor: "white",
                    }}
                    variant="soft"
                    placeholder="saisir référence"
                    autoFocus
                    required
                    value={famille}
                    onChange={(e) => famillechange(e.target.value)}
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
          columns={columnsProduit}
          height="79vh"
          className="custom-opp"
          Pagination={CustomPagination}
          rowHeight={40}
          paginationPageSize={10}
          borderRadius="10px"
        />
      </Row>
    </div>
  );
}
