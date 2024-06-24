import { createSlice } from "@reduxjs/toolkit";
import product from "../../models/product";

interface wishlistState {
  wishlistItems: product[];
}

const initialState: wishlistState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    handleClearWishlist: (state) => {
      state.wishlistItems = [];
    },
    handleProductAdd: (state, action) => {
      const existingProductIndex = state.wishlistItems.findIndex(
        (wishlistItem) => wishlistItem.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        state.wishlistItems.push(action.payload);
      }
    },
    handleProductRemove: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
