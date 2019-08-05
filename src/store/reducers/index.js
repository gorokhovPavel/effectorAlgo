import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurants from "./restaurants";
//import counterReducer from "./counter";
//import order from "./order";
//import filters from "./filters";
//import dishes from "./dishes";
//import reviews from "./reviews";
//import users from "./users";
//import history from "../history";

export default combineReducers({
  restaurants
  //count: counterReducer,
  //order,
  //filters,
  //dishes,
  //users,
  //reviews,
  //router: connectRouter(history)
});
