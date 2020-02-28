import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";

import { requestRecipes } from "Store/Actions/actions";

import * as Styles from "./IngredientsFormStyles";

const validationSchema = Yup.object().shape({
  ingredients: Yup.string()
    .min(3, "ingredients must have at least 3 letters")
    .required("Must enter an ingredient")
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

const mapDispatchToProps = {
  requestRecipesBound: requestRecipes
};

export class IngredientsForm extends PureComponent {
  handleSubmit = (values, actions) => {
    const { requestRecipesBound, history } = this.props;
    actions.setSubmitting(true);

    requestRecipesBound(values.ingredients);

    actions.resetForm();
    actions.setSubmitting(false);

    history.push("/results");
  };

  render() {
    const { children } = this.props;

    return (
      <Formik
        initialValues={{ ingredients: "" }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
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

              <Error
                touched={touched.ingredients}
                message={errors.ingredients}
              />

              {!!children && <div>{children}</div>}

              <Styles.FormButton type="submit" disabled={isSubmitting}>
                Search
              </Styles.FormButton>
            </form>
          </Styles.FormInputWrapper>
        )}
      </Formik>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(IngredientsForm));
