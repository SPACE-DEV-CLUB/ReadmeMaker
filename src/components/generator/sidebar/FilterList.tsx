import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';
import { useState } from 'react';
import { FILTER_LIST } from 'constants/filterList';

const FilterList = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleActiveFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const targetValue = (e.currentTarget as HTMLButtonElement).value;
    setActiveFilter(targetValue);
  };

  return (
    <div>
      <FilterBtnList>
        {FILTER_LIST.map(item => (
          <li key={`filter-item-${uuidv4()}`}>
            <BtnFilterItem
              type="button"
              value={item.value}
              onClick={handleActiveFilter}
              isActive={item.value === activeFilter}
            >
              {item.value}
            </BtnFilterItem>
          </li>
        ))}
      </FilterBtnList>
      <ComtentList>content</ComtentList>
    </div>
  );
};

export default FilterList;

const FilterBtnList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 40px;
  padding: 0 46px 0 40px;
`;

const BtnFilterItem = styled.button<{ isActive: Boolean }>`
  height: 22px;
  line-height: 22px;
  padding: 0 10px;
  border-radius: 8px;
  ${({ isActive }) =>
    isActive
      ? {
          background: '#2c3037',
          color: '#f5ff80',
        }
      : {
          background: '#f5ff80',
          color: '#2c3037',
        }}
`;

const ComtentList = styled.div`
  padding-left: 40px;
`;
