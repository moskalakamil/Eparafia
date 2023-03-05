import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk, { ThunkAction } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth-slice";
import thunkMiddleware from "redux-thunk";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;

export const persistor = persistStore(store);
// typeof store.dispatch
export const useAppDispatch = () => useDispatch<any>();
