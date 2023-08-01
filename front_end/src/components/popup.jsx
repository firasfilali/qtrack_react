import React from "react";
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

const Popup = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
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
          <Typography
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
  );
};

export default Popup;
