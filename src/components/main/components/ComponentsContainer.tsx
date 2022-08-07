import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ComponentList from './ComponentList';
import FilterList from './FilterList';
import PopularItemList from './PopularItemList';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
import { Component } from 'types/component';
import { getComponents, getComponentTags } from 'utils/apis';
import { QueryKeys } from 'utils/queryClient';

const ComponentsContainer = () => {
  const { data: componentList } = useQuery(QueryKeys.COMPONENTS, getComponents);
  const { data: tags } = useQuery(QueryKeys.TAGS, getComponentTags);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredData, setFilteredData] = useState<Component[]>();

  useEffect(() => {
    if (selectedFilter !== 'All') {
      const newData = componentList?.filter((component: Component) =>
        component.ComponentTags.some(tag => tag.title === selectedFilter),
      );
      setFilteredData(newData);
      return;
    }

    setFilteredData(componentList);
  }, [selectedFilter]);

  if (!componentList || !tags) return null;

  return (
    <Container>
      <Wrap>
        <PopularItemList list={componentList} />
        <FilterList
          list={tags}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <ComponentList list={filteredData || componentList} />
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
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  width: calc(100vw - 500px);
  margin: 60px 110px 120px 0;

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    width: 480px;
    margin-right: 40px;
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    width: 940px;
    margin-right: calc((100vw - 1220px) / 2);
  }
`;

export default ComponentsContainer;
