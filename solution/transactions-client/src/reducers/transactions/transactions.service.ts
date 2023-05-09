import { Transaction } from "../../interfaces/Transaction.interface";

const sendFile = async (file: File): Promise<void> => {
  let formData = new FormData();
  formData.append('transactions', file);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  await fetch(`${process.env.REACT_APP_API_URL}/transactions`, requestOptions)
    .then(res => console.log('res', res))
    .catch(err => console.log('error', err));
};

const getTransactions = async (): Promise<Transaction[]> => {
  const response: any = await fetch(`${process.env.REACT_APP_API_URL}/transactions`)
  return response.json();
}

export const TransactionsService = {
  sendFile,
  getTransactions,
};
