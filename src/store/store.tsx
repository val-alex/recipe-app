import { configureStore } from "@reduxjs/toolkit";
import { fetchRecipesApi } from "./services/findByIngredientsApi";
import { recipesSlice } from "./services/recipesSlice";

const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
    [fetchRecipesApi.reducerPath]: fetchRecipesApi.reducer,
  },
  middleware: (gDM) => gDM().concat(fetchRecipesApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
