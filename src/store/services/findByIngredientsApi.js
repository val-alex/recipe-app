import { API_KEY, NUMBER_OF_RECIPES } from "@constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const findByIngredientsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes",
  }),
  reducerPath: "spoonacularApi",
  endpoints: (build) => ({
    findByIngredients: build.query({
      query: (ingredients) =>
        `findByIngredients?ingredients=${ingredients}&number=${NUMBER_OF_RECIPES}&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useFindByIngredientsQuery } = findByIngredientsApi;
