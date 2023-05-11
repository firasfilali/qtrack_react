import Dashboard from './scenes/dashboard/dashboard';
import ControleFinale from './scenes/controle/controlefinale';
import ControleAq from './scenes/controleAq/controleAq';
import ControleOperateur from './scenes/controleoperateurs/controleOperateur';
import CorrectionAction from './scenes/correctionAction/correctionaction';
import MatiérePremiére from './scenes/matiérepremiére/MatiérePremiére';
import Prototype from './scenes/prototype/prototype';
import Ccp from './scenes/ccp&prototype/Ccp';
import History from './scenes/history/history';
import Parametre from './scenes/parametre/parametre';
import { BrowserRouter, createBrowserRouter, RouterProvider, Route, Routes, React } from 'react-router-dom';
import Layout from './Layout';
import Sidebar from './scenes/global/Sidebar'


function App() {

  const routes = [
    { path: "/", component: <Dashboard /> },
    { path: "/ccp", component: <Ccp /> },
    { path: "/controle", component: <ControleFinale /> },
    { path: "/prototype", component: <Prototype /> },
    { path: "/controle_operateurs", component: <ControleOperateur /> },
    { path: "/controle_aq", component: <ControleAq /> },
    { path: "/matiere_premiere", component: <MatiérePremiére /> },
    { path: "/correction_action", component: <CorrectionAction /> },
    { path: "/historique", component: <History /> },
    { path: "/parametre", component: <Parametre /> },
  ];
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          {routes.map((route, index) => (
            <Route key={index} path = {route.path} element = {<Layout>{route.component}</Layout> } />
          ))}
          
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
