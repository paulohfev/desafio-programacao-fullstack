import { Balance } from "../../interfaces/balance.interface";

const getBalance = async (): Promise<Balance> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/balance`);
  return response.json();
};

export const BalanceService = {
  getBalance,
};
