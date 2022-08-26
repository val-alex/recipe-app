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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
