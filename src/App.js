import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

const dummy_quotes = [
  { id: 'q1', author: 'Kougami Shinya', text: 'Sonotori da!'},
  { id: 'q2', author: 'Vincent Law', text: 'ware wa Ergo Proxy, the angel of death'},
  { id: 'q3', author: 'Yagami Light', text: 'Boku ga Kira, so shite, shinse ka no kami-da'},
  { id: 'q4', author: 'L', text: 'Kira, I will bring you to justice'},
  { id: 'q5', author: 'Near', text: 'Yagami Light... L... Kira'},
  { id: 'q6', author: 'Lelouch VI Britannia', text: 'I was not the one who was wrong, it was the world!'},
  { id: 'q7', author: 'Okabe Rintarou', text: 'Ore wa kioto no mad scientisto... Hoouin Kyoma'},
  { id: 'q8', author: 'Mello', text: 'Near, it will be me who catches Kira'},
  { id: 'q9', author: 'Yuki', text: 'I am a vampire'},
  { id: 'q10', author: 'Kenshin', text: 'No matter how heavy the sins that I carry can be, I will never lose the will for living'},
  { id: 'q11', author: 'Aoshi Shinomori', text: 'I dont know if I am like Battousai or not, but of one thing Im sure, he is not weaker than you, and I will show you'},
  { id: 'q12', author: 'Makoto Shishio', text: 'If you are strong you live, if you are weak you die, and Im the fittest one!'},
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
