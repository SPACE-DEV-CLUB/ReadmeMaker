import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import theme from 'styles/theme';

interface NavBarMainItemProps {
  prevSlide: () => void;
  nextSlide: () => void;
  currentSlide: number;
}

const NavBarMainItem = ({ prevSlide, nextSlide, currentSlide }: NavBarMainItemProps) => {
  return (
    <CategoryWrap>
      <li onClick={prevSlide}>
        <PageButton props={currentSlide === 0}>Components</PageButton>
      </li>
      <li onClick={nextSlide}>
        <PageButton props={currentSlide === 1}>Templates</PageButton>
      </li>
    </CategoryWrap>
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
        border-bottom: 6px solid ${theme.colors.PIN};
        border-radius: 3px;
        bottom: -23px;
      }
    `}
`;

export default NavBarMainItem;
