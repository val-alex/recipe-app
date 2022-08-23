import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: "",
  recentSearches: [],
  recipes: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setIngredients: (state, { payload }) => {
      state.ingredients = payload;
      state.recentSearches = [...state.recentSearches, payload];
    },
    setRecipes: (state, action) => ({
      ...state,
      recipes: action.recipes,
    }),
  },
});

// public exports
export const { setIngredients, setRecentSearches, setRecipes } =
  recipesSlice.actions;

// selectors
export const selectIngredients = (state) => state.recipes.ingredients;
export const selectRecentSearches = (state) => state.recipes.recentSearches;
export const selectRecipes = (state) => state.recipes.recipes;

export default recipesSlice.reducer;
