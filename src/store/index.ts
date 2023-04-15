import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import createdCardReducer from "./createdCardSlice";
import { cardApi } from "./cardApi";

const store = configureStore({
  reducer: {
    searchValue: searchReducer,
    newCardList: createdCardReducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      cardApi.middleware,
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
