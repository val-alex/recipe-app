import { takeEvery, call, put } from "redux-saga/effects";

import { types, setResults, setRecentSearches } from "Store/Actions/actions";
import { API_KEY } from "Constants/contants";

function fetchSaga(query) {
  const queryRequest = `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=${API_KEY}`;

  return fetch(queryRequest).then(response => response.json());
}

function* requestSaga({ query }) {
  const response = yield call(fetchSaga, query);
  const results = response.products;

  yield put(setResults(results));
  yield put(setRecentSearches(query));
}

function* searchSaga() {
  yield takeEvery(types.SEARCH_TYPE, requestSaga);
}

export default [searchSaga];
