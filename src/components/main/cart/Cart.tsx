import styled from '@emotion/styled';
import CartItem from './CartItem';
import ArrowBottom from 'assets/ArrowBottom';
import { useRecoilState } from 'recoil';
import { cartListState } from 'atoms';

const mockCarts = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `임시카트${i + 1}`,
    author: `임시작가${i + 1}`,
    image: `https://placeimg.com/200/150/${i + 1}`,
  })))();

const Cart = ({ position }: { position: string }) => {
  // const [cartList, setCartList] = useRecoilState(cartListState);

  return (
    <CartContainer position={position}>
      <TitleWrap>
        <Title>My Cart</Title>
        <SubTitle>{mockCarts.length}개 템플릿이 담겨있습니다.</SubTitle>
      </TitleWrap>
      <CartWrap>
        {mockCarts.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </CartWrap>
      <button>
        <ArrowBottom />
      </button>
    </CartContainer>
  );
};
const CartContainer = styled.aside<{ position: string }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  top: 61px;
  left: ${({ position }) => (position === 'left' ? '6vw' : '106vw')};
  width: 260px;
  height: 700px;
  padding: 40px;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: #171b21;
`;

const TitleWrap = styled.div`
  width: 100%;
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
`;

const CartWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  height: 470px;
  overflow: hidden;
`;
export default Cart;
