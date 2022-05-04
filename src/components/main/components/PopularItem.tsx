import styled from '@emotion/styled';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIcon';
import React from 'react';

const NewComponentsItem = (): JSX.Element => {
  return (
    <ItemContainer>
      <SvgContainer>
        <HeartIcon />
        <CartIcon />
      </SvgContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  position: relative;
  margin-top: 60px;
  min-width: 188px;
  height: 188px;
  background-color: #000;
  border-radius: 20px;
  white-space: nowrap;
  &:hover {
    transform: translate(0, -30px) scaleY(1.3);
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

export default NewComponentsItem;
