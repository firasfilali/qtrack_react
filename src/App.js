import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar2";
import Sidebar from "./scenes/global/Sidebar";


import Dashboard from './scenes/dashboard/dashboard';
import ControleFinale from './scenes/controle/controlefinale';
import ControleAq from './scenes/controleAq/controleAq';
import ControleOperateur from './scenes/controleoperateurs/controleOperateur';
import CorrectionAction from './scenes/correctionAction/correctionaction';
import Historique from './scenes/history/history';
import MatiérePremiére from './scenes/matiérepremiére/MatiérePremiére';
import Parametre from './scenes/parametre/parametre';
import Prototype from './scenes/prototype/prototype';
import Ccp from './scenes/ccp&prototype/Ccp';
import { BrowserRouter, createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
    {
      path: "/controlefinale",
      element: <ControleFinale />
    },
    {
      path: "/controleAq",
      element: <ControleAq />
    },
    {
      path: "/controleoperateurs",
      element: <ControleOperateur />
    },
    {
      path: "/correctionAction",
      element: <CorrectionAction />
    },
    {
      path: "/historique",
      element: <Historique />
    },
    {
      path: "/matierepremiere",
      element: <MatiérePremiére />
    },
    {
      path: "/parametre",
      element: <Parametre />
    },
    {
      path: "/prototype",
      element: <Prototype />
    },
    {
      path: "/ccp",
      element: <Ccp />
    },
  ])
  return (
    
     <div className="App">
     
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/ccp" element={<Ccp/>}/>
      <Route path="/controle" element={<ControleFinale/>}/>
      <Route path="/prototype" element={<Prototype/>}/>
    </Routes>
    </BrowserRouter>
      
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
