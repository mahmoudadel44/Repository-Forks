import axios from "axios";
import * as types from "../types/types";

export const getRepositories = (text: string) => (dispatch: any) => {
  try {
    axios.get(`https://api.github.com/repos/${text}/forks`).then((response) => {
      console.log("response", response.data);
      dispatch({
        type: types.FETCH_REPOSITORIES,
        payload: response.data,
      });
    });
  } catch (error) {
    console.log("errrrrrrrrrrrr");
  }
};
