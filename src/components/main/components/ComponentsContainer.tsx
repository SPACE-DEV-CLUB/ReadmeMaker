import React from 'react';
import styled from '@emotion/styled';
import ComponentList from './ComponentList';
import PopularItemList from './PopularItemList';
import FilterList from './FilterList';

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
