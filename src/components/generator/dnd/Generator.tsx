import '@atlaskit/css-reset';
import styled from '@emotion/styled';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import DndComponent from './DndComponent';
import { componentsState } from 'atoms/components';
import { darkTheme } from 'styles/theme';

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
                  key={`test-${component.id}`}
                  component={component}
                  componentIndex={i}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <BtnAdd onClick={addTextEditor}>추가</BtnAdd>
      </DragDropContext>
    </DndContainer>
  );
};

export default Generator;

const DndContainer = styled.section`
  padding-bottom: 5%;
  text-align: center;
  overflow-y: auto;
  background-color: ${darkTheme.CASUAL_FIELD};

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${darkTheme.CASUAL_FIELD};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${darkTheme.CASUAL_LINE};
  }
`;

const BtnAdd = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;
