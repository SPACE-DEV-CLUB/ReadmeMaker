import styled from '@emotion/styled';
import React from 'react';
import Modal from 'components/main/Modal';
import { DraggableContainer } from 'components/common/DraggableContainer';
import TemplateCardText from 'components/main/Templates/TemplateCardText';
import TemplateComponents from 'components/main/Templates/TemplateComponents';
import { useRecoilState } from 'recoil';
import { modalStates } from 'atoms';

const TemplateCardContainer = () => {
  const [isModal, setModal] = useRecoilState(modalStates);

  const onToggleModal = () => {
    setModal([isModal[0], !isModal[1]]);
  };

  return (
    <>
      <Wrap>
        <Content onClick={onToggleModal}>
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
      </Wrap>
      {isModal[1] && <Modal onToggleModal={onToggleModal} left={50} />}
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  border-radius: 40px;
  background-color: #171b21;
  margin: 0 auto;
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 120px;
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
