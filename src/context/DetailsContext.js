import { createContext, useReducer } from 'react';

export const DetailsContext = createContext();

let initialState = {
  details: null,
  evolutionChain: null,
  error: null,
  isPending: true,
};

export const detailsReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { ...state, isPending: action.payload, error: null };
    case 'ERROR':
      return { ...state, error: action.payload, isPending: false };
    case 'ADD_DETAILS':
      return { ...state, details: action.payload };
    case 'EVOLUTION_CHAIN':
      return { ...state, evolutionChain: action.payload, isPending: false };
    default:
      return state;
  }
};

export function DetailsContextProvider({ children }) {
  const [state, dispatch] = useReducer(detailsReducer, initialState);
  return (
    <DetailsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DetailsContext.Provider>
  );
}
