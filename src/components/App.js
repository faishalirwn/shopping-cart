import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Shop from "../routes/Shop";
import ProductDetail from "../routes/ProductDetail";
import Cart from "../routes/Cart";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/productid">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
