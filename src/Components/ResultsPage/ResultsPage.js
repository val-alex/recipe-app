import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  searchResults: state.recipes.results || []
});

class ResultsPage extends PureComponent {
  static propTypes = {
    searchResults: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // CHANGE_ME allow this to pass verification for empty array as well
    )
  };

  static defaultProps = {
    searchResults: []
  };

  render() {
    const { searchResults } = this.props;
    console.log(`searchResults: `, searchResults);
    return (
      !!searchResults.length && (
        <>
          <div>back button ( material icons )</div>
          <h3>Results</h3>
          {searchResults.map((result, index) => (
            <div key={index}>{result.title}</div>
          ))}
        </>
      )
    );
  }
}

export default connect(mapStateToProps)(ResultsPage);
