import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { ComponentList } from './ComponentList';
import { Component, ComponentTag } from 'types/component';
import { getComponents, getComponentTags } from 'utils/apis';

const FilterList = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredData, setFilteredData] = useState<Component[]>();
  const { data: componentList } = useQuery('components', getComponents);
  const { data: tags } = useQuery('tags', getComponentTags);

  useEffect(() => {
    if (activeFilter !== 'all') {
      const newData = componentList?.filter((component: Component) =>
        component.ComponentTags.some(tag => tag.title === activeFilter),
      );
      setFilteredData(newData);
      return;
    }
    setFilteredData(componentList);
  }, [activeFilter]);
  const handleActiveFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const targetValue = (e.currentTarget as HTMLButtonElement).value;
    setActiveFilter(targetValue);
  };

  return (
    <div>
      <FilterBtnList>
        <li key={`filter-tag-${uuidv4()}`}>
          <BtnFilterItem
            type="button"
            value="all"
            onClick={handleActiveFilter}
            isActive={'all' === activeFilter}
          >
            all
          </BtnFilterItem>
        </li>
        {tags?.map((tag: ComponentTag) => {
          const { id, title } = tag;
          return (
            <li key={`filter-tag-${id}`}>
              <BtnFilterItem
                type="button"
                value={title}
                onClick={handleActiveFilter}
                isActive={title === activeFilter}
              >
                {title}
              </BtnFilterItem>
            </li>
          );
        })}
      </FilterBtnList>
      <ComponentList componentData={filteredData} />
    </div>
  );
};

export default FilterList;

const FilterBtnList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 40px;
`;

const BtnFilterItem = styled.button<{ isActive: boolean }>`
  height: 22px;
  line-height: 22px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  ${({ isActive, theme }) =>
    isActive
      ? `
          background: ${theme.colors.NAV_BACKGROUND};
          color: ${theme.colors.PIN};
        `
      : `
          background: ${theme.colors.PIN};
          color:${theme.colors.NAV_BACKGROUND};
        `}
`;
