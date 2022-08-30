import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const alreadyExist = state.cartItems.find(
        (each) => each.product === item.product
      );

      if (alreadyExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((each) =>
            each.product === alreadyExist.product ? item : each
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (each) => each.product !== action.payload
        ),
      };
    case actionTypes.CART_RESET:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
