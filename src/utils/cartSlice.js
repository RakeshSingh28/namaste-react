import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Mutating state directly here
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// cartSlice Object
// {
//     actions: {addItem, removeItem, clearCart},
//     reducer: cart slice reducer function
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
