import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/managment/managmentSlice.js";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      localStorage.setItem("currentPage", action.payload);
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

const persistedCurrentPage = localStorage.getItem("currentPage");
const initialState = {
  currentPage: persistedCurrentPage || "Dashboard",
};

const store = configureStore({
  reducer: {
   
    reducer: reducer,
  },
});

export default store;
