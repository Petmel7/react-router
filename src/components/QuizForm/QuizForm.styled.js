import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    span {
      margin-bottom: 5px;
    }
  }
`;

export const StyledField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const StyledError = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const StyledSubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
