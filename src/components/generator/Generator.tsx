import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import { componentsState } from 'atoms/components';
import { TextComponentType, ImgComponentType } from 'types';
import TextComponentEditor from './TextComponentEditor';
import ImgComponentEditor from './ImgComponentEditor';

const Generator = () => {
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
              />
            );
          case 'img':
            return <ImgComponentEditor imgComponent={component as ImgComponentType} />;
        }
      })}
      <BtnAdd onClick={addTextEditor}>추가</BtnAdd>
    </Container>
  );
};

export default Generator;

const Container = styled.div`
  background-color: #171b21;
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
