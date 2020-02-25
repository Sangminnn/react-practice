import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 8rem;
  padding: 1rem 0.5rem;
  border: 1px solid black;
  border-radius: 5px;

  transition: 0.2s all;
  cursor: pointer;

  background-color: ${props => props.active === true ? "green" : "white"};
  color: ${props => props.active === true ? "white" : "green"};

  & + & {
    margin-left: 3rem;
  }

  :hover {
    background-color: green;
    color: white;
  }
`;

const Title = styled.div`
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 0.5rem;
  font-size: 14px;
`;


const ButtonComponent = ({ id, active, onToggle, name, price }) => (
  <Container active={active} onClick={() => onToggle(id)}>
    <Title>{name}</Title>
    <Price>
      { price }
    </Price>
  </Container>
);

export default ButtonComponent;