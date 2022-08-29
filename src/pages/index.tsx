import { Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import IngredientsForm from "@components/IngredientsForm";
import { useAppSelector } from "@hooks";
import { selectRecentSearches } from "@store/services/recipesSlice";

export const Home: NextPage = () => {
  const recipesRecentSearches = useAppSelector(selectRecentSearches);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
        />
        <meta name="find recipe" content="recipes" />
        <title>Recipe App</title>
      </Head>

      <main>
        <IngredientsForm>
          <div>
            <Typography sx={{ mt: 4 }} variant="h5">
              Recent Searches:
            </Typography>

            {recipesRecentSearches.length > 0 ? (
              <ol>
                {recipesRecentSearches.map((ingredient, index) => (
                  <li key={`${ingredient}-${index}`}>
                    <Typography variant="body1">{ingredient}</Typography>
                  </li>
                ))}
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
