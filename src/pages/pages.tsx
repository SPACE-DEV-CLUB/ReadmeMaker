import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useDarkMode } from 'hooks/useDarkMode';

const Pages = ({
  Component,
  pageProps,
}: Pick<AppProps, 'Component' | 'pageProps'>): JSX.Element => {
  const { theme } = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </ThemeProvider>
  );
};

export default Pages;
