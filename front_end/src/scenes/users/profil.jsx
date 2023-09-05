import React, { useEffect, useState } from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Col, Row } from "react-bootstrap";
import Divider from '@mui/joy/Divider';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from '@mui/material/Radio';
import {  FormControl, FormLabel } from "@mui/material";

export default function Profil() {
    const [user, setUser] = useState({});
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        telephone: '',
        prenom: '',
        mobile: '',
        email: '',
        adresse: ''
    });

    const [openFourn, setOpenFour] = React.useState(false);
    const handleClickOpenFourn = () => {
        setOpenFour(true);
      };
      const handleCloseFourn = () => {
        setOpenFour(false);
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3030/users/Firas12');
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setFormData({
    //                     nom: data.firstname,
    //                     prenom: data.lastname,
    //                     email: data.email,
    //                     telephone: data.fix,
    //                     mobile: data.phone,
    //                     adresse: data.adresse

                        
    //                 });
    //             } else {
    //                 console.error('Failed to fetch user data:', await response.text());
    //             }
    //         } catch (error) {
    //             console.error('There was an error fetching the user data:', error);
    //         }
    //     };
    
    //     fetchUserData();
    // }, [formData]);
    useEffect(() => {
        fetch("http://localhost:3030/users/Firas12")
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
             .catch(error => {
                console.error("There was an error fetching the user data", error);
            });
    }, [user]);
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3030/users/Firas12', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                console.log('Profile updated successfully');
                // You might want to refresh the user data in the UI or navigate to another page.
            } else {
                console.error('Failed to update profile:', await response.text());
            }
        } catch (error) {
            console.error('There was an error updating the profile:', error);
        }
    
        // Close the dialog after submission
        setOpenFour(false);
    };
    


  return (
   <Row>
    <Col xl="4" lg="4">
    <Card
     sx={{
        
        maxWidth: '100%',
        boxShadow: 'lg',
      }}
   >
     <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
       <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
       <Chip
         size="sm"
         variant="soft"
         color="primary"
         sx={{
           mt: -1,
           mb: 1,
           border: '3px solid',
           borderColor: 'background.surface',
         }}
       >
         Manager
       </Chip>
       <Typography level="title-lg">Josephine Blanton</Typography>
       <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
         Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
         love to code.
       </Typography>
       <Box
         sx={{
           display: 'flex',
           gap: 2,
           mt: 2,
           height: "250px",
           '& > button': { borderRadius: '2rem' },
         }}
       >
         <IconButton size="sm" variant="plain" color="neutral">
        
         </IconButton>
         <IconButton size="sm" variant="plain" color="neutral">
          
         </IconButton>
         <IconButton size="sm" variant="plain" color="neutral">
      
         </IconButton>
         <IconButton size="sm" variant="plain" color="neutral">
         
         </IconButton>
       </Box>
     </CardContent>
     <CardOverflow sx={{ bgcolor: 'background.level1' }}>
       <CardActions buttonFlex="1">
       <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
           <Button onClick={handleClickOpenFourn}>Edit profil</Button>
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
                  <Row>
                    <Col>
                      <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          Nom 
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
                          name='nom'
                          value={formData.nom}
                          onChange={handleInputChange}
                          
                        />
                      </FormControl>
                      <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          Téléphone 
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
                          name='telephone'
                          value={formData.telephone}
                          onChange={handleInputChange}
                        
                        />
                      </FormControl>
                    </Col>
                    <Col>
                      <FormControl sx={{ marginBottom: "10px" }}>
                        <FormLabel>
                          Prénom 
                        </FormLabel>
                        <Input
                          sx={{
                            "--Input-focusedThickness": "white",
                            borderColor: "white",
                          }}
                          variant="soft"
                          placeholder="saisir prénom"
                          required
                          name='prenom'
                          value={formData.prenom}
                          onChange={handleInputChange}
                         
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>
                          Mobile 
                        </FormLabel>
                        <Input
                          id="filled-adornment-password"
                          
                          sx={{
                            "--Input-focusedThickness": "white",
                            borderColor: "white",
                          }}
                          variant="soft"
                          placeholder="saisir mot de passe"
                          autoFocus
                          required
                          name='mobile'
                          value={formData.mobile}
                          onChange={handleInputChange}
                         
                        />
                      </FormControl>
                    </Col>
                    <FormControl sx={{ marginBottom: "10px" }}>
                      <FormLabel>
                        E-mail 
                      </FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir e-mail"
                        required
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                       
                      />
                    </FormControl>
                    <FormControl sx={{ marginBottom: "10px" }}>
                      <FormLabel>
                        Adresse 
                      </FormLabel>
                      <Input
                        sx={{
                          "--Input-focusedThickness": "white",
                          borderColor: "white",
                        }}
                        variant="soft"
                        placeholder="saisir e-mail"
                        required
                        name='adresse'
                        value={formData.adresse}
                        onChange={handleInputChange}
                       
                      />
                    </FormControl>
                
                  </Row>
                  <div style={{ marginTop: "20px" }}>
                    <DialogActions>
                      <Button
                        onClick={handleSubmit}
                        type="submit"
                        variant="contained"
                        style={{
                          backgroundColor: "#18202c",
                          color: "white",
                          textTransform: "none",
                        }}
                      >
                        Modifier
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
           
         </ButtonGroup>
       </CardActions>
     </CardOverflow>
   </Card>
    </Col>
    <Col xl="8" lg="8">
    <Card
     sx={{
        maxHeight: '100%',
        maxWidth: '100%',
        boxShadow: 'lg',
      }}
   >
       <Typography >
       <span style={{fontWeight:'bold'}}>Nom et prénom :</span>   <span> {user.nom}</span><span> {user.prenom}</span>
       </Typography>
    <Divider orientation="horizontal" sx={{height:'5px', backgroundColor: '#000000'}} />
    <Typography>
       <span style={{fontWeight:'bold'}}>Email :</span>   <span> {user.email}</span>
       </Typography>
       <Divider orientation="horizontal" sx={{height:'5px', backgroundColor: '#000000'}} />
       <Typography>
       <span style={{fontWeight:'bold'}}>Phone :  </span>  <span>{user.telephone}</span>
       </Typography>
       <Divider orientation="horizontal" sx={{height:'5px', backgroundColor: '#000000'}} />
       <Typography>
       <span style={{fontWeight:'bold'}}>Mobile :</span>   <span>+216 {user.mobile}</span>
       </Typography>
       <Divider orientation="horizontal" sx={{height:'5px', backgroundColor: '#000000'}} />
       <Typography>
       <span style={{fontWeight:'bold'}}>Adresse : </span>  <span>{user.adresse}</span>
       </Typography>


    </Card>
    </Col>
   </Row>
  )
}
