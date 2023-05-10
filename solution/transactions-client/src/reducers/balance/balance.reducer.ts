import { createReducer } from '@reduxjs/toolkit';
import { Balance } from '../../interfaces/balance.interface';
import { getBalance } from './balance.action';

const initialState: Balance = {
  saleVendor: 0,
  saleAffiliate: 0,
  comissionPaid: 0,
  comissionReceived: 0
};

export const balanceReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBalance.fulfilled, (state, action) => {
    return action.payload;
  })
});
