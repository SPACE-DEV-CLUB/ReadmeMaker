import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';

interface NaveBarProps {
  nextSlide: any;
  prevSlide: any;
  currentSlide: Number;
}

const NavBar = ({ currentSlide, nextSlide, prevSlide }: NaveBarProps) => {
  return (
    <Container>
      <Wrap>
        <Logo>
          <Link href={`/`} passHref>
            <a href="replace">
              <svg
                width="97"
                height="23"
                viewBox="0 0 97 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.68 3.92C8.45333 2.93333 9.45333 2.2 10.68 1.72C11.9333 1.21333 13.36 0.96 14.96 0.96V7.8C14.2667 7.72 13.6933 7.68 13.24 7.68C11.6133 7.68 10.3333 8.12 9.4 9C8.49333 9.88 8.04 11.2267 8.04 13.04V23H0.44V1.32H7.68V3.92ZM46.3363 0.96C49.0029 0.96 51.1229 1.76 52.6963 3.36C54.2963 4.96 55.0963 7.37333 55.0963 10.6V23H47.4963V11.84C47.4963 10.32 47.2029 9.2 46.6163 8.48C46.0563 7.76 45.2563 7.4 44.2163 7.4C43.0696 7.4 42.1496 7.8 41.4563 8.6C40.7629 9.4 40.4163 10.6133 40.4163 12.24V23H32.8163V11.84C32.8163 8.88 31.7229 7.4 29.5363 7.4C28.3629 7.4 27.4296 7.8 26.7363 8.6C26.0429 9.4 25.6963 10.6133 25.6963 12.24V23H18.0963V1.32H25.3363V3.6C26.1363 2.72 27.0829 2.06667 28.1763 1.64C29.2963 1.18667 30.5096 0.96 31.8163 0.96C33.3363 0.96 34.6963 1.24 35.8963 1.8C37.0963 2.36 38.0696 3.21333 38.8163 4.36C39.6696 3.26667 40.7496 2.42667 42.0563 1.84C43.3629 1.25333 44.7896 0.96 46.3363 0.96ZM88.1331 0.96C90.7998 0.96 92.9198 1.76 94.4931 3.36C96.0931 4.96 96.8931 7.37333 96.8931 10.6V23H89.2931V11.84C89.2931 10.32 88.9998 9.2 88.4131 8.48C87.8531 7.76 87.0531 7.4 86.0131 7.4C84.8665 7.4 83.9465 7.8 83.2531 8.6C82.5598 9.4 82.2131 10.6133 82.2131 12.24V23H74.6131V11.84C74.6131 8.88 73.5198 7.4 71.3331 7.4C70.1598 7.4 69.2265 7.8 68.5331 8.6C67.8398 9.4 67.4931 10.6133 67.4931 12.24V23H59.8931V1.32H67.1331V3.6C67.9331 2.72 68.8798 2.06667 69.9731 1.64C71.0931 1.18667 72.3065 0.96 73.6131 0.96C75.1331 0.96 76.4931 1.24 77.6931 1.8C78.8931 2.36 79.8665 3.21333 80.6131 4.36C81.4665 3.26667 82.5465 2.42667 83.8531 1.84C85.1598 1.25333 86.5865 0.96 88.1331 0.96Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>
        </Logo>
        <CategoryWrap>
          <li onClick={prevSlide}>
            <PageComponent>컴포넌트</PageComponent>
          </li>
          <li onClick={nextSlide}>
            <PageTemplate>인기템플릿</PageTemplate>
          </li>
        </CategoryWrap>
        <MakerButton>
          <li>make it</li>
        </MakerButton>
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

const CategoryWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const PageComponent = styled.button`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: white;
  margin-right: 15px;

  :hover {
    font-weight: 700;
    /* border-bottom: 6px solid #f5ff80; */
  }
`;

const PageTemplate = styled.button`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: white;

  :hover {
    font-weight: 700;
    /* border-bottom: 6px solid #f5ff80; */
  }
`;

const MakerButton = styled.ul`
  border-radius: 30px;
  background-color: #f5ff80;

  li {
    padding: 8px 28px 8px 29px;
    font-size: 14px;
    font-weight: 600;
    /* line-height: 15px; */
  }
`;

export default NavBar;
