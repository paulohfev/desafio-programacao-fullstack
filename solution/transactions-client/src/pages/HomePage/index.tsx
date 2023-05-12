import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import BalanceTable from '../../components/BalanceTable';
import TransactionsTable from '../../components/TransactionsTable';
import ToastMessage from '../../components/ToastMessage';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [showToast, setShowToast] = useState(true);
  const [toastMessage, setToastMessage] = useState({ message: '', success: false });

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, 1500)
    }
  }, [showToast]);

  return (
    <div className="home-page-wrapper">
      <Form setShowToast={setShowToast} setToastMessage={setToastMessage} />
      <BalanceTable />
      <TransactionsTable />

      {showToast && (
        <ToastMessage success={toastMessage.success} message={toastMessage.message} />
      )}
    </div>
  );
}

export default HomePage;
