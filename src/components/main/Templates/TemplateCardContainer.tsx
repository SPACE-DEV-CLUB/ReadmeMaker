import styled from '@emotion/styled';
import React from 'react';
import { DraggableContainer } from 'components/common/DraggableContainer';
import ModalTemplate from 'components/common/ModalTemplate';
import useToggle from 'hooks/useToggle';
import TemplateCardText from './TemplateCardText';
import TemplateComponents from './TemplateComponents';
import HeartIcon from 'assets/HeartIcon';
import CartIcon from 'assets/CartIcon';

const TemplateCardContainer = () => {
  const [isModal, onToggleModal] = useToggle();

  const onClickTemplateCard = () => {
    onToggleModal();
  };

  return (
    <>
      <Content onClick={onClickTemplateCard}>
        <ThumbNailImage isModalOn={false}></ThumbNailImage>
        <TemplateCardText></TemplateCardText>
      </Content>
      <ComponentWrapper>
        <DraggableContainer>
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
          <TemplateComponents />
        </DraggableContainer>
      </ComponentWrapper>
      {isModal && (
        <ModalTemplate onToggleModal={onToggleModal} width={900} height={770}>
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
      )}
    </>
  );
};

const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: 500px;
  border-radius: 40px;
  background-color: #171b21;
  margin: 0 auto;
`;

const ModalTitle = styled.h4`
  position: absolute;
  top: -30px;
  color: #f5ff80;
  font-size: 20px;
`;
const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  margin: 40px auto 120px;
`;

//백그라운드 이미지 예정
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

export default TemplateCardContainer;
