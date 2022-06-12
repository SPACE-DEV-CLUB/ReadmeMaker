import React, { useState } from 'react';
import styled from '@emotion/styled';
import FilterButton from './FilterButton';

const FilterList = ({ datas }: any): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const onClickFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedFilter(e.currentTarget.textContent!);
  };

  return (
    <ListWrap>
      {datas.map((data: string, index: number) => (
        <FilterButton
          data={data}
          key={index}
          onClick={onClickFilterButton}
          isSelected={data === selectedFilter}
        />
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
