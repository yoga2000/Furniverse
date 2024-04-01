import React, { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilerContext = createContext();
const filterState = {
  category: "all",
};

const FilerContextProvider = ({ children }) => {
  const [prodState, filterDispatch] = useReducer(filterReducer, filterState);
  return (
    <FilerContext.Provider value={{ ...prodState, filterDispatch }}>
      {children}
    </FilerContext.Provider>
  );
};
export const useFilterContext = () => useContext(FilerContext);

export default FilerContextProvider;
