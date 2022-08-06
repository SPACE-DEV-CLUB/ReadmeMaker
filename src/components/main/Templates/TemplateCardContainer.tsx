import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalStates } from 'atoms';
import { DraggableContainer } from 'components/common/DraggableContainer';
import Modal from 'components/main/Modal';
import TemplateCardText from 'components/main/Templates/TemplateCardText';
import TemplateComponents from 'components/main/Templates/TemplateComponents';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
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
              <TemplateComponents key={component.id} />
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
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.colors.CASUAL_LINE};
  border-radius: 30px;
`;

const TemplateContent = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    gap: 40px;
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    gap: 20px;
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 24px 40px;
`;

//백그라운드 이미지 예정
const ThumbNailImageWrapper = styled.article<{ isModalOn: boolean }>`
  width: ${({ isModalOn }) => (isModalOn ? '700px' : '500px')};
  height: ${({ isModalOn }) => (isModalOn ? '500px' : '400px')};
  border-radius: 30px;
  background-color: #1b2027;
  margin: ${({ isModalOn }) => (isModalOn ? '80px' : '40px')};
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    width: 340px;
    height: 320px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    width: 207px;
    height: 184px;
    margin: ${({ isModalOn }) => (isModalOn ? '80px' : '20px')};
  }
`;

export default TemplateCardContainer;
