import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import reducer from "./reducers";
import logger from "../middlewares/logger";

const enhancer = applyMiddleware(
  thunk
  //routerMiddleware(history)
  //generateId,
  //api
);
const store = createStore(reducer, enhancer);

//dev only. No need in prod
window.store = store;

export default store;
