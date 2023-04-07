import { createSlice } from "@reduxjs/toolkit";
import productOperations from "./products-operation";

const initialState = {
  items: [],
  isLoggind: false,
  isLoader: true,
  dailyСalories: null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [productOperations.productBloodType.pending]: (state, action) => {
      state.isLoggind = false;
      state.isLoader = true;
    },
    [productOperations.productBloodType.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoggind = true;
      state.isLoader = false;
    },
    [productOperations.productList.pending]: (state, action) => {
      state.isLoggind = false;
      state.isLoader = true;
    },
    [productOperations.productList.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.items = action.payload;
      state.isLoggind = true;
      state.isLoader = false;
    },
    [productOperations.dailyСalories.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.dailyСalories = action.payload
    }
    
  },
});

export default productSlice.reducer;
