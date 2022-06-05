import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ImgComponentType } from 'types/imgComponentType';
import { TextComponentType } from 'types/textComponentType';
import ImgComponentEditor from '../editor/ImgComponentEditor';
import TextComponentEditor from '../editor/TextComponentEditor';

const DndComponent = ({ component, componentIndex }: any) => {
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
      case 'img':
        return (
          <ImgComponentEditor
            key={component.id}
            imgComponent={component as ImgComponentType}
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

const Container = styled.div`
  background-color: #171b21;
  padding: 70px 20px 70px;
  height: 100%;
`;
