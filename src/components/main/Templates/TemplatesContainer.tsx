import React from 'react';
import styled from '@emotion/styled';
import TemplateCardContainer from './TemplateCardContainer';
import Cart from 'components/main/cart/Cart';

const TemplatesContainer = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>Now Hot 🔥</Title>
        <SubTitle>다양한 조합의 인기 템플릿을 확인하세요.</SubTitle>
      </TitleWrap>
      <TemplateCardContainer />
      <TemplateCardContainer />
      <Cart position="right" />
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100%;
  color: white;
  overflow: scroll;
  background-color: #0e1116;
`;

const TitleWrap = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 61px 0 10px;
  font-size: 30px;
  font-weight: 800;
`;

const SubTitle = styled.h3`
  margin-bottom: 56px;
  font-size: 13px;
  font-weight: 400;
`;

export default TemplatesContainer;
