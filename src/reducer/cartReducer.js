import React from "react";
import {
  ADD_TO_CART,
  DECREMENT,
  DELETE_TO_CART,
  INCREMENT,
  SET_CART,
} from "../Context/actions";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
  }
  if (action.type === DELETE_TO_CART) {
    const updatedCart = state.cart.filter((cart) => cart.id !== action.payload);
    return { ...state, cart: updatedCart };
  }
  if (action.type === INCREMENT) {
    const incrementCart = state.cart.map((item) =>
      item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
    );
    return { ...state, cart: incrementCart };
  }
  if (action.type === DECREMENT) {
    const decrementedCart = state.cart.map((item) =>
      item.id === action.payload
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        : item
    );
    return { ...state, cart: decrementedCart };
  }

  if (action.type === SET_CART) {
    return { ...state, cart: action.payload };
  }
  return state;
};

export default cartReducer;
