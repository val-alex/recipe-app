import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectRecipesSearchResults } from "../Store/Reducers/recipesSlice";

export const ResultsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResultsTitle = styled.h4`
  margin-bottom: 0;
`;

export const ResultsButton = styled.button`
  background-color: hsl(0, 0%, 33%);
  border: none;
  color: hsl(0, 0%, 100%);
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 1rem;
  margin-top: 1.25rem;
  border-radius: 0.25rem;
`;


export const ResultsPage = () => {
  let router = useRouter();
  const recipesSearchResults = useSelector(selectRecipesSearchResults);

  return (
    <ResultsPageWrapper>
      <ResultsButton onClick={() => router.back()}>
        Back
      </ResultsButton>

      <ResultsTitle>Recipes:</ResultsTitle>

      {recipesSearchResults.length ? (
        <ul>
          {recipesSearchResults.map((result, index) => (
            <li key={index}>{result.title}</li>
          ))}
        </ul>
      ) : null}
    </ResultsPageWrapper>
  );
};

export default ResultsPage;
