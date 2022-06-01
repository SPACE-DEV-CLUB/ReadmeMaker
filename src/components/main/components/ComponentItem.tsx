import styled from '@emotion/styled';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIcon';
import React from 'react';
import useToggle from 'hooks/useToggle';
import Modal from '../Modal';

const ComponentItem = ({ data }: any): JSX.Element => {
  const [isModal, onToggleModal] = useToggle();

  const onClickComponentCard = () => {
    onToggleModal();
  };

  return (
    <Card>
      <h3>컴포넌트 이름</h3>
      <p>컴포넌트 설명 블라블라 입니다</p>
      <ItemContainer onClick={onClickComponentCard}>
        <div>{data}</div>
      </ItemContainer>
      <IconWrapper>
        <span>300</span>
        <HeartIcon />
        <CartIcon />
      </IconWrapper>
      {isModal && <Modal onToggleModal={onToggleModal} />}
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
