import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_LOADING,
} from "../Context/actions";

export const productReducer = (state, action) => {
  if (action.type === GET_PRODUCT_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_PRODUCT_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }
  if (action.type === GET_PRODUCT_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      loading: false,
      error: null,
      products: action.payload,
      featuredProducts,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_LOADING) {
    return { ...state, singleProductLoading: true };
  }
  if (action.type === GET_SINGLE_PRODUCT) {
    return {
      ...state,
      singleProduct: action.payload,
      singleProductLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
