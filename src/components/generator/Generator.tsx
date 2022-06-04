import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import { componentsState } from 'atoms/components';
import EditorComponent from './TextEditorComponent';
import ImgSrcEditorComponent from './ImgSrcEditorComponent';
import { TextComponentType } from 'types/textComponentType';
import { ImgComponentType } from 'types/imgComponentType';

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
              <EditorComponent key={component.id} textComponent={component as TextComponentType} />
            );
          case 'img':
            return <ImgSrcEditorComponent imgComponent={component as ImgComponentType} />;
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
