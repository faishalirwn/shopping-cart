import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Shop from "../routes/Shop";
import ProductDetail from "../routes/ProductDetail";
import Cart from "../routes/Cart";
import Container from "./Container";
// List of Products
import products from "../PRODUCTS";
import { useState } from "react";

function App() {
  const cart = [
    {
      id: 1,
      ...products[1],
      quantity: 2,
    },
  ];

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
            <Cart cart={cart} />
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
