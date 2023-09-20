import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from '@mui/material/Radio';
import { toast } from "react-toastify";

export default function Users() {
  const [id, idchange] = useState("");
  const [username, usernamechange] = useState("");
  const [prenom, prenomchange] = useState("");
  const [nom, nomchange] = useState("");
  const [password, passwordchange] = useState("");
  const [phone, phonechange] = useState("");
  const [adresse, adressechange] = useState("");
  const [email, emailchange] = useState("");
  const [role, rolechange] = useState("admin");
  const [tableDataFournisseur, setTableDataFournisseur] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openFourn, setOpenFour] = React.useState(false);
  const navigate = useNavigate();
  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
     if (id === null || id === '') {
         isproceed = false;
        errormessage += ' Username';
     }
    // if (username === null || username === '') {
    //     isproceed = false;
    //     errormessage += ' Fullname';
    // }
    if (password === null || password === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (email === null || email === '') {
        isproceed = false;
        errormessage += ' Email';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
    }
    return isproceed;
}

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, username, prenom, nom, password, email, role, phone, adresse };
    //console.log(regobj);
    if (IsValidate()) {
    fetch("http://localhost:3030/users", {
      method:"POST",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(regobj)
    }).then((res) => {
      toast.success('Registered successfully.');
      // window.location.reload();
      setOpenFour(false);
      

    }).catch((err) => {
      toast.error('Failed :' + err.message);
    });
  }
  };

  const handleClickOpenFourn = () => {
    setOpenFour(true);
  };
  const handleCloseFourn = () => {
    setOpenFour(false);
  };

  const deleteFournisseur = React.useCallback(
    (id) => () => {
      fetch(`http://localhost:3030/users/${id}`, {
        method: "DELETE",
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        toast.success('Deleted successfully.');
        setTableDataFournisseur((prevRows) =>
          prevRows.filter((row) => row.id !== id)
        );
      })
      .catch((err) => {
        toast.error('Failed :' + err.message);
      });
    },
    []
  );
  const fetchDataFournisseur = () => {
    fetch("http://localhost:3030/users")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataFournisseur(data.slice(0, 6));
      });
  };

  useEffect(() => {
    fetchDataFournisseur();
  }, [tableDataFournisseur]);
 
  const columnsFournisseur = [
 
    
    { field: "nom", headerName: "Nom", flex: 0.1, align: "center" },
    { field: "prenom", headerName: "Prénom", flex: 0.1, align: "center" },
    { field: "email", headerName: "E-mail", flex: 0.1, align: "center" },
    { field: "role", headerName: "Rôle", flex: 0.1, align: "center" },
    

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
        <div style={{ marginBottom: "10px" }}>
          <BootstrapButton
            onClick={handleClickOpenFourn}
            variant="contained"
            style={{ borderRadius: 10 }}
            size="small"
            startIcon={<AddRoundedIcon fontSize="small" />}
          >
            Ajouter Utilisateur
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
                Ajouter Utilisateur
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
                  <Row>
                    <Col>
                      <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          Nom <span className="errmsg">*</span>
                        </FormLabel>
                        <Input
                          sx={{
                            "--Input-focusedThickness": "white",
                            borderColor: "white",
                          }}
                          variant="soft"
                          placeholder="saisir nom"
                          autoFocus
                          required
                          value={prenom}
                          onChange={(e) => prenomchange(e.target.value)}
                        />
                      </FormControl>
                      <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          Nom d'utilisateur <span className="errmsg">*</span>
                        </FormLabel>
                        <Input
                          sx={{
                            "--Input-focusedThickness": "white",
                            borderColor: "white",
                          }}
                          variant="soft"
                          placeholder="saisir nom d'utilisateur"
                          autoFocus
                          required
                          value={id}
                          onChange={(e) => idchange(e.target.value)}
                        />
                      </FormControl>
                    </Col>
                   
                    <Col>
                      <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          Prénom <span className="errmsg">*</span>
                        </FormLabel>
                        <Input
                          sx={{
                            "--Input-focusedThickness": "white",
                            borderColor: "white",
                          }}
                          variant="soft"
                          placeholder="saisir prénom"
                          required
                          value={nom}
                          onChange={(e) => nomchange(e.target.value)}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>
                          Mot de passe <span className="errmsg">*</span>
                        </FormLabel>
                        <Input
                          id="filled-adornment-password"
                          type={"password"}
                          sx={{
                            "--Input-focusedThickness": "white",
                            borderColor: "white",
                          }}
                          variant="soft"
                          placeholder="saisir mot de passe"
                          autoFocus
                          required
                          value={password}
                          onChange={(e) => passwordchange(e.target.value)}
                        />
                      </FormControl>
                    </Col>
                    
                    
                    <Col>
                    <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          Phone <span className="errmsg">*</span>
                        </FormLabel>
                        <Input
                          sx={{
                            "--Input-focusedThickness": "white",
                            borderColor: "white",
                          }}
                          variant="soft"
                          placeholder="saisir prénom"
                          required
                          value={phone}
                          onChange={(e) => phonechange(e.target.value)}
                        />
                      </FormControl>
                      </Col>
                      <Col>
                      <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          E-mail <span className="errmsg">*</span>
                        </FormLabel>
                        <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir e-mail"
                        required
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                      />
                      </FormControl>
                    </Col>
                    
                    <FormControl sx={{ marginBottom: "10px" }}>
                      <FormLabel>
                        Adresse <span className="errmsg">*</span>
                      </FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir e-mail"
                        required
                        value={adresse}
                          onChange={(e) => adressechange(e.target.value)}
                        
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        Rôle<span className="errmsg">*</span>
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="admin"
                          control={<Radio checked={role === 'admin'} />}
                          label="Admin"
                          onChange={(e) => rolechange(e.target.value)}
                        />
                        <FormControlLabel
                          value="manager"
                          control={<Radio checked={role === 'manager'} />}
                          label="Manager"
                          onChange={(e) => rolechange(e.target.value)}
                        />
                            <FormControlLabel
                          value="agent"
                          control={<Radio checked={role === 'agent'} />}
                          label="Agent"
                          onChange={(e) => rolechange(e.target.value)}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Row>
                  <div style={{ marginTop: "20px" }}>
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
      </Row>
    </div>
  );
}
