import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useDarkMode } from 'hooks/useDarkMode';

export const Page = ({ Component, pageProps }: any) => {
  const { theme } = useDarkMode();
  const [webSizeLimit, setWebSizeLimit] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (document.body.clientWidth < 768) {
        setWebSizeLimit(false);
      } else setWebSizeLimit(true);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {webSizeLimit ? (
        <Component {...pageProps} />
      ) : (
        <ReplacePage>
          <img
            src="https://i.gifer.com/origin/ff/ff17113095f355430637c2b17ccf6712_w200.gif"
            alt="ReplacePageImage"
          />
          <ReplaceText>We only support 768px and above.</ReplaceText>
        </ReplacePage>
      )}
    </ThemeProvider>
  );
};

const ReplacePage = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

const ReplaceText = styled.h6`
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;
