import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing(2)};
  background-color: #83b0f3;
  padding: ${props => props.theme.spacing(5)};
`;

export const Input = styled.input`
  font-size: inherit;
  width: 100%;
  padding: ${props => props.theme.spacing(2)};
  border: 2px solid transparent;
  margin-top: ${props => props.theme.spacing(2)};
  outline: none;
  &:focus {
    border: 2px solid darkblue;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
