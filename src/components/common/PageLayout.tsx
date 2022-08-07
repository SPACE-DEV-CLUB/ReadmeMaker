import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { useDarkMode } from 'hooks/useDarkMode';

export const Page = ({ Component, pageProps }: any) => {
  const { theme } = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
