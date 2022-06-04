import { Editor } from '@tinymce/tinymce-react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { componentsState } from 'atoms/components';
import { TextComponentType } from 'types/textComponentType';
import { removeComponent, replaceText } from 'utils';

interface EditorComponentProps {
  textComponent: TextComponentType;
}

const TextEditorComponent = ({ textComponent }: EditorComponentProps) => {
  const [components, setComponents] = useRecoilState(componentsState);
  const curIndex = components.findIndex(component => component.id === textComponent.id);

  const editText = (value: string) => {
    const updatedComponentList = replaceText(components, curIndex, {
      ...textComponent,
      code: value,
    });

    setComponents(updatedComponentList);
  };

  const deleteTextComponent = () => {
    const updatedComponentList = removeComponent(components, curIndex);

    setComponents(updatedComponentList);
  };

  return (
    <Container>
      <Editor
        value={textComponent.code}
        apiKey={process.env.EDITOR_API_KEY}
        init={{
          bordercolor: 'blue',
          height: 30,
          menubar: false,
          statusbar: false,
          skin: 'snow',
          toolbar_sticky: true,
          toolbar:
            'bold | italic | underline | alignleft | aligncenter| alignright | alignjustify ',
          content_style: `
          body {
            color: #dddedf !important;
          }
          p {
            margin: 0 !important;
          }`,
        }}
        onEditorChange={editText}
      />
      <BtnDelete onClick={deleteTextComponent}>삭제</BtnDelete>
    </Container>
  );
};

export default TextEditorComponent;

const Container = styled.div`
  background-color: #000;
  padding: 40px 70px 40px 40px;
  border-radius: 10px;
  border: 1px solid #1b2027;
  /* TODO: 롱클릭 시 스타일 적용 */
  border-right: 30px solid #f5ff80;
  & .tox-toolbar__primary {
    background-color: #000 !important;
  }

  & .tox-editor-header {
    background-color: #000 !important;
  }

  & .tox-toolbar__group {
    background-color: #1b2027;
    width: 24px;
    height: 24px;
    line-height: 24px !important;
    display: flex;
    justify-content: center;
    align-items: center !important;
    border-radius: 4px;
    margin-right: 2px !important;
  }

  & .tox .tox-tbtn svg {
    fill: #dddedf;
  }
  & .tox-tbtn {
    margin: 0 !important;
  }

  & .tox-tinymce {
    border: none;
  }

  & .tox-sidebar-wrap {
    height: 30px !important;
  }

  & .tox-edit-area__iframe {
    background-color: #1b2027 !important;
    margin-top: 10px;
    height: 54px !important;
    border-radius: 20px;
  }
`;

const BtnDelete = styled.button`
  font-size: 16px;
  color: #fff;
`;
