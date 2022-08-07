import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import RMMLogo from 'assets/RMMLogo';
import { DarkModeButton } from 'components/common/DarkModeButton';
import { MEDIA_QUERY_END_POINT } from 'constants/index';

interface NavBarProps {
  route: string;
  children: React.ReactNode;
}

const NavBar = ({ route, children }: NavBarProps) => {
  const renderSwitchAnchor = (route: string) => {
    switch (route) {
      case 'main':
        return (
          <Link href="/generator" passHref>
            <SwitchAnchor href="replace" route={route}>
              Make It
            </SwitchAnchor>
          </Link>
        );

      case 'generator':
        return (
          <Link href="/" passHref>
            <SwitchAnchor href="replace" route={route}>
              Exit
            </SwitchAnchor>
          </Link>
        );
      default:
        break;
    }
  };

  return (
    <Container>
      <Wrap>
        <Logo>
          <Link href="/" passHref>
            <a href="replace">
              <RMMLogo />
            </a>
          </Link>
        </Logo>
        {children}
        <ButtonWrap>
          <DarkModeButton />
          {renderSwitchAnchor(route)}
        </ButtonWrap>
      </Wrap>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.NAV_BACKGROUND};
`;

const Wrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 220px);
  margin: 0 110px;

  @media (min-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    width: 1220px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    width: 100vw;
    margin: 0 40px;
  }
`;

const Logo = styled.li`
  width: 102px;
`;

const SwitchAnchor = styled.a<{ route: string }>`
  border-radius: 30px;
  margin-left: 40px;
  width: 112px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5ff80;
  font-size: 14px;
  font-weight: 600;
  ${({ route }) => route === 'generator' && 'background-color:#ffffff'}
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default NavBar;
