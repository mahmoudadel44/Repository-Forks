import * as types from "../types/types";
interface Repo {
  repos: string[];
}
const repositoryReducer = (
  state: Repo = { repos: ["mahmoud", "ahmed", "ali"] },
  action: any
) => {
  switch (action.types) {
    // case types.GET_FORKS:
    //   return{
    //     ...state,
    //   }
    default:
      return state;
  }
};

export default repositoryReducer;
