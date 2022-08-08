import '@atlaskit/css-reset';
import styled from '@emotion/styled';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import DndComponent from './DndComponent';
import { componentsState } from 'atoms/components';

const Generator = () => {
  const [components, setComponents] = useRecoilState(componentsState);

  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...components];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setComponents(items);
  };

  const addTextEditor = () => {
    setComponents((oldComponents: any[]) => [
      ...oldComponents,
      {
        id: `${uuid()}`,
        code: '',
        type: 'text',
        editorType: 'text',
      },
    ]);
  };

  return (
    <DndContainer>
      <h2 className="sr-only">컴포넌트 수정하기</h2>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="cardlists">
          {provided => (
            <div className="cardlists" {...provided.droppableProps} ref={provided.innerRef}>
              {components.map((component: any, i: number) => (
                <DndComponent
                  key={`${component.id}-${i}`}
                  component={component}
                  componentIndex={i}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </DndContainer>
  );
};

export default Generator;

const DndContainer = styled.section`
  padding-bottom: 5%;
  text-align: center;
  overflow: hidden auto;
  background: ${({ theme }) => theme.colors.COMPONENT};

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.CASUAL_FIELD};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.CASUAL_LINE};
  }
`;
