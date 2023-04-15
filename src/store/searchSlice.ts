import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardApi } from "./cardApi";

type SearchInput = {
  searchValue: string;
};

const initialState: SearchInput = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setInputText(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setInputText } = searchSlice.actions;

export default searchSlice.reducer;
