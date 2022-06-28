import 'styles/fonts/Montserrat.css';
import 'styles/fonts/NotoSansKR.css';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/globalStyle';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
