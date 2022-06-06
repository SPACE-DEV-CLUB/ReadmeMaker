import { Editor } from '@tinymce/tinymce-react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { componentsState } from 'atoms/components';
import { TextComponentType } from 'types/textComponentType';
import { removeComponent, replaceText } from 'utils';
import ComponentContainer from './ComponentContainer';
import { useEffect } from 'react';

interface TextComponentEditorProps {
  textComponent: TextComponentType;
  isDragging: boolean;
}

const TextComponentEditor = ({ textComponent, isDragging }: TextComponentEditorProps) => {
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
    <ComponentContainer isDragging={isDragging}>
      <EditorWrap isDragging={isDragging}>
        <Editor
          value={textComponent.code}
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
          onEditorChange={editText}
        />
      </EditorWrap>
      <BtnDelete onClick={deleteTextComponent}>삭제</BtnDelete>
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
