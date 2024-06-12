import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggingIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggingIn(state, action) {
      state.loggingIn = action.payload;
    },
  },
});

export const { setLoggingIn } = loginSlice.actions;
export default loginSlice.reducer;
