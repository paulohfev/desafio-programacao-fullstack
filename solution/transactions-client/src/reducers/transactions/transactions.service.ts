import { Transaction } from "../../interfaces/Transaction.interface";

const sendFile = async (file: File): Promise<void> => {
  let formData = new FormData();
  formData.append('transactions', file);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  await fetch(`${process.env.REACT_APP_API_URL}/transactions`, requestOptions)
    .then(async res => await res.json())
    .catch(async err => await err.json());
};

const getTransactions = async (): Promise<Transaction[]> => {
  const response: any = await fetch(`${process.env.REACT_APP_API_URL}/transactions`)
  return response.json();
}

export const TransactionsService = {
  sendFile,
  getTransactions,
};
