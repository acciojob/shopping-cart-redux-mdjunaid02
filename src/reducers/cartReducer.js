const initialState = {
  cart: [],
  wishlist: [],
  discount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProduct = state.cart.find(
        item => item.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1
          }
        ]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          item => item.id !== action.payload
        )
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case "ADD_TO_WISHLIST": {
      const alreadyInWishlist = state.wishlist.some(
        item => item.id === action.payload.id
      );

      if (alreadyInWishlist) {
        return state;
      }

      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          action.payload
        ]
      };
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          item => item.id !== action.payload
        )
      };

    case "APPLY_COUPON":
  return {
    ...state,
    discount: action.payload
  };

    default:
      return state;
  }
};

export default cartReducer;