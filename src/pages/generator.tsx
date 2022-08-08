import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';
import NavBar from 'components/common/NavBar';
import Generator from 'components/generator/dnd/Generator';
import SideBar from 'components/generator/sidebar/SideBar';
import { MEDIA_QUERY_END_POINT } from 'constants/index';

const generator = () => {
  const PreviewContainer = dynamic(() => import('components/generator/viewer/PreviewContainer'), {
    ssr: false,
  });

  return (
    <>
      <Container>
        <NavBar route="generator">
          <Title>Make It</Title>
        </NavBar>
        <GridWrap>
          <SideBar />
          <Generator />
          <PreviewContainer></PreviewContainer>
        </GridWrap>
      </Container>
    </>
  );
};

export default generator;

const Container = styled.section`
  background-color: #171b21;
`;

const GridWrap = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr 5fr;
  height: calc(100vh - 70px);
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    width: 1440px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  color: #f5ff80;
  font-size: 1.25rem;
  font-weight: 800;
`;
