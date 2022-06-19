import React from 'react';
import styled from '@emotion/styled';
import Tag from 'components/main/Templates/Tag';
import HeartIcon from 'assets/HeartIcon';
import CartIcon from 'assets/CartIcon';

const TemplateCardText = () => {
  return (
    <Container>
      <article>
        <Title>Content</Title>
        <SubTitle>SubTitle</SubTitle>
        <Tag />
        <Borderline></Borderline>
        <TemplateInfo>새로운 템플릿을 확인하세요.</TemplateInfo>
      </article>
      <IconWrapper>
        <HeartIcon />
        <CartIcon />
      </IconWrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  min-height: 320px;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: 49px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
`;

const Borderline = styled.div`
  width: 480px;
  height: 3px;
  margin-bottom: 30px;
  background-color: #1b2027;
`;

const TemplateInfo = styled.p`
  color: #fff;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export default TemplateCardText;
