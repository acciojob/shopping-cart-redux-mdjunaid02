import React from "react";
import { connect } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  addToWishlist,
  applyCoupon
} from "../actions/cartActions";

const Cart = props => {
  const [coupon, setCoupon] = React.useState("");

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    addToWishlist,
    applyCoupon
  } = props;

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-section">
        <h2>Cart (0 Items)</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-section">
      <h2>Cart ({cart.length} Items)</h2>

      <div className="cart-layout">

        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>

              <p>Rs {item.price}</p>

              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>

              <br />

              <button onClick={() => removeFromCart(item.id)}>
                REMOVE ITEM
              </button>

              <button
                onClick={() => {
                  addToWishlist(item);
                  removeFromCart(item.id);
                }}
              >
                MOVE TO WISHLIST
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Cart Summary</h3>

          <p>Temporary Amount: Rs {subtotal}</p>

          <p>Shipping: Free</p>

          <input
            type="text"
            placeholder="Add a discount code (optional)"
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
          />

          <button onClick={() => applyCoupon(coupon)}>
            APPLY COUPON
          </button>

          <p>Total Amount: Rs {subtotal}</p>

          <button>GO TO CHECKOUT</button>
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  addToWishlist,
  applyCoupon
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);