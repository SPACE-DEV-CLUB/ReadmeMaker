import 'styles/fonts/Montserrat.css';
import 'styles/fonts/NotoSansKR.css';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Pages from 'pages/pages';
import GlobalStyle from 'styles/globalStyle';
import { getClient } from 'utils/queryClient';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = getClient();

  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        <Pages Component={Component} pageProps={pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
