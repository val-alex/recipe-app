import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks";
import { useGetRecipesByIngredientsQuery } from "@/pages/api/findByIngredientsApi";
import { selectIngredients } from "@/store/slices/recipesSlice";

interface Recipe {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: Array<Object>;
  title: string;
  unusedIngredients: Array<any>;
  usedIngredientCount: number;
  usedIngredients: Array<Object>;
}

export const RecipesResults = () => {
  let router = useRouter();
  const ingredients = useAppSelector(selectIngredients);
  const { data, error, isLoading, isError } =
    useGetRecipesByIngredientsQuery(ingredients);

  const errorMessage = () => {
    if (error) {
      if ("status" in error) {
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error.data);

        return (
          <Typography sx={{ color: "error.main" }} variant="body1">
            {errMsg}
          </Typography>
        );
      } else {
        return (
          <Typography sx={{ color: "error.light" }} variant="body1">
            {error.message}
          </Typography>
        );
      }
    } else {
      return (
        <Typography sx={{ color: "error.main" }} variant="body1">
          Something went wrong
        </Typography>
      );
    }
  };

  const BackButton = () => (
    <Button
      sx={{ mt: 3 }}
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      onClick={() => router.back()}
    >
      Back
    </Button>
  );

  if (isLoading)
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography sx={{ mt: 5 }} variant="body1">
          Loading...
        </Typography>
      </Box>
    );

  if (isError)
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography sx={{ color: "error.main", mt: 5 }} variant="subtitle1">
          Failed to load:
        </Typography>
        {errorMessage()}
        <BackButton />
      </Box>
    );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        sx={{ mt: 5, mb: 2 }}
        fontSize="1.8rem"
        fontWeight="400"
        variant="h1"
      >
        Recipes:
      </Typography>
      {data && data.length ? (
        <ul>
          {data.map((recipe: Recipe, index: number) => (
            <li key={`${recipe.id}-${index}`}>
              <Link
                target="_blank"
                href={`https://spoonacular.com/recipes/${recipe.title.replace(
                  / /g,
                  "-"
                )}-${recipe.id}`}
                underline="hover"
              >
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Typography variant="body1">No Recipes Found</Typography>
      )}
      <BackButton />
    </Box>
  );
};

export default RecipesResults;
