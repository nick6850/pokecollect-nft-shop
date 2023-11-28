import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: null, totalSum: null };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (product) {
        product.amount++;
        product.total = product.amount * product.price;
      } else {
        state.items.push({
          ...action.payload,
          amount: 1,
          total: action.payload.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      const product = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (product.amount === 1) {
        state.items = state.items.filter(
          (item) => item.name != action.payload.name
        );
      } else product.amount -= 1;
      product.total -= product.price;
    },
    calculateTotal: (state) => {
      let totalSum = 0;
      let totalAmount = 0;
      state.items.map((item) => {
        totalAmount += item.amount;
        totalSum += item.amount * item.price;
      });
      state.totalAmount = totalAmount;
      state.totalSum = totalSum;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, calculateTotal } = cartSlice.actions;
