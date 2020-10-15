import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/addtocart">Add to Cart</Link>
      {/* <Link to="/product">Product</Link> */}
      {/* <Link to="/contact">Contact</Link> */}
    </div>
  );
};
export default Nav;