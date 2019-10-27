import React from 'react';
import styled from '@emotion/styled';

import Sidebar from '../Sidebar/Sidebar';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;

  @media screen and (max-width: 600px) {
    padding-right: 0;
  }
`;

const Main = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
    <Sidebar />
  </Wrapper>
);

export default Main;
