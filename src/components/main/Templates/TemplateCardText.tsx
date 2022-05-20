import React from 'react';
import styled from '@emotion/styled';
import Tag from './Tag';

const TemplateCardText = () => {
  return (
    <article>
      <Tag />
      <Title>Content</Title>
      <SubTitle>생성일자</SubTitle>
      <Borderline></Borderline>
      <TemplateInfo>새로운 템플릿을 확인하세요.</TemplateInfo>
    </article>
  );
};

const Title = styled.h2`
  font-size: 40px;
  line-height: 49px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  font-size: 14px;
  color: #fff;
  margin-bottom: 40px;
`;

const Borderline = styled.div`
  width: 492px;
  height: 1px;
  margin-bottom: 40px;
  background-color: #d4c8c8;
`;

const TemplateInfo = styled.p`
  color: #fff;
`;

export default TemplateCardText;
