import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import ArrowDown from 'assets/ArrowDown';
import ArrowUp from 'assets/ArrowUp';
import { cartListState } from 'atoms';
import CartItem from 'components/main/cart/CartItem';
import { MEDIA_QUERY_END_POINT } from 'constants/index';

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [isShowArrowUp, setIsShowArrowUp] = useState(false);
  const [isShowArrowDown, setIsShowArrowDown] = useState(false);

  const onRemoveCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCartList(cartList.filter(cart => cart.id !== +e.currentTarget.id!));
  };

  const showArrow = () => {
    if (!cartRef.current) return;

    if (cartRef.current.scrollHeight <= 450) {
      setIsShowArrowUp(false);
      setIsShowArrowDown(false);
    }
    setIsShowArrowUp(cartRef.current.scrollTop !== 0);
    setIsShowArrowDown(cartRef.current.scrollHeight - cartRef.current.scrollTop !== 470);
  };

  useEffect(() => {
    showArrow();
  }, [cartList]);

  return (
    <CartContainer>
      <TitleWrap>
        <Title>My Cart</Title>
        <SubTitle>{cartList.length} Components in Cart</SubTitle>
      </TitleWrap>
      <ArrowContainer>{isShowArrowUp && <ArrowUp />}</ArrowContainer>

      <CartWrap ref={cartRef} onScroll={showArrow}>
        {cartList.map((item, index) => (
          <CartItem key={index} {...item} onClick={onRemoveCart} />
        ))}
      </CartWrap>
      <ArrowContainer>{isShowArrowDown && <ArrowDown />}</ArrowContainer>
    </CartContainer>
  );
};
const CartContainer = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 68px 0 0 110px;
  gap: 15px;
  top: 61px;
  width: 260px;
  padding: 40px 40px;
  border-radius: 30px;
  border: ${({ theme }) =>
    theme.colors.BORDER === '#FFF' ? `1px solid ${theme.colors.BORDER}` : ''};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.CASUAL_FIELD};
  box-shadow: ${({ theme }) => theme.colors.SHADOW};

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    padding: 40px 20px;
    width: 194px;
    margin-left: 40px;
    gap: 0;
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    margin-left: calc((100vw - 1220px) / 2);
  }
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
  color: white;

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    margin-bottom: 5px;
  }
`;

const CartWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  max-height: 450px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowContainer = styled.div`
  height: 20px;
`;

export default Cart;
