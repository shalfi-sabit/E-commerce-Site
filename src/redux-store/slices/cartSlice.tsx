import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import product from "../../models/product";

interface cartState {
  cartItems: product[];
}

const initialState: cartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    handleProductAdd: (state, action) => {
      const productId = action.payload.id;
      state.cartItems.push();
    },
    handleProductRemove: (state, action) => {
      const productId = action.payload.id;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
