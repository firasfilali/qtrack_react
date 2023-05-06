import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import CCPprototype from "./scenes/ccpPrototype";
// import FinalCtrl from "./scenes/controleFinale";
// import Prototype from "./scenes/prototype";
// import OperatorCtrl from "./scenes/controleOperateur";
// import AQCtrl from "./scenes/controleAQ";
// import MatierePremiere from "./scenes/matierePremiere";
// import CorrectionAction from "./scenes/ActionCorrection";
// import HistoryAndIndicator from "./scenes/Historique";
// import Parametre from "./scenes/parametre";



function App() {
  return (
    
     <div>
      <Sidebar />
     </div>
    
   
  );
}

export default App;







// function App() {
  
//   const [theme, colorMode] = useMode();
//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline/>
//         <div className="app">
//           <Sidebar />
//           <main className="content">
//             <Topbar />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               {/* <Route path="/ccp" element={<CCPprototype />} />
//               <Route path="/finalControl" element={<FinalCtrl />} />
//               <Route path="/prototype" element={<Prototype />} />
//               <Route path="/operatorCtrl" element={<OperatorCtrl />} />
//               <Route path="/aq" element={<AQCtrl />} />
//               <Route path="/matiereP" element={<MatierePremiere />} />
//               <Route path="/correctionAct" element={<CorrectionAction />} />
//               <Route path="/history" element={<HistoryAndIndicator />} />
//               <Route path="/parametre" element={<Parametre />} /> */}
//             </Routes>
//           </main>
//         </div>
//     </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;
