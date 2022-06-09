import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';
import { ImgComponentType } from 'types/imgComponentType';
import { TextComponentType } from 'types/textComponentType';
import ImgComponentEditor from '../editor/ImgComponentEditor';
import TextComponentEditor from '../editor/TextComponentEditor';

const DndComponent = ({ component, componentIndex }: any) => {
  const switchComponent = (component: any) => {
    switch (component.type) {
      case 'text':
        return (
          <TextComponentEditor key={component.id} textComponent={component as TextComponentType} />
        );
      case 'img':
        return (
          <ImgComponentEditor key={component.id} imgComponent={component as ImgComponentType} />
        );
      default:
        return;
    }
  };

  return (
    <Draggable
      draggableId={`test-${component.id}`}
      index={componentIndex}
      key={`test-${component.id}`}
    >
      {(provided, snapshot) => {
        return (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <ComponentBox>{switchComponent(component)}</ComponentBox>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DndComponent;

const ComponentBox = styled.div`
  margin: 10px;
`;
