import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { search } from "Store/Actions/actions";

import * as Styled from "./SearchPageStyles";

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
    return (
      <Styled.SearchPageForm onSubmit={this.handleSubmit}>
        <Styled.SearchPageInput
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Ingredient"
        />
        <div>
          <h3>Recent Searches</h3>
          <ol>
            <li>Search History 1</li>
            <li>Search History 2</li>
          </ol>
        </div>
        <input type="submit" value="Submit" />
      </Styled.SearchPageForm>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchPage);
