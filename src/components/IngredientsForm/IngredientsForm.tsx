import React, { ReactNode } from "react";

import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "@hooks";
import {
  setIngredients,
  setRecentSearches,
} from "@store/services/recipesSlice";
import * as Styles from "./IngredientsFormStyles";

type Inputs = {
  ingredients: string;
};

interface Props {
  children?: ReactNode;
}

export const IngredientsForm = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  let router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ ingredients }) => {
    dispatch(setIngredients(ingredients));
    dispatch(setRecentSearches([ingredients]));

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
