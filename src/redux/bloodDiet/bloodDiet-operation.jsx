import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000";

const addBloodDietProduct = createAsyncThunk(
  "bloodDiet/add",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/bloodDiet/add", credentials);
console.log(data)
      return data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const getDateBloodProduct = createAsyncThunk(
  "bloodDiet/getDate",
  async (date, thunkAPI) => {
      try {
      const { data } = await axios.get(`/bloodDiet/getDate?date=${date}`);
      console.log(data)
      return data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
    }
);
const deleteBloodProduct = createAsyncThunk(
  "bloodDiet/delete",
  async (id) => {
      try {
      const { data } = await axios.delete(`/bloodDiet/${id}`);
      console.log(data.result)
      return data.result;
    } catch (error) {
      console.error(error);
    }
  }
);

const bloodDietOperations = {
  addBloodDietProduct,
  getDateBloodProduct,
  deleteBloodProduct,
};

export default bloodDietOperations;
