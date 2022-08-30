import { API_KEY, NUMBER_OF_RECIPES } from "@constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecipesByIngredientsQuery } = fetchRecipesApi;
