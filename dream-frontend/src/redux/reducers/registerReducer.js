import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "newUser",
  initialState: {
    registerUser: [],
    loading: false,
    error: false,
  },
  reducers: {
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

export const {registerRequest, registerSuccess, registerFail } = registerSlice.actions;
export default registerSlice.reducer;