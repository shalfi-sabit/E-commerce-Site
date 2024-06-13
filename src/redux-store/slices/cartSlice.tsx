import { createSlice } from "@reduxjs/toolkit";
import CartProduct from "../../models/cartProduct";

interface cartState {
  cartItems: CartProduct[];
}

const initialState: cartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    handleClearCart: (state) => {
      state.cartItems = [];
    },
    handleProductAdd: (state, action) => {
      const existingProductIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    handleProductRemove: (state, action) => {
      console.log("removed!!");
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    handleProductDecrease: (state, action) => {
      const existingProductIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        if (state.cartItems[existingProductIndex].quantity > 1) {
          state.cartItems[existingProductIndex].quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
        }
      }
    },
    handleProductSetQuantity: (state, action) => {
      const existingProductIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex].quantity =
          action.payload.quantity;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
