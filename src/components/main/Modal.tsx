import styled from '@emotion/styled';
import React from 'react';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIcon';
import ModalTemplate from 'components/common/ModalTemplate';
import { Component } from 'types/component';
import { Template } from 'types/template';

interface ModalProps {
  onToggleModal: () => void;
  left?: number;
  item: Component | Template;
}

const Modal = ({ onToggleModal, left = -50, item }: ModalProps) => (
  <ModalTemplate onToggleModal={onToggleModal} width={900} height={770} left={left}>
    <ModalTitle>{item.title}</ModalTitle>
    <ImageContainer isModalOn={true}>
      <ItemImage src={item.image} alt={item.title} />
    </ImageContainer>
    <ModalFooter>
      <div>
        <h5>{item.title}</h5>
        <p>{item.author}</p>
      </div>
      <IconWrapper>
        <span>{item.like}</span>
        <HeartIcon />
        <CartIcon />
      </IconWrapper>
    </ModalFooter>
  </ModalTemplate>
);

const ModalTitle = styled.h4`
  position: absolute;
  top: -30px;
  color: #f5ff80;
  font-size: 20px;
`;

const ImageContainer = styled.article<{ isModalOn: boolean }>`
  width: ${({ isModalOn }) => (isModalOn ? '700px' : '500px')};
  height: ${({ isModalOn }) => (isModalOn ? '500px' : '400px')};
  border-radius: 30px;
  background-color: #1b2027;
  margin: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 100%;
  max-height: 80%;
`;
const ModalFooter = styled.div`
  padding-top: 26px;
  margin: 0 40px 40px;
  border-top: 3px solid #20262f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default Modal;
