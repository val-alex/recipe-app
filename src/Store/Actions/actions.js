export const TYPES = {
  SEARCH_RECIPES: "SEARCH_RECIPES",
  RECIPES: "RECIPES",
  SET_RECENT_SEARCH: "SET_RECENT_SEARCH"
};

export const requestRecipes = ingredients => {
  return {
    type: TYPES.SEARCH_RECIPES,
    ingredients
  };
};

export const setRecipes = results => {
  return {
    results,
    type: TYPES.RECIPES
  };
};

export const setRecentSearches = ingredient => {
  return {
    ingredient,
    type: TYPES.SET_RECENT_SEARCH
  };
};
