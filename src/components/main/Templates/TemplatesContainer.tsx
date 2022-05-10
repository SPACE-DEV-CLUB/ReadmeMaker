import React from 'react';
import styled from '@emotion/styled';
import TemplateCardContainer from './TemplateCardContainer';
import Cart from 'components/main/cart/Cart';

const TemplatesContainer = () => {
  return (
    <Container>
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

export default TemplatesContainer;
