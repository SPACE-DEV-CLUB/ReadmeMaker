import { RecoilRoot } from 'recoil';
import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/globalStyle';
import { Global } from '@emotion/react';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
