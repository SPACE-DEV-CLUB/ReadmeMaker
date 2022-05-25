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
          <PageButton props={currentSlide === 0}>컴포넌트</PageButton>
        </li>
        <li onClick={nextSlide}>
          <PageButton props={currentSlide === 1}>인기템플릿</PageButton>
        </li>
      </CategoryWrap>
      <ButtonWrap>
        <DarkModeButton />
        <MakerButton>make it</MakerButton>
      </ButtonWrap>
    </>
  );
};

const CategoryWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  gap: 65px;
`;

const PageButton = styled.button<{ props: boolean }>`
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
export default NavBarMainItem;
