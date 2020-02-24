import React from "react";
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

export const SearchPage = () => {
  return (
    <SearchPageForm>
      <SearchPageInput type="text" name="ingredient" placeholder="Ingredient" />
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
};

export default SearchPage;
