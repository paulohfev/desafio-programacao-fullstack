import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { Transaction } from '../../interfaces/Transaction.interface';
import { getTransactions, sendTransactionsFile } from './transactions.action';
import { GenericResponse } from '../../interfaces/genericResponse.interface';

const initialState: Transaction[] = [];
const responseInitialState: GenericResponse = {
  message: '',
  success: false,
}

export const transactionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTransactions.fulfilled, (state, action) => {
    return action.payload;
  })
});

export const sendTransactionsReducer = createReducer(responseInitialState, (builder) => {
  builder.addCase(sendTransactionsFile.fulfilled, (state, action) => {
    return action.payload;
  })
});

export default combineReducers({
  transactions: transactionsReducer,
  sendTransactionsResponse: sendTransactionsReducer,
})