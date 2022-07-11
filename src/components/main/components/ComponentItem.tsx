import styled from '@emotion/styled';
import React from 'react';
import CartIcon from 'assets/CartIcon';
import HeartIconEmpty from 'assets/HeartIconEmpty';
// import useToggle from 'hooks/useToggle';
import { modalStates } from 'atoms';
import Modal from 'components/main/Modal';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
import { Component } from 'types/component';

interface ConponentItemProps {
  item: Component;
  setModalTarget: (item: Component) => void;
}
const ComponentItem = ({ item, setModalTarget }: ConponentItemProps): JSX.Element => {
  const onClickComponent = () => {
    setModalTarget(item);
  };

  return (
    <Card>
      <h3>{item.title}</h3>
      <ComponentDescription>{item.author}</ComponentDescription>
      <ItemContainer onClick={onClickComponent}>
        <ItemImage src={item.image} alt={item.title} />
      </ItemContainer>
      <IconWrapper>
        <span>{item.like}</span>
        <HeartIconEmpty />
        <CartIcon />
      </IconWrapper>
    </Card>
  );
};

const Card = styled.div`
  box-sizing: border-box;
  width: 460px;
  height: 460px;
  color: #fff;
  border: 1px solid #1b2027;
  border-radius: 30px;
  padding: 40px 40px 30px;
  h3 {
    font-size: 20px;
    font-weight: 800;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    width: 280px;
    height: 300px;
    padding: 30px 20px 20px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    width: 100%;
    height: 458px;
    padding: 40px 40px 30px;
  }
`;

const ComponentDescription = styled.p`
  margin: 10px 0 40px;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    margin: 10px 0 20px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    margin: 10px 0 40px;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 245px;
  background-color: #171b21;
  border-radius: 27px;
  margin-bottom: 27px;
  //중간 머지 충돌 부분
  display: flex;
  justify-content: center;
  align-items: center;
  //
  box-sizing: border-box;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    height: 150px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    height: 245px;
  }
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
