import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: []
}

// Create context
export const ExpenseContext = createContext(initialState);

// Provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <ExpenseContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </ExpenseContext.Provider>
  );
}
