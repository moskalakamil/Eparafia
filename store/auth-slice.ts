import { createSlice } from "@reduxjs/toolkit";
import jwt from "jwt-decode";

interface IInitialState {
  token: string | null;
  id: string | null;
  email: string | null;
  name: string | null;
  surname: string | null;
  role: string | null;
}

interface IJwtState {
  Id: string;
  Email: string;
  Name: string;
  Surname: string;
  role: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nbf: number;
}

const initialState: IInitialState = {
  token: null,
  id: null,
  email: null,
  name: null,
  surname: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload;
      if (state.token === null) return;
      const decoded: IJwtState = jwt(state.token);
      state.id = decoded.Id;
      state.email = decoded.Email;
      state.name = decoded.Name;
      state.surname = decoded.Surname;
      state.role = decoded.role;
    },
    logOut: (state) => {
      state.token = null;
      console.log(state.token);
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
