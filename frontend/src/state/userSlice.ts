import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLoggingIn: boolean;
  hasFailed: boolean;
  name: string;
  lastname: string;
}

const initialState: UserState = {
  isLoggingIn: false,
  hasFailed: false,
  name: "",
  lastname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggingIn = true;
    },
    loginFailure: (state, action: PayloadAction<boolean>) => {
      state.hasFailed = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
  },
});

export const { login, loginFailure, setName, setLastName } = userSlice.actions;

export default userSlice.reducer;
