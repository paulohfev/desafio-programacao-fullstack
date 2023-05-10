import { createAsyncThunk } from '@reduxjs/toolkit';
import { BalanceService } from "./balance.service";

export const getBalance = createAsyncThunk(
  'balance/getBalance',
  async () => await BalanceService.getBalance()
);