import { combineReducers } from "redux";
import RepositoryReducer from "./RepositoriesReducer";
import FavouritesReducer from "./FavouritesReducer";

const rootReducer = combineReducers({
  Repositories: RepositoryReducer,
  Favourites: FavouritesReducer,
});
export default rootReducer;
