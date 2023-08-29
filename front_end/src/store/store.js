import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/managment/dashboardSlice.js";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
