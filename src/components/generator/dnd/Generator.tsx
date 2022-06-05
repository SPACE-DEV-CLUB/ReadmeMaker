import styled from '@emotion/styled';
import DndContainer from 'components/generator/dnd/DndContainer';
import React, { useEffect, useState } from 'react';

const Generator = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  return <Container>{start ? <DndContainer /> : null}</Container>;
};

export default Generator;

const Container = styled.div`
  background-color: #171b21;
  padding: 70px 20px 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;

  h3 {
    color: white;
  }
`;
