import { Search as SearchIcon } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material/";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "@/hooks";
import { setIngredients, setRecentSearches } from "@/store/slices/recipesSlice";

type Inputs = {
  ingredients: string;
};

interface IngredientsFormProps {
  children?: ReactNode;
}

export const IngredientsForm = ({ children }: IngredientsFormProps) => {
  const dispatch = useAppDispatch();
  let router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ ingredients }) => {
    dispatch(setIngredients(ingredients));
    dispatch(setRecentSearches([ingredients]));

    router.push("/recipesResults");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 5 }}
      >
        <TextField
          id="outlined-required"
          label="Ingredients"
          variant="outlined"
          defaultValue=""
          {...register("ingredients", { required: true })}
          placeholder="Enter your ingredients"
        />

        {errors.ingredients ? (
          <Typography sx={{ color: "error.main", mt: 2 }} variant="body1">
            Please enter more ingredients, separated by comma
          </Typography>
        ) : null}

        <Button
          sx={{ mt: 3 }}
          startIcon={<SearchIcon />}
          variant="outlined"
          type="submit"
        >
          Search
        </Button>

        {children ? <div>{children}</div> : null}
      </Box>
    </form>
  );
};
