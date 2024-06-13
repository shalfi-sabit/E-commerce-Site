import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import product from "../../models/product";

interface searchResultState {
  searchResultItems: product[];
}

const initialState: searchResultState = {
  searchResultItems: [],
};

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: initialState,
  reducers: {
    handleProductAdd: (state, action) => {
      state.searchResultItems = action.payload;
    },
  },
});

export const searchResultActions = searchResultSlice.actions;

export default searchResultSlice.reducer;
