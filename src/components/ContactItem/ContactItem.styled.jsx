import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  display: flex;
  gap: ${props => props.theme.spacing(3)};
  justify-content: space-between;
  align-items: center;
  background-color: #dedef3;
  padding: ${props => props.theme.spacing(2)};

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(5)};
  }
`;
export const ContactInfo = styled.p`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const Button = styled.button`
  padding: ${props => props.theme.spacing(3)};
  box-shadow: ${props => props.theme.shadows.small};
  background-color: darkblue;
  border-radius: ${props => props.theme.spacing(2)};
  color: white;
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
