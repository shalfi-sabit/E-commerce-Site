import { createSlice } from "@reduxjs/toolkit";
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
      console.log(action.payload);
      state.cartItems.push(action.payload);
    },
    handleProductRemove: (state, action) => {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
