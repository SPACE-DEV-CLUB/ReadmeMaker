import styled from '@emotion/styled';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import ComponentContainer from './ComponentContainer';
import { componentsState } from 'atoms/components';
import { TextComponentType } from 'types/textComponentType';
import { removeComponent, replaceText } from 'utils';

interface TextComponentEditorProps {
  textComponent: TextComponentType;
  isDragging: boolean;
}

const TextComponentEditor = ({ textComponent, isDragging }: TextComponentEditorProps) => {
  const editorRef = useRef<any>(null);
  const [components, setComponents] = useRecoilState(componentsState);
  const curIndex = components.findIndex(component => component.id === textComponent.id);

  const editText = () => {
    const updatedComponentList = replaceText([...components], curIndex, {
      ...textComponent,
      code: editorRef.current.getContent(),
    });

    setComponents(updatedComponentList);
  };

  const deleteTextComponent = () => {
    const updatedComponentList = removeComponent(components, curIndex);

    setComponents(updatedComponentList);
  };

  return (
    <ComponentContainer isDragging={isDragging}>
      <EditorWrap isDragging={isDragging}>
        <Editor
          initialValue={components[curIndex].code}
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey={process.env.EDITOR_API_KEY}
          // TODO: isDragging 글자색상 분기 처리
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
        />
      </EditorWrap>
      <BtnDelete type="button" onClick={deleteTextComponent}>
        삭제
      </BtnDelete>
      <BtnOk type="button" onClick={editText}>
        수정
      </BtnOk>
    </ComponentContainer>
  );
};

export default TextComponentEditor;

const EditorWrap = styled.article<{ isDragging: boolean }>`
  & .tox-toolbar__primary {
    background-color: ${props => (props.isDragging ? '#F5FF80' : '#0e1116')} !important;
  }

  & .tox-editor-header {
    // TODO: border style none 해제
    background-color: ${props => (props.isDragging ? '#f5ff80' : '#0e1116')} !important;
  }

  & .tox-toolbar__group {
    background-color: ${props => (props.isDragging ? '#e9f370' : '#1B2027')} !important;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
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
    background-color: ${props => (props.isDragging ? '#e9f370' : '#1B2027')} !important;
    margin-top: 10px;
    height: 54px !important;
    border-radius: 20px;
  }
`;

const BtnDelete = styled.button`
  font-size: 16px;
  color: #fff;
`;

const BtnOk = styled.button`
  font-size: 16px;
  color: #fff;
`;
