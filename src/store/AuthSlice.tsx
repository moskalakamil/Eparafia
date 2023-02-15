import { createSlice } from "@reduxjs/toolkit";

const initialState = { whoIsAuthenticated: "", token: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      state.whoIsAuthenticated = action.payload.whoIsLogin;
    },
    logOut: (state) => {
      state.whoIsAuthenticated = "";
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
