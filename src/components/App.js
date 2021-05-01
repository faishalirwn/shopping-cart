import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Shop from "../routes/Shop";
import ProductDetail from "../routes/ProductDetail";
import Cart from "../routes/Cart";
import Container from "./Container";
import products from "../PRODUCTS";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shop">
          <Container>
            <Shop products={products} />
          </Container>
        </Route>
        <Route path="/product/:name">
          <Container>
            <ProductDetail products={products} />
          </Container>
        </Route>
        <Route path="/cart">
          <Container>
            <Cart />
          </Container>
        </Route>
        <Route path="/">
          <Container>
            <Home />
          </Container>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
