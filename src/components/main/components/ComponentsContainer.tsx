import styled from '@emotion/styled';
import React from 'react';
import ComponentList from './ComponentList';
import FilterList from './FilterList';
import PopularItemList from './PopularItemList';

const ComponentsContainer = () => {
  return (
    <Container>
      <Wrap>
        <PopularItemList />
        <FilterList datas={['all', 'arts', 'coloful', 'modern', 'future']} />
        <ComponentList datas={['', '', '', '', '']} />
      </Wrap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  color: white;
  overflow: scroll;
  background-color: #0e1116;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  width: calc(100vw - 500px);
  margin: 60px 110px 120px 0;
`;

export default ComponentsContainer;
