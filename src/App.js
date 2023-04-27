import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch ,Route } from 'react-router-dom';
import Products from "./component/Products";
import React from 'react'
import ReactDOM from 'react-dom'
import product from "./component/product";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Products/:id" component={product} />
      </Switch>
    </>
  );
}

export default App;
