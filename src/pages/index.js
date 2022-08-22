import Head from "next/head";
import { useSelector } from "react-redux";

import IngredientsForm from "@components/IngredientsForm";
import { selectRecipesRecentSearches } from "@store/Reducers/recipesSlice";

export const Home = () => {
  const recipesRecentSearches = useSelector(selectRecipesRecentSearches);

  return (
    <div>
      <Head>
        <title>Recipe App</title>
        <meta name="find recipe" content="recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <IngredientsForm>
          {recipesRecentSearches.length > 0 ? (
            <div>
              <h4>Recent Searches:</h4>
              <ol>
                {recipesRecentSearches.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ol>
            </div>
          ) : null}
        </IngredientsForm>
      </main>
    </div>
  );
};

export default Home;
