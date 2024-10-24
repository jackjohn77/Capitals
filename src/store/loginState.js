import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for Todo items
const loginSlice = createSlice({
  name: "Login", // Name of the slice
  initialState: {
    // Initial state of the slice
    loggedIn: false,
    username: "",
  },
  reducers: {
    // Function to add a new task
    login: (state, action) => {
      state.username = action.payload; // Set the username
      state.loggedIn = true; // Set loggedIn to true
    },
    logout: (state) => {
      state.username = ""; // Clear the username
      state.loggedIn = false;
    },
  }
});

// Export the action functions to be used in components
export const { login, logout } = loginSlice.actions;

// Export the reducer function to be used in the store
export default loginSlice.reducer;
