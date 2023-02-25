import { createSlice } from "@reduxjs/toolkit";

const initialState = { whoIsAuthenticated: "", token: "" };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      state.whoIsAuthenticated = action.payload;
    },
    logOut: (state) => {
      state.whoIsAuthenticated = "";
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
