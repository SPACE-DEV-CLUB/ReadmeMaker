import React from 'react';
import styled from '@emotion/styled';
import TemplateCardText from './TemplateCardText';
import TemplateComponents from './TemplateComponents';
import { DraggableContainer } from 'components/common/DraggableContainer';
import useToggle from 'hooks/useToggle';
import ModalTemplate from 'components/common/ModalTemplate';

const TemplateCardContainer = () => {
  const [isModal, onToggleModal] = useToggle();

  const onClickTemplateCard = () => {
    onToggleModal();
  };

  return (
    <>
      <Section onClick={onClickTemplateCard}>
        <ThumbNailImage modal={false}></ThumbNailImage>
        <TemplateCardText></TemplateCardText>
      </Section>
      {isModal && (
        <ModalTemplate onToggleModal={onToggleModal} width={900} height={800}>
          <ThumbNailImage modal={true}></ThumbNailImage>
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
        </ModalTemplate>
      )}
    </>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: 500px;
  border-radius: 40px;
  background-color: #1c1c1c;
`;

//백그라운드 이미지 예정
const ThumbNailImage = styled.article<{ modal: boolean }>`
  width: ${({ modal }) => (modal ? '700px' : '500px')};
  height: ${({ modal }) => (modal ? '500px' : '400px')};
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.06);
  margin: 40px 45px 40px 40px;
`;

export default TemplateCardContainer;
