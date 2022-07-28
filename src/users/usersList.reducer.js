import { PREV, NEXT } from "./usersList.actions.js";
import { users } from "../users.js";

const initialState = {
  usersList: users,
  currentPage: 0
}

export const usersListReducer = (state = initialState, action) => {
  switch(action.type) {
    case PREV:
      return {
        ...state,
        currentPage:  state.currentPage - 1 
      };
    case NEXT:
      return {
        ...state,
        currentPage:  state.currentPage + 1 
      };
    default:
      return state;
  }
}
