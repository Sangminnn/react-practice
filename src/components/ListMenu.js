import React from 'react';
import styled from 'styled-components';

const Positioner = styled.aside`
  height: 100%;
  width: ${props => props.active ? '400px' : '0px'};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  border-left: 1px solid black;
  
`;

const CloseButton = styled.a`
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
`;
  

const Container = styled.div`
  padding: 0.5rem 0.5rem;
  text-align: center;
`;


const ListMenu = ({ children, active, onToggle }) => (
  <Positioner active={active}>
    <CloseButton onClick={onToggle}>&times;</CloseButton> 
    <Container>
      { children }
    </Container>
  </Positioner>
);

export default ListMenu;