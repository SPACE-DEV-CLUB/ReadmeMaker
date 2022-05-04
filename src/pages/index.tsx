import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NewComponents from 'components/home/components/NewComponents';
import PopularComponents from 'components/home/components/PopularComponents';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Readme Maker</title>
        <meta name="description" content="Make your readme.md awesome!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewComponents />
      <PopularComponents />
    </div>
  );
};

export default Home;
