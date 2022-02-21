import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import RootReducer from "./reducers";

let middleware = [Thunk];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // {} as any,
  RootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
