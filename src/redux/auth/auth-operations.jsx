import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post("/register", credential);
      token.set(data.user.token);
      console.log(data);
      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post("/login", credential);
    console.log(data);
    token.set(data.user.token);
    return { data };
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
const logOut = createAsyncThunk("auth/logout", async (__, thunkAPI) => {
  try {
    const { data } = await axios.get("/logout");
    token.unset();
    return { data };
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/current");
      console.log(data);
      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const userDailyСalories = createAsyncThunk(
  "auth/userDailyСalories",
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { data } = await axios.post("/userDailycalories", credentials);
      console.log(data.newUser.dailyCalories);
      return data.newUser.dailyCalories;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  userDailyСalories,
};
export default authOperations;
