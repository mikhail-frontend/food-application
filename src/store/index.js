import {configureStore} from "@reduxjs/toolkit";
import orders from "./modules/orders";

const store = configureStore({
  reducer: {
    orders: orders.reducer
  }
});

export default store;