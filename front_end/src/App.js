import Dashboard from "./scenes/dashboard/dashboard";
import ControleFinale from "./scenes/controle/controlefinale";
import ControleOperateur from "./scenes/controleoperateurs/controleOperateur";
import CorrectionAction from "./scenes/correctionAction/correctionaction";
import MatiérePremiére from "./scenes/matiérepremiére/MatiérePremiére";
import Ccp from "./scenes/ccp&prototype/Ccp";
import History from "./scenes/history/history";
import Parametre from "./scenes/parametre/parametre";
import Fournisseur from "./scenes/history/mat1ere&fournisseur";
import ActionCorrectives from "./scenes/history/actioncorrectives";
import Operateurs from "./scenes/history/operateur";
import CycleProductionCf from "./scenes/history/cycleProductionCf";
import Ops from "./scenes/parametre/operateurs";
import QualityAgent from "./scenes/parametre/qualityAgent";
import Reference from "./scenes/parametre/reference";
import ParametreMatiereFour from "./scenes/parametre/matiére&fournisseur";
import TypeNcAc from "./scenes/parametre/typeNCAC";
import Prototype from "./scenes/parametre/prototype";
import { BrowserRouter, Route, Routes, React } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar2";
import Login from "./scenes/login";
import Users from "./scenes/users/users";
import Profil from "./scenes/users/profil";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import Cproduction from "./scenes/parametre/cp";
import ControleChaine from "./scenes/controleQualité/controleChaine";

const queryClient = new QueryClient();

function App() {
  const routes = [
    { path: "/profil/6", component: <Profil /> },
    { path: "/login", component: <Login /> },
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/cp", component: <Ccp /> },
    { path: "/controle", component: <ControleFinale /> },
    { path: "/controle_operateurs", component: <ControleOperateur /> },
    { path: "/matiere_premiere", component: <MatiérePremiére /> },
    { path: "/correction_action", component: <CorrectionAction /> },
    { path: "/historique", component: <History /> },
    { path: "/matiere_1ere&fournisseur", component: <Fournisseur /> },
    { path: "/action_correctives", component: <ActionCorrectives /> },
    { path: "/operateurs", component: <Operateurs /> },
    { path: "/cycle-production", component: <CycleProductionCf /> },
    { path: "/parametre", component: <Parametre /> },
    { path: "/oprateurs", component: <Ops /> },
    { path: "/quality_agent", component: <QualityAgent /> },
    { path: "/reference", component: <Reference /> },
    { path: "/param_matiere_fournisseur", component: <ParametreMatiereFour /> },
    { path: "/param_typeNC-AC", component: <TypeNcAc /> },
    { path: "/prototype", component: <Prototype /> },
    { path: "/cproduction", component: <Cproduction /> },
    { path: "/users", component: <Users /> },
    { path: "/controle_chaine", component: <ControleChaine /> },
  ];

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ToastContainer></ToastContainer>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              
              <Route
                key={index}
                path={route.path}
                element={
                  route.path === "/login" ? (
                    route.component
                  ) : (
                    <Sidebar>{route.component}</Sidebar>
                  )
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
