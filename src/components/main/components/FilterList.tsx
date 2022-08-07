import styled from '@emotion/styled';
import React from 'react';
import FilterButton from 'components/main/components/FilterButton';
import { ComponentTag } from 'types/component';

interface FliterListProps {
  list: ComponentTag[];
  selectedFilter: string;
  setSelectedFilter: (tagName: string) => void;
}

const FilterList = ({ list, selectedFilter, setSelectedFilter }: FliterListProps): JSX.Element => {
  const onClickFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedFilter(e.currentTarget.value);
  };

  return (
    <ListWrap>
      <FilterButton
        onClick={onClickFilterButton}
        title="All"
        isSelected={'All' === selectedFilter}
      />
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
