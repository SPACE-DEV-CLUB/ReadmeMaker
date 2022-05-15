import styled from '@emotion/styled';
import CartItem from './CartItem';
import ArrowBottom from 'assets/ArrowBottom';
import { useRecoilState } from 'recoil';
import { cartListState } from 'atoms';

const Cart = ({ position }: { position: string }) => {
  const [cartList, setCartList] = useRecoilState(cartListState);

  return (
    <CartContainer position={position}>
      <TitleWrap>
        <Title>My Cart</Title>
        <SubTitle>{cartList.length}개 템플릿이 담겨있습니다.</SubTitle>
      </TitleWrap>
      {cartList.map((_, index) => (
        <CartItem key={index} />
      ))}
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
  gap: 10px;
  top: 0;
  left: ${({ position }) => (position === 'left' ? '0' : '100vw')};
  width: 260px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #000;
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
  margin-bottom: 40px;
`;
export default Cart;
