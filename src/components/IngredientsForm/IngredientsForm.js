import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { getRecipes, setRecentSearches } from "@store/Reducers/recipesSlice";

import * as Styles from "./IngredientsFormStyles";

export const IngredientsForm = ({ children }) => {
  const dispatch = useDispatch();
  let router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ ingredients }) => {
    dispatch(setRecentSearches(ingredients));
    dispatch(getRecipes(ingredients));

    router.push("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styles.FormInputWrapper>
        <Styles.FormLabel htmlFor="ingredients">Ingredients:</Styles.FormLabel>

        <Styles.FormInput
          defaultValue=""
          {...register("ingredients", { required: true })}
          placeholder="Enter your ingredients"
        />

        {errors.ingredients ? (
          <span>Please enter 1 or more ingredients</span>
        ) : null}

        {children ? <div>{children}</div> : null}

        <Styles.FormButton type="submit">Search</Styles.FormButton>
      </Styles.FormInputWrapper>
    </form>
  );
};

export default IngredientsForm;
