import React from 'react';
import Products from './products';
import Nav from './Nav'
import About from './About'
import AddToCart from './AddToCart'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/addtocart" component={AddToCart} />
    </Router>
  );
}

export default App;
