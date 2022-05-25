import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';
import RMMLogo from 'assets/RMMLogo';

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  return (
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

export default NavBar;
