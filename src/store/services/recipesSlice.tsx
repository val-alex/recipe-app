import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

type SliceState = { state: "loading" } | { state: "finished"; data: string };

interface RecipesState {
  ingredients: string;
  recentSearches: string[];
  recipes: Array<Object>;
}

const initialState: RecipesState = {
  ingredients: "",
  recentSearches: [],
  recipes: [],
} as RecipesState;

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
    // TODO: this is unused at the moment, may be I can set recipes when I receive a response and display those recipes in previous page
    setRecipes: (state, action: PayloadAction<any>) =>
      (state.recipes = action.payload),
  },
});

// public exports
export const { setIngredients, setRecentSearches, setRecipes } =
  recipesSlice.actions;

// selectors
export const selectIngredients = (state: RootState) =>
  state.recipes.ingredients;
export const selectRecentSearches = (state: RootState) =>
  state.recipes.recentSearches;
export const selectRecipes = (state: RootState) => state.recipes.recipes;

export default recipesSlice.reducer;
