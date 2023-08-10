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
import { Typography } from "@mui/material";
import Button from '@mui/joy/Button';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";


export default function Prototype() {
    const [open, setOpen] = React.useState(false);
    const [tableData, setTableData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleSelectChange = event => {
      const selectedItem = event.target.value;
      setSelectedItem(selectedItem);
    };
    const deletePrototype = React.useCallback(
        (id) => () => {
          setTimeout(() => {
            setTableData((prevRows) => prevRows.filter((row) => row.id !== id));
          });
        },
        [],
      );

    const fetchData = () => {
        fetch("http://localhost:3030/protoype_rows")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableData(data.slice(0, 6));
          });
      };

      const fetchDataPhases = () => {
        fetch("http://localhost:3030/protoype_rows")
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

      const columnsPrototype = [
        {
          field: "ref",
          headerName: "Référence prototype",
          flex: 0.1,
          align: "center"
        },
        {
          field: "phase",
          headerName: "Phases",
          flex: 0.2,
          align: "center",
          renderCell: (cellValues) => {
            return (
              <div
                style={{
                  
                }}
              >
                {cellValues.value}
              </div>
            );
          },
        },
        {
            field: "famille",
            headerName: "Famille",
            flex: 0.1,
            align: "center"
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
            onClick={deletePrototype(params.id)}
          />,
          ],
        },]
  return (
    <React.Fragment>
    <div style={{ height: "80vh"}}>
        <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
            onClick={handleClickOpen}
          variant="contained"
          style={{borderRadius: 10}}
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
                      <FormLabel>Référence prototype</FormLabel>
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
                      <FormLabel>Phases</FormLabel>

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
                        placeholder="Séléctionner phases…"
                        indicator={<KeyboardArrowRightIcon />}
                      >
                        {tableData.map(item => (
                          <Option key={item.id} value={item.phase}>
                            {item.phase}
                          </Option>
                        ))} 
                    
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Famille</FormLabel>
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
                        placeholder="Séléctionner famille…"
                        indicator={<KeyboardArrowRightIcon />}
                      >
                        {tableData.map(item => (
                          <Option key={item.id} value={item.famille}>
                            {item.famille}
                          </Option>
                        ))} 
                    
                      </Select>
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
  )
}
