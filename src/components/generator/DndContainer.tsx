import styled from '@emotion/styled';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import EditorComponent from './EditorComponent';
import { uuid } from 'uuidv4';

const DndContainer = ({ post, setPost }: any) => {
  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...post];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(items);
    setPost(items);
  };

  return (
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="cardlists">
        {provided => (
          <CardListContainer
            className="cardlists"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {post.map((e: any, i: number) => (
              <Draggable key={`test-${e.id}`} draggableId={`test-${e.id}`} index={i}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <EditorComponent isDragging={snapshot.isDragging} />
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </CardListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DndContainer;

const CardListContainer = styled.div``;
