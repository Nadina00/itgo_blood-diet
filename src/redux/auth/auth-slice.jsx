import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggind: false,
  isRefreshingUser: false,
  dailyCalories: null,
  isLoader: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.pending]: (state, action) => {
      state.error = false;
    },
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.user.token;
      state.isLoggind = true;
      state.dailyCalories = action.payload.data.dailyCalories;      ;
      state.isLoader = false;
      state.error = false;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.isLoggind = false;
      state.error = true;
    },
    [authOperations.logIn.pending]: (state, action) => {
      state.error = null;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.user.token;
      state.isLoggind = true;
      state.dailyCalories = action.payload.data.dailyCalories;
      state.isLoader = false;
      state.error = false;
    },
    [authOperations.logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoader = false;
      state.error = true;
    },
    [authOperations.logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggind = false;
      state.isLoader = false;
    },
    [authOperations.logOut.rejected]: (state, action) => {
      state.error = true
      state.isLoader = false;
    },
    [authOperations.fetchCurrentUser.pending]: (state) => {
      state.isRefreshingUser = true;
      state.isLoader = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.isLoggind = true;
      state.isRefreshingUser = false;
      state.dailyCalories = action.payload.data.dailyCalories;
      state.isLoader = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
      state.error = true
    },
    [authOperations.userDailyСalories.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.dailyCalories = action.payload;
    },
    [authOperations.userDailyСalories.rejected]: (state, action) => {
        state.error = true
    },
  },
});
export default authSlice.reducer;
