import styled from '@emotion/styled';
import React from 'react';
import ModalTemplate from 'components/common/ModalTemplate';
import HeartIcon from 'assets/HeartIcon';
import CartIcon from 'assets/CartIcon';

interface ModalProps {
  onToggleModal: () => void;
  left?: number;
}
const Modal = ({ onToggleModal, left = -50 }: ModalProps) => (
  <ModalTemplate onToggleModal={onToggleModal} width={900} height={770} left={left}>
    <ModalTitle>
      Component Name {'  '} |{'  '} Component Type
    </ModalTitle>
    <ThumbNailImage isModalOn={true}></ThumbNailImage>
    <ModalFooter>
      <div>
        <h5>component Name</h5>
        <p>Author</p>
      </div>
      <IconWrapper>
        <span>300</span>
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

const ThumbNailImage = styled.article<{ isModalOn: boolean }>`
  width: ${({ isModalOn }) => (isModalOn ? '700px' : '500px')};
  height: ${({ isModalOn }) => (isModalOn ? '500px' : '400px')};
  border-radius: 30px;
  background-color: #1b2027;
  margin: 80px;
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