import styled from '@emotion/styled';
import React from 'react';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIcon';
import { Component } from 'types/component';

interface PopularComponetItemProps {
  item: Component;
}
const PopularComponentsItem = ({ item }: PopularComponetItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <ItemContent>
        <ItemImage src={item.image} alt={item.title} />
      </ItemContent>
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
  width: 188px;
  height: 188px;
  background-color: #fff;
  border-radius: 20px;
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translate(0, -15px) scaleY(1.15);
    transition: all 0.2s ease-in-out;
  }
`;

const ItemImage = styled.img`
  width: 90%;
  max-height: 60%;
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
