import React from "react";
import { connect } from "react-redux";
import products from "../data/products";
import {
  addToCart,
  addToWishlist
} from "../actions/cartActions";

const ProductList = props => {
  return (
    <div className="products-section">
      <h2>Products</h2>

      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>

            <p className="product-price">
              Rs {product.price}
            </p>

            <button onClick={() => props.addToCart(product)}>
              ADD TO CART
            </button>

            <button onClick={() => props.addToWishlist(product)}>
              ADD TO WISHLIST
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
  addToWishlist
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);