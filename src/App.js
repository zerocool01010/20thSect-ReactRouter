import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

const dummy_quotes = [
  { id: 'q1', author: 'Profesor', text: 'copien carajo'},
  { id: 'q2', author: 'Vincent', text: 'pienso luego existo'},
  { id: 'q3', author: 'Yagami Light', text: 'este es mi cuaderno'},
  { id: 'q4', author: 'Estudiante', text: 'tengo que hacer los deberes'},
  { id: 'q5', author: 'Detective Conan', text: 'Interesante la pista que descubro'},
  { id: 'q6', author: 'Napoleo', text: 'a la carga'},
  { id: 'q7', author: 'Cientifico loco', text: 'traeme el tubo de ensayo'},
  { id: 'q8', author: 'Dracula', text: 'sangre yo querer'},
  { id: 'q9', author: 'Pyramid Head', text: 'what about your sins, James?'},
  { id: 'q10', author: 'Kenshin', text: 'maestro del desenvainado'},
  { id: 'q11', author: 'Aoshi', text: 'maestro de las kodachis gemelas'},
  { id: 'q12', author: 'Makoto Shishio', text: 'seleccion natural'},
  { id: 'q13', author: 'Makishima Shougo', text: 'Value resides only when there is will'}
]

function App() { 

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes theQuotes={dummy_quotes} />
        </Route>
        <Route path="/quotes/:quoteInfo">
          <QuoteDetail theQuotes={dummy_quotes}/>
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path='*'> {/* toma cualquier ruta posible, de modo que si no matchea con otra de las rutas establecidas, se muestra este error para todos los casos restantes */}
          <h1>Error: Page not found</h1> {/* debe ir al final para que evalue los otros casos antes */}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
