import Dashboard from './scenes/dashboard/dashboard';
import ControleFinale from './scenes/controle/controlefinale';
import ControleOperateur from './scenes/controleoperateurs/controleOperateur';
import CorrectionAction from './scenes/correctionAction/correctionaction';
import MatiérePremiére from './scenes/matiérepremiére/MatiérePremiére';
import Ccp from './scenes/ccp&prototype/Ccp';
import History from './scenes/history/history';
import Parametre from './scenes/parametre/parametre';
import Fournisseur from './scenes/history/mat1ere&fournisseur';
import { BrowserRouter, Route, Routes, React } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar2';




function App() {

  const routes = [
    { path: "/", component: <Dashboard /> },
    { path: "/ccp", component: <Ccp /> },
    { path: "/controle", component: <ControleFinale /> },
    { path: "/controle_operateurs", component: <ControleOperateur /> },
    { path: "/matiere_premiere", component: <MatiérePremiére /> },
    { path: "/correction_action", component: <CorrectionAction /> },
    { path: "/historique", component: <History /> },
    { path: "/matiere_1ere&fournisseur", component: <Fournisseur />},
    { path: "/parametre", component: <Parametre /> },
  ];
  
  return (
    <div>

      
     <BrowserRouter>
        <Routes>
          
          {routes.map((route, index) => (
            <Route key={index} path = {route.path} element = {<Sidebar>{route.component}</Sidebar> } />
          ))}
          
        </Routes>
      </BrowserRouter> 
    </div>
   
  );
}

export default App;
