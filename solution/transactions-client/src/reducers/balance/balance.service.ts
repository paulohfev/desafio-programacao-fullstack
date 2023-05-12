import { Balance } from "../../interfaces/balance.interface";

const getBalance = async (): Promise<Balance> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/balance`);
  return response.json();
};

const getBalanceByAffiliate = async (affiliateName: string): Promise<{ data: number }> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/balance/${affiliateName}`);
  return response.json();
}

export const BalanceService = {
  getBalance,
  getBalanceByAffiliate,
};
