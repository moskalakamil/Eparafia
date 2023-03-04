import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt from "jwt-decode";
import { useSelector } from "react-redux";

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

interface IInitialState {
  jwt: string | null;
  id: string | null;
  role: string | null;
  email: string | null;
  name: string | null;
  surname: string | null;
  data: null | {
    functionParish: number | null;
    createdAnnouncements: null;
    name: string;
    parishId: string;
    parish: {
      callName: string;
      address: {
        region: null;
        city: string;
        street: string;
        buildingNumber: string;
        postCode: string;
      };
      contact: {
        phoneNumber: string;
        email: string;
      };
      users: null;
      priests: [null];
      announcements: null;
      posts: null;
      commonWeek: null;
      specialEvents: null;
      intentions: null;
      payments: null;
      id: string;
    };
    photoPath: {
      path: "";
      pathMin: "";
    };
  };
}

// interface PriestAttributes {}

const initialState: IInitialState = {
  jwt: null,
  id: null,
  role: null,
  email: null,
  name: null,
  surname: null,
  data: null,
};

export const fetchUserData = createAsyncThunk(
  "priest/getPriest",
  async (jwt: string, thunkApi) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Priest`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const data = await res.json();
    console.log(data.data);
    console.log(JSON.stringify(data) + "data");
    return data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserData.pending,
      (state: IInitialState, action: PayloadAction<any>) => {
        state.jwt = action.payload;
        if (state.jwt === null) return;
        const decoded: IJwtState = jwt(state.jwt);
        state.id = decoded.Id;
        state.email = decoded.Email;
        state.name = decoded.Name;
        state.surname = decoded.Surname;
        state.role = decoded.role;
      }
    ),
      builder.addCase(fetchUserData.fulfilled, (state, action) => {});
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
