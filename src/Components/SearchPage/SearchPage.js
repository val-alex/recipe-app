import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { search } from "Store/Actions/actions";

import * as Styled from "./SearchPageStyles";

const mapStateToProps = state => ({
  previousSearches: state.recipes.recentSearches || []
});

const mapDispatchToProps = {
  searchBound: search
};

class SearchPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    previousSearches: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    previousSearches: ""
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { searchBound } = this.props;

    const { value } = this.state;

    event.preventDefault();

    searchBound(value);
  }

  render() {
    const { previousSearches } = this.props;

    return (
      <Styled.SearchPageForm onSubmit={this.handleSubmit}>
        <Styled.SearchPageInput
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Ingredient"
        />

        {!!previousSearches.length && (
          <div>
            <h3>Recent Searches</h3>
            <ol>
              {previousSearches.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>
          </div>
        )}

        <input type="submit" value="Submit" />
      </Styled.SearchPageForm>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
