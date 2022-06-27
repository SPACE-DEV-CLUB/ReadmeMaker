import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalStates } from 'atoms';
import Modal from 'components/main/Modal';
import { DraggableContainer } from 'components/common/DraggableContainer';
import TemplateCardText from 'components/main/Templates/TemplateCardText';
import TemplateComponents from 'components/main/Templates/TemplateComponents';

const TemplateCardContainer = () => {
  const [isModal, setModal] = useRecoilState(modalStates);

  const onToggleModal = () => {
    setModal([isModal[0], !isModal[1]]);
  };

  return (
    <>
      <TemplateCard>
        <h3 className="sr-only">TemplateCard</h3>
        <TemplateContent onClick={onToggleModal}>
          <ThumbNailImage isModalOn={false}></ThumbNailImage>
          <TemplateCardText />
        </TemplateContent>
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
      </TemplateCard>
      {isModal[1] && <Modal onToggleModal={onToggleModal} left={50} />}
    </>
  );
};

const TemplateCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-color: #0e1116;
  border: 1px solid #20262f;
  border-radius: 30px;
`;

const TemplateContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 24px 15px;
`;

//백그라운드 이미지 예정
const ThumbNailImage = styled.article<{ isModalOn: boolean }>`
  width: ${({ isModalOn }) => (isModalOn ? '700px' : '100%')};
  height: ${({ isModalOn }) => (isModalOn ? '500px' : '320px')};
  border-radius: 30px;
  background-color: #1b2027;
  margin: ${({ isModalOn }) => (isModalOn ? '80px' : '40px')};
`;

export default TemplateCardContainer;
