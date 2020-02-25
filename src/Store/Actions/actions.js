const SEARCH_TYPE = "SEARCH_TYPE";

export const search = query => {
  return {
    type: SEARCH_TYPE,
    query
  };
};
