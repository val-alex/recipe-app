import styled from "styled-components";

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.25rem;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`;

export const FormInput = styled.input`
  padding: 0.75rem 1.25rem;
  margin: 0.5rem 0;
  border: 0.20rem solid hsl(0, 0%, 80%);
  border-radius: 0.25rem;

  &::has-error {
    border: 0.125rem solid hsl(0, 100%, 50%);
  }
`;

export const FormButton = styled.button`
  background-color: hsl(0, 0%, 33%);
  border: none;
  color: hsl(0, 0%, 100%);
  padding: 1rem 2rem;
  margin-top: 1.25rem;
  border-radius: 0.25rem;
`;

export const FormError = styled.div`
  color: hsl(0, 100%, 50%);
`;

export const FormValid = styled.div`
  color: hsl(120, 100%, 25%);
`;
