import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import TemplateCardText from './TemplateCardText';
import TemplateComponents from './TemplateComponents';
import { modalStates } from 'atoms';
import { DraggableContainer } from 'components/common/DraggableContainer';
import Modal from 'components/main/Modal';
import { Template } from 'types/template';

interface TemplateCardContainerProps {
  item: Template;
}
const TemplateCardContainer = ({ item }: TemplateCardContainerProps) => {
  const [isModal, setModal] = useRecoilState(modalStates);

  const onToggleModal = () => {
    setModal([isModal[0], !isModal[1]]);
  };

  return (
    <>
      <TemplateCard>
        <h3 className="sr-only">TemplateCard</h3>
        <TemplateContent onClick={onToggleModal}>
          <ThumbNailImageWrapper isModalOn={false}>
            <img src={item.image} alt={item.title} />
          </ThumbNailImageWrapper>
          <TemplateCardText {...item} />
        </TemplateContent>
        <ComponentWrapper>
          <DraggableContainer>
            <TemplateComponents />
            {item.Components.map(component => (
              <TemplateComponents />
            ))}
          </DraggableContainer>
        </ComponentWrapper>
      </TemplateCard>
      {isModal[1] && <Modal item={item} onToggleModal={onToggleModal} left={50} />}
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
const ThumbNailImageWrapper = styled.article<{ isModalOn: boolean }>`
  width: ${({ isModalOn }) => (isModalOn ? '700px' : '500px')};
  height: ${({ isModalOn }) => (isModalOn ? '500px' : '400px')};
  border-radius: 30px;
  margin: 80px;
  img {
    width: 100%;
  }
`;

export default TemplateCardContainer;
