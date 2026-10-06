import React from "react";
import "./../styles/App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const App = () => {
  return (
    <div className="container">
      <ProductList />

      <hr />

      <Cart />

      <hr />

      <Wishlist />
    </div>
  );
};

export default App;