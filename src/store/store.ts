import { configureStore } from "@reduxjs/toolkit";
import { cardApi } from "./cardApi";

export const store = configureStore({
  reducer: {
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardApi.middleware),
});
