import { configureStore } from "@reduxjs/toolkit";
import { findByIngredientsApi } from "./services/findByIngredientsApi";
import { recipesSlice } from "./services/recipesSlice";

const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
    [findByIngredientsApi.reducerPath]: findByIngredientsApi.reducer,
  },
  middleware: (gDM) => gDM().concat(findByIngredientsApi.middleware),
});

export default store;
