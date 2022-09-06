import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./rootReducer";

interface RecipesState {
  status: "idle" | "loading" | "complete";
  ingredients: string;
  recentSearches: string[];
  recipesList: Array<Object>;
}

const initialState: RecipesState = {
  status: "idle",
  ingredients: "",
  recentSearches: [],
  recipesList: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setIngredients: (state, { payload }: PayloadAction<string>) => {
      state.ingredients = payload;
    },
    setRecentSearches: (state, action: PayloadAction<Array<string>>) => {
      state.recentSearches = [...state.recentSearches, ...action.payload];
    },
  },
});

export const { setIngredients, setRecentSearches } = recipesSlice.actions;

export const selectIngredients = (state: RootState) =>
  state.recipes.ingredients;
export const selectRecentSearches = (state: RootState) =>
  state.recipes.recentSearches;
export const selectRecipesList = (state: RootState) =>
  state.recipes.recipesList;
export const selectRecipesFetchStatus = (state: RootState) =>
  state.recipes.status;

export default recipesSlice.reducer;
