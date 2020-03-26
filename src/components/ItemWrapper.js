import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  text-align: center;
  padding: 2rem 1rem;
  
  border: 1px solid black;
  border-radius: 3px;

  margin-top: 2rem;

  & + & {
    margin-top: 3rem;
  }
`;

const Title = styled.div`
  font-size: 20px;
  letter-spacing: 3px;
`

const ItemWrapper = ({ title, children }) => (
  <Wrapper>
    <Title>
      { title }
    </Title>
      { children }
  </Wrapper>
);

export default ItemWrapper;