import { createSlice } from "@reduxjs/toolkit";
import bloodDietOperations from "./bloodDiet-operation";


const initialState = {
  selectedDate: "",
  caloricityPerDay: null,
  products: [],
  isLogging: false,
  isLoader: true,
  error: null,
};

const bloodDietProductSlice = createSlice({
  name: "bloodDiet",
  initialState,
  reducers: {
    setDate(state, { payload }) {
      state.selectedDate = payload;
    },
  },
  extraReducers: {
    [bloodDietOperations.addBloodDietProduct.pending]: (state, action) => {
      state.isLogging = false;
    },
    [bloodDietOperations.addBloodDietProduct.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.products = [...state.products, action.payload];
      console.log(state.products);
      state.isLogging = true;
      state.isLoader = false;
      state.error = false
    },
    [bloodDietOperations.addBloodDietProduct.rejected]: (state, action) =>{
      state.error = true
    },
    [bloodDietOperations.getDateBloodProduct.pending]: (state, action) => {
      state.isLogging = false;
      state.isLoader = true;
    },

    [bloodDietOperations.getDateBloodProduct.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.products = action.payload;
      state.isLogging = true;
      state.isLoader = false;
      state.error = false;
    },
    [bloodDietOperations.getDateBloodProduct.rejected]: (state, action) => {
      state.products = action.payload;
      state.isLogging = false;
      state.isLoader = false;
      state.error = true;
    },
    [bloodDietOperations.deleteBloodProduct.pending]: (state, { payload }) => {
      state.isLogging = false;
      state.isLoader = true;
    },
    [bloodDietOperations.deleteBloodProduct.fulfilled]: (
      state,
      { payload }
    ) => {
      state.products = state.products.filter(({ _id }) => _id !== payload._id);
      state.isLogging = true;
      state.isLoader = false;
    }

  },
});
export const { setDate } = bloodDietProductSlice.actions;
export default bloodDietProductSlice.reducer;
