import Head from "next/head";
import { useSelector } from "react-redux";

import IngredientsForm from "@components/IngredientsForm";
import { selectRecentSearches } from "@store/services/recipesSlice";

export const Home = () => {
  const recipesRecentSearches = useSelector(selectRecentSearches);

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
    </>
  );
};

export default Home;
