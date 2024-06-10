import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import product from "../../models/product";

interface productsState {
  products: product[];
}

const initialState: productsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    handleProductAdd: (state, action) => {
      state.products = action.payload.data;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
