import { productConstants } from "../actions/constants";

const initState = {
  products: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case productConstants.GET_PRODUCTS_BY_MAIN_CATEGORY:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;

      case productConstants.GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH:
        state = {
          ...state,
          products: action.payload.products,
        };
        break;
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case productConstants.GET_ALL_PRODUCTS_FROM_PRODUCTS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case productConstants.GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case productConstants.GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE:
      state = {
        ...state,
        error: action.payload,
      };
      break;
    case productConstants.GET_ALL_PRODUCTS_BY_SEARCH:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
  }
  return state;
};
