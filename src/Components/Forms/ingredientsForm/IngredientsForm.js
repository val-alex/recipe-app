import React, { PureComponent } from "react";
// import PropTypes from "prop-types"
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";

import { requestRecipes } from "Store/Actions/actions";

// import * as Styles from "./IngredientsFormStyles";

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
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return <div className="form-message invalid">{message}</div>;
  }
  return <div className="form-message valid">valid</div>;
};

export class IngredientsForm extends PureComponent {
  handleSubmit = (values, actions) => {
    const { requestRecipesBound, history } = this.props;

    actions.setSubmitting(true);

    requestRecipesBound(values.ingredients);

    actions.resetForm();
    actions.setSubmitting(false);

    history.push("/resultsPage");
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
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label htmlFor="ingredients">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                if="ingredients"
                placeholder="Enter your ingredients"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ingredients}
                className={
                  touched.ingredients && errors.ingredients ? "has-error" : null
                }
              />
              <Error
                touched={touched.ingredients}
                message={errors.ingredients}
              />
            </div>

            {!!children && <div>{children}</div>}

            <div>
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(IngredientsForm));
