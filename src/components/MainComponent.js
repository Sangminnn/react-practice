import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 1200px;
`;

const Wrapper = styled.div`

`;

const MainComponent = ({ children }) => (
  <Positioner>
    <Wrapper>
      { children }
    </Wrapper>
  </Positioner>
);

export default MainComponent;