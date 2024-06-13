import { configureStore } from "@reduxjs/toolkit";

import snackbarReducer from "./slices/snackbarSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import backdropSpinner from "./slices/backdropSpinnerSlice";
import loginSliceReducer from "./slices/loginSlice";
import searchResultReducer from "./slices/searchResult";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    products: productsReducer,
    cart: cartReducer,
    backdropSpinner: backdropSpinner,
    login: loginSliceReducer,
    search: searchResultReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
