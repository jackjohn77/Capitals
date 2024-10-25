import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for Todo items
const basketSlice = createSlice({
  name: "Basket", // Name of the slice
  initialState: {
    // Initial state of the slice
    basket: [],
    quantity: 0,
    total: 0,
    listId: 0,
  },
  reducers: {
    // Function to add a new task
    basketAdd: (state, action) => {
      const basketItem = state.basket.find(
        (basketItem) =>
          basketItem.title === action.payload.title &&
          basketItem.selectedColour === action.payload.selectedColour
      );
      if (!basketItem) {
        const newId = state.listId + 1;
        const addToState = { ...action.payload, id: newId, quantity: 1 };

        state.basket.push(addToState); // Add new task to the list
        state.quantity += 1; // Increment total task count
        state.total += action.payload.price;
        state.listId += 1;
      } else {
        const basketIndex = state.basket.findIndex(
          (basketItem) =>
            basketItem.title === action.payload.title &&
            basketItem.selectedColour === action.payload.selectedColour
        );
        state.quantity += 1; // Increment total task count
        state.total += action.payload.price;
        state.basket[basketIndex].quantity += 1;
      }
    },
    basketDecrease: (state, action) => {
      if (state.basket[action.payload].quantity > 1) {
        state.total -= state.basket[action.payload].price;
        state.quantity -= 1;
        state.basket[action.payload].quantity -= 1;
      }
    },

    basketDelete: (state, action) => {
      state.total -=
        state.basket[action.payload].price * state.basket[action.payload].quantity;
      state.basket.splice(action.payload, 1);
    },
  },
});

// Export the action functions to be used in components
export const { basketAdd, basketDecrease, basketDelete } = basketSlice.actions;

// Export the reducer function to be used in the store
export default basketSlice.reducer;
