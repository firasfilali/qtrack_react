import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/managment/dashboardSlice.js";
import { pageReducer } from "./reducer.jsx";

const store = configureStore({
  reducer: {
    data: dataReducer,
    currentPage: pageReducer
  },
});

export default store;
