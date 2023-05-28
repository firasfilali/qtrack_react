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
import { BrowserRouter, Route, Routes, React } from 'react-router-dom';
import Layout from './Layout';



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
