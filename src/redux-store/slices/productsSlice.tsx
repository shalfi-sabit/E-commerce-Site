import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import product from "../../models/product";

interface ProductsState {
  products: product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleProductAdd: (state, action: PayloadAction<product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { handleProductAdd } = productsSlice.actions;

export default productsSlice.reducer;
