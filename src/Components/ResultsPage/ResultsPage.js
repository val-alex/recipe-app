import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as Styles from "./ResultsPageStyles";

const mapStateToProps = state => ({
  searchResults: state.recipes.results || []
});

export const ResultsPage = ({ searchResults, history }) => (
  <Styles.ResultsPageWrapper>
    <Styles.ResultsButton onClick={() => history.goBack()}>
      Back
    </Styles.ResultsButton>

    <Styles.ResultsTitle>Results:</Styles.ResultsTitle>

    {!!searchResults.length && (
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    )}
  </Styles.ResultsPageWrapper>
);

ResultsPage.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      imageType: PropTypes.string,
      usedIngredientCount: PropTypes.number,
      missedIngredientCount: PropTypes.number,
      missedIngredients: PropTypes.array,
      usedIngredients: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          amount: PropTypes.number,
          unit: PropTypes.string,
          unitLong: PropTypes.string,
          unitShort: PropTypes.string,
          aisle: PropTypes.string,
          name: PropTypes.string,
          original: PropTypes.string,
          originalString: PropTypes.string,
          originalName: PropTypes.string,
          metaInformation: PropTypes.arrayOf(PropTypes.string),
          meta: PropTypes.arrayOf(PropTypes.string),
          image: PropTypes.string
        })
      ),
      unusedIngredients: PropTypes.array,
      likes: PropTypes.number
    })
  )
};

ResultsPage.defaultProps = {
  searchResults: []
};

export default withRouter(connect(mapStateToProps)(ResultsPage));
