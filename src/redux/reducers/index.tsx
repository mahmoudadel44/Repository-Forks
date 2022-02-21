import { combineReducers } from "redux";
import RepositoryReducer from "./repositoryReducer";
const rootReducer = combineReducers({
  Repository: RepositoryReducer,
});
export default rootReducer;
