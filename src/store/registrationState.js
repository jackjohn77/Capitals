import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for Todo items
const registrationSlice = createSlice({
  name: "Todo", // Name of the slice
  initialState: {
    // Initial state of the slice
    list: [],
  },
  reducers: {
    // Function to add a new task
    add: (state, action) => {
      state.list.push(action.payload); // Add new task to the list
    },
  },
});

// Export the action functions to be used in components
export const { add } = registrationSlice.actions;

// Export the reducer function to be used in the store
export default registrationSlice.reducer;
