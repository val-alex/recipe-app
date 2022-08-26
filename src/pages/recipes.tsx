import { useRouter } from "next/router";
import styled from "styled-components";

import { useAppSelector } from "@hooks";
import { useFindByIngredientsQuery } from "@store/services/findByIngredientsApi";
import { selectIngredients } from "@store/services/recipesSlice";

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

interface Recipe {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: Array<Object>;
  title: string;
  unusedIngredients: Array<any>; // TODO: don't know whats inside
  usedIngredientCount: number;
  usedIngredients: Array<Object>;
}

export const ResultsPage = () => {
  let router = useRouter();
  const ingredients = useAppSelector(selectIngredients);
  const { data, error, isError, isLoading, isSuccess } =
    useFindByIngredientsQuery(ingredients);

  const errorMessage = () => {
    if (error) {
      if ("status" in error) {
        // you can access all properties of `FetchBaseQueryError` here
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error.data);

        return <p style={{ color: "hsl(0, 100%, 50%)" }}>{errMsg}</p>;
      } else {
        // you can access all properties of `SerializedError` here
        return <p style={{ color: "hsl(0, 100%, 50%)" }}>{error.message}</p>;
      }
    } else {
      return <p style={{ color: "hsl(0, 100%, 50%)" }}>Something went wrong</p>;
    }
  };

  if (isError)
    return (
      <ResultsPageWrapper>
        <strong style={{ marginTop: "1.25rem" }}>Failed to load:</strong>
        {errorMessage()}
        <ResultsButton onClick={() => router.back()}>Back</ResultsButton>
      </ResultsPageWrapper>
    );

  if (isLoading)
    return (
      <ResultsPageWrapper>
        <p style={{ marginTop: "1.25rem" }}>Loading...</p>
      </ResultsPageWrapper>
    );

  return isSuccess ? (
    <ResultsPageWrapper>
      <ResultsTitle>Recipes:</ResultsTitle>
      {data && data.length ? (
        <ul>
          {data.map((recipe: Recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      ) : null}
      <ResultsButton onClick={() => router.back()}>Back</ResultsButton>
    </ResultsPageWrapper>
  ) : null;
};

export default ResultsPage;
