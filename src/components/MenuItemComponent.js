import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  & + & {
    margin-top: 1rem;
  }
`;

const Name = styled.div`
  font-size: 18px;
`;

const Price = styled.div`
  margin-top: 1rem;
  font-size: 14px;
`;

const Button = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 0.3rem;
  cursor: pointer;
  border: 1px solid black;
`;

const MenuItemComponent = ({ id, title, name, price, onRemove }) => (
  <Wrapper>
    <Name>{name + ' ' + title}</Name>
    <Price>{price}</Price>
    <Button onClick={() => onRemove(id)}>
      Delete
    </Button>
  </Wrapper>
);

export default MenuItemComponent;