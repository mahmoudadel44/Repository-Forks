import * as types from "../types/types";
interface Repo {
  repos: any[];
  text: string;
}

const initialState = {
  text: "",
  repos: [],
};
const RepositoryReducer = (state: Repo = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_REPOSITORIES:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export default RepositoryReducer;
