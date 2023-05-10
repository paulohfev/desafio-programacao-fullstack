import React from 'react';
import Form from './components/Form';
import BalanceTable from './components/BalanceTable';
import TransactionsTable from './components/TransactionsTable';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Form />
      <BalanceTable />
      <TransactionsTable />
    </div>
  );
}

export default App;
