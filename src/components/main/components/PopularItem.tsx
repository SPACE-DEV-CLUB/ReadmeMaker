import styled from '@emotion/styled';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIcon';
import React from 'react';

const PopularComponentsItem = (): JSX.Element => {
  return (
    <ItemContainer>
      <ItemContent></ItemContent>
      <SvgContainer>
        <HeartIcon />
        <CartIcon />
      </SvgContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  position: relative;
  :last-child {
    margin-right: 30px;
  }
`;

const ItemContent = styled.div`
  margin-top: 60px;
  min-width: 188px;
  height: 188px;
  background-color: #1b2027;
  border-radius: 20px;
  white-space: nowrap;
  &:hover {
    transform: translate(0, -15px) scaleY(1.15);
    transition: all 0.2s ease-in-out;
  }
`;

const SvgContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  svg {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export default PopularComponentsItem;
