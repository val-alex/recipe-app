import { TYPES } from "Store/Actions/actions";
import recipesReducer from "../recipesReducer";

describe("(reducer) recipesReducer", () => {
  it("returns new state based on RECIPES action", () => {
    const state = "";

    const action = {
      results: [
        {
          helloWorld: "helloWorld"
        },
        {
          helloWorld: "helloWorld"
        }
      ],
      type: TYPES.RECIPES
    };

    const reduced = recipesReducer(state, action);

    expect(reduced).toEqual({
      results: [
        {
          helloWorld: "helloWorld"
        },
        {
          helloWorld: "helloWorld"
        }
      ]
    });
  });

  it("returns new state based on SET_RECENT_SEARCH action", () => {
    const state = {
      recentSearches: ["grape"]
    };

    const action = {
      ingredient: "apple, banana",
      type: TYPES.SET_RECENT_SEARCH
    };

    const reduced = recipesReducer(state, action);

    expect(reduced).toEqual({
      recentSearches: ["grape", "apple, banana"]
    });
  });
});
