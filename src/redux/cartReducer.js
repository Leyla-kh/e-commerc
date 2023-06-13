import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      const item = state.products?.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products?.push(action.payload);
      }
    },
    removeproduct: (state, action) => {
      state.products = state.products?.filter((p) => p.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addproduct, removeproduct, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
