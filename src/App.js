import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import Products from "./component/Products.jsx";
import Product from "./component/product.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
