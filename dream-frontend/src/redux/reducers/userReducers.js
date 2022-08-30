import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedUser: null,
    registerUser: [],
    loading: false,
    error: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.loggedUser = action.payload;
    },
    loginFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.loggedUser = null;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.registerUser.push(action.payload);
    },
    registerFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { loginRequest, loginSuccess, loginFail, logout, registerRequest, registerSuccess, registerFail } = userSlice.actions;
export default userSlice.reducer;