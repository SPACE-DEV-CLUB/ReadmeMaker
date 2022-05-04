import styled from '@emotion/styled';
import useDrag from 'hooks/useDrag';
import React from 'react';

interface DraggableProps {
  children: React.ReactNode;
}

export const DraggableContainer = ({ children }: DraggableProps): JSX.Element => {
  const { scrollRef, onDragStart, onDragEnd, onDragMove } = useDrag();

  return (
    <Container
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 15px;
`;
