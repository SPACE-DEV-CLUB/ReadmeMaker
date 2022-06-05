import styled from '@emotion/styled';
import React from 'react';
import dynamic from 'next/dynamic';
import SideBar from 'components/generator/sidebar/SideBar';
import PreviewContainer from 'components/generator/viewer/PreviewContainer';
import NavBar from 'components/common/NavBar';

const generator = () => {
  const Generator = dynamic(() => import('components/generator/Generator'), {
    ssr: false,
  });

  return (
    <Container>
      {/* TODO: 네비게이션 바 수정*/}
      <NavBar route="generator">
        <Title>Make It</Title>
      </NavBar>
      <GridWrap>
        <SideBar />
        <Generator />
        <PreviewContainer></PreviewContainer>
      </GridWrap>
    </Container>
  );
};

export default generator;

const Container = styled.section`
  height: 100vh;
  background-color: #171b21;
`;

const GridWrap = styled.section`
  display: grid;
  grid-template-columns: 300px 500px auto;
  height: 100%;
`;

const Title = styled.h2`
  color: #f5ff80;
  font-size: 20px;
  font-weight: 800;
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
