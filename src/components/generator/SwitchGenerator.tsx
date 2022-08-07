import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import BadgeComponentEditor from './editor/BadgeComponentEditor';
import TextComponentEditor from './editor/TextComponentEditor';
import { componentsState } from 'atoms/components';
import { TextComponentType, BadgeComponentType } from 'types';

const SwitchGenerator = () => {
  const [components, setComponents] = useRecoilState(componentsState);

  const addTextEditor = () => {
    setComponents(oldComponents => [
      ...oldComponents,
      {
        id: `${uuid()}`,
        code: '',
        type: 'text',
      },
    ]);
  };

  return (
    <Container>
      {components.map(component => {
        switch (component.type) {
          case 'text':
            return (
              <TextComponentEditor
                key={component.id}
                textComponent={component as TextComponentType}
                isDragging={false}
              />
            );
          case 'badge':
            return (
              <BadgeComponentEditor
                key={component.id}
                badgeComponent={component as BadgeComponentType}
                isDragging={false}
              />
            );
        }
      })}
      <BtnAdd onClick={addTextEditor}>추가</BtnAdd>
    </Container>
  );
};

export default SwitchGenerator;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.CASUAL_FIELD};
  padding: 70px 20px 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BtnAdd = styled.button`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;
