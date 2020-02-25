import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0.5rem;

  & + & {
    padding-top: 1rem;
  }
`;


const Title = styled.div`
  padding-top: 0.5rem;

  text-align: left;
  font-size: 20px;
`;

const Buttons = styled.div`
  display: flex;
  flex: 1;
  
  margin-top: 2rem;
`;

const MatchBox = ({ name, children }) => (
  <Wrapper>
    <Title>{ name }</Title>
    <Buttons>
      { children }
    </Buttons>
  </Wrapper>
);


export default MatchBox;