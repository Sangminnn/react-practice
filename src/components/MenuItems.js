import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  padding: 0.5rem 0.3rem;
  border-bottom: 1px solid black;

  & + & {
    margin-top: 2rem;
  }
`;

const MenuItems = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default MenuItems;