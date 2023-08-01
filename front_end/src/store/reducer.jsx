import { configureStore } from "@reduxjs/toolkit";
import route from '../utils/data'

  
function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_CURRENT_PAGE':
        localStorage.setItem('currentPage', action.payload);
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
}

const persistedCurrentPage = localStorage.getItem('currentPage');
const initialState = {
  currentPage: persistedCurrentPage || 'Dashboard',
};

const store = configureStore({
    reducer: reducer,}); 

export default store;