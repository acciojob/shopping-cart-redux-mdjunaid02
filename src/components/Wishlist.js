import React from "react";
import { connect } from "react-redux";

import {
  removeFromWishlist,
  addToCart
} from "../actions/cartActions";

const Wishlist = props => {
  const {
    wishlist,
    removeFromWishlist,
    addToCart
  } = props;

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-section">
        <h2>Wishlist</h2>
        <p>Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="wishlist-section">
      <h2>Wishlist</h2>

      <div className="wishlist-grid">
        {wishlist.map(item => (
          <div className="wishlist-item" key={item.id}>
            <h3>{item.name}</h3>

            <p className="product-price">
              Rs {item.price}
            </p>

            <button onClick={() => addToCart(item)}>
              ADD TO CART
            </button>

            <button onClick={() => removeFromWishlist(item.id)}>
              REMOVE FROM WISHLIST
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  wishlist: state.wishlist
});

const mapDispatchToProps = {
  removeFromWishlist,
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlist);
