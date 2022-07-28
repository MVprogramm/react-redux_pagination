import { createStore, combineReducers } from "redux";
import { usersListReducer } from "./users/usersList.reducer.js";

const appReducer = combineReducers({
  users: usersListReducer,
});

const store = createStore(appReducer);

export default store;