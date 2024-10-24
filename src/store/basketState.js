import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for Todo items
const basketSlice = createSlice({
  name: "Basket", // Name of the slice
  initialState: {
    // Initial state of the slice
    basket: [],
    quantity: 0,
    total:0,
  },
  reducers: {
    // Function to add a new task
    basketAdd: (state, action) => {
      state.basket.push(action.payload); // Add new task to the list
      state.quantity += 1; // Increment total task count
      state.total += 1;
    },
  },
});

// Export the action functions to be used in components
export const { basketAdd } = basketSlice.actions;

// Export the reducer function to be used in the store
export default basketSlice.reducer;
