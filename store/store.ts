import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";

export const store = configureStore({
  reducer: { auth: AuthSlice },
});

export default store;
