import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import CartIcon from 'assets/CartIcon';
import HeartIconEmpty from 'assets/HeartIconEmpty';
import { cartListState } from 'atoms';
import useLikeComponent from 'hooks/useLikeComponent';
import { Component } from 'types/component';

interface ComponentItemProps {
  item: Component;
  setModalTarget: (item: Component) => void;
}
const ComponentItem = ({ item, setModalTarget }: ComponentItemProps): JSX.Element => {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const like = useLikeComponent();

  const onClickComponent = () => {
    setModalTarget(item);
  };

  const onClickHeartIcon = () => {
    like({ id: item.id });
  };

  const onClickCartIcon = () => {
    if (cartList.includes(item)) return;

    setCartList([...cartList, item]);
  };

  return (
    <Card>
      <div>
        <h3>{item.title}</h3>
        <ComponentDescription>{item.author}</ComponentDescription>
      </div>
      <ItemContainer onClick={onClickComponent}>
        <ItemImage src={item.image} alt={item.title} />
      </ItemContainer>
      <IconWrapper>
        <span>{item.like}</span>
        <div onClick={onClickHeartIcon}>
          <HeartIconEmpty />
        </div>
        <div onClick={onClickCartIcon}>
          <CartIcon />
        </div>
      </IconWrapper>
    </Card>
  );
};

const Card = styled.div`
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.CASUAL_LINE};
  border-radius: 30px;
  padding: 40px 40px 30px;
  box-shadow: ${({ theme }) => theme.colors.SHADOW};
  h3 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.breakPoint.medium} {
    padding: 30px 20px 20px;
  }
`;

const ComponentDescription = styled.p``;

const ItemContainer = styled.div`
  width: 100%;
  border-radius: 27px;
  margin: 35px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  ${({ theme }) => theme.breakPoint.medium} {
    margin: 20px 0;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  max-height: 80%;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
export default ComponentItem;
