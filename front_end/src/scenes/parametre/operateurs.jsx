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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";




const theme = createTheme({
  palette: {
    neutral: {
      main: '#2bc48a',
      contrastText: '#fff',
    },

    custom:{
      main: '#ea2525',
      contrastText: '#fff',

    },
  },
});

const Data = () => {

  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = React.useState(false);
  
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [chipLabel, setChipLabel] = useState();
  const [chipColor, setChipColor] = useState();
  const [rows, setRows] = React.useState(tableData);

  // const handleDelete = (postIndex) => {
  //   setTableData((prevPosts) =>
  //     prevPosts.filter((_, index) => index !== postIndex)
  //   );
  // };
  // const saveRowChanges = (id, newData) => {
  //   // Make an HTTP PUT or PATCH request to the JSON server to update the row
  //   fetch(`http://localhost:3030/rows/${id}`, {
  //     method: "PUT", // or "PATCH" if you prefer partial updates
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newData),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // If the update was successful, update the state with the modified row
  //         setTableData((prevData) =>
  //           prevData.map((row) =>
  //             row.id === id ? { ...row, ...newData } : row
  //           )
  //         );
  //       } else {
  //         // Handle the error or show a message to the user if the update failed
  //         console.error("Failed to update row");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred while updating row:", error);
  //     });
  // };

  // const handleSave = (id, newData) => {
  //   saveRowChanges(id, newData);
  // };

  // const handleDelete = (id) => {
  //   // Make an HTTP DELETE request to the JSON server to delete the row
  //   fetch(`http://localhost:3030/rows/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // If the deletion was successful, update the state by filtering out the deleted row
  //         setTableData((prevData) => prevData.filter((row) => row.id !== id));
  //       } else {
  //         // Handle the error or show a message to the user if the deletion failed
  //         console.error("Failed to delete row");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred while deleting row:", error);
  //     });
  // };

  const changeChipActive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Active", chipColor: "neutral" }
          : item
      )
    );
  };

  const changeChipDesactive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Desactive", chipColor: "custom" }
          : item
      )
    );
  };

  const fetchData = () => {
    fetch("http://localhost:3030/operator_rows")
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
        </ThemeProvider>
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
        </ThemeProvider>
      ],
    },
  ];
  return (
    
   
    <div style={{ height: "80vh"}}>
      <div style={{ marginBottom: "20px" }}>
        
        <BootstrapButton
        
        onClick={handleClickOpen}
          variant="contained"
          style={{borderRadius: 10}}
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
};

export default Data;
