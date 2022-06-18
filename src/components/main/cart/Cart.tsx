import React, { useState } from 'react';
import styled from '@emotion/styled';
import CartItem from 'components/main/cart/CartItem';
import ArrowBottom from 'assets/ArrowBottom';
import { useRecoilValue } from 'recoil';
// import { useRecoilState } from 'recoil';
// import { cartListState } from 'atoms';

const mockCarts = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `임시카트${i + 1}`,
  author: `임시작가${i + 1}`,
  image: `https://placeimg.com/200/150/${i + 1}`,
}));

const Cart = () => {
  // const [cartList, setCartList] = useRecoilState(cartListState);
  const [cartList, setCartList] = useState(mockCarts);
  const onRemoveCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCartList(cartList.filter(cart => cart.id !== +e.currentTarget.id!));
  };

  return (
    <CartContainer>
      <TitleWrap>
        <Title>My Cart</Title>
        <SubTitle>{cartList.length} Components in Cart</SubTitle>
      </TitleWrap>
      <CartWrap>
        {cartList.map((item, index) => (
          <CartItem key={index} {...item} onClick={onRemoveCart} />
        ))}
      </CartWrap>
      <button>
        <ArrowBottom />
      </button>
    </CartContainer>
  );
};
const CartContainer = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 61px 0 0 110px;
  gap: 15px;
  top: 61px;
  width: 260px;
  height: 700px;
  padding: 40px 30px;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: #171b21;
`;

const TitleWrap = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  color: #fff;
`;

const SubTitle = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 41px;
  color: white;
`;

const CartWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  height: 470px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Cart;
