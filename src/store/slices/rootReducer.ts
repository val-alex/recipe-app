import {
  combineReducers
} from "@reduxjs/toolkit";

import { fetchRecipesApi } from "../../pages/api/findByIngredientsApi";
import recipesReducer from "./recipesSlice";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  [fetchRecipesApi.reducerPath]: fetchRecipesApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
