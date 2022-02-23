import * as types from "../types/types";
import { toast } from "react-toastify";

const addToFavourites = (repo: any) => (dispatch: any) => {
  try {
    dispatch({
      type: types.ADD_TO_FAVOURITES,
      payload: repo,
    });
    toast.success("added successfully",{autoClose:2000});
  } catch (error) {
    toast.error("erorrrrrrrrr");
  }
};

export default addToFavourites;
