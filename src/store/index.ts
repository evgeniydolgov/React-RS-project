import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import createdCardReducer from "./createdCardSlice";

const store = configureStore({
  reducer: {
    searchValue: searchReducer,
    newCardList: createdCardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
