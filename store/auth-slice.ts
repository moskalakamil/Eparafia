import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  token: string | null;
}

const initialState: IInitialState = { token: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload;
      console.log(state.token);
    },
    logOut: (state) => {
      state.token = null;
      console.log(state.token);
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
