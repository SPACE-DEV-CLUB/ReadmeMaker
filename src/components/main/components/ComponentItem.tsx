import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIcon';
// import useToggle from 'hooks/useToggle';
import { modalStates } from 'atoms';
import Modal from 'components/main/Modal';

const ComponentItem = ({ data }: any): JSX.Element => {
  const [isModal, setModal] = useRecoilState(modalStates);

  const onToggleModal = () => {
    setModal([!isModal[0], isModal[1]]);
  };

  useEffect(() => {});
  return (
    <Card>
      <h3>컴포넌트 이름</h3>
      <p>컴포넌트 설명 블라블라 입니다</p>
      <ItemContainer onClick={onToggleModal}>
        <div>{data}</div>
      </ItemContainer>
      <IconWrapper>
        <span>300</span>
        <HeartIcon />
        <CartIcon />
      </IconWrapper>
      {isModal[0] && <Modal onToggleModal={onToggleModal} />}
    </Card>
  );
};

const Card = styled.div`
  width: 540px;
  color: #fff;
  border: 1px solid #1b2027;
  border-radius: 30px;
  padding: 40px 40px 30px;
  box-sizing: border-box;
  h3 {
    font-size: 20px;
    font-weight: 800;
  }
  p {
    margin: 10px 0 62px;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #171b21;
  border-radius: 27px;
  margin-bottom: 27px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
export default ComponentItem;
