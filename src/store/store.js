import { configureStore } from "@reduxjs/toolkit";


import basketState from "./basketState";
import registrationState from "./registrationState";
import loginState from "./loginState";
import productsState from "./productsState";
import reusableModalState from "./reusableModalState";
const store = configureStore({
  reducer: {
    basket: basketState,
    register: registrationState,
    login: loginState,
    products: productsState,
    reusableModal: reusableModalState,
  },
  // other store option
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
