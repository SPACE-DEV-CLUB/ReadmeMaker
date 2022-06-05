import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CloseButton from 'assets/CloseButton';

interface CartItemProps {
  id: number;
  title: string;
  author: string;
  image: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const CartItem = ({ id, title, author, image, onClick }: CartItemProps) => {
  return (
    <CartItemWrap>
      <Image>
        <img src={image} alt="" />
      </Image>
      <CartDesc>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </CartDesc>
      <RemoveButton id={id} onClick={onClick} />
    </CartItemWrap>
  );
};

const CartItemWrap = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border: 1px solid #20262f;
  z-index: 100;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  &:hover {
    img {
      opacity: 0.2;
    }
    div:last-child {
      display: block;
    }
  }
`;

const RemoveButton = styled(CloseButton)`
  width: 20px;
  height: 20px;
  right: -5px;
  top: -5px;
  z-index: 10;
`;

const Image = styled.div`
  box-sizing: border-box;
  img {
    width: 100%;
  }
`;

const CartDesc = styled.div`
  box-sizing: border-box;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.h5`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Author = styled.p``;

export default CartItem;
