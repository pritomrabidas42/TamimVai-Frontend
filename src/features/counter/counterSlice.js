import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
};

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product.push(action.payload)
      localStorage.setItem("product", JSON.stringify(state.product));
      console.log(state.product);
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
