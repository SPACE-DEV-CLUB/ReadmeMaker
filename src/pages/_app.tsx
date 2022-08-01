import 'styles/fonts/Montserrat.css';
import 'styles/fonts/NotoSansKR.css';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/globalStyle';

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            // 임시 options
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = getClient();
  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
