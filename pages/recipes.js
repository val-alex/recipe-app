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
  background-color: #555;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 4px;
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
