import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../features/fetchData";
export const store = configureStore({
  reducer: {
    fetchData: fetchReducer,
  },
});
