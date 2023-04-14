import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OneCharterDate } from "pages/MainPage/MainPage";

const createdCard = createSlice({
  name: "list of created card",
  initialState: {
    list: [] as OneCharterDate[],
  },
  reducers: {
    addNewCard(state, action: PayloadAction<OneCharterDate>) {
      state.list.push(action.payload);
    },
  },
});

export const { addNewCard } = createdCard.actions;

export default createdCard.reducer;
