import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    searchValue: searchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
