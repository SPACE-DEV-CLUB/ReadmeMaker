import styled from '@emotion/styled';
import React from 'react';
import ComponentItem from 'components/main/components/ComponentItem';

const ComponentList = ({ datas }: any): JSX.Element => {
  return (
    <Card>
      {datas.map((data: any, index: number) => (
        <ComponentItem data={data} key={index} />
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
