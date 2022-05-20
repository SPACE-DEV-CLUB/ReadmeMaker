import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DarkModeButton } from './DarkModeButton';

interface NavBarMainItemProps {
  prevSlide: () => void;
  nextSlide: () => void;
  currentSlide: number;
}

const NavBarMainItem = ({ prevSlide, nextSlide, currentSlide }: NavBarMainItemProps) => {
  return (
    <>
      <CategoryWrap>
        <li onClick={prevSlide}>
          <PageComponent props={currentSlide === 0}>컴포넌트</PageComponent>
        </li>
        <li onClick={nextSlide}>
          <PageTemplate props={currentSlide === 1}>인기템플릿</PageTemplate>
        </li>
      </CategoryWrap>
      <ButtonWrap>
        <DarkModeButton />
        <MakerButton>
          <li>make it</li>
        </MakerButton>
      </ButtonWrap>
    </>
  );
};

const CategoryWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const PageComponent = styled.button<{ props: boolean }>`
  position: relative;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: white;
  margin-right: 65px;

  ${({ props }) =>
    props &&
    css`
      font-weight: 700;
      ::after {
        position: absolute;
        content: '';
        display: block;
        width: calc(100%);
        border-bottom: 6px solid #f5ff80;
        border-radius: 3px;
        bottom: -23px;
      }
    `}
`;

const PageTemplate = styled.button<{ props: boolean }>`
  position: relative;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: white;

  ${({ props }) =>
    props &&
    css`
      font-weight: 700;
      ::after {
        position: absolute;
        content: '';
        display: block;
        width: calc(100%);
        border-bottom: 6px solid #f5ff80;
        border-radius: 3px;
        bottom: -23px;
      }
    `}
`;

const MakerButton = styled.ul`
  border-radius: 30px;
  margin-left: 40px;
  background-color: #f5ff80;

  li {
    padding: 8px 28px 8px 29px;
    font-size: 14px;
    font-weight: 600;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default NavBarMainItem;
