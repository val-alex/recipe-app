import Head from 'next/head';
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";

import IngredientsForm from "../Components/Forms/ingredientsForm/IngredientsForm";
import { selectRecipesRecentSearches } from "../Store/Reducers/recipesSlice";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
 }

 /* Rules for sizing material-icons */
.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}
`;

export const Home = () => {
  const recipesRecentSearches = useSelector(selectRecipesRecentSearches);

  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Recipe App</title>
        <meta name="description" content="recipe app" />
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

      <footer>
        Footer
      </footer>
    </div>
  )
};

export default Home;

