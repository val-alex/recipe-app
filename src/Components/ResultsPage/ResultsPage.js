import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

    return (
      <>
        <button onClick={() => this.props.history.goBack()}>Back</button>
        {!!searchResults.length && (
          <>
            <div>back button ( material icons )</div>
            <h3>Results</h3>
            {searchResults.map((result, index) => (
              <div key={index}>
                {result.title}
                <br />
              </div>
            ))}
          </>
        )}
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(ResultsPage));
