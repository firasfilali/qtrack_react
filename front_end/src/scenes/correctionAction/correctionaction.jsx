import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { listOperateurs } from "../../utils/data";
import PinnedSubheaderList from "../../components/lists/customList";

const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function Correctionaction() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" >
            <div style={{ backgroundColor: "#F4F4F4", paddingBottom: "50px" }}>
            <span className="span-corr">Action de correction</span>
            <div className="row">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={listOperateurs}
                sx={{ width: 590, backgroundColor: "white", marginTop: "30px"  }}
                renderInput={(params) => (
                  <ThemeProvider theme={theme}>
                    <TextField
                      {...params}
                      label="Insérer Référence"
                      color="custom"
                    />
                  </ThemeProvider>
                )}
              />
            </div>
            <div className="list-custom">
              <PinnedSubheaderList />
            </div>
            </div>
          
        </div>
        <div className="col-md-6 " >
          <div style={{ backgroundColor: "#F4F4F4", paddingBottom: "50px"}}>
            <span className="span-corr" >Planifier une action</span>
            
            </div>
            
          
        </div>
      </div>
    </div>
  );
}
