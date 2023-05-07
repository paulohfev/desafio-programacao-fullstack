import { TransactionsService } from './transactions.service';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendTransactionsFile = createAsyncThunk(
  'transactions/sendFile',
  async (body: any) => await TransactionsService.sendFile(body)
);
