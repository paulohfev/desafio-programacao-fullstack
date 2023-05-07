import { TransactionsService } from './transactions.service';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendTransactionsFile = createAsyncThunk(
  'transactions/sendFile',
  async (body: File) => await TransactionsService.sendFile(body)
);
