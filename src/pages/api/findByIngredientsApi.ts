import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY, NUMBER_OF_RECIPES } from "@/constants";

export const fetchRecipesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes",
  }),
  reducerPath: "fetchRecipesApi",
  endpoints: (build) => ({
    getRecipesByIngredients: build.query({
      query: (ingredients) =>
        `findByIngredients?ingredients=${ingredients}&number=${NUMBER_OF_RECIPES}&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetRecipesByIngredientsQuery } = fetchRecipesApi;

export const { endpoints, reducerPath, reducer, middleware } = fetchRecipesApi;
