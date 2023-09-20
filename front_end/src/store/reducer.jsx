import { SET_CURRENT_PAGE } from '../features/managment/actions.js'

const initialState = {
  currentPage: 'Dashboard'
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
      case SET_CURRENT_PAGE:
          return {
              ...state,
              currentPage: action.payload
          };
      default:
          return state;
  }
}
