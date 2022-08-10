import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import CartIcon from 'assets/CartIcon';
import HeartIconEmpty from 'assets/HeartIconEmpty';
import { cartListState } from 'atoms';
import useLikeComponent from 'hooks/useLikeComponent';
import { Component } from 'types/component';

interface PopularComponetItemProps {
  item: Component;
}
const PopularComponentsItem = ({ item }: PopularComponetItemProps): JSX.Element => {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const like = useLikeComponent();

  const onClickHeartIcon = () => {
    like({ id: item.id });
  };

  const onClickCartIcon = () => {
    if (
      cartList.some(list => {
        return list.id === item.id;
      })
    )
      return;

    setCartList([...cartList, item]);
  };

  return (
    <ItemContainer>
      <ItemContent>
        <ItemImage src={item.image} alt={item.title} />
      </ItemContent>
      <SvgContainer>
        <div onClick={onClickHeartIcon}>
          <HeartIconEmpty />
        </div>
        <div onClick={onClickCartIcon}>
          <CartIcon />
        </div>
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
  display: flex;

  svg {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export default PopularComponentsItem;
