import React from 'react';
import styled from '@emotion/styled';
import FilterButton from './FilterButton';

const FilterList = ({ datas }: any): JSX.Element => {
  return (
    <ListWrap>
      {datas.map((data: any, index: number) => (
        <FilterButton data={data} key={index} />
      ))}
    </ListWrap>
  );
};

const ListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0 auto 40px;
  width: 1100px;
`;

export default FilterList;
