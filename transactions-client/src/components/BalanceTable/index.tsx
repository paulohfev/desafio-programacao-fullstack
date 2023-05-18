import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/store';
import { getBalance } from '../../store/balance/balance.action';
import { selectBalance } from '../../store/balance/balance.selector';
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
      "Total Producer's Balance",
      "Total earned from Affiliates",
      'Commission to be paid',
    ];

    return tableHeaders.map(header => (
      <th key={header} className="balance-table-header">{header}</th>
    ));
  }

  return (
    <table className="balance-table" data-testid="balanceTable">
      <thead>
        <tr>{renderTableHeader()}</tr>
      </thead>
      <tbody>
        <tr>
          <td className="balance-table-cell">{formatToCurrency(balance.totalProducer)}</td>
          <td className="balance-table-cell">{formatToCurrency(balance.totalAffiliate)}</td>
          <td className="balance-table-cell">{formatToCurrency(balance.comissionToPay)}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default BalanceTable;
