import { IAction } from "./RepositoriesReducer";
import * as types from "../types/types";
interface FavouriteForks {
  favourites: Array<any>;
}

const initialState = {
  favourites: [],
};

const FavouritesReducer = (
  state: FavouriteForks = initialState,
  action: IAction
) => {
  switch (action.type) {
    case types.ADD_TO_FAVOURITES:
      console.log("action", action);

      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};

export default FavouritesReducer;
