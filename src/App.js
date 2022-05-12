import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Routes>
  );
}

export default App;
