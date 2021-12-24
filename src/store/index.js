import React, { createContext, useReducer } from 'react';
import authReducer from './auth/reducer';
import authInitialState from './auth/state';
import contactsReducer from './contacts/reducer';
import contactsInitialState from './contacts/state';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{ authState, contactsState, authDispatch, contactsDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
