import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for Todo items
const reusableModalSlice = createSlice({
  name: "ReusableModal", // Name of the slice
  initialState: {
    // Initial state of the slice
    showModal: false,
    message: "",
  },
  reducers: {
    // Function to add a new task
    showModal: (state, action) => {
      state.showModal = true; // Set the username
      state.message = action.payload; // Set loggedIn to true
    },
    hideModal: (state) => {
      state.showModal = false; // Set the username
      state.message = ""; // Set loggedIn to true
    },
  },
});

// Export the action functions to be used in components
export const { showModal, hideModal } = reusableModalSlice.actions;

// Export the reducer function to be used in the store
export default reusableModalSlice.reducer;
