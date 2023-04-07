import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000";

const productList = createAsyncThunk("product/productList", async () => {
  try {
    const { data } = await axios.get("product/productList");

    return data.result;
  } catch (error) {
    console.error(error);
  }
});

const productBloodType = createAsyncThunk(
  "product/productBloodType",
  async (blood) => {
    console.log(blood);
    try {
      const { data } = await axios.post("product/productBloodType", blood);

      return data.list;
    } catch (error) {
      console.error(error);
    }
  }
);

const dailyСalories = createAsyncThunk(
  "product/dailyСalories",
  async (credentials) => {
    console.log(credentials);
    try {
      const { data } = await axios.post("product/dailycalories", credentials);
      return data.dailyRate;
    } catch (error) {
      console.error(error);
    }
  }
);


const productOperations = {
  productList,
  productBloodType,
  dailyСalories,
  
};

export default productOperations;
