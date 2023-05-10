import { configureStore } from '@reduxjs/toolkit';
import { balanceReducer } from '../reducers/balance/balance.reducer';
import { sendTransactionsReducer, transactionsReducer } from '../reducers/transactions/transactions.reducer';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    uploadResponse: sendTransactionsReducer,
    balance: balanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;