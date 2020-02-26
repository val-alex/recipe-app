export const types = {
  SEARCH_RECIPES: "SEARCH_RECIPES",
  RECIPES: "RECIPES",
  SET_RECENT_SEARCH: "SET_RECENT_SEARCH"
};

export const search = ingredients => {
  return {
    type: types.SEARCH_RECIPES,
    ingredients
  };
};

export const setReturnedRecipes = results => {
  return {
    results,
    type: types.RECIPES
  };
};

export const setRecentSearches = ingredient => {
  return {
    ingredient,
    type: types.SET_RECENT_SEARCH
  };
};
