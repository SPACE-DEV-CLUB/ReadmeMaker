import styled from '@emotion/styled';
import React from 'react';
import { DraggableContainer } from 'components/common/DraggableContainer';
import useToggle from 'hooks/useToggle';
import TemplateCardText from './TemplateCardText';
import TemplateComponents from './TemplateComponents';
import Modal from '../Modal';

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
      {isModal && <Modal onToggleModal={onToggleModal} left={50} />}
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

export default TemplateCardContainer;
