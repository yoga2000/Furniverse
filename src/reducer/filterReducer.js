import {
  CATEGORY,
  CLEAR_FILTER,
  RATING,
  SORT_BY_PRICE,
  STOCK,
} from "../Context/actions";

export const filterReducer = (state, action) => {
  if (action.type === SORT_BY_PRICE) {
    return { ...state, sort: action.payload };
  }
  if (action.type === STOCK) {
    return { ...state, stock: !state.stock };
  }

  if (action.type === CATEGORY) {
    return { ...state, category: action.payload };
  }

  if (action.type === CLEAR_FILTER) {
    return { ...state, sort: null, category: "all" };
  }

  return state;
};
