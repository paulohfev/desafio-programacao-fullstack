import { Transaction } from "../../interfaces/Transaction.interface";
import { GenericResponse } from "../../interfaces/genericResponse.interface";

const sendFile = async (file: File): Promise<GenericResponse> => {
  let formData = new FormData();
  formData.append('transactions', file);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions`, requestOptions);
    return response.json();
  } catch (err: any) {
    console.error(err);
    return err.json();
  }
};

const getTransactions = async (): Promise<Transaction[]> => {
  const response: any = await fetch(`${process.env.REACT_APP_API_URL}/transactions`)
  return response.json();
}

export const TransactionsService = {
  sendFile,
  getTransactions,
};
