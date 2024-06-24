import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import snackbarState from "../../models/snackbarStates";

const initialState: snackbarState = {
  isSnackbarOpen: false,
  snackbarSeverity: "success",
  snackbarMessage: "",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: initialState,
  reducers: {
    handleSnackbarOpen: (
      state,
      action: PayloadAction<{
        severity: "success" | "error" | "warning" | "info";
        message: string;
      }>
    ) => {
      state.snackbarMessage = action.payload.message;
      state.snackbarSeverity = action.payload.severity;
      state.isSnackbarOpen = true;
    },
    handleSnackbarClose: (state) => {
      state.isSnackbarOpen = false;
    },
  },
});

export const snackbarActions = snackbarSlice.actions;

export default snackbarSlice.reducer;
