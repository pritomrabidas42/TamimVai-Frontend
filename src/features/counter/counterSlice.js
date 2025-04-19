import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
};

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product.push(action.payload);
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter((item)=> item.id !== action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
