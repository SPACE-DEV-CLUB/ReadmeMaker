import styled from '@emotion/styled';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import ComponentContainer from './ComponentContainer';
import CloseButton from 'assets/CloseButton';
import { componentsState } from 'atoms/components';
import { TextComponentType } from 'types/editorComponent';
import { removeComponent, modifyComponentValue } from 'utils';

interface TextComponentEditorProps {
  textComponent: TextComponentType;
  isDragging: boolean;
}

const TextComponentEditor = ({ textComponent, isDragging }: TextComponentEditorProps) => {
  const editorRef = useRef<any>(null);
  const [components, setComponents] = useRecoilState(componentsState);
  const curIndex = components.findIndex(component => component.id === textComponent.id);

  const editText = () => {
    const updatedComponentList = modifyComponentValue([...components], curIndex, {
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
      <ButtonWrap>
        <BtnOk type="button" onClick={editText}>
          입력
        </BtnOk>
      </ButtonWrap>
      <RemoveButton onClick={deleteTextComponent} />
    </ComponentContainer>
  );
};

export default TextComponentEditor;

const EditorWrap = styled.article<{ isDragging: boolean }>`
  & .tox-toolbar__primary {
    background-color: ${({ isDragging, theme }) =>
      isDragging ? theme.colors.PIN : theme.colors.COMPONENT} !important;
  }

  & .tox-editor-header {
    // TODO: border style none 해제
    background-color: ${({ isDragging, theme }) =>
      isDragging ? theme.colors.PIN : theme.colors.COMPONENT} !important;
  }

  & .tox-toolbar__group {
    background-color: ${({ isDragging, theme }) =>
      isDragging ? '#e9f370' : theme.colors.CASUAL_SUB_FIELD} !important;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 4px;
    margin-right: 2px !important;
  }

  & .tox .tox-tbtn--enabled,
  .tox .tox-tbtn--enabled:hover {
    background: #a5dcd2;
  }

  & .tox .tox-tbtn svg {
    fill: ${({ theme }) => theme.colors.MAIN_FONT};
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
    background-color: ${({ isDragging, theme }) =>
      isDragging ? '#e9f370' : theme.colors.CASUAL_SUB_FIELD} !important;
    margin-top: 10px;
    height: 54px !important;
    border-radius: 20px;
  }

  & .tox .tox-toolbar,
  .tox .tox-toolbar__overflow,
  .tox .tox-toolbar__primary {
    background: transparent;
  }
`;

const BtnOk = styled.button`
  font-size: 1rem;
  color: #fff;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const RemoveButton = styled(CloseButton)`
  width: 20px;
  height: 20px;
  left: -5px;
  top: -5px;
  z-index: 10;
`;
