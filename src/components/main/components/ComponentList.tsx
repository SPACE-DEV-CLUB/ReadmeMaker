import styled from '@emotion/styled';
import React from 'react';
import ComponentItem from 'components/main/components/ComponentItem';
import { Component } from 'types/component';

interface ComponentListProps {
  list: Component[];
}
const ComponentList = ({ list }: ComponentListProps): JSX.Element => {
  return (
    <Card>
      {list.map(item => (
        <ComponentItem item={item} key={item.id} />
      ))}
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export default ComponentList;
