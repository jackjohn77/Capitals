import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for Todo items
const productsSlice = createSlice({
  name: "Products", // Name of the slice
  initialState: {
    // Initial state of the slice
    products: [
      {
        id: 1,
        image: "images/cap1.png",
        title: "Wave Cap",
        description: "Wave Cap in various colours with snap-back",
        price: 9.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 2,
        image: "images/cap2.png",
        title: "Pizza Planet Cap",
        description: "Pizza Planet cap in various colours with snap-back",
        price: 11.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 3,
        image: "images/cap3.png",
        title: "LA Cap",
        description: "LA Cap in various colours with snap-back",
        price: 10.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 4,
        image: "images/cap4.png",
        title: "Focus Cap",
        description: "Focus Cap in various colours with snap-back",
        price: 15.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 5,
        image: "images/cap5.png",
        title: "Sun Flower Cap",
        description: "Wave Cap in various colours with snap-back",
        price: 8.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 6,
        image: "images/cap6.png",
        title: "Croissant Cap",
        description: "Croissant Cap in various colours with snap-back",
        price: 20.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 7,
        image: "images/cap7.png",
        title: "Star Cap",
        description: "Star Cap in various colours with snap-back",
        price: 15.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 8,
        image: "images/cap8.png",
        title: "Humming Bird Cap",
        description: "Humming Bird Cap in various colours with snap-back",
        price: 14.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 9,
        image: "images/cap9.png",
        title: "Bear Golf Cap",
        description: "Bear Golf in various colours with snap-back",
        price: 12.99,
        colours: ["Red", "Blue", "Green"],
      },
      {
        id: 10,
        image: "images/cap10.png",
        title: "Sun Cap",
        description: "Sun Cap in various colours with snap-back",
        price: 11.99,
        colours: ["Red", "Blue", "Green"],
      },
    ],
  },
  reducers: {
    // Function to add a new task
    add: (state, action) => {
      state.list.push(action.payload); // Add new task to the list
    },
  },
});

// Export the action functions to be used in components
export const { add } = productsSlice.actions;

// Export the reducer function to be used in the store
export default productsSlice.reducer;
