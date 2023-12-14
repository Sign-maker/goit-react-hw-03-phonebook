import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  background-color: #83b0f3;
  padding: ${props => props.theme.spacing(5)};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Input = styled.input`
  font-size: inherit;
  width: 100%;
  padding: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(5)};
  border: 2px solid transparent;

  outline: none;
  &:focus {
    border: 2px solid darkblue;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled.button`
  padding: ${props => props.theme.spacing(3)};
  box-shadow: ${props => props.theme.shadows.small};
  background-color: darkblue;
  border-radius: ${props => props.theme.spacing(2)};
  color: white;
  display: block;
  margin: 0 auto;
  transition: background-color ${props => props.theme.transition};
  &:disabled {
    background-color: #abbcd0;
    pointer-events: none;
  }
  &:hover,
  :focus {
    background-color: #3232da;
  }
`;
