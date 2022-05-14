import styled from '@emotion/styled';
import DndContainer from 'components/generator/DndContainer';
import React, { useEffect, useState } from 'react';

const MockData = [
  { id: 'a', index: 1 },
  { id: 'b', index: 2 },
  { id: 'c', index: 3 },
  { id: 'd', index: 4 },
];
const DndTest = () => {
  const [data, setData] = useState(MockData);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <Container>
      {start ? <DndContainer post={data} setPost={data => setData(data)} /> : null}
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #246436;
`;

export default DndTest;
