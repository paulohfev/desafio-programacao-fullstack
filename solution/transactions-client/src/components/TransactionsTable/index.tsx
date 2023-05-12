import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/store';
import { getTransactions } from '../../reducers/transactions/transactions.action';
import { selectTransactions } from '../../reducers/transactions/transactions.selectors';
import { Transaction } from '../../interfaces/Transaction.interface';
import { formatToCurrency, formatVendorName, getTimeStamp } from '../../utils/content';
import './TransactionsTable.css';
import { Link } from 'react-router-dom';

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
          <td className="table-cell product-name">{transaction.product}</td>
          <td className="table-cell">{`${formatToCurrency(transaction.value)}`}</td>
          <td className="table-cell vendor-name">
            <Link to={`/balance/${transaction.vendor}`}>
              {formatVendorName(transaction.vendor)}
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="table-wrapper">
      <h2>Transactions</h2>
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
    </div>
  );
};

export default TransactionsTable;
