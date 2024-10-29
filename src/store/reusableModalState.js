import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for reusableModal items
const reusableModalSlice = createSlice({
  name: "ReusableModal", // Name of the slice
  initialState: {
    // Initial state of the slice
    showModal: false, //Default is modal is not shown
    message: "",
  },
  reducers: {
    // Function to show modal 
    showModal: (state, action) => {
      state.showModal = true; // Set showModal to true ie visible
      state.message = action.payload; // Sets message state
    },
    hideModal: (state) => {
      state.showModal = false; // Set showModal to false i.e hidden
      state.message = ""; // Sets message state
    },
  },
});

// Export the action functions to be used in components
export const { showModal, hideModal } = reusableModalSlice.actions;

// Export the reducer function to be used in the store
export default reusableModalSlice.reducer;
