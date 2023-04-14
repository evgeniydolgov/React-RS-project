import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchInput = {
  searchValue: string;
};

// type SearchState = {
//   list: Todo[];
// };

const initialState: SearchInput = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setInputText(state, action: PayloadAction<string>) {
      console.log(state.searchValue);
      state.searchValue = action.payload;
    },
  },
});

export const { setInputText } = searchSlice.actions;

export default searchSlice.reducer;
