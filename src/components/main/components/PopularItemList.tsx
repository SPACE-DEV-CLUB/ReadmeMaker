import styled from '@emotion/styled';
import React from 'react';
import PopularItem from './PopularItem';
import { DraggableContainer } from 'components/common/DraggableContainer';
import { Component } from 'types/component';

interface PopularItemListProps {
  list: Component[];
}
const PopularItemList = ({ list }: PopularItemListProps): JSX.Element => {
  const today = new Date();
  return (
    <Container>
      <ComponentsTitle>Popular Components</ComponentsTitle>
      <ComponentsSubTitle>{`${today.getFullYear()}년 ${
        today.getMonth() + 1
      }월의 인기 컴포넌트를 확인하세요 !`}</ComponentsSubTitle>
      <DraggableContainer>
        {[...list]
          .sort((a, b) => b.like - a.like)
          .map((item, index) => (
            <PopularItem key={index} item={item} />
          ))}
      </DraggableContainer>
    </Container>
  );
};

const Container = styled.div`
  /* width: calc(100vw - 500px); */
  width: 100%;
  color: #fff;
  background-color: #171b21;
  background: ${({ theme }) => theme.colors.CASUAL_FIELD};
  border: 1px solid ${({ theme }) => theme.colors.CASUAL_LINE};
  border-radius: 30px;
  padding: 40px 0px 30px 40px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.colors.SHADOW};
`;

const ComponentsTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
`;

const ComponentsSubTitle = styled.p`
  margin: 10px 0 30px;
  font-size: 14px;
`;

export default PopularItemList;
