import styled from '@emotion/styled';

interface CartItemProps {
  id: number;
  title: string;
  author: string;
  image: string;
}
const CartItem = ({ id, title, author, image }: CartItemProps) => {
  return (
    <CartItemWrap>
      <Image>
        <img src={image} alt="" />
      </Image>
      <CartDesc>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </CartDesc>
    </CartItemWrap>
  );
};

const CartItemWrap = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border: 1px solid #20262f;
  z-index: 10;
  border-radius: 20px;
  &:hover {
    img {
      opacity: 0.2;
    }
    div:last-child {
      display: block;
    }
  }
`;

const Image = styled.div`
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
`;

const CartDesc = styled.div`
  display: none;
  position: absolute;
  padding: 30px 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Title = styled.h5`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Author = styled.p``;

export default CartItem;
