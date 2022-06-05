import styled from '@emotion/styled';
import React from 'react';
import dynamic from 'next/dynamic';
import SideBar from 'components/generator/sidebar/SideBar';
import PreviewContainer from 'components/generator/viewer/PreviewContainer';

const generator = () => {
  const Generator = dynamic(() => import('components/generator/SwitchGenerator'), {
    ssr: false,
  });

  return (
    <Container>
      {/* TODO: 네비게이션 바 수정*/}
      <TestNavi>네비게이션 바</TestNavi>
      <GridWrap>
        <SideBar />
        <Generator />
        <PreviewContainer></PreviewContainer>
      </GridWrap>
    </Container>
  );
};

export default generator;

const Container = styled.section``;

const GridWrap = styled.section`
  display: grid;
  grid-template-columns: 300px 500px auto;
`;

const TestNavi = styled.div`
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #f5ff80;
  background-color: black;
`;
