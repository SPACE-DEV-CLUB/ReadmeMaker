import React from 'react';
import styled from '@emotion/styled';
import NewComponentsItem from './NewComponentsItem';

const NewComponents = (): JSX.Element => {
  const today = new Date();
  return (
    <Container>
      <h3>New Components</h3>
      <p>{`${today.getFullYear()}년 ${today.getMonth() + 1}월의 새 컴포넌트를 확인하세요 !`}</p>
      <ComponentWrapper>
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
        <NewComponentsItem />
      </ComponentWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 1100px;
  color: #fff;
  background-color: #1c1c1c;
  border: 1px solid #2c2c2c;
  border-radius: 30px;
  padding: 40px 0px 30px 40px;
  h3 {
    font-size: 20px;
    font-weight: 800;
  }
  p {
    margin: 10px 0 62px;
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  overflow: hidden;
`;
export default NewComponents;
