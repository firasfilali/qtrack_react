import React, { useState, useEffect } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import CustomDataGrid from "../../components/CustomDataGrid";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { BootstrapButton } from "../../assets/styleJs/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

export default function TypeNcAc() {
  const [tableDataTypeNC, setTableDataTypeNC] = useState([]);
  const [tableDataTypeAC, setTableDataTypeAC] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, idchange] = useState("");
  const [typenc, typencchange] = useState("");
  const [typeac, typeacchange] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openAC, setOpenAC] = React.useState(false);

  const handleClickOpenAC = () => {
    setOpenAC(true);
  };

  const handleCloseAC = () => {
    setOpenAC(false);
  };
  const deleteTypeNc = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/typeNC_rows/${id}`, {
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
          setTableDataTypeNC((prevRows) => prevRows.filter((row) => row.id !== id));
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    },
    []
  );
  const deleteTypeAc = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/typeAC_rows/${id}`, {
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
          setTableDataTypeAC((prevRows) => prevRows.filter((row) => row.id !== id));
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    },
    []
  );

  const handlesubmitTypeNc = (e) => {
    e.preventDefault();
    let obj = { id, typenc };

    fetch("http://localhost:3030/typeNC_rows", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        toast.success("Non-Conformité enregistrer.");
        // window.location.reload();
        setOpen(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };
  const handlesubmitTypeAc = (e) => {
    e.preventDefault();
    let objAc = { id, typeac };

    fetch("http://localhost:3030/typeAC_rows", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objAc),
    })
      .then((res) => {
        toast.success("Action de correction enregistrer.");
        // window.location.reload();
        setOpenAC(false);
      })
      .catch((err) => {
        toast.error("Echoué :" + err.message);
      });
  };

  const fetchDataNc = () => {
    fetch("http://localhost:3030/typeNC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeNC(data);
      });
  };
  const fetchDataAc = () => {
    fetch("http://localhost:3030/typeAC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeAC(data);
      });
  };

  useEffect(() => {
    fetchDataNc();
    fetchDataAc();
  }, [tableDataTypeNC],[tableDataTypeAC]);

  const columnsNc = [
    {
      field: "typenc",
      headerName: "Type non conformité",
      flex: 0.2,
      align: "center",
      renderCell: (cellValues) => {
        return (
          <div
            style={{
            marginLeft:""
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
          icon={<i className="bi bi-trash" style={{ color: "red" }}></i>}
          label="Delete"
          onClick={deleteTypeNc(params.id)}
          
        />,
        
      ],
    },
  ];
  const columnsAc = [
    {
      field: "typeac",
      headerName: "Type action corrective",
      flex: 0.2,
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
          onClick={deleteTypeAc(params.id)}
        />,
      ],
    },
  ];
  return (
    <div style={{ height: "80vh" }}>
      <Row>
        <Col xl="6" lg="6">
          <div style={{ marginBottom: "10px" }}>
            <BootstrapButton
              onClick={handleClickOpen}
              variant="contained"
              style={{ borderRadius: 10 }}
              size="small"
              startIcon={<AddRoundedIcon fontSize="small" />}
            >
              Ajouter Type NC
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
                paddingLeft:"20px",
                paddingRight:"20px"
              },
            }}
          >
            <Typography
              component="div"
              paragraph
              style={{ fontWeight: "bold", marginTop: "20px" }}
              variant="h5"
              align="center"
            >
              Ajouter Type non conformité
            </Typography>

            <DialogContent>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <Row>
                  <Typography
                    component="div"
                    paragraph
                    style={{ fontWeight: "bold" }}
                  >
                    Type non conformité
                  </Typography>
                  <Textarea
                    placeholder="Type in here…"
                    required
                    minRows={5}
                    variant="soft"
                    value={typenc}
                    onChange={(e) => typencchange(e.target.value)}
                    sx={{
                      "--Textarea-focusedThickness": "white",
                      "--Textarea-minHeight": "3rem",
                      borderColor: "white",
                      paddingLeft: "15px",
                      
                    }}
                  />
                  <DialogActions sx={{ marginTop: "100px" }}>
                    <Button
                      onClick={handlesubmitTypeNc}
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
                </Row>
              </form>
            </DialogContent>
          </Dialog>
          <CustomDataGrid
            rows={tableDataTypeNC}
            columns={columnsNc}
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
              onClick={handleClickOpenAC}
              variant="contained"
              style={{ borderRadius: 10 }}
              size="small"
              startIcon={<AddRoundedIcon fontSize="small" />}
            >
              Ajouter Type AC
            </BootstrapButton>
            <Dialog
              open={openAC}
              onClose={handleCloseAC}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              PaperProps={{
                sx: {
                  width: "100vh",
                  height: "60vh",
                  borderRadius: "0",
                  paddingLeft:"20px",
                  paddingRight:"20px"
                },
              }}
            >
              <Typography
                component="div"
                paragraph
                style={{ fontWeight: "bold", marginTop: "20px" }}
                variant="h5"
                align="center"
              >
                Ajouter Type action corrective
              </Typography>

              <DialogContent>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setOpenAC(false);
                  }}
                >
                  <Row>
                    <Typography
                      component="div"
                      paragraph
                      style={{ fontWeight: "bold" }}
                    >
                      Type action corrective
                    </Typography>
                    <Textarea
                      placeholder="Type in here…"
                      required
                      minRows={5}
                      variant="soft"
                      value={typeac}
                    onChange={(e) => typeacchange(e.target.value)}
                      sx={{
                        "--Textarea-focusedThickness": "white",
                        "--Textarea-minHeight": "3rem",
                        borderColor: "white",
                        paddingLeft: "15px",
                      }}
                    />
                    <DialogActions sx={{ marginTop: "100px" }}>
                      <Button
                        onClick={handlesubmitTypeAc}
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
                  </Row>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <CustomDataGrid
            rows={tableDataTypeAC}
            columns={columnsAc}
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
