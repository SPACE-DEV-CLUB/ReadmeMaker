import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import BadgeComponentEditor from '../editor/BadgeComponentEditor';
import { BadgeComponentType } from 'types/badgeComponentType';
import { TextComponentType } from 'types/textComponentType';

const DndComponent = ({ component, componentIndex }: any) => {
  const TextComponentEditor = dynamic(() => import('../editor/TextComponentEditor'), {
    ssr: false,
  });
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  const switchComponent = (component: any, isDragging: boolean) => {
    switch (component.type) {
      case 'text':
        return (
          <TextComponentEditor
            key={component.id}
            textComponent={component as TextComponentType}
            isDragging={isDragging}
          />
        );
      case 'badge':
      case 'image':
        return (
          <BadgeComponentEditor
            key={component.id}
            badgeComponent={component as BadgeComponentType}
            isDragging={isDragging}
          />
        );
      default:
        return;
    }
  };

  return (
    <Container>
      {start && (
        <Draggable
          draggableId={`test-${component.id}`}
          index={componentIndex}
          key={`test-${component.id}`}
        >
          {(provided, snapshot) => {
            return (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <ComponentBox>{switchComponent(component, snapshot.isDragging)}</ComponentBox>
              </div>
            );
          }}
        </Draggable>
      )}
    </Container>
  );
};

export default DndComponent;

const ComponentBox = styled.div`
  margin: 10px;
`;

const Container = styled.div``;
