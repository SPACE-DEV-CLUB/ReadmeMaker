import styled from '@emotion/styled';

const CartItem = () => {
  return (
    <CartItemWrap>
      <Title>Title</Title>
      <Image>
        <img src="" alt="" />
      </Image>
    </CartItemWrap>
  );
};

const CartItemWrap = styled.div`
  width: 100%;
  height: 200px;
  background-color: #333;
  z-index: 10;
  border: 1px solid #1b2027;
  border-radius: 20px;
`;

const Title = styled.h5`
  margin: 30px 0 0 20px;
`;

const Image = styled.div`
  width: 80%;
  margin: 30px 20px;
`;

export default CartItem;
