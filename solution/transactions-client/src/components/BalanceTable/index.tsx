import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/store';
import { getBalance } from '../../reducers/balance/balance.action';
import { selectBalance } from '../../reducers/balance/balance.selector';
import { formatToCurrency } from '../../utils/content';
import './BalanceTable.css';

const BalanceTable: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);
  const balance = useSelector(selectBalance);

  const renderTableHeader = () => {
    const tableHeaders = [
      'Sales from vendors',
      'Sales from affiliates',
      'Commission to be paid',
      'Comission to be received',
    ];

    return tableHeaders.map(header => (
      <th key={header} className="balance-table-header">{header}</th>
    ));
  }

  return (
    <table className="balance-table">
      <thead>
        <tr>{renderTableHeader()}</tr>
      </thead>
      <tbody>
        <tr>
          <td className="balance-table-cell">{formatToCurrency(balance.saleVendor)}</td>
          <td className="balance-table-cell">{formatToCurrency(balance.saleAffiliate)}</td>
          <td className="balance-table-cell">{formatToCurrency(balance.comissionPaid)}</td>
          <td className="balance-table-cell">{formatToCurrency(balance.comissionReceived)}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default BalanceTable;
