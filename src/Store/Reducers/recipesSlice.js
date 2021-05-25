import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, NUMBER_OF_RECIPES } from "Constants/constants";

// Thunk
export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",

  async (ingredients) => {
    const ingredientsList = ingredients;

    const recipesRequest = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${NUMBER_OF_RECIPES}&apiKey=${API_KEY}`;

    return fetch(recipesRequest).then((response) => response.json());
  }
);

const initialState = {
  recentSearches: [],
  isLoading: false,
  isError: false,
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setRecipes: (state, action) => ({
      ...state,
      recipes: action.recipes,
    }),
    setRecentSearches: (state, { payload }) => {
      state.recentSearches = [...state.recentSearches, payload];
    },
  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [getRecipes.fulfilled]: (state, { payload }) => {
      state.recipes = payload;
      state.isLoading = false;
    },
    [getRecipes.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

// public exports
export const { setRecipes, setRecentSearches } = slice.actions;

// selectors
export const selectRecipesSearchResults = (state) => state.slice.recipes || [];
export const selectRecipesRecentSearches = (state) =>
  state.slice.recentSearches;

export default slice.reducer;
