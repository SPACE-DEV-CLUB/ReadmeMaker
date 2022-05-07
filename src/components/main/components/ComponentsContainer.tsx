import React from 'react';
import styled from '@emotion/styled';
import ComponentList from './ComponentList';

const ComponentsContainer = () => {
  return (
    <Container>
      <ComponentList datas={['', '', '', '', '']} />
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100%;
  color: white;
  overflow: scroll;
  background-color: #0e1116;
`;

export default ComponentsContainer;
