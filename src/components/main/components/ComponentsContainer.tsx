import React from 'react';
import styled from '@emotion/styled';
import Cart from '../cart/Cart';
import ComponentList from './ComponentList';
import PopularItemList from './PopularItemList';
import FilterList from './FilterList';

const ComponentsContainer = () => {
  return (
    <Container>
      <PopularItemList />
      <FilterList datas={['all', 'arts', 'coloful', 'modern', 'future']} />
      <ComponentList datas={['', '', '', '', '']} />
      <Cart position="left" />
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
