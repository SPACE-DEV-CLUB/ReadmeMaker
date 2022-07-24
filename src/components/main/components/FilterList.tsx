import styled from '@emotion/styled';
import React, { useState } from 'react';
import FilterButton from 'components/main/components/FilterButton';
import { ComponentTag } from 'types/component';

interface FliterListProps {
  list: ComponentTag[];
}

const FilterList = ({ list }: FliterListProps): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState(list[0].title);

  const onClickFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedFilter(e.currentTarget.value);
  };

  return (
    <ListWrap>
      {list.map((item, index: number) => (
        <FilterButton
          {...item}
          key={index}
          onClick={onClickFilterButton}
          isSelected={item.title === selectedFilter}
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
  margin: 60px 0 40px;
  width: 100%;
`;

export default FilterList;
