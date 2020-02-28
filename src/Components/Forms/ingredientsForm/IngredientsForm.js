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

const mapDispatchToProps = {
  requestRecipesBound: requestRecipes
};

export const Error = ({ touched, message }) => {
  if (!touched) {
    return <Styles.FromError>&nbsp;</Styles.FromError>;
  }
  if (message) {
    return <Styles.FromError>{message}</Styles.FromError>;
  }
  return <Styles.FromValid>Valid</Styles.FromValid>;
};

export class IngredientsForm extends PureComponent {
  handleSubmit = (values, actions) => {
    const { requestRecipesBound, history } = this.props;

    actions.setSubmitting(true);

    requestRecipesBound(values.ingredients);

    history.push("/results");

    actions.resetForm();
    actions.setSubmitting(false);
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
          <Styles.FromInputWrapper>
            <form onSubmit={handleSubmit}>
              <Styles.FromLabel htmlFor="ingredients">
                Ingredients:
              </Styles.FromLabel>
              <Styles.FromInput
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

              <Styles.FromButton type="submit" disabled={isSubmitting}>
                Search
              </Styles.FromButton>
            </form>
          </Styles.FromInputWrapper>
        )}
      </Formik>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(IngredientsForm));
