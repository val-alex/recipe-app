import React, { PureComponent } from "react";
// import PropTypes from "prop-types"
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";

import { search } from "Store/Actions/actions";

import Error from "./Error";

// import * as Styles from "./IngredientsFormStyles";

const validationSchema = Yup.object().shape({
  ingredients: Yup.string()
    .min(3, "ingredients must have at least 3 letters")
    .required("Must enter an ingredient")
});

const mapDispatchToProps = {
  searchBound: search
};

class IngredientsForm extends PureComponent {
  handleSubmit = (values, actions) => {
    const { searchBound, history } = this.props;

    actions.setSubmitting(true);

    searchBound(values.ingredients);

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
                } // CHANGE_ME create styles for error, red border and red text
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
