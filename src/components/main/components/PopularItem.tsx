import styled from '@emotion/styled';
import React from 'react';
import CartIcon from 'assets/CartIcon';
import HeartIconEmpty from 'assets/HeartIconEmpty';
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
        <HeartIconEmpty />
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
  background-color: ${({ theme }) => theme.colors.CASUAL_SUB_FIELD};
  border: 1px solid ${({ theme }) => theme.colors.CASUAL_LINE};
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
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 0;
  svg {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export default PopularComponentsItem;
