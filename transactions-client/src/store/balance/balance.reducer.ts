import { createReducer } from '@reduxjs/toolkit';
import { Balance } from '../../interfaces/balance.interface';
import { getBalance } from './balance.action';

const initialState: Balance = {
  totalProducer: 0,
  totalAffiliate: 0,
  comissionToPay: 0,
};

export const balanceReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBalance.fulfilled, (state, action) => {
    return action.payload;
  })
});
