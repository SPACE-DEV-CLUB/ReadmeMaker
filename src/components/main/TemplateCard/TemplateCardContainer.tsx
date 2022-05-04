import React from 'react';
import styled from '@emotion/styled';
import TemplateCardText from './TemplateCardText';
import TemplateComponents from './TemplateComponents';
import { DraggableContainer } from 'components/common/DraggableContainer';

const TemplateCardContainer = () => {
  return (
    <>
      <Section>
        <ThumbNailImage></ThumbNailImage>
        <TemplateCardText></TemplateCardText>
      </Section>
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
const ThumbNailImage = styled.article`
  width: 500px;
  height: 420px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.06);
  margin: 40px 45px 40px 40px;
`;

const RightSection = styled.article``;

export default TemplateCardContainer;
