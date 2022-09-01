import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

import { IngredientsForm } from "@/components/IngredientsForm/ingredientsForm";
import { useAppSelector } from "@/hooks";
import { selectRecentSearches } from "@/store/slices/recipesSlice";

export const Home: NextPage = () => {
  const recipesRecentSearches = useAppSelector(selectRecentSearches);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`/favicon.ico`} />
        <meta name="find recipe" content="recipes" />
        <title>Recipe App</title>
      </Head>

      <main>
        <IngredientsForm>
          <div>
            <Typography
              sx={{ mt: 4 }}
              fontSize="1.8rem"
              fontWeight="400"
              variant="h1"
            >
              Recent Searches:
            </Typography>

            {recipesRecentSearches.length > 0 ? (
              <ol>
                {recipesRecentSearches.map(
                  (ingredient: string, index: number) => (
                    <li key={`${ingredient}-${index}`}>
                      <Typography variant="body1">{ingredient}</Typography>
                    </li>
                  )
                )}
              </ol>
            ) : (
              <ul>
                <li>
                  <Typography variant="body1">No recent searches</Typography>
                </li>
              </ul>
            )}
          </div>
        </IngredientsForm>
      </main>
    </>
  );
};

export default Home;
