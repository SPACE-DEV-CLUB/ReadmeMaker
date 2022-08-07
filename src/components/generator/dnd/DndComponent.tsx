import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BadgeComponentEditor, ImageComponentEditor } from '../editor';
import { BadgeComponentType, TextComponentType, ComponentType } from 'types/editorComponent';

const DndComponent = ({ component, componentIndex }: any) => {
  const TextComponentEditor = dynamic(() => import('../editor/TextComponentEditor'), {
    ssr: false,
  });
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  const switchComponent = (component: any, isDragging: boolean) => {
    switch (component.editorType) {
      case 'text':
        return (
          <TextComponentEditor
            key={component.id}
            textComponent={component as TextComponentType}
            isDragging={isDragging}
          />
        );
      case 'badge':
        return (
          <BadgeComponentEditor
            key={component.id}
            badgeComponent={component as BadgeComponentType}
            isDragging={isDragging}
          />
        );
      case 'image':
        return (
          <ImageComponentEditor
            key={component.id}
            imageComponent={component as ComponentType}
            isDragging={isDragging}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      {start && (
        <Draggable draggableId={`${component.id}`} index={componentIndex} key={`${component.id}`}>
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

const Container = styled.div`
  background-color: #171b21;
  height: 100%;
`;
