import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

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
  name: string | null;
  surname: string | null;
  email: string | null;
  role: string | null;
  parishId: string | null;
  parish: {
    callName: string | null;
    //     address: {
    //       region: null;
    //       city: string;
    //       street: string;
    //       buildingNumber: string;
    //       postCode: string;
    //     };
    //     contact: {
    //       phoneNumber: string;
    //       email: string;
    //     };
    //     users: null;
    //     priests: [null];
    //     announcements: null;
    //     posts: null;
    //     commonWeek: null;
    //     specialEvents: null;
    //     intentions: null;
    //     payments: null;
    //   };
    //   photoPath: {
    //     path: "";
    //     pathMin: "";
  };
}

export const fetchUserData = createAsyncThunk(
  "priest/getPriest",
  async (jwt: string | null, thunkApi) => {
    if (jwt === null) return { jwt: null };
    const decoded_jwt: IJwtState = jwt_decode(jwt);
    if (decoded_jwt.role === "Priest") {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Priest`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = await res.json();
      const priestData = data.data;
      console.log(data);
      return { jwt, decoded_jwt, data: priestData };
    } else {
      console.log("nieksiadz");
      return { jwt, decoded_jwt };
    }
  }
);

const initialState: IInitialState = {
  jwt: null,
  id: null,
  name: null,
  surname: null,
  email: null,
  role: null,
  parishId: null,
  parish: {
    callName: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      resetStates(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserData.fulfilled,
      (state: IInitialState, action: PayloadAction<any>) => {
        if (action.payload.jwt === null) {
          resetStates(state);
          return;
        }
        state.jwt = action.payload.jwt;
        state.id = action.payload.decoded_jwt.Id;
        state.name = action.payload.decoded_jwt.Name;
        state.surname = action.payload.decoded_jwt.Surname;
        state.email = action.payload.decoded_jwt.Email;
        state.role = action.payload.decoded_jwt.role;
        console.log(action.payload.data);
        if (
          action.payload.decoded_jwt.role === "Priest" &&
          action.payload.data.parish !== null
        ) {
          state.parishId = action.payload.data.parishId;
          state.parish.callName = action.payload.data.parish.callName;
        }
      }
    );
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

const resetStates = (state: IInitialState) => {
  (state.jwt = null),
    (state.id = null),
    (state.name = null),
    (state.surname = null),
    (state.email = null),
    (state.role = null),
    (state.parishId = null),
    (state.parish = {
      callName: null,
    });
};
