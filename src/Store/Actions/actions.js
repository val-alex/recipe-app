export const types = {
  SEARCH_TYPE: "SEARCH_TYPE",
  SEARCH_RESULT: "SEARCH_RESULT",
  SET_RECENT_SEARCH: "SET_RECENT_SEARCH"
};

export const search = query => {
  return {
    type: types.SEARCH_TYPE,
    query
  };
};

export const setResults = results => {
  return {
    results,
    type: types.SEARCH_RESULT
  };
};

export const setRecentSearches = ingredient => {
  return {
    ingredient,
    type: types.SET_RECENT_SEARCH
  };
};
