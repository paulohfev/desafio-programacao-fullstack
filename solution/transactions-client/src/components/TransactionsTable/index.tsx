import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/store';
import { getTransactions } from '../../reducers/transactions/transactions.action';
import { selectTransactions } from '../../reducers/transactions/transactions.selectors';
import { Transaction } from '../../interfaces/Transaction.interface';
import { formatToCurrency, getTimeStamp } from '../../utils/content';
import './TransactionsTable.css';

const TransactionsTable: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  const transactions = useSelector(selectTransactions);

  const renderTransactionsList = () => {
    return transactions.map((transaction: Transaction) => {
      return (
        <tr key={`${transaction.id}-row`}>
          <td className="table-cell">{transaction.type}</td>
          <td className="table-cell">{getTimeStamp(transaction.date)}</td>
          <td className="table-cell">{transaction.product}</td>
          <td className="table-cell">{`${formatToCurrency(transaction.value)}`}</td>
          <td className="table-cell">{transaction.vendor}</td>
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header">Type</th>
          <th className="table-header">Date</th>
          <th className="table-header">Product</th>
          <th className="table-header">Value</th>
          <th className="table-header">Vendor</th>
        </tr>
      </thead>
      <tbody>{renderTransactionsList()}</tbody>
    </table>
  );
};

export default TransactionsTable;
