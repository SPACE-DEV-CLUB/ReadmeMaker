import React from 'react';
import styled from '@emotion/styled';
import TemplateCardContainer from './TemplateCardContainer';

const TemplatesContainer = () => {
  return (
    <Container>
      <TemplateCardContainer />
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
