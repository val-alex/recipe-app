import React from "react";
import styled from "styled-components";

const BodyForm = styled.form`
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const BodyInput = styled.input`
  border: 1px #ccc solid;
`;

export const Body = () => {
  return (
    <BodyForm>
      <BodyInput type="text" name="ingredient" placeholder="Ingredient" />
      <div>
        <h3>Recent Searches</h3>
        <ol>
          <li>Search History 1</li>
          <li>Search History 2</li>
        </ol>
      </div>
      <input type="submit" value="Submit" />
    </BodyForm>
  );
};

export default Body;
