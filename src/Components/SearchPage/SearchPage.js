import React, { PureComponent } from "react";
import styled from "styled-components";

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
    alert("Ingredient submitted: " + this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <SearchPageForm>
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

export default SearchPage;
