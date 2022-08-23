import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectRecipesSearchResults } from "@store/Reducers/recipesSlice";

export const ResultsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResultsTitle = styled.h4`
  margin: 2rem 0 0.25rem;
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
  const recipes = useSelector(selectRecipesSearchResults);

  if (recipes && recipes.status === "failure")
    return (
      <ResultsPageWrapper>
        <strong style={{ marginTop: "1.25rem" }}>Failed to load:</strong>{" "}
        <p style={{ color: "hsl(0, 100%, 50%)" }}>{recipes.message}</p>
        <ResultsButton onClick={() => router.back()}>Back</ResultsButton>
      </ResultsPageWrapper>
    );

  if (!recipes)
    return (
      <ResultsPageWrapper>
        <p style={{ marginTop: "1.25rem" }}>Loading...</p>
      </ResultsPageWrapper>
    );

  return (
    <ResultsPageWrapper>
      {recipes && recipes.length ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      ) : null}
      <ResultsButton onClick={() => router.back()}>Back</ResultsButton>
    </ResultsPageWrapper>
  );
};

export default ResultsPage;
