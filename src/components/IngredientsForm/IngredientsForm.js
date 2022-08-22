import { useRouter } from "next/router";

import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { getRecipes, setRecentSearches } from "@store/Reducers/recipesSlice";

import * as Styles from "./IngredientsFormStyles";

const validationSchema = Yup.object().shape({
  ingredients: Yup.string()
    .min(3, "ingredients must have at least 3 letters")
    .required("Must enter an ingredient"),
});

export const Error = ({ touched, message }) => {
  if (!touched) {
    return <Styles.FormError>&nbsp;</Styles.FormError>;
  }

  if (message) {
    return <Styles.FormError>{message}</Styles.FormError>;
  }

  return <Styles.FormValid>Valid</Styles.FormValid>;
};

export const IngredientsForm = ({ children }) => {
  const dispatch = useDispatch();
  let router = useRouter();

  const handleSubmit = ({ ingredients }, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    dispatch(setRecentSearches(ingredients));
    dispatch(getRecipes(ingredients));

    resetForm();
    setSubmitting(false);

    router.push("/recipes");
  };

  return (
    <Formik
      initialValues={{ ingredients: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Styles.FormInputWrapper>
            <Styles.FormLabel htmlFor="ingredients">
              Ingredients:
            </Styles.FormLabel>

            <Styles.FormInput
              type="text"
              name="ingredients"
              if="ingredients"
              placeholder="Enter your ingredients"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ingredients}
            />

            <Error touched={touched.ingredients} message={errors.ingredients} />

            {children ? <div>{children}</div> : null}

            <Styles.FormButton type="submit" disabled={isSubmitting}>
              Search
            </Styles.FormButton>
          </Styles.FormInputWrapper>
        </form>
      )}
    </Formik>
  );
};

export default IngredientsForm;
