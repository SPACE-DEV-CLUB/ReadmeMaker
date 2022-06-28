import styled from '@emotion/styled';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Cart from './cart/Cart';
import ComponentsContainer from './components/ComponentsContainer';
import TemplatesContainer from './Templates/TemplatesContainer';
import { modalStates } from 'atoms';

interface MainPageProps {
  slideRef: React.MutableRefObject<HTMLElement>;
}

const MainPage = ({ slideRef }: MainPageProps) => {
  const modalPositions = useRecoilValue(modalStates);

  return (
    <Container>
      <Wrap ref={slideRef}>
        <ComponentsContainer />
        <TemplatesContainer />
      </Wrap>
      {modalPositions.every(modal => !modal) && <Cart />}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

const Wrap = styled.section`
  display: flex;
`;

export default MainPage;
