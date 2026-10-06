export const addToCart = product => ({
  type: "ADD_TO_CART",
  payload: product
});

export const removeFromCart = productId => ({
  type: "REMOVE_FROM_CART",
  payload: productId
});

export const increaseQuantity = productId => ({
  type: "INCREASE_QUANTITY",
  payload: productId
});

export const decreaseQuantity = productId => ({
  type: "DECREASE_QUANTITY",
  payload: productId
});

export const addToWishlist = product => ({
  type: "ADD_TO_WISHLIST",
  payload: product
});

export const removeFromWishlist = productId => ({
  type: "REMOVE_FROM_WISHLIST",
  payload: productId
});

export const applyCoupon = coupon => ({
  type: "APPLY_COUPON",
  payload: coupon
});