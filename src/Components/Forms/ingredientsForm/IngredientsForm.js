import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setRecentSearches, getRecipes } from "Store/Reducers/recipesSlice";

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
  let history = useHistory();

  const handleSubmit = ({ ingredients }, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    dispatch(setRecentSearches(ingredients));
    dispatch(getRecipes(ingredients));

    resetForm();
    setSubmitting(false);

    history.push("/recipes");
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
        <Styles.FormInputWrapper>
          <form onSubmit={handleSubmit}>
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

            {!!children ? <div>{children}</div> : null}

            <Styles.FormButton type="submit" disabled={isSubmitting}>
              Search
            </Styles.FormButton>
          </form>
        </Styles.FormInputWrapper>
      )}
    </Formik>
  );
};

export default IngredientsForm;
