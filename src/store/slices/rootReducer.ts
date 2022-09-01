import {
  combineReducers
} from "@reduxjs/toolkit";

import { fetchRecipesApi } from "../../pages/api/findByIngredientsApi";
import recipesReducer from "./recipesSlice";

// Create the root reducer independently to obtain the RootState type
export const rootReducer = combineReducers({
  recipes: recipesReducer,
  [fetchRecipesApi.reducerPath]: fetchRecipesApi.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
