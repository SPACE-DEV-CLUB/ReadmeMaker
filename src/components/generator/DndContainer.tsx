import styled from '@emotion/styled';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';

interface DragProps {
  isDragging: boolean;
}
const DndContainer = ({ post, setPost }: any) => {
  const handleChange = result => {
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
                {(provided, snapshot) => (
                  <CardList
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                  >
                    {e.id}
                  </CardList>
                )}
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

const CardListContainer = styled.ul`
  background-color: #243594;
  width: 300px;
`;

const CardList = styled.li<DragProps>`
  background-color: ${props => (props.isDragging ? '#F5FF80' : '#1B2027')};
  height: 30px;
  margin-bottom: 20px;
  color: ${props => (props.isDragging ? '#1B2027' : '#F5FF80')};
`;
