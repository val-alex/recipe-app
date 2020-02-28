import { call, put } from "redux-saga/effects";

import { setRecipes, setRecentSearches } from "Store/Actions/actions";

import { fetchRecipesSaga, requestSaga } from "../searchSaga";

describe("requestSaga", () => {
  it("(saga) fetches recipies and adds them to the store", () => {
    const ingredients = "apples,banana";

    const generator = requestSaga({ ingredients });
    const mockResponse = [
      {
        id: "id",
        title: "title",
        image: "image/url"
      }
    ];

    expect(generator.next().value).toEqual(call(fetchRecipesSaga, ingredients));

    expect(generator.next(mockResponse).value).toEqual(
      put(setRecipes(mockResponse))
    );

    expect(generator.next().value).toEqual(put(setRecentSearches(ingredients)));

    expect(generator.next().done).toBe(true);
  });
});
