import React from 'react';
import Form from './components/Form';
import TransactionsTable from './components/TransactionsTable';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Form />
      <TransactionsTable />
    </div>
  );
}

export default App;
