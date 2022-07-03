import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIcon';
// import useToggle from 'hooks/useToggle';
import { modalStates } from 'atoms';
import Modal from 'components/main/Modal';
import { Component } from 'types/component';

interface ConponentItemProps {
  item: Component;
}
const ComponentItem = ({ item }: ConponentItemProps): JSX.Element => {
  const [isModal, setModal] = useRecoilState(modalStates);

  const onToggleModal = () => {
    setModal([!isModal[0], isModal[1]]);
  };

  return (
    <Card>
      <h3>{item.title}</h3>
      <p>{item.author}</p>
      <ItemContainer onClick={onToggleModal}>
        <ItemImage src={item.image} alt={item.title} />
      </ItemContainer>
      <IconWrapper>
        <span>300</span>
        <HeartIcon />
        <CartIcon />
      </IconWrapper>
      {isModal[0] && <Modal item={item} onToggleModal={onToggleModal} />}
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
  display: flex;
  justify-content: center;
  align-items: center;
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
