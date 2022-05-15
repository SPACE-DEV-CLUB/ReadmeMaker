import React from 'react';
import styled from '@emotion/styled';
import PopularItem from './PopularItem';
import { DraggableContainer } from 'components/common/DraggableContainer';

const PopularItemList = (): JSX.Element => {
  const today = new Date();
  return (
    <Container>
      <h3>Popular Components</h3>
      <p>{`${today.getFullYear()}년 ${today.getMonth() + 1}월의 인기 컴포넌트를 확인하세요 !`}</p>
      <DraggableContainer>
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
      </DraggableContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1100px;
  color: #fff;
  background-color: #171b21;
  border: 1px solid #2c2c2c;
  border-radius: 30px;
  padding: 40px 0px 30px 40px;
  box-sizing: border-box;
  margin: 60px auto 120px;
  h3 {
    font-size: 20px;
    font-weight: 800;
  }
  p {
    margin: 10px 0 30px;
    font-size: 14px;
  }
`;

export default PopularItemList;
