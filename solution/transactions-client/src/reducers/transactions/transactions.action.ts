import { TransactionsService } from './transactions.service';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendTransactionsFile = createAsyncThunk(
  'transactions/sendFile',
  async (file: File) => await TransactionsService.sendFile(file)
);

export const getTransactions = createAsyncThunk(
  'transactions/sendFile',
  async () => await TransactionsService.getTransactions()
);
