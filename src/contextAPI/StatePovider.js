// setup data layer
// We need this to track the basket

import React, { createContext, useReducer, useContext } from "react";

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside of the component
export const useStateValue = () => useContext(StateContext);