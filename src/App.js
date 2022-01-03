// Importações materiais UI.
import NavBar from "./Components/NavBar";
import CadastrodeUsuarios from "./Components/CadastrodeUsuarios";
import UsuariosCadastrados from "./Components/UsuariosCadastrados";
import AdicionarUsuarios from "./Components/AdicionarUsuarios";
import PaginaNaoEncontrada from "./Components/PaginaNaoEncontrada";
import EditarUsuarios from "./Components/EditarUsuarios";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// função criada para navegação da página.
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CadastrodeUsuarios} />
        <Route exact path="/cadastrados" component={UsuariosCadastrados} />
        <Route exact path="/add" component={AdicionarUsuarios} />
        <Route exact path="/editar/:id" component={EditarUsuarios} />
        <Route component={PaginaNaoEncontrada} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
