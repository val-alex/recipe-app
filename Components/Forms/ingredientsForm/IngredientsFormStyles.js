import styled from "styled-components";

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  border-radius: 4px;

  &::has-error {
    border: 2px solid red;
  }
`;

export const FormButton = styled.button`
  background-color: #555;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 4px;
`;

export const FormError = styled.div`
  color: red;
`;

export const FormValid = styled.div`
  color: green;
`;
