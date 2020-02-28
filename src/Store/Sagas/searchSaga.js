import { takeEvery, call, put } from "redux-saga/effects";

import { TYPES, setRecipes, setRecentSearches } from "Store/Actions/actions";

import { API_KEY, NUMBER_OF_RECIPES } from "Constants/constants";

export function fetchRecipesSaga(ingredients) {
  const ingredientsList = ingredients;

  const recipesRequest = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${NUMBER_OF_RECIPES}&apiKey=${API_KEY}`;

  return fetch(recipesRequest).then(response => response.json());
}

export function* requestSaga({ ingredients }) {
  const recipes = yield call(fetchRecipesSaga, ingredients);

  yield put(setRecipes(recipes));
  yield put(setRecentSearches(ingredients));
}

export function* searchSaga() {
  yield takeEvery(TYPES.SEARCH_RECIPES, requestSaga);
}

export default [searchSaga];
