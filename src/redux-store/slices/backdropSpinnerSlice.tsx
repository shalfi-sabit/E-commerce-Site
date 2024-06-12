import { createSlice } from "@reduxjs/toolkit";

const initialState: { isBackdropSpinnerOpen: boolean } = {
  isBackdropSpinnerOpen: false,
};

const backdropSpinnerSlice = createSlice({
  name: "backdropSpinner",
  initialState: initialState,
  reducers: {
    handlebBackdropSpinnerOpen: (state) => {
      state.isBackdropSpinnerOpen = true;
    },
    handlebackdropSpinnerClose: (state) => {
      state.isBackdropSpinnerOpen = false;
    },
  },
});

export const backdropSpinnerActions = backdropSpinnerSlice.actions;

export default backdropSpinnerSlice.reducer;
