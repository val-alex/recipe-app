import { useSelector } from "react-redux";

import { selectRecipesSearchResults } from "Store/Reducers/recipesSlice";

import * as Styles from "./ResultsPageStyles";

export const ResultsPage = ({ history }) => {
  const recipesSearchResults = useSelector(selectRecipesSearchResults);

  return (
    <Styles.ResultsPageWrapper>
      <Styles.ResultsButton onClick={() => history.goBack()}>
        Back
      </Styles.ResultsButton>

      <Styles.ResultsTitle>Recipes:</Styles.ResultsTitle>

      {!!recipesSearchResults.length ? (
        <ul>
          {recipesSearchResults.map((result, index) => (
            <li key={index}>{result.title}</li>
          ))}
        </ul>
      ) : null}
    </Styles.ResultsPageWrapper>
  );
};

export default ResultsPage;
