import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import CustomDataGrid from "../../components/CustomDataGrid";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { BootstrapButton } from "../../assets/styleJs/theme";
import { GridActionsCellItem } from "@mui/x-data-grid";
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
import "../../assets/css/sidebar.css";

export default function QualityAgent() {
  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeChipActive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Active", chipColor: "success" }
          : item
      )
    );
  };

  const changeChipDesactive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Desactive", chipColor: "error" }
          : item
      )
    );
  };
  const fetchData = () => {
    fetch("http://localhost:3030/agentquality_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data.slice(0, 6));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tableData);

  const columns = [
    {
      field: "code",
      headerName: "Code",
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
        <Chip label={params.row.chipLabel} color={params.row.chipColor} />,
      ],
    },
    {
      field: "actions",
      flex: 0.2,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<CheckCircleOutlineIcon color="success" />}
          label="Active"
          onClick={() => {
            changeChipActive(params.row.id);
          }}
        />,
        <GridActionsCellItem
          icon={<CancelOutlinedIcon color="error" />}
          label="Desactive"
          onClick={() => {
            changeChipDesactive(params.row.id);
          }}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
          onClick={handleClickOpen}
          variant="contained"
          style={{ borderRadius: 10 }}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter agent
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
            },
          }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ marginTop: "17px" }}>
            <Typography component="div" paragraph
              style={{ fontWeight: "bold" }}
              variant="h5"
              align="center"
            >
              Ajouter Agent Qualité{" "}
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
                    placeholder="Saisir code agent qualité"
                    autoFocus
                    required
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
                    placeholder="Saisir nom"
                    required
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
                    placeholder="Saisir prénom"
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
    </div>
  );
}
