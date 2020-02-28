import { handleActions } from "redux-actions";
import { TYPES } from "Store/Actions/actions";

const initialState = {
  recentSearches: []
};

export default handleActions(
  {
    [TYPES.RECIPES]: (state, action) => ({
      ...state,
      results: action.results
    }),
    [TYPES.SET_RECENT_SEARCH]: (state, action) => {
      const ingredient = action.ingredient;
      const recentSearches = [...state.recentSearches];

      recentSearches.push(ingredient);

      return {
        ...state,
        recentSearches
      };
    }
  },
  initialState
);
