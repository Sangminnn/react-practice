import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  

  height: 80px;

  padding: 1.5rem 1rem;
  border-bottom: 1px solid black;
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 25px;
`;

const List = styled.div`
  cursor: pointer;
  border: 1px solid black;
  padding: 0.5rem 0.3rem;
`;

const Header = ({ children, onToggle }) => (
  <Wrapper>
    <Title>
      { children }
    </Title>
    <List onClick={onToggle}>
      리스트
    </List>
  </Wrapper>
)

export default Header;