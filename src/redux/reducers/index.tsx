import { combineReducers } from "redux";
import RepositoryReducer from "./RepositoriesReducer";
const rootReducer = combineReducers({
  RepositoryReducer,
});
export default rootReducer;
