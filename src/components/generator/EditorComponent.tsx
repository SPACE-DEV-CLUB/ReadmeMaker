import { Editor } from '@tinymce/tinymce-react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { postState } from 'atoms/post';

const EditorComponent = () => {
  const setPost = useSetRecoilState(postState);

  return (
    <Container>
      <Editor
        initialValue={''}
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
        onEditorChange={setPost}
      />
    </Container>
  );
};

export default EditorComponent;

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
