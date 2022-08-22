import { setRecentSearches, setRecipes } from "../recipesSlice";

describe("(reducer) recipesSlice", () => {
  it("setRecipes", () => {
    const ingredients = "apple, grape";

    const reduced = setRecipes(ingredients);

    expect(reduced).toEqual({
      payload: "apple, grape",
      type: "counter/setRecipes",
    });
  });

  it("setRecentSearches", () => {
    const ingredients = "apple, banana";

    const reduced = setRecentSearches(ingredients);

    expect(reduced).toEqual({
      payload: "apple, banana",
      type: "counter/setRecentSearches",
    });
  });
});
