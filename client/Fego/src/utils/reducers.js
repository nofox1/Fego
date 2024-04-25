import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_THEMES,
  UPDATE_CURRENT_THEME,
  TOGGLE_CART,
  CLEAR_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
} from "./action";

const initialState = {
  product: [],
  themes: [],
  currentTheme: "",
  cart: [],
  cartOpen: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, ...action.products],
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case UPDATE_THEMES:
      return {
        ...state,
        themes: [...action.themes],
      };
    case UPDATE_CURRENT_THEME:
      return {
        ...state,
        currentTheme: action.currentTheme,
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    default:
      return state;
  }
};

export default reducers;
