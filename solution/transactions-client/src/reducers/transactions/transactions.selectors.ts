import { RootState } from "../../store";

export const selectTransactions = (state: RootState) => state.transactions;
export const selectUploadResponse = (state: RootState) => state.uploadResponse;
