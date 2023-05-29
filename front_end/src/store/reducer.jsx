import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 'Dashboard',
};


  
function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_CURRENT_PAGE':
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
}

const store = configureStore({
    reducer: reducer,}); 

export default store;