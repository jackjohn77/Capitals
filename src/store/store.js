import { configureStore } from "@reduxjs/toolkit";

import todoState from "./todoState";
import basketState from "./basketState";
import registrationState from "./registrationState";
import loginState from "./loginState";
const store = configureStore({
  reducer: {
    todo: todoState,
    basket: basketState,
    register: registrationState,
    login: loginState,
    // ...more reducers can be added here.
  },
  // other store option
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
