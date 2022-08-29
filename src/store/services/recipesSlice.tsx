import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
interface RecipesState {
  ingredients: string;
  recentSearches: string[];
  recipesList: Array<Object>;
}

const initialState: RecipesState = {
  ingredients: "",
  recentSearches: [],
  recipesList: [],
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
  },
});

// public exports
export const { setIngredients, setRecentSearches } = recipesSlice.actions;

// selectors
export const selectIngredients = (state: RootState) =>
  state.recipes.ingredients;
export const selectRecentSearches = (state: RootState) =>
  state.recipes.recentSearches;
export const selectRecipesList = (state: RootState) =>
  state.recipes.recipesList;

export default recipesSlice.reducer;
