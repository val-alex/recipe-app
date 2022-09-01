import {
  configureStore,
  PreloadedState
} from "@reduxjs/toolkit";

import { fetchRecipesApi } from "../pages/api/findByIngredientsApi";
import { rootReducer, RootState } from "./slices/rootReducer";

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (gDM) => gDM().concat(fetchRecipesApi.middleware),
  });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default store;
