import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import { v4 as uuid } from 'uuid';
import TextComponentEditor from '../editor/TextComponentEditor';
import ImgComponentEditor from '../editor/ImgComponentEditor';
import { TextComponentType, ImgComponentType } from 'types';
import styled from '@emotion/styled';

const DndContainer = ({ post, setPost }: any) => {
  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...post];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPost(items);
  };

  const addTextEditor = () => {
    setPost((oldComponents: any[]) => [
      ...oldComponents,
      {
        id: `${uuid()}`,
        code: '',
        type: 'text',
      },
    ]);
  };

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
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="cardlists">
        {provided => (
          <div className="cardlists" {...provided.droppableProps} ref={provided.innerRef}>
            {post.map((e: any, i: number) => (
              <Draggable draggableId={`test-${e.id}`} index={i} key={`test-${e.id}`}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {switchComponent(e)}
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <BtnAdd onClick={addTextEditor}>추가</BtnAdd>
    </DragDropContext>
  );
};

export default DndContainer;

const BtnAdd = styled.button`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;
