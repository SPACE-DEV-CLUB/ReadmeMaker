import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import DndContainer from 'components/generator/dnd/DndContainer';

const MockData = [
  { id: 'a', index: 1 },
  { id: 'b', index: 2 },
  { id: 'c', index: 3 },
  { id: 'd', index: 4 },
];

const Generator = () => {
  const [data, setData] = useState(MockData);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <Container>
      {start ? <DndContainer post={data} setPost={(data: any) => setData(data)} /> : null}
    </Container>
  );
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
