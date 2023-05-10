import { createReducer } from '@reduxjs/toolkit';
import { Transaction } from '../../interfaces/Transaction.interface';
import { getTransactions } from './transactions.action';

const initialState: Transaction[] = [];

export const transactionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTransactions.fulfilled, (state, action) => {
    return action.payload;
  })
});
