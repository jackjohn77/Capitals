import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for basket items
const basketSlice = createSlice({
  name: "Basket", // Name of the slice
  initialState: {
    // Initial state of the slice
    basket: [], // basket items stored here
    shipment: [
      {
        type: "Standard",
        cost: 5.99,
        del: "3-5",
        info: "Standard delivery costs 5.99 and typically takes 3-5 working days. You can track your package and expect delivery from Monday to Saturday between 9 AM and 6 PM.",
        selected: true, // default selected shipment method
      },
      {
        type: "Premium",
        cost: 9.99,
        del: "1-2",
        info: "Premium delivery costs £9.99 and ensures your package arrives within 1-2 working days. This service includes tracking and delivers seven days a week, with delivery hours from 8 AM to 8 PM.",
        selected: false,
      },
    ],
    quantity: 0, //Total Quantity of items in the basket
    total: 0, //Total cost of items in the basket
    listId: 0, //ID counter for basket items.
    shipmentCost: 5.99, //Default Shipment cost
  },
  reducers: {
    // Function to add a new item to basket
    basketAdd: (state, action) => {
      const basketItem = state.basket.find(
        (basketItem) =>
          basketItem.title === action.payload.title &&
          basketItem.selectedColour === action.payload.selectedColour
      );
      if (!basketItem) {
        const newId = state.listId + 1;
        const addToState = { ...action.payload, id: newId, quantity: 1 };

        state.basket.push(addToState); //Adds new item to basket
        state.quantity += 1; // Increments basket quantity
        state.total += action.payload.price; // adds the item cost to the current basket cost
        state.listId += 1; // Increments list id.
      } else {
        const basketIndex = state.basket.findIndex(
          (basketItem) =>
            basketItem.title === action.payload.title &&
            basketItem.selectedColour === action.payload.selectedColour
        );
        state.quantity += 1;
        state.total += action.payload.price;
        state.basket[basketIndex].quantity += 1;
      }
    },

    // Function to decrease item quantity in basket
    basketDecrease: (state, action) => {
      if (state.basket[action.payload].quantity > 1) {
        state.total -= state.basket[action.payload].price;
        state.quantity -= 1;
        state.basket[action.payload].quantity -= 1;
      }
    },
    // Function to delete the item from basket in basket
    basketDelete: (state, action) => {
      state.total -=
        state.basket[action.payload].price *
        state.basket[action.payload].quantity;
      state.basket.splice(action.payload, 1);
    },
    // Function to allow the multiple checkbox to only have one item selected
    // and sets the shipment cost to this.
    shippingCheck: (state, action) => {
      state.shipment.forEach((ship) => {
        ship.selected = false;
      });
      state.shipment[action.payload].selected = true;
      state.shipmentCost = state.shipment[action.payload].cost;
    },
  },
});

// Export the action functions to be used in components
export const { basketAdd, basketDecrease, basketDelete, shippingCheck } =
  basketSlice.actions;

// Export the reducer function to be used in the store
export default basketSlice.reducer;
