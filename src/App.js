import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Expenses } from './components/Expenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { ExpenseProvider } from './services/info';

import './App.css';

function App() {
  return (
    <ExpenseProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseProvider>
  );
}

export default App;