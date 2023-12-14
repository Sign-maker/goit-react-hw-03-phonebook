import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  max-width: ${props => props.theme.spacing(110)};
  min-width: ${props => props.theme.spacing(80)};
`;
