import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import PopularItemList from 'components/main/components/PopularItemList';
import ComponentList from 'components/main/components/ComponentList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Readme Maker</title>
        <meta name="description" content="Make your readme.md awesome!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PopularItemList />
      <ComponentList datas={['', '', '', '', '']} />
    </div>
  );
};

export default Home;
