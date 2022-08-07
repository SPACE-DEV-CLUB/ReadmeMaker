import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Head from 'next/head';
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
      <Head>
        <script
          src="https://cdn.tiny.cloud/1/grw4sefbm00ssvsu8w4c01r6wbwjavncftmlqr5elrrgh62v/tinymce/6/tinymce.min.js"
          referrerPolicy="origin"
        ></script>
      </Head>
      <Container>
        <NavBar route="generator">
          <Title>Make It</Title>
        </NavBar>
        <GridWrap>
          <SideBar />
          <Generator />
          <PreviewContainer />
        </GridWrap>
      </Container>
    </>
  );
};

export default generator;

const Container = styled.section`
  background: ${({ theme }) => theme.colors.BACKGROUND};
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
  color: ${({ theme }) => theme.colors.PIN};
  font-size: 1.25rem;
  font-weight: 800;
`;
