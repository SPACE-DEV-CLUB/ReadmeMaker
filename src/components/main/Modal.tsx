import styled from '@emotion/styled';
import React from 'react';
import CartIcon from 'assets/CartIcon';
import HeartIconEmpty from 'assets/HeartIconEmpty';
import ModalTemplate from 'components/common/ModalTemplate';
import { Component } from 'types/component';
import { Template } from 'types/template';

interface ModalProps {
  onToggleModal: () => void;
  left?: number;
  item: Component | Template;
  likeComponent: ({ id }: { id: number }) => void;
}

const Modal = ({ onToggleModal, left = -50, item, likeComponent }: ModalProps) => {
  const { id, title, image, author, like } = item;
  const isComponentModal = 'TemplateId' in item;

  const onClickHeartIcon = () => {
    likeComponent({ id });
  };

  return (
    <ModalTemplate onToggleModal={onToggleModal} width={900} height={770} left={left}>
      <ModalTitle>{title}</ModalTitle>
      <ImageContainer>
        <ItemImage src={image} alt={title} />
      </ImageContainer>
      <ModalFooter>
        <div>
          <h5>{title}</h5>
          <p>{author}</p>
        </div>
        {isComponentModal && (
          <IconWrapper>
            <div onClick={onClickHeartIcon}>
              <span>{like}</span>
            </div>
            <HeartIconEmpty />
            <CartIcon />
          </IconWrapper>
        )}
      </ModalFooter>
    </ModalTemplate>
  );
};

const ModalTitle = styled.h4`
  position: absolute;
  top: -30px;
  color: #f5ff80;
  font-size: 20px;
`;

const ImageContainer = styled.article`
  width: 700px;
  height: 500px;
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
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  h5 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export default Modal;
