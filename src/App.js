import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch> {/* sirve para indicar que ni bien se matchee la url que se detenga ahi y no busque algo mas especifico */}
        <Route path='/' exact>
          <Redirect to='/welcome' /> {/* sirve para redirigir como su nombre lo indica, es un comp de la libreria de react router */}
        </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact> {/* con el exact le digo que busque la ruta exacta y especifica */}
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
