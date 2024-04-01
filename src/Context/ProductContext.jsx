import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { URL } from "../helpers/utils";

import React from "react";
import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_LOADING,
} from "./actions";
import { productReducer } from "../reducer/reducer";

const ProductContext = createContext();

const initiaState = {
  loading: true,
  error: null,
  products: null,
  featuredProducts: null,
  singleProduct: null,
  singleProductLoading: true,
};

const ProductContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initiaState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: GET_PRODUCT_LOADING });
        const response = await fetch(URL);
        if (!response.ok) {
          throw Error("RESPONSE_NOT_OK");
        }
        const data = await response.json();
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: GET_PRODUCT_ERROR });
        throw Error(` fetching failed  ${error.message}`);
      }
    };
    fetchData();
  }, []);

  const fetchSingleProduct = async (url) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_LOADING });
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("res not ok from single product fn");
      }
      const singleProduct = await response.json();
      dispatch({ type: GET_SINGLE_PRODUCT, payload: singleProduct });
    } catch (error) {
      throw Error(`not fetched in singleProduct ${error.message}`);
    }
  };

  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
export default ProductContexProvider;
