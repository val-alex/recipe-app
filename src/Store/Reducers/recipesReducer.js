import { handleActions } from "redux-actions";
import { types } from "Store/Actions/actions";

const initialState = {};

export default handleActions(
  {
    [types.RECIPES]: (state, action) => ({
      ...state,
      results: action.results
    }),
    [types.SET_RECENT_SEARCH]: (state, action) => {
      let newState = state;

      const ingredient = action.ingredient;
      const recentSearches = state.recentSearches || [];

      recentSearches.push(ingredient);

      newState.recentSearches = recentSearches;

      return newState;
    }
  },
  initialState
);
