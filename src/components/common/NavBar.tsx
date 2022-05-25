import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';
import RMMLogo from 'assets/RMMLogo';
import { DarkModeButton } from './DarkModeButton';

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar = ({ children }: NavBarProps) => (
  <Container>
    <Wrap>
      <Logo>
        <Link href={`/`} passHref>
          <a href="replace">
            <RMMLogo />
          </a>
        </Link>
      </Logo>
      {children}
      <ButtonWrap>
        <DarkModeButton />
        <MakerButton>make it</MakerButton>
      </ButtonWrap>
    </Wrap>
  </Container>
);

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #000;
`;

const Wrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 158px 0 168px;
`;

const Logo = styled.li`
  width: 102px;
`;

const MakerButton = styled.button`
  border-radius: 30px;
  margin-left: 40px;
  background-color: #f5ff80;
  padding: 8px 28px 8px 29px;
  font-size: 14px;
  font-weight: 600;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default NavBar;
