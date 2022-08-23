import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { setIngredients } from "@store/services/recipesSlice";

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
    dispatch(setIngredients(ingredients));

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
          <p style={{ color: "hsl(0, 100%, 50%)" }}>
            Please enter more ingredients, separated by comma
          </p>
        ) : null}

        {children ? <div>{children}</div> : null}

        <Styles.FormButton type="submit">Search</Styles.FormButton>
      </Styles.FormInputWrapper>
    </form>
  );
};

export default IngredientsForm;
