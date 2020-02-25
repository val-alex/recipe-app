import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { search } from "Store/Actions/actions";

// import { API_KEY } from 'Constants/contants';

const mapDispatchToProps = {
  searchBound: search
};

const SearchPageForm = styled.form`
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const SearchPageInput = styled.input`
  border: 1px #ccc solid;
`;

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

    alert("Ingredient submitted: " + value);

    event.preventDefault();

    searchBound(value);
  }

  // query
  // https://api.spoonacular.com/food/products/search?query=${this.state.value}&apiKey=${API_KEY}

  render() {
    return (
      <SearchPageForm onSubmit={this.handleSubmit}>
        <SearchPageInput
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
      </SearchPageForm>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchPage);
