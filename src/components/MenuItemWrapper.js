import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 1rem;
  margin-bottom: 1rem;

  & + & {
    border-top: 1px solid black;  
  }
`
  


const MenuItemWrapper = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

export default MenuItemWrapper;