export const types = {
  SEARCH_TYPE: "SEARCH_TYPE",
  BASE_STORE: "BASE_STORE",
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
    type: types.BASE_STORE
  };
};

export const setRecentSearches = ingredient => {
  return {
    ingredient,
    type: types.SET_RECENT_SEARCH
  };
};
