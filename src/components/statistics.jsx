import { Box, Typography, useTheme } from "@mui/material"
import IncreaseArrow from "../assets/Groupe 277.png"
import DecreaseArrow from "../assets/Groupe 278.png"


const Square = () => {
  

    return (
        <Box display="flex" alignItems="flex-start" justifyContent="center"
        margin="30px"  
        sx={{ 
        width: "200px",
        //height: "200px",
        borderRadius: "10px"}}>
            <div style={{ display: "flex", flexDirection: "column"}}>
            
                <h2 style={{color: "#e0e0e0"}}>Controle à la chaine</h2>
                <div style={{paddingLeft:"10px"}}>
                    <h3>reference</h3>
                    <h3>A100</h3>
                </div>
                <div style={{display: "flex", flexDirection: "row" , justifyContent: "space-between"}}>
                    <div style={{flex: 1}}>
                        <h2>+3.48%</h2>
                        <img src={IncreaseArrow} alt="Logo" style={{ width: "50px", height: "50px", marginLeft:"20px"}} />
                    </div>
                    <div style={{flex: 1}}>
                        <h2>+3.48%</h2>
                        <img src={DecreaseArrow} alt="Logo" style={{ width: "50px", height: "50px",marginLeft:"20px"}} />
                    </div>
                </div>
            </div> 
        </Box>
        
        
    )
};

export default Square;