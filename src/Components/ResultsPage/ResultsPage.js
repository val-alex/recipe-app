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
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // CHANGE_ME allow this to pass verification for empty array as well
  )
};

ResultsPage.defaultProps = {
  searchResults: []
};

export default withRouter(connect(mapStateToProps)(ResultsPage));
